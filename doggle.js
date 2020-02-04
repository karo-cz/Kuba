class Doggo {
  constructor() {
    this.width = 180;
    this.height = 180;
    this.location = createVector(
      width / 2 - this.width / 2,
      height - this.height
    );
    this.speed = {
      right: createVector(5, 0),
      left: createVector(-5, 0)
    };
  }

  display() {
    noStroke();
    fill(250, 0, 0, 0);
    rect(this.location.x, this.location.y + 50, this.width, this.height);
    image(doggoImg, this.location.x, this.location.y, this.width, this.height);
  }

  move(direction) {
    this.location.add(this.speed[direction]);
    if (this.location.x < 0) {
      this.location.x = 0;
    } else if (this.location.x + this.width > width) {
      this.location.x = width - this.width;
    }
  }
}
