//Object: thể hiện thông tin chi tiết của 1 đối tượng
//Cấu tạo dạng key - value
/*
{
    name: 'Hoàng An',
    email: 'hoangan.web@gmail.com'
}
*/

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 35,
//   address: "Hà Nội",
// };

// console.log(user.email);
// console.log(user["name"]);

// let key = "address";
// console.log(user[key]);

// delete user.name;

// user.name = "Hoàng An Unicode";

// console.log(user);

// for (const key in user) {
//   console.log(key, user[key]);
// }

// Object.keys(user).forEach((key) => {
//   console.log(user[key]);
// });

// const obj1 = {
//   name: "An",
//   email: "an@gmail.com",
// };
// const obj2 = {
//   age: 35,
//   address: "HN",
// };
//Tạo obj3 bằng cách gộp 2 object trên lại (Không dùng các hàm có sẵn)
/*
{
  name: "An",
  email: "an@gmail.com",
  age: 35,
  address: "HN",
}
*/
// const obj3 = {};
// for (const key in obj1) {
//   obj3[key] = obj1[key];
// }
// for (const key in obj2) {
//   obj3[key] = obj2[key];
// }
// console.log(obj3);

//Object method

//1. Object.keys(obj): Trả về 1 mảng chứa danh sách các keys

//2. Object.values(obj): Trả về 1 mảng chứa danh sách các values

//3. Object.entries(obj): Trả về 1 mảng chứa cả key và value

//4. Object.fromEntries(arr): Chuyển mảng 2 chiều thành obj

// const myArr = [
//   ["name", "An", "a"],
//   ["email", "an@gmail.com", "b"],
// ];
// console.log(Object.fromEntries(myArr));

console.dir(Object);

//5. Object.assign(target, ...source): Gộp các object source vào target

// const obj1 = {
//   name: "An",
//   email: "an@gmail.com",
// };
// const obj2 = {
//   age: 35,
// };
// const obj3 = {
//   address: "HN",
// };
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);
// console.log(obj4);

//Tình huống: add 1 key vào tất cả object --> Tìm đến object quản lý tất cả object
Object.prototype.message = "Học js không khó";
const obj1 = {
  name: "SP 1",
  price: 1200,
};
const obj2 = {
  address: "HN",
  teacher: "An",
};
console.log(obj1, obj1.message);
console.log(obj2, obj2.message);

const fullname = "Hoàng An";
console.log(fullname.message);

const check = false;
console.log(check.message);

//false --> Boolean --> Object
//"Hoàng An" --> String --> Object
console.dir(Boolean);

function doSomething() {}
console.log(doSomething.message);

//Function --> Object
