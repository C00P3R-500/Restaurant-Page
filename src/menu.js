import bucket from "./chickenBucket.png";
import sammy from "./chickSand.png";
import tenders from "./tenders.png";

export function menu(content) {
    content.innerHTML = "";

    const item1 = document.createElement("div");
    item1.classList.add("item-container");
    content.appendChild(item1);

    const chickenBucket = document.createElement("img");
    chickenBucket.classList.add("food-img");
    chickenBucket.src = bucket;

    const bucketDescrip = document.createElement("div");
    bucketDescrip.classList.add("food-descrip");
    bucketDescrip.innerHTML = "The Coop Bucket $24.99 <br>" + 
    "<br> Eight pieces of our hand-breade " + 
    "fried chicken, " +
    "served in a classic red-and-white bucket. Comes " +
    "with four buttermilk biscuits, a large side of creamy mashed " + 
    "potatoes with country gravy, and a large coleslaw. Pick two of " + 
    "our hand-crafted sauces for dipping: Cooper’s Honey Heat or " + 
    "Original Coop Sauce.";

    item1.appendChild(chickenBucket);
    item1.appendChild(bucketDescrip);

    const item2 = document.createElement("div");
    item2.classList.add("item-container");
    content.appendChild(item2);

    const chickSand = document.createElement("img");
    chickSand.classList.add("food-img");
    chickSand.src = sammy;

    const chickSandDescrip = document.createElement("div");
    chickSandDescrip.classList.add("food-descrip");
    chickSandDescrip.innerHTML = "The Coop Sandwich $9.99 <br>" + 
    "<br> A hand-breaded chicken breast, " + 
    "fried fresh to order " + 
    "and served on a toasted butter brioche bun. Comes " + 
    "with crisp dill pickles, shredded lettuce, and a " + 
    "generous spread of our house-made sauce. Choose your " + 
    "sauce: Cooper’s Honey Heat or " + 
    "Original Coop Sauce.";

    item2.appendChild(chickSand);
    item2.appendChild(chickSandDescrip);

    item1.appendChild(chickenBucket);
    item1.appendChild(bucketDescrip);

    const item3 = document.createElement("div");
    item3.classList.add("item-container");
    content.appendChild(item3);

    const chickTenders = document.createElement("img");
    chickTenders.classList.add("food-img");
    chickTenders.src = tenders;

    const chickTendersDescrip = document.createElement("div");
    chickTendersDescrip.classList.add("food-descrip");
    chickTendersDescrip.innerHTML = "The IDK $8.99 <br>" + 
    "<br> Can't decide? We get it. Two plain " + 
    "hand-breaded chicken tenders, " + 
    "fried fresh to order " + 
    "and served with a side of crinkle-cut fries. Comes " + 
    "with a buttermilk biscuit and a small " + 
    "fountain drink. Sauce is always on the side: " + 
    "Cooper’s Honey Heat or " + 
    "Original Coop Sauce.";
    item3.appendChild(chickTenders);
    item3.appendChild(chickTendersDescrip);

}