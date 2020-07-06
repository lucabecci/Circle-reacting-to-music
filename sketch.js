let song;
let touchButton;
let button;
let amp;


function setup() {
  createCanvas(400, 400);
  song = loadSound("./sounds/song2.mp3", loaded);
  touchButton = loadSound("./sounds/touch.mp3")
  amp = new p5.Amplitude(); 
}
loaded = () =>{
  button = createButton('play');
  button.mousePressed( () => {
    if(!song.isPlaying()){
      touchButton.play()
      song.play()
      song.setVolume(0.50)
      button.html('pause')
    }else{
      touchButton.play()
      song.pause();
      button.html('play');
    }});
    console.log('load');
    
}

function draw() {
  background(0);
    let vol = amp.getLevel();
    let diameter = map(vol, 0, 0.50, 100, 200)
    noFill();
    strokeWeight(4);
    stroke(random(50,100),random(100,150),random(0,50))
    ellipse(width / 2, height / 2, diameter, diameter)
}


