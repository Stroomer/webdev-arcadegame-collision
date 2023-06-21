const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

canvas.style.border = '1px solid black';
canvas.style.backgroundColor = 'rgb(0, 234, 255)';

const keyboard = new Keyboard();

const rect1 = new Rectangle({
  x: 100,
  y: 60,
  width: 50,
  height: 50,
  color: 'red',
  velocity: { x: 1, y: 0 },
});

const rect2 = new Rectangle({
  x: 100,
  y: 30,
  width: 100,
  height: 20,
  color: 'blue',
  velocity: { x: 0, y: 0.5 },
});

const circle1 = new Circle({
  x: 40,
  y: 40,
  radius: 20,
  color: 'pink',
  velocity: { x: 1, y: 1 },
});

const circle2 = new Circle({
  x: canvas.width - 40,
  y: canvas.height - 40,
  radius: 30,
  color: 'purple',
  velocity: { x: -1, y: -1 },
});

const shapes = [rect1, rect2, circle1, circle2];

const gameloop = () => {
  requestAnimationFrame(gameloop);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (rectangles_collide(rect1, rect2)) {
    rect1.colliding = true;
    rect2.colliding = true;
  } else {
    rect1.colliding = false;
    rect2.colliding = false;
  }

  if (circles_collide(circle1, circle2)) {
    circle1.colliding = true;
    circle2.colliding = true;
  } else {
    circle1.colliding = false;
    circle2.colliding = false;
  }

  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
  }

  for (let i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }
};

gameloop();
