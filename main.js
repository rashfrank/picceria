window.onscroll = function() {
    myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
}

$('body').scrollspy({
    target: '#myHeader'
});


$(document).ready(function() {
    $('.fa-search').on("click", function() {
        $('.header-search .header-input').css("display","inline-block");
        $(".close-icon").css("display","inline-block");
        $(".search-icon").css("display","none");
    });
    $('.close-icon').on("click", function() {
        $('.header-search .header-input').css("display","none");
        $(".close-icon").css("display","none");
        $(".search-icon").css("display","inline-block");
    });
});


// ***********************
// for sliders 
$('.veg-slider').bxSlider({
    auto: true,
     controls: true,
     nextText: '<i class="fas fa-arrow-right"></i>',
     prevText: '<i class="fas fa-arrow-left"></i>',
     pause: 5000,
     speed: 500,
     slideMargin: 30,
     pager: true,
     pagerCustom: ''
});
$(".non-veg-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});
$(".mushroom-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});
$(".cheese-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});
$(".paneer-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});



// **********************
$(".testimonials-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '',
    prevText : '',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: '.testimonials-slider-pager-one, .testimonials-slider-pager-two, .testimonials-slider-pager-three'
});

// *******************
$(".chef-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: '.chef-slider'
});


function setBackgroundByTime() {
  const hour = new Date().getHours();
  const body = document.body;
  body.classList.remove("morning", "evening", "night");

  if (hour >= 6 && hour < 12) {
    body.classList.add("morning");
  } else if (hour >= 12 && hour < 20) {
    body.classList.add("evening");
  } else {
    body.classList.add("night");
  }
}

setBackgroundByTime();


// === Автоматическая смена фона ===
function setBackgroundByTime() {
  const hour = new Date().getHours();
  const body = document.body;
  body.classList.remove("morning", "evening", "night");

  if (hour >= 6 && hour < 12) body.classList.add("morning");
  else if (hour >= 12 && hour < 20) body.classList.add("evening");
  else body.classList.add("night");
}

// === Применить тему ===
function applyTheme(theme) {
  localStorage.setItem("selectedTheme", theme);
  document.body.classList.remove("morning", "evening", "night");

  if (theme === "auto") {
    setBackgroundByTime(); // автоматический режим
  } else {
    document.body.classList.add(theme);
  }
}

// === Загрузить сохранённую тему ===
function loadTheme() {
  const saved = localStorage.getItem("selectedTheme") || "auto";
  applyTheme(saved);
}

// === Обработчики кнопок ===
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".color-btn");
  if (!buttons.length) return; // защита, если кнопок нет

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
    });
  });

  loadTheme();
});


// === Фоновое видео по теме ===
function setVideoByTheme(theme) {
  const video = document.getElementById("bgVideo");
  if (!video) return;

  let src = "";

  switch (theme) {
    case "morning":
      src = "assets/videos/morning.mp4"; // утро
      break;
    case "evening":
      src = "assets/videos/evening.mp4"; // вечер
      break;
    case "night":
      src = "assets/videos/night.mp4"; // ночь
      break;
    case "auto":
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 12) {
        src = "assets/videos/morning.mp4"; // утро
      } else if (hour >= 12 && hour < 20) {
        src = "assets/videos/evening.mp4"; // вечер
      } else {
        src = "assets/videos/night.mp4"; // ночь
      }
      break;
  }

  // Проверяем, чтобы не перезагружать то же самое видео
  if (src && video.getAttribute("src") !== src) {
    video.src = src;
    video.load();
    video.play();
  }
}

// === Применение темы ===
function applyTheme(theme) {
  localStorage.setItem("selectedTheme", theme);
  document.body.classList.remove("morning", "evening", "night");

  if (theme === "auto") {
    setBackgroundByTime(); // функция для авто-определения фона
    setVideoByTheme("auto");
  } else {
    document.body.classList.add(theme);
    setVideoByTheme(theme);
  }
}

// === Автозагрузка видео при старте ===
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("selectedTheme") || "auto";
  applyTheme(savedTheme);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
