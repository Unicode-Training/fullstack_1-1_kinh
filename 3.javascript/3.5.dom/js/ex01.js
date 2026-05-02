//DOM = Document Model Object
// - object có sẵn của trình duyệt: Mô hình hóa cách mà tài liệu html hiển thị lên trình duyệt
// - Cho phép lập trình viên can thiệp vào object để thay đổi lại giao diện trên trình duyệt
// - Tạo ra sự tương tác

// console.log(document);
// console.dir(document.children[0].children[1].children[0]);

// document.children[0].children[1].children[0].innerHTML = "Xin chào JavaScript";
//Cấu trúc cây dom
/*
- document --> gốc của DOM
-- root element (thẻ html) --> element node
    -- element 1 --> element node
        -- attribute --> attribute node
        -- text --> text node
    -- element 2
    -- element 3
*/

//Các số trường hợp đặc biệt để truy cập vào node cụ thể trên cây DOM
//1. Truy cập vào thẻ title
// document.title = "Unicode";

//2. Truy cập vào body
// console.log(document.body);
// document.body.innerHTML = "Xin chào JavaSCript";

//3. Truy vào head
// document.head.innerHTML += `<style>body {color: red}</style>`;

//Cách cách truy cập vào Node
//1. document.getElementById('id')
// - Truy cập vào node khớp với id của thẻ html
// - Trả về node đầu tiên tìm được
// const titleEl = document.getElementById("title");
// titleEl.innerHTML = "Học javascript không khó";

//2. document.getElementsByClassName('class')
// - Truy cập vào tất cả các node khớp với class của thẻ html
// - Trả về 1 danh sách các node tìm được (Không phải là mảng)
// const subTitleList = document.getElementsByClassName("sub-title");
// for (let i = 0; i < subTitleList.length; i++) {
//   subTitleList[i].innerHTML = `Học javascript không khó`;
// }

//3. document.getElementsByTagName('tag')
// - Truy cập vào tất cả các node khớp với tên thẻ html
// - Trả về 1 danh sách các node tìm được (Không phải là mảng)
// const headingList = document.getElementsByTagName("h3");
// headingList[0].innerHTML = "Xin chào JavaScript";

//4. document.querySelector(css-selector)
// - Truy cập vào phần tử đầu tiên khớp với css selector
// - Trả về node tương ứng
// const headingOneEl = document.querySelector("#title");
// console.log(headingOneEl);

//5. document.querySelectorAll(css-selector)
// - Truy cập vào tất cả các phần tử khớp với css selector
// - Trả về 1 danh sách các node tương ứng
// const headingTwoList = document.querySelectorAll(".sub-title");
// console.log(Array.isArray(headingTwoList));
// headingTwoList.forEach((element, index) => {
//   element.innerHTML = `DOM ELEMENT: ${index + 1}`;
// });

// const boxEl = document.querySelector(".box");
// const headingList = boxEl.querySelectorAll("h2");
// console.log(headingList);

//Event
//1. Danh sách các sự kiện hay dùng
// - click: Khi người dùng click vào phần tử html
// - dblclick: Khi người dùng double click vào phần tử html (Không hoạt động trên mobile)
// - mouseover: Khi người dùng trỏ chuột vào phần tử html
// - mouseout: Khi người dùng di chuột ra ngoài phần tử html
// - mousemove: Khi người dùng di chuyển chuột trong phần tử html
// - mousedown: Khi người dùng bấm chuột xuống
// - mouseup: Khi người dùng nhả chuột
// - keydown: Khi người dùng bấm bất kỳ phím nào nào trên bàn phím
// - keyup: Khi người dùng nhả phím
// - input: Khi người dùng gõ ký tự trong các thẻ nhập liệu của form
// - change: Khi người dùng thay đổi giá trị của form
// - submit: Khi người dùng submit form (Gửi form)
// - scroll: Khi người dùng cuộn chuột (Scrolling)
// - focus: Khi user focus vào form
// - blur: Khi user bỏ focus

//2. Cách lắng nghe sự kiện
//Cú pháp:
/*
elementNode.addEventListener('ten-event', handler)
- ten-event: Danh sách các sự kiện tương ứng với thẻ html
- handler: Hàm dùng để xử lý sau khi người dùng kích hoạt sự kiện
- Lưu ý: Trong handler sẽ có mặc định 1 tham số gọi là event object (Đối tượng chứa toàn bộ thông tin của event)
*/
// const btnEl = document.querySelector("button");
// btnEl.addEventListener("click", () => {
//   console.log("User vừa click");
//   //   document.body.style.background = "yellow";
// });

// btnEl.addEventListener("mousedown", (e) => {
//   if (e.which === 3) {
//     console.log("User bấm chuột xuống");
//   }
// });
// btnEl.addEventListener("contextmenu", (e) => {
//   e.preventDefault(); //Ngăn hành động mặc định của trình duyệt
//   console.log("Hello");
// });

// btnEl.addEventListener("mouseover", () => {
//   console.log("User vừa trỏ chuột vào nút");
// });

// btnEl.addEventListener("mouseout", () => {
//   console.log("User vừa rời chuột vào nút");
// });

// btnEl.addEventListener("mousemove", () => {
//   console.log("User vừa di chuột trong nút");
// });

//Bàn phím
// const h1El = document.querySelector("h1");
// h1El.addEventListener("keydown", (e) => {
//   console.log("Bạn vừa bấm phím", e.key);
//   if (e.key === "Enter") {
//     h1El.style.color = "red";
//   }

//   if (e.key === "Escape") {
//     h1El.style.color = null;
//   }
// });
// document.addEventListener("keydown", (e) => {
//   console.log("Bạn vừa bấm phím", e.key);
// });

// const inputEl = document.querySelector("input");
// inputEl.addEventListener("input", () => {
//   console.log("Hello", inputEl.value);
// });
// inputEl.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     console.log(inputEl.value);
//   }
// });
// inputEl.addEventListener("change", () => {
//   console.log("user vừa thay đổi");
// });
// inputEl.addEventListener("focus", () => {
//   console.log("user vừa focus vào input");
// });
// inputEl.addEventListener("blur", () => {
//   console.log("user vừa bỏ focus khỏi input");
// });

// const formEl = document.querySelector("form");
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault(); //Ngăn hành vi mặc định của trình duyệt với thẻ form
//   const emailEl = formEl.querySelector(".email");
//   const passwordEl = formEl.querySelector(".password");
//   const email = emailEl.value;
//   const password = passwordEl.value;
//   console.log(email, password);
//   passwordEl.value = "";

//   //   const formData = new FormData(formEl);
//   //   const email = formData.get("email");
//   //   const password = formData.get("password");
//   //   console.log(email, password);
//   //   formEl.reset();
// });

// window.addEventListener("scroll", () => {
//   console.log("user vừa kéo thanh cuộn", window.scrollY);
// });

//Loại bỏ event listener ra khỏi element
//elementNode.removeElementListener('ten-event', listener)
//Lưu ý: Để loại bỏ được event khi addEventListener bắt buộc phải tách hàm handler

// const btn1El = document.querySelector(".btn-1");
// const btn2El = document.querySelector(".btn-2");
// const handler = () => {
//   console.log("click 1");
// };
// const handler2 = handler; //cùng địa chỉ trong bộ nhớ (Kiến thức object)
// console.log(handler2 === handler);

// btn1El.addEventListener("click", handler);
// btn2El.addEventListener("click", () => {
//   btn1El.removeEventListener("click", handler2);
// });

//Hàm liên quan đến các node
// 1. innerHTML --> Lấy nội dung của thẻ html (bao gồm tất cả html bên trong)
// 2. innerText --> Lấy nội dung của thẻ html (Loại bỏ các thẻ html bên trong)
// 3. outerHTML --> Lấy chính phần tử đang xử lý và toàn bộ dung bên trong
// const boxEl = document.querySelector(".box");
// console.log(boxEl.innerText);

// boxEl.innerText = `<h1>Hello anh em</h1>`;
// console.log(boxEl.outerHTML);
// boxEl.outerHTML = `<h1>Hello anh em</h1>`;

// const boxEl = document.querySelector(".box");
// const btnEl = document.querySelector("button");
// const initContent = boxEl.innerHTML;
// btnEl.addEventListener("click", () => {
//   if (boxEl.innerHTML) {
//     boxEl.innerHTML = "";
//     btnEl.innerHTML = "Hiện";
//   } else {
//     boxEl.innerHTML = initContent;
//     btnEl.innerHTML = "Ẩn";
//   }
// });

//Làm việc với thuộc tính
// - Mặc định trình duyệt build sẵn các hàm liên quan đến thuộc của thẻ html
// - Điều kiện: Thuộc tính đó phải hợp trong thẻ html
// const linkEl = document.querySelector("a");
// console.log(linkEl.href);
// console.log(linkEl.target);
// console.log(linkEl.title);
// console.log(linkEl.width);

// linkEl.href = "https://google.com";

// console.log(linkEl.getAttribute("data-width"));
// linkEl.setAttribute("data-width", 300);
// const color = linkEl.getAttribute("data-color");
// linkEl.style.color = color;

//Làm việc với class
// const boxEl = document.querySelector(".box");
// console.log(boxEl.className);
// console.log(boxEl.classList);

//add: Thêm class mới
// boxEl.classList.add("content-3", "content-4");

//remove: Xóa class
// boxEl.classList.remove("active");

//replace: Thay thế class
// boxEl.classList.replace("content-1", "ahihi");

//contains: Kiểm tra sự tồn tại của class
// console.log(boxEl.classList.contains("ahihi"));

//toggle: Nếu class không tồn tại --> add, nếu đã tồn tại sẽ remove
// boxEl.classList.toggle("active");
// boxEl.classList.toggle("active");

const modalEl = document.querySelector(".modal");
const btnEl = document.querySelector("button");
const closeBtnEl = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");
btnEl.addEventListener("click", () => {
  modalEl.classList.add("show");
});
closeBtnEl.addEventListener("click", () => {
  modalEl.classList.remove("show");
});
overlay.addEventListener("click", () => {
  modalEl.classList.remove("show");
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    modalEl.classList.remove("show");
  }
});
