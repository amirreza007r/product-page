// offCanvas menu

function toggleMenu() {
    var offcanvasMenu = document.getElementById("offcanvasMenu");
    offcanvasMenu.style.width =
        offcanvasMenu.style.width === "250px" ? "0" : "250px";
}
//  counter
let numContainer = document.getElementById("num");
let roastContainer = document.getElementById("roast");
let value = 0;

let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");

btnInc.addEventListener("click", () => {
    value++;
    numContainer.textContent = value;
});

btnDec.addEventListener("click", () => {
    if (value > 0) {
        value--;
        numContainer.textContent = value;
    }
});

btnReset.addEventListener("click", () => {
    if (value > 0) {
        roastContainer.textContent = ` ${value} item added to the cart `;
        value = 0;
        numContainer.textContent = value;
        setTimeout(() => {
            roastContainer.textContent = "";
        }, 3000);
    } else {
        roastContainer.textContent = "";
        value = 0;
        numContainer.textContent = value;
    }
});
