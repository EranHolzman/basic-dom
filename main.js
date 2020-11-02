// DOM
// Exercise 1


const rightArrow = document.getElementById("right")
rightArrow.onclick = function (){
  let block = document.getElementById("block")
  let right = parseInt(block.style.left) || 0
  right += 15
  block.style.left = right + "px"
}





