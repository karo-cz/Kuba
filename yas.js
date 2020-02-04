class Yas {
  constructor(image) {
    this.image = image;
    this.width = 500;
    this.height = 500;
  }

  display() {
    image(
      this.image,
      width - this.width,
      height - this.height,
      this.width,
      this.height
    );
    noLoop();
    setTimeout(() => {
      loop();
    }, 1000);
  }
}
