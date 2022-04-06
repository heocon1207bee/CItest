function random_255() {
    return  (Math.round(Math.random() * 254) + 1);
}

function rgbColor(r, g, b) {
    return "rgb("+r+","+g+","+b+")";
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

let cpick = document.getElementById("cpickBtn");
let rgbShow = document.getElementById("rgbShow");
let hexShow = document.getElementById("hexShow");
let html = document.querySelector("html");
let c2pick = document.getElementById("gradientBtn");
let rgbColor2 = document.getElementById("rgbColor2");

let rgbc;
let rgbc2;

cpick.addEventListener("click", () => {
    let r = random_255();
    let g = random_255();
    let b = random_255();
    rgbc = rgbColor(r, g, b);
    rgbShow.innerText = rgbc;
    let hexc = rgbToHex(r, g, b);
    hexShow.innerText = hexc;
    let gColor = "linear-gradient(" + rgbc + "," + rgbc + ")";
    html.style.backgroundImage = gColor;
});

c2pick.addEventListener("click", () => {
    let r = random_255();
    let g = random_255();
    let b = random_255();
    rgbc2 = rgbColor(r, g, b);
    console.log(rgbc2);
    rgbColor2.innerText = rgbc2;
    let gColor = "linear-gradient(" + rgbc + "," + rgbc2 + ")";
    console.log(gColor);
    html.style.backgroundImage = gColor;
})