//Constructor

// Object --> Constructor --> Instance
// const a = {
//   x: 10,
// };
// console.log(a);

//Định nghĩa constructor
// const User = function (name, email) {
//   //Từ khóa this --> đại diện cho object hiện tại
//   this.name = name;
//   this.email = email;

//   this.getName = function () {
//     return this.name;
//   };
//   this.getEmail = function () {
//     return this.email;
//   };
// };

// //Thêm prototy
// User.prototype.message = "Hello anh em";

// //Khởi tạo constructor
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// // console.log(user.getName());

// const customer = new User("A", "a@gmail.com");
// console.log(customer);

// console.log(user.message);
// console.log(customer.message);

// const a = {
//   x: 10,
// };
// console.log(a.message);

// class User {
//   //Hàm khởi tạo
//   constructor(name, email) {
//     console.log(`Constructor của User`);

//     this.name = name;
//     this.email = email;
//   }
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
// }

// class Auth extends User {
//   constructor(name, email) {
//     console.log(`Constructor của Auth`);
//     super(name, email);
//   }
//   getStatus() {
//     return true;
//   }
//   getInfo() {
//     return [this.name, this.email];
//   }
// }
// //A -> B -> C
// const auth = new Auth("Hoàng An", "hoangan.web@gmail.com");
// console.log(auth);

// console.log(auth.getEmail());
// console.log(auth.getStatus());
// console.log(auth.getInfo());

//Static method, static property
//Không phụ thuộc vào instance, gọi trực tiếp từ class
// class User {
//   //non-static --> Phụ thuộc vào instance
//   email = "hoangan.web@gmail.com";

//   getEmail() {
//     return this.email;
//   }
//   //static --> Truy cập trực tiếp từ tên class
//   static message = "Học js không khó";

//   getMessage() {
//     console.log(this);
//     return this.constructor.message;
//   }
// }
// const user = new User();
// console.log(user.getEmail());
// console.log(user.getMessage());
// console.log(user.email);
// console.log(User.message);
// console.log(User.getMessage());

//Từ khóa this
// const myObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getEmail: function () {
//     // const _this = this;
//     return {
//       age: 35,
//       getAge: () => {
//         console.log(this.name);
//       },
//     };
//   },
// };
// myObj.getEmail().getAge();

//Bài tập
// const query = {
//   status: "active",
//   keyword: "học lập trình",
//   category: [1, 2, 3],
// };

//Cần chuyển thành chuỗi dạng như sau:
//status=active&keyword=học+lập+trình&category=1&category=2&category=3

// const result = Object.entries(query)
//   .map((item) => {
//     //Check item[1]
//     if (Array.isArray(item[1])) {
//       const sub = item[1]
//         .map((value) => {
//           return `${item[0]}=${value}`;
//         })
//         .join("&");
//       item[1] = sub;
//     }
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(result);

let str = `category=1&status=active&keyword=học+lập+trình&category=2&category=3`;
/*
{
  status: "active",
  keyword: "học lập trình",
  category: ['1', '2', '3'],
}
*/

// const arr = str.split("&").reduce((acc, cur) => {
//   const itemArr = cur.split("=");
//   if (!acc[itemArr[0]]) {
//     acc[itemArr[0]] = itemArr[1].replaceAll("+", " ");
//   } else {
//     if (!Array.isArray(acc[itemArr[0]])) {
//       acc[itemArr[0]] = [acc[itemArr[0]]];
//     }
//   }
//   if (Array.isArray(acc[itemArr[0]])) {
//     acc[itemArr[0]].push(itemArr[1]);
//   }
//   return acc;
// }, {});
// console.log(arr);

//So sánh object
// const obj1 = {
//   name: "An",
//   age: 35,
//   meta: {
//     x: 10,
//   },
// };
// const obj2 = {
//   name: "An",
//   age: 35,
//   meta: {
//     x: 10,
//   },
// };
// const isObject = (input) => {
//   return !Array.isArray(input) && typeof input === "object" && input !== null;
// };
// const compareObj = (obj1, obj2) => {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   for (const key in obj1) {
//     if (isObject(obj1[key]) && isObject(obj2[key])) {
//       return compareObj(obj1[key], obj2[key]);
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(compareObj(obj1, obj2));

//Copy object
// const obj1 = {
//   name: "An",
//   age: 35,
//   meta: {
//     x: 10,
//   },
//   getName() {
//     console.log("Ok chưa?");
//   },
//   getEmail: function () {
//     console.log("Ok rồi");
//   },
// };
// const obj2 = { ...obj1 };
// const obj2 = Object.assign({}, obj1);
// const json = JSON.stringify(obj1);
// const obj2 = JSON.parse(json);
// obj2.name = "An Unicode";
// obj2.meta.x = 20;
// console.log(obj1);
// console.log(obj2);

//Array like: Object nhưng được trình bày giống mảng
// const myObj = {
//   0: "An",
//   1: "Dũng",
//   2: "Đạt",
//   3: "Anh",
//   length: 4,
// };
// Array.from(myObj).forEach((item) => {
//   console.log(item);
// });
// [...myObj].forEach((item) => {
//   console.log(item);
// });

//Destructuring
// const user = {
//   name: "An",
//   email: "an@gmail.com",
//   age: 33,
//   address: "HN",
// };
// const { name: fullname, email, age = 20 } = user;
// console.log(name, email);
// console.log(age);
// console.log(fullname);
// const { name, email, ...tengi } = user;
// console.log(tengi);

// const myArr = ["An", "an@gmail.com", 33, "HN"];
// const [fullname, email, , address] = myArr;
// console.log(fullname, email, address);
// const [fullname, ...tengi] = myArr;
// console.log(tengi);

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
//   {
//     id: 4,
//     name: "User 4",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => id === userId);
// console.log(getUser(1));

//DOM
