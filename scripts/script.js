"use strict";

const userPasswordEl = document.getElementById("user-password");
const color = document.getElementById("color-bar");
let percentages = 0;
const numbersReg = new RegExp("(?=.*[0-9])");
const lowerCaseLetter = new RegExp("(?=(.*[a-z]){1,})");
const upperCaseLetter = new RegExp("(?=.*[A-Z])");
const specialSign = new RegExp("(?=.*?[#?!@$%^&*-./\\_])");

const savePasswordInLocalStorage = (password) => {
  localStorage.setItem();
};

const initCheckPassword = () => {
  userPasswordEl.addEventListener("keyup", (e) => {
    let passwordLength = e.target.value.length;
    let userPassword = e.target.value;

    percentages = 0;
    if (userPassword.match(numbersReg)) {
      percentages += 15;
      console.log(percentages);
    }
    if (userPassword.match(lowerCaseLetter)) {
      percentages += 10;
      console.log(percentages);
    }
    if (userPassword.match(upperCaseLetter)) {
      percentages += 20;
      console.log(percentages);
    }
    if (userPassword.match(specialSign)) {
      percentages += 20;
      console.log(percentages);
    }
    if (passwordLength >= 8) {
      percentages += 15;
      console.log(percentages);
    }
    if (passwordLength >= 10) {
      percentages += 10;
      console.log(percentages);
    }
    if (passwordLength >= 12) {
      percentages += 10;
      console.log(percentages);
    } else percentages += 0;
    changeCheckPasswordButton();
  });
};

const changeCheckPasswordButton = () => {
  console.log(percentages);
  color.classList.value = "";
  color.style.width = `${+percentages}%`;
  console.log(`${+percentages}%`);
  if (percentages <= 50) {
    color.classList.add("green");
  }
  if (percentages > 50 && percentages <= 70) {
    color.classList.toggle("yellow");
  }
  if (percentages > 70) {
    color.classList.add("red");
  }
};
initCheckPassword();
