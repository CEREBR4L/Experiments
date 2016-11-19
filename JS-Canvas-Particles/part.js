
var c = ['0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9', 'a', 'b', 'c', 'd', 'e', 'f'];

function Particle(x, y){

    this.x = this.oldX = x;
    this.y = this.oldY = y;

}

Particle.prototype.integrate = function(){

    var damp = 0.9999;

    var velocityX = (this.x - this.oldX) * damp;
    var velocityY = (this.y - this.oldY) * damp;

    this.oldX = this.x;
    this.oldY = this.y;

    this.x += velocityX;
    this.y += velocityY;

};

Particle.prototype.attract = function(x, y){

    var dx = Math.random(this.oldY) * x - this.x;
    var dy = Math.random(this.oldX) * y - this.y;

    var distance = Math.sqrt(dx * dx + dy * dy);

    this.x += dx / distance;
    this.y += dy / distance;

};


Particle.prototype.draw = function(color){

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.oldX, this.oldY);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();

};

var display = document.getElementById('display');
var ctx = display.getContext('2d');
var particles = [];
var width = display.width = window.innerWidth - 10;
var height = display.height = window.innerHeight - 10;
var mouse = { x: width * 0.5, y: height * 0.5 };


for(var i = 0; i < 400; i++){
    particles[i] = new Particle(Math.random() * width, Math.random() * height);
}

display.addEventListener('mousemove', onMouseMove);

function onMouseMove(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

requestAnimationFrame(frame);

function frame(){
    requestAnimationFrame(frame);
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i < particles.length; i++){
        particles[i].attract(mouse.x, mouse.y);
        particles[i].integrate();
        particles[i].draw(genColour(c));
    }

}

function genColour(c){

    color = [];

    for(var k = 0; k < 6; k++){
        color.push(c[Math.floor(Math.random() * c.length)]);
    }

    return '#' + color.join('');

}

