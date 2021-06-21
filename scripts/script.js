"use strict";

const userPasswordEl = document.getElementById("user-password");
const color = document.getElementById("color-bar");
let percentages = 0;
const numbersReg = new RegExp("(?=.*[0-9])");
const lowerCaseLetter = new RegExp("(?=(.*[a-z]){1,})");
const upperCaseLetter = new RegExp("(?=.*[A-Z])");
const specialSign = new RegExp("(?=.*?[#?!@$%^&*-./\\_])");

let passwords = [];

const savePasswordInLocalStorage = () => {
  localStorage.setItem("passwords", JSON.stringify(passwords));
};

const initAddPassword = () => {
  document
    .getElementById("login-password-btn")
    .addEventListener("click", () => {
      if (!passwords.includes(userPasswordEl.value)) {
        passwords.push(userPasswordEl.value);
        savePasswordInLocalStorage();
        userPasswordEl.value.innerHTML = "";
      } else alert("This password already exists!");
    });
};

const readPasswordsFromLocalStorage = () => {
  passwords = [];
  const localPasswords = localStorage.getItem("passwords");
  if (localPasswords) {
    const passwordsShapes = JSON.parse(localStorage.getItem("passwords"));
    passwordsShapes.forEach((password) => {
      passwords.push(password);
    });
  }
  return passwords;
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
    closePasswordsList();
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
    color.classList.toggle("red");
  }
};

const renderPasswordsList = () => {
  let passwordsFromStorage = readPasswordsFromLocalStorage();
  console.log(passwordsFromStorage);
  passwordsFromStorage.forEach((password) => {
    const item = document.createElement("p");
    item.classList.add("passwords-list-item");
    item.innerHTML = password;
    document.querySelector(".passwords-list").appendChild(item);
  });
};

const initRenderPasswordsList = () => {
  userPasswordEl.addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".passwords-list").innerHTML = "";
      document
        .querySelector(".passwords-list")
        .classList.toggle("passwords-list--active");
      renderPasswordsList();
    }, 1);
  });
};

const closePasswordsList = () => {
  if (
    document
      .querySelector(".passwords-list")
      .classList.contains("passwords-list--active")
  )
    document
      .querySelector(".passwords-list")
      .classList.remove("passwords-list--active");
};

const initClosePasswordsList = () => {
  document
    .querySelector("body *:not(.passwords-list--active)")
    .addEventListener("click", () => {
      closePasswordsList();
    });
};

initCheckPassword();
initAddPassword();
initRenderPasswordsList();
initClosePasswordsList();
