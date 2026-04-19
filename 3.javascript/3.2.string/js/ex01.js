//Chuỗi: Tập hợp các ký tự
//Cách hoạt động: Bọc 1 đối tượng (object) tạm thời để lưu các hàm xử lý chuỗi

// let fullname = `Hoàng An`; //backtick (`)
// let welcome = `Xin chào tên là ${fullname}. Tôi dạy lập trình`;
// let welcome = "Xin chào tên là " + fullname + " .Tôi dạy lập trình";
// console.log(welcome);

// let fullname = "Tạ Hoàng An";
// for (let i = 0; i < fullname.length; i++) {
//   console.log(fullname[i]);
// }

//Các hàm xử lý
console.log(String.prototype);

//1. length: Lấy độ dài của chuỗi

//2. charAt(index): Lấy ký tự của chuỗi theo index (Tương tự tenbien[index])
// let str = "Học JavaScript không khó";
// console.log(str.charAt(1));

//3. charCodeAt(index): Lấy ký tự của chuỗi theo index sau đó trả về mã ASCII
// let str = "Học JavaScript không khó";
// console.log(str.charCodeAt(0));

//4. at(index)
// let str = "Học JavaScript không khó";
// console.log(str.at(-3));

//5. indexOf(subString): Tìm chuỗi subString trong chuỗi cha, nếu tìm được trả về index đầu tiên, không tìm được trả về -1

//6. lastIndexOf(subString): Giống indexOf nhưng trả về index cuối

//7. includes(subString): Tìm kiếm subString nhưng trả về true/false
// let str = "Học JavaScript không khó. Học JavaScript không khó";
// console.log(str.includes("JavaScript"));

//8. slice(start,end): Cắt chuỗi từ start đến end-1
// let str = "Học JavaScript không khó";
// console.log(str.slice(-5));

//9. repeat(n): Lặp chuỗi n lần
// let str = "*";
// console.log(str.repeat(10));

//10. replace(chuoi-can-tim, chuoi-thay-the): Tìm kiếm chuỗi đầu tiên và thực hiện thay thế

//11. replaceAll(chuoi-can-tim, chuoi-thay-the): Tìm kiếm chuỗi và thực hiện thay thế tất cả chuỗi tìm được
// let str = "Học JavaScript không khó. Học JavaScript không khó";
// console.log(str.replaceAll("JavaScript", "PHP"));

//12. toUpperCase(): Chuyển chuỗi thành chữ hoa

//13. toLowerCase(): Chuyển chuỗi thành chữ thường

//14. trim(): Loại bỏ khoảng trắng đầu và cuối chuỗi

//15. trimStart(): Loại bỏ khoảng trắng đầu chuỗi

//16. trimEnd(): Loại bỏ khoảng trắng cuối chuỗi

//17. split(): Tách chuỗi thành mảng

//18. startsWith(subString): Kiểm tra chuỗi subString có nằm ở đầu chuỗi cha không?

//19. endsWith(subString): Kiểm tra chuỗi subString có nằm ở cuối chuỗi cha không?

// let str = "a Hello anh em v";
// console.log(str.endsWith("em"));

//20. padStart(): Đệm chuỗi con ở phía trước 1 chuỗi, thỏa mãn điều kiện độ dài

//21. padEnd(): Đệm chuỗi con ở phía cuối 1 chuỗi, thỏa mãn điều kiện độ dài

// let number = "12";
// number = number.padStart(2, 0);

// console.log(number);

//Ví dụ: Có 1 email bất kỳ, cần lấy username của email đó
//username@domain
// let email = "hoangan.web@gmail.com";
//B1: Lấy vị trí @ --> indexOf
//B2: Cắt chuỗi từ đầu đến vị trí @ --> slice

// const pos = email.indexOf("@");
// const username = email.slice(0, pos);
// console.log(username);

//Bài tập:
let fullname = "tạ hoàng an";

//YC1: Viết hoa ký tự đầu của chuỗi trên
//Output: Tạ hoàng an
