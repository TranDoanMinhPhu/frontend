// Slider logic
const sliderItem = document.querySelectorAll('.slider-item');
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + '%';
}

const sliderItems = document.querySelector('.slider-items');
const arrowRight = document.querySelector('.ri-arrow-right-fill');
const arrowLeft = document.querySelector('.ri-arrow-left-fill');
let i = 0;

arrowRight.addEventListener('click', () => {
  i++;
  if (i < sliderItem.length) {
    sliderMove(i);
  } else {
    i = 0; // Quay về slide đầu tiên thay vì return false
    sliderMove(i);
  }
});

arrowLeft.addEventListener('click', () => {
  if (i <= 0) {
    i = sliderItem.length - 1; // Quay về slide cuối cùng
    sliderMove(i);
  } else {
    i--;
    sliderMove(i);
  }
});


if (arrowRight != null && arrowLeft != null) {
  
}



// Function to move the slider
function sliderMove(i) {
  sliderItems.style.left = -i * 100 + '%';
}

function autoSlider() {
  if (i < sliderItem.length - 1) {
    i++;
    sliderMove(i);
  } else {
    i = 0;
    sliderMove(i);
  }
}

setInterval(autoSlider, 5000);

// Menu toggle logic
const menuBar = document.querySelector('.header-bar-icon');
const headerNav = document.querySelector('.header-nav');

menuBar.addEventListener('click', (e) => {
  e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
  headerNav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!headerNav.contains(e.target) && !menuBar.contains(e.target)) {
    headerNav.classList.remove('active');
  }
});

// Close menu when clicking a menu item
const navLinks = document.querySelectorAll('.header-nav nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerNav.classList.remove('active');
  });
});
//STICKY HEADER MOTHERF-
window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    document.querySelector('header').classList.add('active');
  }
  else {
    document.querySelector('header').classList.remove('active');
  }
}

);
// CLICK THE IMAGES DAWG
const imageSmall = document.querySelectorAll('.product-image-items img');
const imageMain = document.querySelector('.main-image');
for (let index = 0; index < imageSmall.length; index++) {
  imageSmall[index].addEventListener('click', () => {
    for (let a = 0; a < imageSmall.length; a++) {
      imageSmall[a].classList.remove('active');
    }
    imageMain.src = imageSmall[index].src;
    imageSmall[index].classList.add('active');
  })
}
//Quantity-product
const quanPlus = document.querySelector('.ri-add-line')
const quanMinus = document.querySelector('.ri-subtract-line')
const quanInput = document.querySelector('.quantity-input')
let qty = 1
quanPlus = addEventListener('click', () => {
  inputValue = 
  qty++
  quanInput.value = qty;

});
quanMinus.addEventListener('click', () => {
  if (qty <= 1) {
    return false;
  }
  else {
    qty--;
    quanInput.value = qty;
  }
  });