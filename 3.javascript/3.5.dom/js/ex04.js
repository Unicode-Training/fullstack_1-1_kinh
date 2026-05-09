//Navigation: Di chuyển node tới vị khác dựa vào node đã có
// - Cha: parentElement
// - Con: children --> Trả về 1 danh sách
// - Bên trái:
// - Bên phải: nextElementSibling

// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // console.log(btn.parentElement.parentElement);
//     btn.parentElement.parentElement.remove();
//   });
// });

// const ul = document.querySelector("ul");
// console.log(ul.children[0].children[0]);

// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");
// nextBtn.addEventListener("click", () => {
//   let activeEl = document.querySelector(".products .active");
//   const nextEl = activeEl.nextElementSibling;
//   if (nextEl) {
//     nextEl.classList.add("active");
//     activeEl.classList.remove("active");
//   } else {
//     activeEl.classList.remove("active");
//     activeEl = document.querySelector(".products h2:first-child");
//     activeEl.classList.add("active");
//   }
// });

// prevBtn.addEventListener("click", () => {
//   let activeEl = document.querySelector(".products .active");
//   const prevEl = activeEl.previousElementSibling;
//   if (prevEl) {
//     prevEl.classList.add("active");
//     activeEl.classList.remove("active");
//   } else {
//     activeEl.classList.remove("active");
//     activeEl = document.querySelector(".products h2:last-child");
//     activeEl.classList.add("active");
//   }
// });

const aList = document.querySelectorAll(".menu a");
aList.forEach((link) => {
  const subMenu = link.nextElementSibling;
  if (subMenu) {
    link.parentElement.classList.add("has-children");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      link.parentElement.classList.toggle("open");
    });
  }
});
