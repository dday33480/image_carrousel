const images = document.querySelectorAll("figure");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

let index = 0;

function refresh() {
    for(const image of images) {
        image.style.display = "none";
    }
    images[index].style.display = "block";
}

refresh();

next.addEventListener("click", function() {
    index++;
    if(index > images.length -1) {
        index = 0;
    }
    refresh();
});

previous.addEventListener("click", function() {
    index--;
    if(index < 0) {
        index = images.length - 1;
    }
    refresh();
});

