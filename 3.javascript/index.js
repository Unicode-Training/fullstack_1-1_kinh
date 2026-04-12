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
//1. Toán tử số học
// +, -, *, /
// %: Chia lấy dư
// **: Lũy thừa
// ++: Tăng lên 1
// --: Giảm đi 1
// let a = "10a";
// let b = 20;
//Ép kiểu sang số
// a = Number(a); //Ép kiểu thất bại --> NaN (Not A Number)
// b = Number(b);
// b = +b;
// let c = a + b; //NaN + 20 = NaN
// console.log(c);

// let a = 10;
// a++;
// a--;
// a = a + 1;
// let b = ++a;
// console.log(a);
// console.log(b);

//2. Toán tử gán (=)
// let a = 10;
// a = a + 5;
// a += 5;
// a *= 5;
// a /= 2;
// a -= 5;
// a %= 2;
// a **= 5;
// console.log(a);

//3. Toán tử so sánh
// Luôn trả về boolean (true, false)
// >, <, >=, <= --> Tuyệt đối không so sánh với null, undefined
// ==, === (Mặc định dùng cái này)
// !=, !== (Mặc định dùng cái này)

//4. Truthy, Falsy
// --> Cách mà JavaScript chuyển về Boolean để thực hiện so sánh
// - Những giá trị nào khi chuyển về Boolean mang giá trị false --> falsy
// --> Các giá trị falsy: 0, "", undefined, null, NaN, false
// - Những giá trị nào khi chuyển về Boolean mang giá trị true --> truthy
//Ví dụ:
// let a = 0;
// if (a) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

//5. Toán tử luận lý (Kết hợp)
//&& (VÀ), || (Hoặc), ! (Phủ định)

//5.1. Toán tử &&
//Giả sử: bieuthuc1 && bieuthuc2 && bieuthuc3
//Cách hoạt động:
// - Đi tìm falsy ở các biểu thức
// - Nếu tìm thấy falsy ở biểu thức nào --> Dừng luôn và trả về giá trị biểu thức đó
// - Nếu không tìm thấy falsy nào --> Trả về giá trị biểu thức cuối cùng
// let a = 10;
// let b = 1;
// let c = "An";
// let result = a && b < 0 && c;
// console.log(result);
// let user = null;
// let a = 1;
// let b = 2;
// let result = user && a + b;
// console.log(result);

//5.2. Toán tử ||
//Giả sử: bieuthuc1 || bieuthuc2 || bieuthuc3
//Cách hoạt động:
// - Đi tìm true ở các biểu thức
// - Nếu tìm thấy truthy ở biểu thức nào --> Dừng luôn và trả về giá trị biểu thức đó
// - Nếu không tìm thấy truthy nào --> Trả về giá trị biểu thức cuối cùng
// let a = 0;
// let b = null;
// let c = undefined;
// let result = a || b || c;
// console.log(result);

//5.3. Toán tử !
// - Ép kiểu về boolean
// - Trả về giá trị ngược lại
// let a = 0;
// let result = !a;
// console.log(result);

//6. Toán tử nullish (??)
//Giả sử: bieuthuc1 ?? bieuthuc2
//Cách hoạt động:
// - Kiểm tra bieuthuc1, nếu bieuthuc1 = null hoặc undefined --> Trả về giá trị bieuthuc2
// - Nếu không phải --> Trả về giá trị bieuthuc1
// let a = 10;
// let b = "An";
// let result = a > 0 ?? b;
// console.log(result);

//7. Toán tử 3 ngôi (?:)
//Giả sử: bieuthuc1 ? bieuthuc2 : bieuthuc3
//Cách hoạt động:
// - Kiểm tra bieuthuc1, nếu bieuthuc1 trả về truthy --> lấy giá trị bieuthuc2. Ngược lại, lấy giá trị bieuthuc3
// let a = 0;
// let b = "Đúng";
// let c = "Sai";
// let result = a ? b : c;
// console.log(result);

//Câu lệnh rẽ nhánh
/*
if (dieukien) {
    Code 1
} else {
    Code 2    
}

if (dieukien1) {
    Code 1
} else if (dieukien2) {
    Code 2
} else if (dieukien3) {
    Code 3
} else {
    Code 4    
}
*/

//Ví dụ: Tính lương thực nhận của 1 nhân viên sau khi trừ thuế
// Nếu lương <= 5tr --> Thuế 0%
// Nếu lương trên 5tr và nhỏ hơn hoặc bằng 15tr --> 3%
// Nếu lương trên 15tr --> 5%

// let salary = 30000000;
// let tax;
// let income;
// if (salary > 0) {
//   if (salary <= 5000000) {
//     tax = 0;
//   } else if (salary <= 15000000) {
//     tax = 3;
//   } else {
//     tax = 5;
//   }
//   income = salary - (salary * tax) / 100;

//   console.log(income);
// }

//Bài tập:
/*
Viết chương trình tính tiền taxi từ số km biết trước
- Số km ≤ 1 giá 15000đ
- 1 < số km ≤ 5 giá 13500đ
- Số km > 5km giá 11000đ
- Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

//Ví dụ: 6km
Tổng tiền = 1*15.000 + 4 * 13500 + 1 * 11000

Ví dụ: 121km
(1*15000 + 4*13500 + 116*11000) - 10%
*/

// const THRESHOLD_01 = 1;
// const THRESHOLD_02 = 5;
// const THRESHOLD_03 = 120;
// const PRICE_01 = 15000;
// const PRICE_02 = 13500;
// const PRICE_03 = 11000;
// const DISCOUNT = 10;
// let km = 121;
// let total;
// if (km <= THRESHOLD_01) {
//   total = km * PRICE_01;
// } else if (km <= THRESHOLD_02) {
//   total = THRESHOLD_01 * PRICE_01 + (km - THRESHOLD_01) * PRICE_02;
// } else {
//   total =
//     THRESHOLD_01 * PRICE_01 +
//     (THRESHOLD_02 - THRESHOLD_01) * PRICE_02 +
//     (km - THRESHOLD_02) * PRICE_03;
//   if (km > 120) {
//     total -= (total * DISCOUNT) / 100;
//   }
// }
// console.log(total);

//Vòng lặp
// - Cú pháp của ngôn ngữ lập trình
// - Cho phép chương trình lặp đi lặp lại theo số lần nhất định
//1. for: Biết trước số lần
//2. while: Không cần biết trước số lần, chạy sau khi kiểm tra
//3. do while: Không cần biết trước số lần, nhưng sẽ trước rồi kiểm tra

//Cú pháp for
/*
for (giatrikhoitao; dieukienchay; buocnhay) {
    Code
}
*/
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i > 1; i--) {
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }

//Ví dụ: Tính tổng các số chẵn từ 1 -> n
// let n = 10;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

//Cú pháp while
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//Cú pháp do while
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i > 100);

//Giả sử có 1 số nguyên, thực hiện chia đôi số đó. Kết quả mong muốn: In ra số lần thực hiện phép chia
//Số: 500
//500 / 2 = 250
//250 / 2 = 125

// let number = 500;
// let count = 0;
// while (number % 2 === 0) {
//   count++;
//   number /= 2;
// }
// console.log(count);

//Ví dụ: Đảo ngược 1 số nguyên
// let number = 52891; //Kết quả: 19825
// let numberReversed = 0;
// while (number !== 0) {
//   let temp = number % 10;
//   number = (number - temp) / 10;
//   numberReversed = numberReversed * 10 + temp;
// }
// console.log(numberReversed);

//Function
// - Cú pháp trong lập trình
// - Cho phép nhóm các đoạn chương trình con để tái sử dụng khi cần thiết

//parameters
// function getMessage(msg, type = "success") {
//   //   console.log("Hello anh e");
//   //   console.log(msg, type);
//   return `Hello anh em: ${msg}, ${type}`;
// }

// //arguments
// console.log(getMessage("An", null)); //Lời gọi hàm chủ động

//Rest parameters
// function sum(a, b, ...args) {
//   console.log(a, b);
//   console.log(args);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Spread Operator
// function sum(a, b) {
//   console.log(a);
//   console.log(b);
// }
// const values = [10, 20];
// sum(...values);

// function doSomething() {
//   console.log("Hàm 1");
// }
// function doSomething() {
//   console.log("Hàm 2");
// }
// doSomething();

//Expression Function
// const doSomething = function () {
//   console.log("Hàm 1");
// };
// doSomething();

//Arrow function
// const doSomething = (value) => {
//   console.log("Hàm 1");
//   console.log(value);
// };
// doSomething("An");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// {...} --> block code
// const getUser = () => ({
//   name: "An",
// });
// console.log(getUser());

//Callback
// - Truyền 1 hàm vào 1 hàm khác thông qua tham số
// - Có 2 cách để truyền tham số vào callback
// + Bọc hàm
// + Thêm tham số cho hàm cha (Rest Parameters)

// const display = (a, cb, ...args) => {
//   console.log(a);
//   if (typeof cb === "function") {
//     cb(...args);
//   }
// };
// const handler = (value, type) => {
//   console.log("Học JavaScript không khó");
//   console.log(value);
//   console.log(type);
// };

// display(10, handler, "An", "success");

//Hàm setTimeout(callback, timeout, ...args): Delay 1 cái hàm
// setTimeout(
//   function (value, type) {
//     console.log("Học lập trình không khó");
//     console.log(value);
//   },
//   2000,
//   "An",
//   "success",
// );

//Hàm setInterval(callback, timeout, ...args): Chạy lặp lại 1 hàm sau timeout thời gian
// let count = 0;
// setInterval(
//   function (value) {
//     count++;
//     console.log("Học lập trình không khó", value, count);
//   },
//   1000,
//   "An",
// );

//Closure
// - Hàm có thể truy cập các biến bên ngoài phạm vi của nó (Hàm được định nghĩa trong 1 hàm khác)
// - Hàm closure giữ được các biến của hàm cha không bị hủy
// let a = 10; //Global variable

// const funcA = () => {
//   let b = 20; //Local Variable
//   console.log("Func A");
//   console.log(a);
//   const funcB = () => {
//     console.log("Func B");
//     console.log(a);
//     console.log(b);
//   };
//   funcB();
// };
// funcA();

// const sum = (a, b) => {
//   let total = a + b;
//   return total;
// };
// console.log(sum(10, 20));

// const counter = () => {
//   let count = 0;

//   return () => {
//     //Hàm closure
//     count++;
//     return count;
//   };
// };

// let increment = counter();
// console.log(increment());
// console.log(increment());
// increment = null; //count sẽ bị hủy

// let count = 0;
// const increment = () => {
//   count++;
//   return count;
// };
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
