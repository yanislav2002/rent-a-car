
export function slide() {

    let images = document.querySelectorAll(".slider-img");
    let currentIndex = 0;

    function nextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        images[currentIndex].classList.add("active");
    }
    function prevImage() {
        images[currentIndex].classList.remove("active");
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        images[currentIndex].classList.add("active");
    }

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    prev.addEventListener('click', () => {
        prevImage()
    })

    next.addEventListener('click', () => {
        nextImage()
    })
}




