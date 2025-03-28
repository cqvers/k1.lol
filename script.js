function userHasClicked() {
    document.getElementById("flexboxcontainer").style.display = "none";
    document.getElementById("flexboxcontainer").style.width = 0x0;
    document.getElementById("flexboxcontainer").style.height = 0x0;
    const _0x37b685 = document.getElementById("hiddencontainer");
    _0x37b685.style.display = "flex";
    var _0x44278d = new Audio("K1.mp3");
    _0x44278d.loop = true;
    _0x44278d.volume = 0.2;
    _0x44278d.play();
    setTimeout(() => {
        _0x37b685.style.opacity = 0x1;
    }, 0x32);
}
function updateFlicker() {
    const _0x51578e = Math.random() * 0.75 + 0.75;
    document.querySelectorAll(".flickertext").forEach(_0x1c5799 => {
        _0x1c5799.style.setProperty("--rand", _0x51578e);
    });
}
setInterval(updateFlicker, 0x1f4);
const titleText = ["meow", "i love you"];
let index = 0x0;
let charIndex = 0x0;
let isDeleting = false;
function updateTitle() {
    let _0x40da96 = titleText[index];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    document.title = _0x40da96.substring(0x0, charIndex);
    if (!isDeleting && charIndex === _0x40da96.length) {
        isDeleting = true;
        setTimeout(() => { }, 0x7d0);
    } else if (isDeleting && charIndex === 0x0) {
        isDeleting = false;
        index = (index + 0x1) % titleText.length;
    }
}
setInterval(updateTitle, 0x12c);