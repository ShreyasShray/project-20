var car, wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  //random speed
  speed = random(55, 90);

  //random weight
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0); 


  
  if (wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    console.log(wall.x - car.x);
    var deformation = 0.5 * weight * speed * speed/22509;
    console.log(deformation);
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }


  drawSprites();
}