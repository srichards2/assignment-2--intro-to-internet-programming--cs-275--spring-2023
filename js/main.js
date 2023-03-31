const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 1;
const size = slides[0].width;

slide.style.transform = 'translateX(' + (-size * counter') + 'px);

nextBtn.addEventListener('click', () => {
    slide.style.transition = "transform 1.4 ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter') + px)';
  });

prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlides();
});



// Show current slide and hide all others

// function showSlides() {
//   // Wrap around to beginning or end if slide index goes out of bounds
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   } else if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   // Loop through slides and set active class on current slide, and inactive classes on all others
//   for (let i = 0; i < slides.length; i++) {
//     if (i === slideIndex) {
//       slides[i].classList.add('active');
//       slides[i].classList.remove('inactive-left', 'inactive-right');
//     } else if (i < slideIndex) {
//       slides[i].classList.remove('active', 'inactive-right');
//       slides[i].classList.add('inactive-left');
//     } else {
//       slides[i].classList.remove('active', 'inactive-left');
//       slides[i].classList.add('inactive-right');
//     }
//   }
// }

// Show initial slide

// showSlides();
// // Coonects to JSONP content
// body = document.querySelector('body');
// artistOneInfo = document.getElementById('Artist1-Content');
// artistTwoInfo = document.getElementById('Artist2-Content');
// artistThreeInfo = document.getElementById('Artist3-Content');
// artistFourInfo = document.getElementById('Artist4-Content');

// function information(data){
//     artistOneInfo.textContent = data.Artist[0].album.artist.credit.content.source;
//     artistTwoInfo.textContent = data.Artist[1].album.artist.credit.content.source;
//     artistThreeInfo.textContent = data.Artist[2].album.artist.credit.content.source;
//     artistFourInfo.textContent = data.Artist[3].album.artist.credit.content.source;
//     console.log(data);

// }

// script = document.createElement('script');
// script.setAttribute('src', 'data/data.json');

// body.appendChild(scripts);
