// London
function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM	Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Detroit
  let detroitElement = document.querySelector("#detroit");
  let detroitDateElement = detroitElement.querySelector(".date");
  let detroitTimeElement = detroitElement.querySelector(".time");
  let detroitTime = moment().tz("America/Detroit");

  detroitDateElement.innerHTML = detroitTime.format("MMMM	Do YYYY");
  detroitTimeElement.innerHTML = detroitTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000);
