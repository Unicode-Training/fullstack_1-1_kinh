//DOM CSS: Dùng inline css để can thiệp vào thẻ html
// const h1 = document.querySelector("h1");
// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");

// btn1.addEventListener("click", () => {
//   //   console.log(h1.style);
//   //   h1.style.backgroundColor = `yellow`;
//   //   h1.style.color = "red";
//   //   h1.style.frontStyle = "italic";
//   const css = {
//     color: "red",
//     backgroundColor: "yellow",
//     fontStyle: "italic",
//   };
//   Object.assign(h1.style, css);
// });

// btn2.addEventListener("click", () => {
//   h1.style.color = null;
// });

//Event object: Mô tả thông tin của sự kiện
// - altKey: Nếu trong quá trình tương tác sự kiện, user giữ phím Alt
// - shiftKey: Nếu trong quá trình tương tác sự kiện, user giữ phím Shift
// - ctrlKey: Nếu trong quá trình tương tác sự kiện, user giữ phím Ctrl
// - offsetX: Khoảng cách từ vị trí tác động tới cạnh trái của phần tử đang lắng nghe sự kiện
// - offsetY: Khoảng cách từ vị trí tác động tới cạnh trên của phần tử đang lắng nghe sự kiện
// - clientX: Khoảng cách từ vị trí tác động tới cạnh trái của viewport
// - clientY: Khoảng cách từ vị trí tác động tới cạnh trên của viewport
// - target: Element tại vị trí tác động sự kiện
// - preventDefault(): Ngăn hành vi mặc định của trình duyệt tương ứng với thẻ html
// - stopPropagation(): Ngăn hành vi nổi bọt sự kiện của html con ra bên ngoài
// const btn = document.querySelector("button");
// btn.addEventListener("mousedown", (e) => {
//   console.log(e.target);
//   e.target.style.color = "red";
// });

// const box = document.querySelector(".box");
// const btn = document.querySelector("button");
// box.addEventListener("click", () => {
//   console.log("box clicked");
// });
// btn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("btn clicked");
// });
