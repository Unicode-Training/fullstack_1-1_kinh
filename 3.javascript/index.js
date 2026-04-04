// console.log("Hello anh em"); //Cú pháp của Engine --> Chuyển về mã nhị phân --> Thực thi luôn

// setTimeout(function () {
//   console.log("Xin chào setTimeout");
// }, 1000); //Hàm của trình duyệt (Runtime) --> gửi hàm sang trình duyệt để chạy (Nhờ) --> Đẩy callback vào hàng đợi (Callback Queue)

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("Clicked");
// });

//Data type: 8 kiểu dữ liệu
//1. number
//2. string
//3. boolean: true, false
//4. bigInt: Kiểu số nguyên có giá trị lớn (Dùng khi kiểu number không chứa được)
//5. null
//6. undefined
//7. Symbol
// --> Kiểu dữ liệu nguyên thủy (Làm việc theo value)
//8. object
// - Literal Object: Object nguyên bản
// - Array
// - Function
// --> Kiểu dữ liệu tham chiếu (Làm việc theo địa chỉ trong bộ nhớ)

//Cách kiểm tra kiểu liệu của 1 giá trị: Dùng từ khóa typeof phía trước giá trị

// console.log(typeof 10);
// console.log(typeof "An");
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof 12n);
// console.log(typeof BigInt(12));
// console.log(typeof null);
// console.log(typeof Symbol("id"));
// console.log(typeof {});
// console.log(typeof []);

//Biến
// - Đại diện cho 1 giá trị nào đó
// - Lưu ở RAM (Trong phiên hoạt động của trình duyệt)
//Cú pháp: let tenbien; let tenbien = giatri;
//Quy tắc đặt tên: Đặt theo quy tắc camelCase
//Trong cùng 1 phạm vi không được khai báo 1 biến từ 2 lần trở lên
//Scope
// let a = 10;
// if (a >= 10) {
//   let b = 20;
//   a = 30;
// }
// console.log(a);

//Hằng số
// const username;

//Lời khuyên: Mặc định sẽ dùng const, khi nào cần gán lại thì đổi sang let

//Operator (Toán tử)
