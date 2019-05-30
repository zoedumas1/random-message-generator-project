  var sad = document.querySelector('.sad');
  var destroyed = document.querySelector('.destroyed');
  var longing = document.querySelector('.longing');
  var empty = document.querySelector('.empty');
  var passive = document.querySelector('.passive');
  var messageSpace = document.querySelector('.message');

  sad.addEventListener('I need', kp_song1);
  destroyed.addEventListener('I need', kp_song2);
  longing.addEventListener('I need', kp_song3);
  empty.addEventListener('I need', kp_song4);
  passive.addEventListener('I need', kp_song5);


kp_song1 = ["https://www.youtube.com/watch?v=NjkBCy2KviA", "https://www.youtube.com/watch?v=LNxWTS25Tbk"];
kp_song2 = ["https://www.youtube.com/watch?v=AyGmDYraPgA", "https://www.youtube.com/watch?v=JjLjoYNPspQ"];
kp_song3 = ["https://www.youtube.com/watch?v=fkY4J3Mc3Gs", "https://www.youtube.com/watch?v=vc08GA_0GV8"];
kp_song4 = ["https://www.youtube.com/watch?v=_A4B0Yc5haU", "https://www.youtube.com/watch?v=43n1wghXRGM"];
kp_song5 = ["https://www.youtube.com/watch?v=A7s_BUrI5xw", "https://www.youtube.com/watch?v=2FZNExqoGiY"];

function kp_song1() {
  var num = Math.floor(Math.random() * kp_song1.length);
  var message = kp_song1[num];
  messageSpace.innerText = message;
}

function kp_song2() {
  var num = Math.floor(Math.random() * kp_song2.length);
  var message = kp_song2[num];
  messageSpace.innerText = message;
}

function kp_song3() {
  var num = Math.floor(Math.random() * kp_song3.length);
  var message = kp_song3[num];
  messageSpace.innerText = message;
}

function kp_song4() {
  var num = Math.floor(Math.random() * kp_song4.length);
  var message = kp_song4[num];
  messageSpace.innerText = message;
}

function kp_song5() {
  var num = Math.floor(Math.random() * kp_song5.length);
  var message = kp_song5[num];
  messageSpace.innerText = message;
}
