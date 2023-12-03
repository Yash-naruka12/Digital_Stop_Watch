let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let milisecond = document.querySelector("#milisecond");

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer = false;

let start = () => {
  timer = true;
  allTime();
};

let stop = () => {
  timer = false;
};

let reset = () => {
    timer = false

    hour.innerHTML = "00"
    minute.innerHTML = "00"
    second.innerHTML = "00"
    milisecond.innerHTML = "00"
};

let allTime = () => {
  if (timer == true) {
    ms = ms + 1;
    milisecond.innerText = ms;
    setTimeout("allTime()", 5);

    if (ms == 100) {
      sec = sec + 1;
      ms = 0;
      second.innerText = sec;
    } else if (sec == 60) {
      min = min + 1;
      minute.innerText = min;
      sec = 0;
    } else if (min == 60) {
      hr = hr + 1;
      hour.innerText = hr;
      min = 0;
    }
  }
};
