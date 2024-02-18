const modalImgBlock = document.querySelector('.modal__img-block');
const images = document.querySelectorAll('.image-full');
const modal = document.querySelector('.modal__img');


images.forEach((item) => {
    item.addEventListener('click',(e) => {
        const imgData = e.target.dataset.img;
        modalImgBlock.innerHTML = `<img src="./assets/img/${imgData}.jpg" alt="">`;
    })
})