class Balloon {
  constructor(location, width, height, image) {
    this.location = location;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  display() {
    // noStroke();
    fill(255, 0, 0, 0);
    rect(this.location.x, this.location.y, this.width, this.height);
    image(
      this.image,
      this.location.x - 30,
      this.location.y - 20,
      this.width + 70,
      this.height + 55
    );
  }

  collide(ball) {
    if (
      ball.location.y - ball.radius <= this.location.y + this.height &&
      ball.location.y + ball.radius >= this.location.y &&
      ball.location.x + ball.radius >= this.location.x &&
      ball.location.x - ball.radius <= this.location.x + this.width
    ) {
      return true;
    }
  }
}
