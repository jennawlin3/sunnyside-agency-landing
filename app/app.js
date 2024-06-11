const d = document;
const hamburgerBtn = d.querySelector("#hamburger-btn");
const menuMobile = d.querySelector(".mobile-ul");

console.log(menuMobile)

hamburgerBtn.addEventListener("click", (e) => {
    if(e.target) {
        menuMobile.classList.toggle("hide");
    }
})
