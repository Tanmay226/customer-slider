// document.getElementById('next').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }
// document.getElementById('prev').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length - 1]);
// }
let slide = document.getElementById('slide');
let autoSlideInterval;

document.getElementById('next').onclick = function () {
    moveNext();
    resetAutoSlide();
};

document.getElementById('prev').onclick = function () {
    movePrev();
    resetAutoSlide();
};

// Start auto-slider
startAutoSlide();

function moveNext() {
    let lists = document.querySelectorAll('.item');
    slide.appendChild(lists[0]);
}

function movePrev() {
    let lists = document.querySelectorAll('.item');
    slide.prepend(lists[lists.length - 1]);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
        moveNext();
    }, 3000); // Adjust the interval as needed (currently set to 3 seconds)
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}
