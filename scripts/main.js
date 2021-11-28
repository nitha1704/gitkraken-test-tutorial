greeting();
addTime();
swiperCustomize();

function greeting() {
  console.log("hello world");
}

function hello() {
  console.log("hello hell");
}

function addTime() {
  const demo = document.querySelector(".demo");
  let num = 0;

  let count = setInterval(() => {
    num += 1;
    demo.innerHTML = num;

    if (num === 2) {
      clearInterval(count);
    }

    console.log(num)
  }, 1000);
}


function swiperCustomize(){

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",

      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

}