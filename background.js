class Background {
  constructor(location, image) {
    this.location = location;
    this.image = image;
    this.width = 200;
    this.height = 200;
  }

  display() {
    image(
      this.image,
      this.location.x,
      this.location.y,
      this.width,
      this.height
    );
  }
}
