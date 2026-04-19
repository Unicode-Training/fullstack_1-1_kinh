//Mảng
// const myArr = ["Item 1", "Item 2", "Item 3"];

//Thêm phần tử
// myArr[myArr.length] = "An";
// myArr[myArr.length] = "Hoàng";
// myArr[myArr.length] = "Tùng";

//Cập nhật phần tử
// myArr[3] = "Hoàng An";

//Đọc giá trị phần tử
// console.log(myArr[0]);

//Duyệt qua các phần tử của mảng
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// for (const index in myArr) {
//   console.log(myArr[index]);
// }

// for (const value of myArr) {
//   console.log(value);
// }
// console.log(myArr);

//Xóa phần tử
// - Tạo mảng mới
// - Duyệt các phần tử mảng cũ, loại trừ phần tử cần xóa rồi thêm các phần tử còn lại vào mảng mới
// const newArr = [];
// const indexDel = 1;
// for (const index in myArr) {
//   if (+index === indexDel) {
//     continue;
//   }
//   newArr[newArr.length] = myArr[index];
// }
// console.log(newArr);

//Array method
console.log(Array.prototype);

//1. length: Lấy số lượng phần tử của mảng

// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.length = 2;
// console.log(myArr.length);
// console.log(myArr);

//2. at(index): Truy cập phần tử theo index
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.at(1));

//3. concat(arr1, arr2,...): Nối các mảng thành 1
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const numbers = [1, 2, 3];
// const mixed = ["a", "b", "c", true, false];
// const newArr = myArr.concat(numbers, mixed);
// console.log(newArr);

//4. fill(value): Cập nhật lại các phần tử thành 1 giá trị
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.fill(0);
// console.log(myArr);

//5. indexOf(value): Tìm phần tử trong mảng và trả về index đầu tiên

//6. lastIndexOf(value): Tìm và trả về index cuối

//7. includes(value): Tìm kiếm phần tử và trả về true/false

//8. slice(start,end): Cắt mảng từ start đến end-1
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// console.log(myArr.slice(1));

//9. join(): Nối các phần tử mảng thành 1 chuỗi
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// console.log(myArr.join(""));

//10. push(...value): Thêm phần tử vào cuối mảng

//11. unshift(...value): Thêm phần tử vào đầu mảng

//12. pop(): Xóa phần tử cuối mảng

//13. shift(): Xóa phần tử đầu mảng

//14. reverse(): Đảo ngược mảng

//15. flat(): Làm phẳng mảng thành 1 chiều

//16. sort(): Sắp xếp mảng theo thứ tự tăng dần (Sắp xếp chuỗi)

// const names = ["Tung", "Dung", "Vuong", "Khang"];
// names.sort();
// console.log(names);

// const numbers = [2, 5, 1, 8, 10, 9, 80];
// numbers.sort((a, b) => {
//   //a: số sau
//   //b: số trước
//   //   if (b > a) {
//   //     return -10000000; //Đổi chỗ
//   //   }
//   return b - a;
// });
// console.log(numbers);

//Tăng dần: a > b
//Cần xử lý: nếu a < b --> đổi chỗ (return về số âm)

//Ví dụ: Sắp xếp mảng sau theo thứ tự tăng dần theo tên
// const users = [
//   "Nguyen Van Tuan",
//   "Pham Quang Dung",
//   "Nguyen Van Hung",
//   "Ta Hoang An",
// ];

// const getFirstName = (fullname) => {
//   return fullname.split(" ").at(-1);
// };

// users.sort((a, b) => {
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });
// console.log(users);

//Ví dụ: Tìm giao giữa 2 mảng
// const arr1 = [5, 2, 9, 1, 8];
// const arr2 = [2, 8, 7, 10];
// //Output: [2,8]
// const newArr = [];
// for (const value of arr1) {
//   if (arr2.includes(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);

//Ví dụ: Lọc trùng mảng

// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// const newUsers = [];
// for (const value of users) {
//   if (newUsers.includes(value)) {
//     continue;
//   }
//   newUsers.push(value);
// }
// console.log(newUsers);

//Ví dụ: Chunk array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 2;
//Output: [[1,2], [3,4], [5,6], [7,8], [9]]
const result = [];
for (const index in numbers) {
  if (index % size === 0) {
    const chunk = numbers.slice(index, +index + size);
    result.push(chunk);
  }
}
console.log(result);
