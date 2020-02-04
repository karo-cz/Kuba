class Finish {
  constructor(image1, image2) {
    this.image1 = image1;
    this.image2 = image2;
    this.width = 1000;
    this.height = 800;
    this.x = 100;
    this.y = 100;
  }

  display() {
    image(this.image1, this.x, this.y, this.width, this.height);
    image(this.image2, this.x, this.y, this.width, this.height);
  }
}
