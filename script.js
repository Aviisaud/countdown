const closeBtn = document.querySelector(".discount-container .close-btn");
const discountContainer = document.querySelector(".discount-container");

const days = document.querySelector(".countdown-timer .days");
const hours = document.querySelector(".countdown-timer .hours");
const minutes = document.querySelector(".countdown-timer .minutes");
const seconds = document.querySelector(".countdown-timer .seconds");

closeBtn.addEventListener("click", () => {
    discountContainer.style.display = "none";
    setCookie("discountClosed", "true", 24);
  });

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // Move to the next day
tomorrow.setHours(0, 0, 0, 0); // Set time to 12:00 AM

const countdownDate = tomorrow.getTime();

const setCookie = (name, value, duration) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + duration * 60 * 60 * 1000);
  document.cookie = `${name} = ${value};expires=${expires.toUTCString()};path=/`;
};

let t = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;
  
    let daysValue = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    let hoursValue = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    let minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    let secondsValue = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");
  
    days.innerHTML = daysValue;
    hours.innerHTML = hoursValue;
    minutes.innerHTML = minutesValue;
    seconds.innerHTML = secondsValue;
  
    
  }, 1000);