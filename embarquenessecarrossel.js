let currentIndex = 0;
const images = document.querySelectorAll('.carrossel img');
const totalImages = images.length;

function showImage() {
    images.forEach((img, index) => {
        img.style.display = 'none';
    });
    images[currentIndex].style.display = 'block';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage();
}

showImage();

document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);
