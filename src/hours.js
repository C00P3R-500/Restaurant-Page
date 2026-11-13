import CoopsChickenimg from "./CoopsChicken.png";

export function hours(content) {
    content.innerHTML = "";

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.textContent = "Coops Hours";
    content.appendChild(heading);

    const pic = document.createElement("img");
    pic.classList.add("img");
    pic.src = CoopsChickenimg;
    content.appendChild(pic);

    const info = document.createElement("div");
    info.classList.add("hrs");
    info.innerHTML = "Sunday-Thursday: 8am-10pm <br>"  +
       "Friday & Saturday: 8am-11pm";
    content.appendChild(info);
    
}