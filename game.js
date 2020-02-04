let playerScore = 0;
let doggo;
let doggoImg;
let ball;
let ballIMG;
let yasIMG;
let yas;
let finish;
let finishIMG1;
let finishIMG2;
let sound;
let canPlay = false;

let balloon;
// let balloonIMG;
let balloons = [];

let backgroundSet = [];
let backgroundLocations = [
  [550, 300],
  [650, 70],
  [300, 300],
  [800, 300],
  [400, 500],
  [650, 500],
  [400, 70]
];

function setup() {
  createCanvas(1200, 1000);

  sound = loadSound("sounds/Arcade-Madness.mp3");

  let playing = true;
  // ********************************** BACKGROUND IMAGE
  let backgroundImages = [];

  backgroundImages.push(
    (mamaIMG = loadImage("images/the crew/karos_friends .002.png"))
  );

  backgroundImages.push(
    (hadasieIMG = loadImage("images/the crew/hadasie.png"))
  );

  backgroundImages.push(
    (julkajacekIMG = loadImage("images/the crew/karos_friends .003.png"))
  );

  backgroundImages.push(
    (igorekizuniaIMG = loadImage("images/the crew/karos_friend1.001.png"))
  );

  backgroundImages.push(
    (klimekIMG = loadImage("images/the crew/karos_friends .004.png"))
  );

  backgroundImages.push(
    (tofiIMG = loadImage("images/the crew/karos_friends .001.png"))
  );

  backgroundImages.push((karoIMG = loadImage("images/the crew/karo.png")));

  for (let i = 0; i < 7; i++) {
    backgroundIMG = new Background(
      createVector(backgroundLocations[i][0], backgroundLocations[i][1]),
      backgroundImages[i]
    );
    backgroundSet.push(backgroundIMG);
  }

  //  ********************************* DOG && BALL && YAS
  doggoImg = loadImage("images/giphy.gif");
  doggo = new Doggo();
  ballIMG = loadImage("images/ball.png");
  ball = new Ball(doggo);
  yasIMG = loadImage("images/yas-dog.png");
  yas = new Yas(yasIMG);
  finishIMG2 = loadImage("images/finish/confetti.gif");
  finishIMG1 = loadImage("images/finish/pushaboy.gif");
  finish = new Finish(finishIMG1, finishIMG2);

  // ********************************   BALLOONS
  let balloonsImages = [];
  balloonsImages.push(
    (balloonIMG1 = loadImage("images/balloons/blue-balloon.png"))
  );
  balloonsImages.push(
    (balloonIMG7 = loadImage("images/balloons/white-balloon.png"))
  );
  balloonsImages.push(
    (balloonIMG8 = loadImage("images/balloons/yeallow-polka-balloon.png"))
  );
  balloonsImages.push(
    (balloonIMG9 = loadImage("images/balloons/yellow-balloon.png"))
  );
  balloonsImages.push(
    (balloonIMG10 = loadImage("images/balloons/cake-balloon.png"))
  );
  balloonsImages.push(
    (balloonIMG10 = loadImage("images/balloons/cake-balloon.png"))
  );
  for (let row = 0; row < 4; row++) {
    for (let i = 0; i < 10; i++) {
      balloon = new Balloon(
        createVector(50 + 110 * i, 50 + 160 * row),
        100,
        160,
        balloonsImages[Math.floor(random(0, balloonsImages.length))]
      );
      balloons.push(balloon);
    }
  }
}

function draw() {
  // **************BACKGROUND
  background(255);
  backgroundSet.forEach(backgroundIMG => {
    backgroundIMG.display();
    playing = false;
  });

  if (sound.buffer && !sound.isPlaying()) {
    sound.play();
  }

  fill(0);
  textSize(32);
  text(`Score: ${playerScore}`, width - 200, 50);

  if (playerScore === 400) {
    finish.display();
    setTimeout(function() {
      console.log("active");
      noLoop();
      fill(255);
      textSize(32);
      text("KUBA DA MATTRAZE KING", 200, 700);
      text("SO COMFEE", 180, 300);
      text("SO MUCH SCORE", 600, 500);
      text("100 LAT", 800, 800);
      text("NO MORE BACK PAIN", 700, 300);
      text("AWSM", 400, 200);
    }, 16000);
  }

  ball.bounceDoggo();
  ball.bounceEdge();
  ball.update();

  if (keyIsDown(LEFT_ARROW)) {
    doggo.move("left");
  } else if (keyIsDown(RIGHT_ARROW)) {
    doggo.move("right");
  }

  if (playerScore !== 400) {
    doggo.display();
    ball.display();
  }

  for (let i = balloons.length - 1; i >= 0; i--) {
    balloons[i].display();

    if (balloons[i].collide(ball)) {
      ball.reverse("y");
      balloons.splice(i, 1);
      playerScore += 10;
    }
  }

  if (playerScore !== 400) {
    if (ball.ballOut(yas)) {
      return true;
    } else {
      return false;
    }
  }
}
