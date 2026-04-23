//1. for
//2. for in
//3. for of

//loop method
console.log(Array.prototype);

//forEach(callback): Lặp qua từng phần tử của mảng sau đó gửi value và index vào hàm callback
// const myArr = ["Item 1", "Item 2", "Item 3"];
// myArr.forEach((value, index) => {
//   console.log(value, index);
// });

//map(callback):
// - Lặp qua từng phần tử của mảng sau đó gửi value và index vào hàm callback
// - Trả về 1 mảng mới chính là giá trị trả về của callback
// const numbers = [1, 2, 3, 4];
// const newArr = numbers.map((value, index) => {
//   console.log(value, index);
//   return value * 2;
// });
// console.log(newArr);

//filter(callback)
// - Lặp qua từng phần tử của mảng sau đó gửi value và index vào hàm callback
// - Trả về mảng mới chứa phần tử của mảng ban đầu với điều kiện callback return về truthy
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.filter((value, index) => {
//   console.log(value, index);
//   //   return value % 2 === 0;
//   return index;
// });
// console.log(result);

//find(callback): Giống filter nhưng trả về phần tử đầu tiên

//findLast(callback): Giống filter nhưng trả về phần tử cuối cùng
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.findLast((value, index) => {
//   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(result);

//findIndex(callback): Giống find nhưng trả về index

//findLastIndex(callback): Giống findLast nhưng trả về index

//some(callback):
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về true / false
// - Trả về true nếu có ít nhất 1 lần callback return về truthy

//every(callback):
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về true / false
// - Trả về false nếu có ít nhất 1 lần callback return về falsy

// const numbers = [2, 8, 1, 4, 10];
// const result = numbers.every((value, index) => {
//   return value % 2 === 0;
// });
// console.log(result);

//Array.isArray(bienmang): Kiểm tra 1 giá trị có phải là mảng hay không
// const a = [];
// console.log(Array.isArray(a));

//reduce(callback, initValue)
// - callback(accumulator, currentValue, index)
// - initValue: giá trị bất kỳ

// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// const result = numbers.reduce((acc, value, index) => {
//   console.log(`acc: ${acc}, value: ${value}, index: ${index}`);
//   return acc + value;
// }, 0);
// console.log(result);

//So sánh mảng
// - 2 mảng không bao giờ bằng nhau khi so sánh trực tiếp
// - Mỗi mảng khi khởi tạo sẽ tạo ra địa chỉ riêng biệt
// - Giải pháp: Duyệt qua từng phần tử -> So sánh từng phần tử -> Kết luận
// const arr1 = ["Item 1", "Item 2", 10, false, ["An", 20, [30]]];
// const arr2 = ["Item 1", "Item 2", 10, false, ["An", 20, [30]]];
// const compareArray = (arr1, arr2) => {
//   //Kiểm tra số lượng phần tử của từng mảng
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const index in arr1) {
//     if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
//       return compareArray(arr1[index], arr2[index]);
//     }
//     if (arr1[index] !== arr2[index]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(compareArray(arr1, arr2));

//"Item 1" -> "Item 1" --> true
//"Item 2" -> "Item 2" --> true
//10 -> 10 --> true
//false -> false --> true
//["An"] -> ["An"] --> false

// const compareArray = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const index in arr1) {
//     if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
//       if (!compareArray(arr1[index], arr2[index])) {
//         return false;
//       }
//     } else if (arr1[index] !== arr2[index]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(compareArray(arr1, arr2));

//Sao chép mảng
// const arr1 = [["An"], "an@gmail.com", () => {}];
// const arr2 = arr1;
//arr1 và arr2 ==> cùng địa chỉ

//1. Shallow copy
// - Dùng spread operator (...)
// - Dùng các phương thức xử lý mảng mà trả về mảng mới: map, filter, slice,...
// const arr2 = [...arr1];
// const arr2 = arr1.slice(0);
//2. Deep copy
// - Chuyển array thành json
// - Chuyển ngược lại
// Nhược điểm: Nếu trong array có function -> Không chuyển được
// const json = JSON.stringify(arr1);
// const arr2 = JSON.parse(json);
// arr2[0][0] = "An Unicode";
// arr2[1] = "hoangan.web@gmail.com";

// console.log(arr1);
// console.log(arr2);

//1 mảng con đóng vai trò là thông tin của 1 user
// const users = [
//   ["User 1", "user1@gmail.com", 33],
//   ["User 2", "user2@gmail.com", 35],
//   ["User 3", "user3@gmail.com", 20],
// ];
// console.log(users);

//Yêu cầu: Trả về thông tin user có tuổi lớn nhất
//Output: ["User 2", "user2@gmail.com", 35]

// const users = [
//   ["user1", "user1@gmail.com", 20],
//   ["user2", "user2@gmail.com", 30],
//   ["user3", "user3@gmail.com", 50],
// ];

// const userLatest = users.reduce((acc, cur) => {
//   if (acc[2] < cur[2]) {
//     return cur;
//   }
//   return acc;
// });
// console.log(userLatest);

//Lời khuyên:
//1. Nếu đã có sẵn -> Không viết lại
//2. Dùng đúng ngữ cảnh
