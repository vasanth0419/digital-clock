document.title = " Digital clock";

let divelement = document.createElement("div");
divelement.innerHTML = `
<div class="container custom-bg">
  <div class="clock ">
    <span id="hour">00</span>
    <span>:</span>
    <span id="min">00</span>
    <span>:</span>
    <span id="sec">00</span>
    <span id="ampm">AM</span>
  </div>
</div>
`;
document.body.appendChild(divelement);
let ampm = document.getElementById("ampm");
function displaytime() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (hr > 12) {
    hr = hr - 12;
    ampm.innerHTML = "PM";
  }
  document.getElementById("hour").innerHTML = zero(hr);
  document.getElementById("min").innerHTML = zero(min);
  document.getElementById("sec").innerHTML = zero(sec);
}

setInterval(displaytime, 500);
function zero(num) {
  return num < 10 ? "0" + num : num;
}
