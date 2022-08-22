"use strict";
const submitBtn = document.querySelector("#submit");
const invalidMsg = document.querySelector(".invalid-msg");
const result = document.querySelector("#message");

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const nowDay = new Date().getDate();
const nowMonth = new Date().getMonth() + 1;
const nowYear = new Date().getFullYear();

const clear = () => {
  day.value = "";
  month.value = "";
  year.value = "";
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  result.textContent = "";

  if (
    !(+day.value > 0 && +day.value <= 30) ||
    !(+month.value > 0 && +month.value <= 12) ||
    !(year.value.length === 4)
  ) {
    invalidMsg.textContent = "you Entered wrong number, please try again";
    clear();
    return;
  }

  invalidMsg.textContent = "";

  let dayResult = nowDay - Number(day.value);
  let monthResult = nowMonth - Number(month.value);
  let yearResult = nowYear - Number(year.value);

  if (dayResult < 0) {
    --monthResult;
    dayResult = 30 + dayResult;
  }

  if (monthResult < 0) {
    --yearResult;
    monthResult = 12 + monthResult;
  }

  result.textContent = `your Age is : ${yearResult} ${
    yearResult > 1 ? "years" : "year"
  }, ${monthResult} ${monthResult > 1 ? "months" : "month"} and ${dayResult} ${
    dayResult > 1 ? "days" : "day"
  }.`;

  clear();
});
