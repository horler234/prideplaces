var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var swiper = new Swiper('.swiper-container2', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const subscribeForm = document.querySelector('form.subscribe-form');

subscribeForm.addEventListener('submit', e => {
  e.preventDefault();

  const subscriber = {
    name: subscribeForm.subscribeName.value,
    email: subscribeForm.subscribeMail.value,
    city: subscribeForm.subscribeCity.value,
    state: subscribeForm.subscribeState. value
  };

  db.collection('prideplaces').add(subscriber)
    .then(() => console.log('subscribed'))
    .catch(err => console.log(err));

  subscribeForm.reset();
});

let myVar;

// duration of the preload
const preload = () => {
    myVar = setTimeout(showpage, 5000);
  }


// after the preload
const showpage =  ()  => {
    document.querySelector('.preload-container').style.display = 'none'
    document.querySelector('nav').style.opacity = '1';
    document.querySelector('header').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.top-banner').style.display = 'block';
    document.querySelector('.categories-container').style.display = 'flex';
    document.querySelector('.happening-cities-section').style.display = 'block';
    document.querySelector('.beyond-section').style.display = 'block';
    document.querySelector('.new-places-section').style.display = 'block';
    document.querySelector('.first-to-know-section').style.display = 'block';
  }