//EXPRESS
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const env = require('node-env-file')
const mail = require('nodemailer')

/* Config */
const port = process.env.PORT || 8080

//ENV VARIABLES
env(__dirname + '/.env')
const email = process.env.EMAIL 
const pass = process.env.PASS

//PARSERS 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let transporter = mail.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass
    }
})

function emailOptions(from, to, subject, text){

    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    }

    return mailOptions

}

let emailDetails = emailOptions(email, email, "Hiya", "A email to you.");

transporter.sendMail(emailDetails, (err, info) => {

    if(err) return console.log(`There was an error sending email: ${err}`)

    console.log(`Email ${info.messageId} send: ${info.responce}`)

    process.exit();

})

// GLOBAL REDIRECT
app.use('*', (req, res) => {
	res.sendFile(__dirname + '/dist/')
})

/* Start app and log it */
app.listen(port, () => {
	console.log("App active and running on: " + port)
})
