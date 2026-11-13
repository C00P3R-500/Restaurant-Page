import CoopsChickenimg from "./CoopsChicken.png";

export function home(content) {
    content.innerHTML = "";

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.textContent = "Coops Chicken";
    content.appendChild(heading);

    const pic = document.createElement("img");
    pic.classList.add("img");
    pic.src = CoopsChickenimg;
    content.appendChild(pic);

    const info = document.createElement("div");
    info.classList.add("info");
    info.textContent = "Coops Chicken is a country diner in the " + 
    "middle of KY founded by Cooper. We harvest our own fresh " +
    "chicken and create all dishes from scratch! Coops Chicken " +
    "is especially known for our hand crafted sauces.";
    content.appendChild(info);
    
}
