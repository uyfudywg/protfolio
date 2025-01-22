let nums = document.querySelectorAll(".num");
let container = document.querySelector("#data");

let test = false; // when the function doesn't start

window.onscroll = () => {
 if (window.screenY = container.offsetTop) {
  if (!test) {
 nums.forEach((e) => {
  let start = 0;
  let end = e.dataset.num;
   let count = setInterval(() => {
    start++;
    e.textContent = start;
    if (start == end) {
    clearInterval(count);
    }
    }, 200 / end)
   })
     }
     test = true;
 }
 }