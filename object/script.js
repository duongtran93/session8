/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  };


  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  };

  this.moveDown = function () {
    this.top += this.speed;
  };

  this.moveLeft = function () {
    this.left -= this.speed;
  };

  this.moveUp = function () {
    this.top -= this.speed;
  }

}
var speed = Math.floor((Math.random()*20) + 3);
var hero = new Hero('songoku.jpg', 0, 0, 200, speed);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top <= 0){
    hero.moveRight();
  } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
    hero.moveDown();
  } else if (hero.left >= 0 && hero.top >= window.innerHeight - hero.size) {
    hero.moveLeft();
  } else if (hero.top >= 0 && hero.left <= 0) {
    hero.moveUp();
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();

