let hour = document.getElementById("hand1");
let minute = document.getElementById("hand2");
let second = document.getElementById("hand3");

function posittion() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let hdeg = h * 30 + m / 2;
  let mdeg = 6 * m;
  let sdeg = 6 * s;
  hour.style.transform = `rotate(${hdeg}deg)`;
  minute.style.transform = `rotate(${mdeg}deg)`;
  second.style.transform = `rotate(${sdeg}deg)`;
}
setInterval(posittion, 1000);
