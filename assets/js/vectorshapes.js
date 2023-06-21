/*****************************************
Rectangle: Class for creating rectangles

constructor(props)  - sets the initial properties of the rectangle
update()            - updates the position of the rectangle
draw()              - draws the rectangle on the canvas
bounce_edges()      - bounces the rectangle off the edges of the canvas
******************************************/

class Rectangle {
  constructor(props) {
    const { x, y, width, height, color, velocity } = props;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = velocity;
    this.colliding = false;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.bounce_edges();
  }

  draw() {
    const { x, y, width, height, color } = this;
    const roundedX = (x - width / 2) | 0;
    const roundedY = (y - height / 2) | 0;

    ctx.fillStyle = this.colliding ? 'yellow' : color;
    ctx.fillRect(roundedX, roundedY, width, height);
  }

  bounce_edges() {
    if (this.x - this.width / 2 < 0) {
      this.x = this.width / 2;
      this.velocity.x = -this.velocity.x;
    }

    if (this.x + this.width / 2 > canvas.width) {
      this.x = canvas.width - this.width / 2;
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.height / 2 < 0) {
      this.y = this.height / 2;
      this.velocity.y = -this.velocity.y;
    }

    if (this.y + this.height / 2 > canvas.height) {
      this.y = canvas.height - this.height / 2;
      this.velocity.y = -this.velocity.y;
    }
  }
}

/*****************************************
Circle: Class for creating circles

constructor(props)  - sets the initial properties of the circle
update()            - updates the position of the circle
draw()              - draws the circle on the canvas
bounce_edges()      - bounces the circle off the edges of the canvas
******************************************/

class Circle {
  constructor(props) {
    const { x, y, radius, color, velocity } = props;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.colliding = false;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.bounce_edges();
  }

  draw() {
    const { x, y, radius, color } = this;
    const roundedX = x | 0;
    const roundedY = y | 0;

    ctx.fillStyle = this.colliding ? 'green' : color;
    ctx.beginPath();
    ctx.arc(roundedX, roundedY, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  bounce_edges() {
    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.velocity.x = -this.velocity.x;
    }

    if (this.x + this.radius > canvas.width) {
      this.x = canvas.width - this.radius;
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.velocity.y = -this.velocity.y;
    }

    if (this.y + this.radius > canvas.height) {
      this.y = canvas.height - this.radius;
      this.velocity.y = -this.velocity.y;
    }
  }
}

/*****************************************
Line: Class for creating lines

constructor(props)  - sets the initial properties of the line
update()            - updates the position of the line
draw()              - draws the line on the canvas
******************************************/

class Line {
  constructor(props) {
    const { x1, y1, x2, y2, color, velocity } = props;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.velocity = velocity;
  }

  update() {
    const { velocity } = this;
    this.x1 += velocity.x;
    this.y1 += velocity.y;
    this.x2 += velocity.x;
    this.y2 += velocity.y;
  }

  draw() {
    const { x1, y1, x2, y2, color } = this;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}
