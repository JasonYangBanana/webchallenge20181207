let menu = document.querySelector(".burgerMenu")
menu.addEventListener("click", function() {
  addClass()
})

function addClass() {
  let hasClass = menu.className
  if (hasClass.includes("open")) {
    menu.setAttribute("class", `burgerMenu`);
  } else {
    menu.setAttribute("class", `burgerMenu open`);
  }
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