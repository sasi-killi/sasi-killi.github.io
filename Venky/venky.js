const highlight = document.querySelectorAll("nav ul div");
const list = document.querySelectorAll("ul");
console.log(highlight);
list.onclick = style();

function style() {
    for (i = 0; i < highlight.length; i++) {
        highlight[i].onclick = function () {
            const hover = this.querySelector("div");
            hover.style.border = "red";
            hover.style.backgroundColor = "red";
        }
    }
}