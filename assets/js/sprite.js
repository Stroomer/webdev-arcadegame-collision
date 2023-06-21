class Sprite {
  constructor({ position, velocity, imageSrc, scale }) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.position = position;
    this.velocity = velocity;
    this.scale = scale;
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0) {
      this.velocity.x *= -1;
    } else if (this.position.x + this.image.width * this.scale > canvas.width) {
      this.velocity.x *= -1;
    }

    if (this.position.y < 0) {
      this.velocity.y *= -1;
    } else if (
      this.position.y + this.image.height * this.scale >
      canvas.height
    ) {
      this.velocity.y *= -1;
    }
  }

  draw(ctx) {
    if (!this.image) {
      return;
    }
    ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.position.x | 0,
      this.position.y | 0,
      this.image.width * this.scale,
      this.image.height * this.scale
    );
  }
}
