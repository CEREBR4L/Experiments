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

//PARSERS 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let transporter = mail.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

function emailOptions(from, to, subject, text){

    return mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    }

}

let email = mailOptions();

transporter.sendMail(email, (err, info) => {

    if(err) return console.log(`There was an error sending email: ${err}`)

    console.log(`Email ${info.messageId} send: ${info.responce}`)

})

// GLOBAL REDIRECT
app.use('*', (req, res) => {
	res.sendFile(__dirname + '/dist/')
})

/* Start app and log it */
app.listen(port, () => {
	console.log("App active and running on: " + port)
})
