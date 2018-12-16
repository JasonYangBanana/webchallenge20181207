let loadingPage = document.querySelector(".loadingPage")
let homePage = document.querySelector(".homePage")
let menu = document.querySelector(".menu")
let contactUsImage = document.querySelector(".contantUsImage")
let contactUs = document.querySelector(".contactUs")
let menuStatus = false
let contactUsStatus = false
let buggerMenu = document.querySelector(".burgerMenu")

setTimeout(function() {
  loadingPage.style.display = "none";
}, 3000)

contactUsImage.addEventListener("click", function() {
  burgerMenuChange()
  contactUs.style.right = "0";
  contactUsStatus = !contactUsStatus
})
buggerMenu.addEventListener("click", function() {
  burgerMenuChange()
  if (contactUsStatus) {
    contactUs.style.right = "-100vw";
    contactUsStatus = !contactUsStatus
  } else {
    animationMenu()
  }
})

function burgerMenuChange() {
  let hasClass = buggerMenu.className
  if (hasClass.includes("open")) {
    buggerMenu.setAttribute("class", `burgerMenu`);
  } else {
    buggerMenu.setAttribute("class", `burgerMenu open`);
  }
}

function animationMenu() {
  if (menuStatus) {
    menu.style.left = "-590px";
  } else {
    menu.style.left = "0px";
  }
  menuStatus = !menuStatus
}

let hausennBanner = document.querySelector(".hausennBanner")
let hausennBackground = document.querySelector(".hausennBackground")
hausennBackground.style.transform = " matrix(1.05, 0, 0, 1.05, 0, 0)"
hausennBanner.addEventListener("mousemove", function(e) {
  let moveRect = 10
  let x = e.offsetX
  let y = e.offsetY
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  let width = hausennBackground.offsetWidth
  let height = hausennBackground.offsetHeight
  let xMove = Math.round((x / width - 0.5) * moveRect);
  let yMove = Math.round((y / height - 0.5) * moveRect);
  let shadowLevel = (Math.abs(xMove) + Math.abs(yMove)) / 2 / moveRect * 3
  hausennBackground.style.transform = `matrix(1.03, 0, 0, 1.03, ${xMove}, ${yMove})`
})
$(".mouseButton").click(function() {
  hausennBackground.style.transform = " matrix(1, 0, 0, 1, 0, 0)"
  $('html, body').animate({
      scrollTop: $(window).height()
    },
    1000);
});

$(document).ready(function() {
  //想辦法抓目標照片
  $('.parallax__layer--back').click(function() {
    $('.accordionLists').addClass('show');
    $('.burgerMenu').addClass('open');
    menuStatus = !menuStatus;
  });
  $('.burgerMenu').click(function() {
    $('.accordionLists').removeClass('show');
  });

  $('.accordion').accordion({
    "transitionSpeed": 500,
    "transitionEasing": 'ease-in-out',
    "singleOpen": true
  });
  $('.subaccordion').accordion({
    "transitionSpeed": 500,
    "transitionEasing": 'ease-in-out',
    "singleOpen": true,
    "controlElement": '[data-subcontrol]',
    "contentElement": '[data-subcontent]'
  });
});