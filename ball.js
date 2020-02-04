class Ball {
  constructor(doggo) {
    this.radius = 25;
    this.size = this.radius * 2;
    this.width = 50;
    this.height = 50;
    this.location = createVector(
      doggo.location.x + doggo.width / 2,
      doggo.location.y - this.height / 2 + 50
    );
    this.velocity = createVector(5, -5);
    this.doggo = doggo;
  }

  display() {
    noStroke();
    ellipse(this.location.x, this.location.y, this.size, this.size);

    image(
      ballIMG,
      this.location.x - this.width / 2,
      this.location.y - this.height / 2,
      this.width,
      this.height
    );
  }

  update() {
    this.location.add(this.velocity);
  }

  bounceEdge() {
    if (this.location.x + this.radius >= width) {
      this.velocity.x *= -1;
    } else if (this.location.x - this.radius <= 0) {
      this.velocity.x *= -1;
    } else if (this.location.y - this.radius <= 0) {
      this.velocity.y *= -1;
    }
  }

  bounceDoggo() {
    if (
      this.location.x + this.radius >= this.doggo.location.x &&
      this.location.x - this.radius <= this.doggo.location.x + this.doggo.width
    ) {
      if (this.location.y + this.radius > this.doggo.location.y) {
        this.velocity.y *= -1;
        this.location.y = this.doggo.location.y - this.radius - 1;
      }
    }
  }

  reverse(coord) {
    this.velocity[coord] *= -1;
  }

  ballOut(yas) {
    if (this.location.y > height) {
      this.location.y = height - 180;
      this.location.x = width / 2;
      yas.display();
      return true;
    } else {
      return false;
    }
  }
}
