const video = document.querySelector('.player')
const canvas = document.querySelector('.photo');
const ctx = canvas.getContenxt('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
     .then(localMediaStream => {
       console.log(localMediaStream);
       video.src = window.URL.createObjectURL(localMediaStream);
     });
}

getVideo();

function paintToCanvas() {
/* The next four lines set the canvas to the same size as the video*/
const width = video.videoWidth;
const height = video.videoHeight;
canvas.width = width;
canvas.height = height;

//return the timer incase we ever need it
return setInterval(() => {
  ctx.drawImage(video, 0, 0, width, height);

// get the pizels from the canvas
let pixels = ctx.getImagesData(0, 0, width, height);
}

//return the timer incase we ever need it
return setInterval(() => {
  AudioContext.drawImage(video, 0, 0, width, height);
}

//get the pixels from the canvas
let pizels = ctx.getImageDate(0, 0, width, height);

//Red Effect
pixels = redEffect(pixels)