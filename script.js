var mouse = {
	x: 0,
	y: 0,
	down: false
};
var attack = new Image();
var defend = new Image();
var buySword = new Image();
var buyArcher = new Image();
var buyAxe = new Image();
var buyMiner = new Image();
var gold = new Image();
var money = 0;
var level = 1;
var over = "none";
var cost150 = new Image();
var cost250 = new Image();
var cost400 = new Image();
cost150.src = "img/menu/cost150.png";
cost250.src = "img/menu/cost250.png";
cost400.src = "img/menu/cost400.png";
attack.src = "img/menu/attack.png";
defend.src = "img/menu/defend.png";
buySword.src = "img/menu/buySword.png";
buyArcher.src = "img/menu/buyArcher.png";
buyAxe.src = "img/menu/buyAxe.png";
buyMiner.src = "img/menu/buyMiner.png";
gold.src = "img/menu/gold.png";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var FPS = 10;
//create arrays of soldiers
var swords = [];
var archers = [];
var miners = [];
var axemen = [];
//and arrays of monsters

//create soldier types
function Swordsman(){
	this.mode = "running";
	this.health = 5;
	this.damage = 1.5;
	this.slides = 8;
	this.currentSlide = 0;
	this.speed = 4;
	this.isAlive = true;
	this.x = 50;
	this.y = 520;
	this.img = new Image();
	this.draw = function(){
		ctx.drawImage(this.img,this.x,this.y);
	};
	this.run = function(){
		this.slides = 8;
		this.speed = 4;
		this.mode = "running";
	};
	this.walk = function(){
		this.slides = 9;
		this.speed = 2;
		this.mode = "walking";
	};
	this.die = function(){
		this.slides = 9;
		this.speed = 0;
		this.mode = "dead";
	};
	this.attack = function(){
		this.slides = 13;
		this.speed = 0;
		this.mode = "attacking";
	};
	this.hit = function(){
		this.slides = 7;
		this.speed = 0;
		this.mode = "getting hit";
	};
	this.update = function(){
		this.x += this.speed;
		switch(this.mode){
			case "running":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0000.png";
						break;
					case 1:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0001.png";
						break;
					case 2:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0002.png";
						break;
					case 3:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0003.png";
						break;
					case 4:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0004.png";
						break;
					case 5:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0005.png";
						break;
					case 6:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0006.png";
						break;
					case 7:
						this.img.src = "sprites/swordsoldier/swordstan rennt e0007.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
			case "walking":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/swordsoldier/walk1.png";
						break;
					case 1:
						this.img.src = "sprites/swordsoldier/walk2.png";
						break;
					case 2:
						this.img.src = "sprites/swordsoldier/walk3.png";
						break;
					case 3:
						this.img.src = "sprites/swordsoldier/walk4.png";
						break;
					case 4:
						this.img.src = "sprites/swordsoldier/walk5.png";
						break;
					case 5:
						this.img.src = "sprites/swordsoldier/walk6.png";
						break;
					case 6:
						this.img.src = "sprites/swordsoldier/walk7.png";
						break;
					case 7:
						this.img.src = "sprites/swordsoldier/walk8.png";
						break;
					case 8:
						this.img.src = "sprites/swordsoldier/walk9.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
			case "getting hit":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/swordsoldier/swordstan treffer e0000.png";
						break;
					case 1:
						this.img.src = "sprites/swordsoldier/swordstan treffer e0001.png";
						break;
					case 2:
						this.img.src = "sprites/swordsoldier/swordstan treffer e0002.png";
						break;
					case 3:
						this.img.src = "sprites/swordsoldier/swordstan treffer e0003.png";
						break;
					case 4:
						this.img.src = "sprites/swordsoldier/swordstan treffer e0004.png";
						break;
					case 5:
						this.img.src = "sprites/swordsoldier/swordstan treffer e0005.png";
						break;
					case 6:
						this.img.src = "sprites/swordsoldier/swordstan treffer e0006.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
			case "dead":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0000.png";
						break;
					case 1:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0001.png";
						break;
					case 2:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0002.png";
						break;
					case 3:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0003.png";
						break;
					case 4:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0004.png";
						break;
					case 5:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0005.png";
						break;
					case 6:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0006.png";
						break;
					case 7:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0007.png";
						break;
					case 8:
						this.img.src = "sprites/swordsoldier/swordstan kippt um e0008.png";
						break;
					case 30:
						this.img.src = "";
						break;
				}
				this.currentSlide += 1;
				if(this.currentSlide >= 8){
					this.isAlive = false;
				}
				break;
			case "attacking":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/swordsoldier/attack e0000.png";
						break;
					case 1:
						this.img.src = "sprites/swordsoldier/attack e0001.png";
						break;
					case 2:
						this.img.src = "sprites/swordsoldier/attack e0002.png";
						break;
					case 3:
						this.img.src = "sprites/swordsoldier/attack e0003.png";
						break;
					case 4:
						this.img.src = "sprites/swordsoldier/attack e0004.png";
						break;
					case 5:
						this.img.src = "sprites/swordsoldier/attack e0005.png";
						break;
					case 6:
						this.img.src = "sprites/swordsoldier/attack e0006.png";
						break;
					case 7:
						this.img.src = "sprites/swordsoldier/attack e0007.png";
						break;
					case 8:
						this.img.src = "sprites/swordsoldier/attack e0008.png";
						break;
					case 9:
						this.img.src = "sprites/swordsoldier/attack e0009.png";
						break;
					case 10:
						this.img.src = "sprites/swordsoldier/attack e0010.png";
						break;
					case 11:
						this.img.src = "sprites/swordsoldier/attack e0011.png";
						break;
					case 12:
						this.img.src = "sprites/swordsoldier/attack e0012.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
		}
	}
}
function Bowman(){
	this.mode = "walking";
	this.health = 3;
	this.damage = 1;
	this.slides = 9;
	this.speed = 1.5;
	this.currentSlide = 0;
	this.isAlive = true;
	this.x = 50;
	this.y = 520;
	this.img = new Image();
	this.draw = function(){
		ctx.drawImage(this.img,this.x,this.y);
	};
	this.run = function(){
		this.slides = 9;
		this.speed = 3;
		this.mode = "running";
	};
	this.walk = function(){
		this.slides = 9;
		this.speed = 1.5;
		this.mode = "walking";
	};
	this.die = function(){
		this.slides = 9;
		this.speed = 0;
		this.mode = "dead";
	};
	this.attack = function(){
		this.slides = 11;
		this.speed = 0;
		this.mode = "attacking";
	};
	this.hit = function(){
		this.slides = 7;
		this.speed = 0;
		this.mode = "getting hit";
	};
	this.update = function(){
		this.x += this.speed;
		switch(this.mode){
			case "running":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0000.png";
						break;
					case 1:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0001.png";
						break;
					case 2:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0002.png";
						break;
					case 3:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0003.png";
						break;
					case 4:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0004.png";
						break;
					case 5:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0005.png";
						break;
					case 6:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0006.png";
						break;
					case 7:
						this.img.src = "sprites/bowsoldier/bowstan rennt e0007.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
			case "walking":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/bowsoldier/walk1.png";
						break;
					case 1:
						this.img.src = "sprites/bowsoldier/walk2.png";
						break;
					case 2:
						this.img.src = "sprites/bowsoldier/walk3.png";
						break;
					case 3:
						this.img.src = "sprites/bowsoldier/walk4.png";
						break;
					case 4:
						this.img.src = "sprites/bowsoldier/walk5.png";
						break;
					case 5:
						this.img.src = "sprites/bowsoldier/walk6.png";
						break;
					case 6:
						this.img.src = "sprites/bowsoldier/walk7.png";
						break;
					case 7:
						this.img.src = "sprites/bowsoldier/walk8.png";
						break;
					case 8:
						this.img.src = "sprites/bowsoldier/walk9.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
			case "getting hit":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/bowsoldier/bowstan treffer e0000.png";
						break;
					case 1:
						this.img.src = "sprites/bowsoldier/bowstan treffer e0001.png";
						break;
					case 2:
						this.img.src = "sprites/bowsoldier/bowstan treffer e0002.png";
						break;
					case 3:
						this.img.src = "sprites/bowsoldier/bowstan treffer e0003.png";
						break;
					case 4:
						this.img.src = "sprites/bowsoldier/bowstan treffer e0004.png";
						break;
					case 5:
						this.img.src = "sprites/bowsoldier/bowstan treffer e0005.png";
						break;
					case 6:
						this.img.src = "sprites/bowsoldier/bowstan treffer e0006.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
			case "dead":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0000.png";
						break;
					case 1:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0001.png";
						break;
					case 2:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0002.png";
						break;
					case 3:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0003.png";
						break;
					case 4:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0004.png";
						break;
					case 5:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0005.png";
						break;
					case 6:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0006.png";
						break;
					case 7:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0007.png";
						break;
					case 8:
						this.img.src = "sprites/bowsoldier/bowstan kippt um e0008.png";
						break;
					case 30:
						this.img.src = "";
						break;
				}
				this.currentSlide += 1;
				if(this.currentSlide >= 8){
					this.isAlive = false;
				}
				break;
			case "attacking":
				switch(this.currentSlide){
					case 0:
						this.img.src = "sprites/bowsoldier/attack e0000.png";
						break;
					case 1:
						this.img.src = "sprites/bowsoldier/attack e0001.png";
						break;
					case 2:
						this.img.src = "sprites/bowsoldier/attack e0002.png";
						break;
					case 3:
						this.img.src = "sprites/bowsoldier/attack e0003.png";
						break;
					case 4:
						this.img.src = "sprites/bowsoldier/attack e0004.png";
						break;
					case 5:
						this.img.src = "sprites/bowsoldier/attack e0005.png";
						break;
					case 6:
						this.img.src = "sprites/bowsoldier/attack e0006.png";
						break;
					case 7:
						this.img.src = "sprites/bowsoldier/attack e0007.png";
						break;
					case 8:
						this.img.src = "sprites/bowsoldier/attack e0008.png";
						break;
					case 9:
						this.img.src = "sprites/bowsoldier/attack e0009.png";
						break;
					case 10:
						this.img.src = "sprites/bowsoldier/attack e0010.png";
						break;
					case 11:
						this.img.src = "sprites/bowsoldier/attack e0011.png";
						break;
					case 12:
						this.img.src = "sprites/bowsoldier/attack e0012.png";
						break;
				}
				if(this.isAlive === true){
					if(this.currentSlide < this.slides - 1){
						this.currentSlide += 1;
					} else {
						this.currentSlide = 0;
					}
				}
				break;
		}
	}
}
function Axeman(){
	this.mode = "running";
	this.health = 12;
	this.damage = 2;
	this.slides = 9;
	this.speed = 3;
	this.isAlive = true;
	this.x = -50;
	this.y = 520;
	this.img = new Image();
	this.draw = function(){
		ctx.drawImage(this.img,this.x,this.y);
	};
	this.run = function(){
		this.slides = 9;
		this.speed = 3;
		this.mode = "running";
	};
	this.walk = function(){
		this.slides = 9;
		this.speed = 1.5;
		this.mode = "walking";
	};
	this.die = function(){
		this.slides = 9;
		this.speed = 0;
		this.mode = "dead";
	};
	this.attack = function(){
		this.slides = 13;
		this.speed = 0;
		this.mode = "attacking";
	};
	this.hit = function(){
		this.slides = 7;
		this.speed = 0;
		this.mode = "getting hit";
	};
}
function Gatherer(){
	this.mode = "running";
	this.health = 2;
	this.damage = 0.5;
	this.slides = 9;
	this.speed = 4;
	this.x = -50;
	this.y = 520;
	this.img = new Image();
	this.draw = function(){
		ctx.drawImage(this.img,this.x,this.y);
	};
	this.run = function(){
		this.slides = 9;
		this.speed = 4;
		this.mode = "running";
	};
	this.walk = function(){
		this.slides = 9;
		this.speed = 2;
		this.mode = "walking";
	};
	this.die = function(){
		this.slides = 9;
		this.speed = 0;
		this.mode = "dead";
	};
	this.attack = function(){
		this.slides = 13;
		this.speed = 0;
		this.mode = "attacking";
	};
	this.hit = function(){
		this.slides = 7;
		this.speed = 0;
		this.mode = "getting hit";
	};
}
//create monster types

//add soldiers
function addMiner(){
	money -= 250;
}
function addAxe(){
	money -= 400;
}
function addArcher(){
	money -= 400;
}
function addSword(){
	money -= 150;
}
//and then add monsters

//timer function
function tick(){
	update();
	draw();
}
function draw(){
	ctx.fillStyle = "black";
	ctx.font = "18px Monda";
	ctx.fillText("Medieval War",40,26);
	ctx.drawImage(buyMiner,200,3);
	ctx.drawImage(buySword,250,3);
	ctx.drawImage(buyArcher,300,3);
	ctx.drawImage(buyAxe,350,3);
	ctx.drawImage(attack,500,3);
	ctx.drawImage(defend,537,3);
	ctx.drawImage(gold,725,2);
	ctx.font = "14px Arial";
	ctx.fillText(Math.round(money),752,23);
	ctx.font = "30px Garamond";
	ctx.fillText("x: "+mouse.x+", y:"+mouse.y+", down:"+mouse.down+" "+over,50,400);
	if(over === "miner"){
		ctx.drawImage(cost250,160,3+buyMiner.height);
	} else if(over === "sword"){
		ctx.drawImage(cost150,210,3+buySword.height);
	} else if(over === "archer"){
		ctx.drawImage(cost400,260,3+buyArcher.height);
	} else if(over === "axe"){
		ctx.drawImage(cost400,310,3+buyAxe.height);
	}
	//check if player is clicking on buy or attack/defend buttons
	if(over === "miner" && mouse.down === true){
		if(money >= 250){
			addMiner();
		} else {
			ctx.fillStyle = "red";
			ctx.fillRect(200,3,32,32);
		}
	}
	if(over === "sword" && mouse.down === true){
		if(money >= 150){
			addSword();
		} else {
			ctx.fillStyle = "red";
			ctx.fillRect(250,3,32,32);
		}
	}
	if(over === "archer" && mouse.down === true){
		if(money >= 400){
			addArcher();
		} else {
			ctx.fillStyle = "red";
			ctx.fillRect(300,3,32,32);
		}
	}
	if(over === "axe" && mouse.down === true){
		if(money >= 400){
			addAxe();
		} else {
			ctx.fillStyle = "red";
			ctx.fillRect(350,3,32,32);
		}
	}
	dude.draw();
}
function update(){
	money += 0.3;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	if(mouse.x >= 200 && mouse.x <= 200 + buyMiner.width && mouse.y >= 3 && mouse.y <= 3 + buyMiner.height){
		over = "miner";
	} else if(mouse.x >= 250 && mouse.x <= 250 + buySword.width && mouse.y >= 3 && mouse.y <= 3 + buySword.height){
		over = "sword";
	} else if(mouse.x >= 300 && mouse.x <= 300 + buyArcher.width && mouse.y >= 3 && mouse.y <= 3 + buyArcher.height){
		over = "archer";
	} else if(mouse.x >= 350 && mouse.x <= 350 + buyAxe.width && mouse.y >= 3 && mouse.y <= 3 + buyAxe.height){
		over = "axe";
	} else if(mouse.x >= 500 && mouse.x <= 500 + attack.width && mouse.y >= 3 && mouse.y <= 3 + attack.height){
		over = "attack";
	} else if(mouse.x >= 537 && mouse.x <= 537 + defend.width && mouse.y >= 3 && mouse.y <= 3 + defend.height){
		over = "defend";
	} else {
		over = "nothing";
	}
	dude.update();
}
function distance(x,y,x2,y2){
	var answer = (x2 - x)*(x2 - x);
	answer += (y2 - y)*(y2 - y);
	answer = Math.round(Math.sqrt(answer));
	return answer;
}
function random(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
setInterval(tick,1000/FPS);
document.onmousemove = function(e){
	e = e || window.event;
	mouse.x = e.pageX - rect.left || e.clientX - rect.left;
	mouse.y = e.pageY - rect.top || e.clientY - rect.top;
};
document.onmousedown = function(e){
	e = e || window.event;
	mouse.down = true;
};
document.onmouseup = function(e){
	e = e || window.event;
	mouse.down = false;
};