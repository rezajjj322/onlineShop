// bergur Menu
const burger = document.querySelector(".burger");
const linksItem = document.querySelector(".linksItem");

burger.addEventListener("click", toggle);
function toggle() {
  linksItem.classList.toggle("activeMenu");
}

// active menu Filter
const indicator = document.querySelector(".productMenu").children;
const main = document.querySelector(".productContent").children;

for (let i = 0; i < indicator.length; i++) {
  indicator[i].onclick = function () {
    for (let j = 0; j < indicator.length; j++) {
      indicator[j].classList.remove("active");
    }
    this.classList.add("active");
    this.style.transition = "0.3s ease-in-out";

    const displayItem = this.getAttribute("data-filter");

    for (let y = 0; y < main.length; y++) {
      main[y].style.transform = "scale(0)";

      setTimeout(() => {
        main[y].style.display = "none";
      }, 500);

      if (main[y].getAttribute("data-category") == displayItem || displayItem == "all") {
        main[y].style.transform = "scale(1)";

        setTimeout(() => {
          main[y].style.display = "block";
        }, 500);
      }
    }
  };
}

// shopping Card
const shoppingCard = document.querySelector(".shopCard");
const basket = document.querySelector(".basket");
const addToCard = document.querySelectorAll(".addToCard");
let clone;

for(btn of addToCard){
  btn.addEventListener("click", (e) => {
    const add = Number(shoppingCard.getAttribute("data-count"));
    shoppingCard.setAttribute("data-count", add + 1);
    shoppingCard.classList.add("zero");

    let parent = e.target.parentNode;
    clone = parent.cloneNode(true);
    
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "حذف از سبد";
    removeBtn.classList.add("removeBtn");
    removeBtn.style.background = "crimson"
    removeBtn.style.width = "100%"
    removeBtn.style.padding = "6px"
    removeBtn.style.margin = "2px"
    removeBtn.style.borderRadius = "4px"

    clone.appendChild(removeBtn);

    basket.appendChild(clone);
    clone.lastElementChild.previousElementSibling.innerText = "خرید";
    
      shoppingCard.onclick = () => {
        basket.classList.toggle("display")
      }
    
  })
};