let menu = document.querySelector(".menu")
let menuStatus = false

let buggerMenu = document.querySelector(".burgerMenu")
buggerMenu.addEventListener("click", function() {
  burgerMenuChange()
  animationMenu()
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
let kerwayBanner = document.querySelector(".kerwayBanner")
let kerwayBackground = document.querySelector(".kerwayBackground")
kerwayBackground.style.transform = " matrix(1.05, 0, 0, 1.05, 0, 0)"
kerwayBanner.addEventListener("mousemove", function(e) {
  let moveRect = 10
  let x = e.offsetX
  let y = e.offsetY
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  let width = kerwayBackground.offsetWidth
  let height = kerwayBackground.offsetHeight
  let xMove = Math.round((x / width - 0.5) * moveRect);
  let yMove = Math.round((y / height - 0.5) * moveRect);
  let shadowLevel = (Math.abs(xMove) + Math.abs(yMove)) / 2 / moveRect * 3
  kerwayBackground.style.transform = `matrix(1.03, 0, 0, 1.03, ${xMove}, ${yMove})`
})