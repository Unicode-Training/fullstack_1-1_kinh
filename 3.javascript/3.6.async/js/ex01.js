//Đồng bộ
// function1 --> function2 --> function3
// alert("hello anh em");
// console.log("ok");

//Bất đồng bộ
//addEventListener(tenevent, handler)

// setTimeout(() => {
//   console.log("Hello anh em");
// }, 2000);
// console.log("Ok");

//Các hàm bất đồng bộ
// - DOM
// - setTimeout, setInterval
// - fetch --> gọi api backend
// - XMLHttpRequest --> gọi api

//Bản chất của xử lý bất đồng bộ: Biến các tác vụ bất đồng bộ thành dạng đồng bộ
//Button Click --> Gọi API --> Chờ --> Hiển thị kết quả

//Nguyên lý chung: Thiết kế cơ chế khi nào tác vụ bất đồng bộ hoàn thành thì "thông báo"
// const getUsers = (callback) => {
//   setTimeout(() => {
//     const users = ["User 1", "User 2", "User 3"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 2000);
// };

// const getMessage = () => {
//   console.log("Đã lấy users thành công");
// };

// const getProducts = (callback) => {
//   setTimeout(() => {
//     const products = ["Product 1", "Product 2", "Product"];
//     if (typeof callback === "function") {
//       callback(products);
//     }
//   }, 1000);
// };

// getUsers((data) => {
//   console.log(data);
//   getProducts((data) => {
//     console.log(data);
//     getMessage();
//   });
// });

//Promise (ES6)
// State:
// - pending: Trạng thái ban đầu của 1 promise
// - fulfilled: Trạng thái thành công khi tác vụ bất đồng bộ trả về kết quả cho promise
// - rejected: Trạng thái thất bại khi tác vụ bất đồng bộ trả về kết quả cho promise
//Hình dung: Promise nó đơn giản chỉ là 1 object proxy (Object bọc ở ngoài tác vụ bất đồng bộ)

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const status = true;
//     const users = ["User 1", "User 2", "User 3"];
//     //Nếu muốn thành công --> gọi hàm resolve và truyền đối số
//     //Nếu muốn thất bại --> gọi hàm reject và truyền đối số
//     if (status) {
//       resolve(users); //Promise chuyển trạng thái sang fulfilled
//     } else {
//       reject("Có lỗi khi lấy danh sách users");
//       //Promise chuyển trạng thái sang rejected
//     }
//     // resolve(users);
//     // reject("Có lỗi khi lấy danh sách users");
//   }, 2000);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Đã hoàn thành");
//   });

//Khi promise chuyển trạng thái --> chạy then hoặc catch --> finally

//Chaining
// const myPromise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(["Products 1", "Products 2", "Products 3"]);
//   }, 1000);
// });

// const myPromise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(["Post 1", "Post 2", "Post 3"]);
//   }, 1500);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//     // return "Hello em"; //resolve vào promise của then
//     return myPromise2;
//   })
//   .then((data) => {
//     console.log(data);
//     return myPromise3;
//   })
//   .then((data) => {
//     console.log(data);
//   });

//Promise.all(): Gom các promise vào 1 mảng, sau đó sẽ cùng xử lý và trả về kết quả 1 lần
const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
      ];
      resolve(users.find((user) => user.id === userId));
    }, Math.random() * 2000);
  });
};

const ids = [1, 2, 3];
// const salaryPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     getUser(ids[i]).then((data) => {
//       total += data.salary;
//       count++;
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });

//Hiển thị kết quả
// salaryPromise.then((total) => {
//   console.log(total);
// });

const promiseArr = ids.map((id) => getUser(id));
Promise.all(promiseArr).then((data) => {
  const total = data.reduce((acc, cur) => {
    return acc + cur.salary;
  }, 0);
  console.log(total);
});
