const swiper0 = new Swiper('.swiper0', {
    loop: true,
    autoplay: {
        delay: 4500,
    },
    breakpoints: {
        200: {
            slidesPerView: 1, 
            spaceBetween: 15,
          },
        
          760: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
  },
    navigation: {
        nextEl: '#slide-prev0',
        prevEl: '#slide-next0',
    },
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
     speed: 700,
    slidesPerView: 1,
    navigation: {
        nextEl: '#slide-prev1',
        prevEl: '#slide-next1',
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});


const swiper2 = new Swiper('.swiper2', {
    loop: true,
  autoplay:{
    delay:"3000"
  }  ,
  
  breakpoints: {
    200: {
      slidesPerView: 1, 
      spaceBetween: 15,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
  
  pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
  
    navigation: {
        nextEl: '#slide-prev2',
        prevEl: '#slide-next2',
    },
  
  });


  const swiper3 = new Swiper('.swiper3', {
    loop: true,
  autoplay:{
    delay:"3500"
  }  ,
  
  breakpoints: {
    200: {
      slidesPerView: 2, 
      spaceBetween: 15,
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  
    950: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
  
  pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
  
    navigation: {
        nextEl: '#slide-prev3',
        prevEl: '#slide-next3',
    },
  
  });


  const swiper4 = new Swiper('.swiper4', {
    loop: true,
  autoplay:{
    delay:"3500"
  }  ,
  
  breakpoints: {
    200: {
      slidesPerView: 1, 
      spaceBetween: 15,
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  
    950: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
  
  pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
  
    navigation: {
        nextEl: '#slide-prev4',
        prevEl: '#slide-next4',
    },
  
  });