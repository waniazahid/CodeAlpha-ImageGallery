let currentIndex = 0;
let images = [];

function openModal(element) {
    images = Array.from(document.querySelectorAll('.gallery-img'));
    currentIndex = images.indexOf(element);
    updateModalImage();
    const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}

function updateModalImage() {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage();
}
