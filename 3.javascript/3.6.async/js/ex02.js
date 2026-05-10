/*
Yêu cầu: 
- Khi click vào "Button 1" --> Đổi text "Giai đoạn 1", enable "Button 2"
- Khi click vào "Button 2" --> Đổi text "Giai đoạn 2", enable "Button 3",
- Khi click vào "Button 3" --> Đổi text "Giai đoạn 3"
*/
// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector(".btn-3");
// const btn4 = document.querySelector(".btn-4");
// const btn5 = document.querySelector(".btn-5");
// const status = document.querySelector(".status");

// const awaitForClick = (btnEl) => {
//   return new Promise((resolve) => {
//     const handler = () => {
//       //Giải phóng bộ nhớ
//       btnEl.removeEventListener("click", handler);
//       resolve(); //Thay đổi trạng thái trong promise
//     };

//     btnEl.addEventListener("click", handler);
//   });
// };

// btn1.addEventListener("click", () => {
//   status.innerText = "Giai đoạn 1";
//   btn2.disabled = false;
//   btn1.disabled = true;
//   awaitForClick(btn2)
//     .then(() => {
//       status.innerText = "Giai đoạn 2";
//       btn3.disabled = false;
//       btn2.disabled = true;
//       return awaitForClick(btn3);
//     })
//     .then(() => {
//       status.innerText = "Giai đoạn 3";
//       btn3.disabled = true;
//       btn4.disabled = false;
//       return awaitForClick(btn4);
//     })
//     .then(() => {
//       status.innerText = "Giai đoạn 4";
//       btn4.disabled = true;
//       btn5.disabled = false;
//       return awaitForClick(btn5);
//     })
//     .then(() => {
//       status.innerText = "Giai đoạn 5";
//       btn5.disabled = true;
//     });
// });

//Async Await
// - async: Từ khóa nằm trước function
// - await: Từ khóa nằm trước promise
// Lưu ý: await bắt buộc phải nằm trong async function

const myPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello anh em");
      // reject("My Error");
    }, 2000);
  });
const myPromise2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello anh em 2");
    }, 2000);
  });
const myPromise3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello anh em 3");
    }, 2000);
  });
const doSomething = async () => {
  //   try {
  //     const data = await myPromise; //1 await tương ứng với 1 then
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("Hoàn thành");
  //   }
  const start = Date.now();
  const [data1, data2, data3] = await Promise.all([
    myPromise(),
    myPromise2(),
    myPromise3(),
  ]);
  //   const end = Date.now();
  //   console.log(data1);
  //   console.log(data2);
  //   const data1 = await myPromise();
  //   const data2 = await myPromise2();
  //   const data3 = await myPromise3();
  console.log(data1);
  console.log(data2);
  console.log(data3);
  const end = Date.now();
  console.log(`Tổng thời gian: `, (end - start) / 1000);
};
doSomething();
