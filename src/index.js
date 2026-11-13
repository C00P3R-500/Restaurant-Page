import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { hours } from "./hours.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const hoursBtn = document.querySelector("#hours-btn");

home(content);
homeBtn.setAttribute("class", "btn-clicked");

homeBtn.addEventListener("click", () => {
    
    homeBtn.setAttribute("class", "btn-clicked");
    menuBtn.setAttribute("class", "btns");
    hoursBtn.setAttribute("class", "btns");

    home(content);
});

menuBtn.addEventListener("click", () => {
    
    homeBtn.setAttribute("class", "btns");
    menuBtn.setAttribute("class", "btn-clicked");
    hoursBtn.setAttribute("class", "btns");

    menu(content);
});

hoursBtn.addEventListener("click", () => {
    
    homeBtn.setAttribute("class", "btns");
    menuBtn.setAttribute("class", "btns");
    hoursBtn.setAttribute("class", "btn-clicked");

    hours(content);
});