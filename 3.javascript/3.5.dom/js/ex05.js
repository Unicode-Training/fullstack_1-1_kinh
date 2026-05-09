//DOM Nodes: Tự tạo ra node sau đó đưa vào cây DOM để hiển thị

// const root = document.querySelector("#root");

//Tạo Element Node
// const h1 = document.createElement("h1");
// h1.innerText = "Học js không khó";

// const btn = document.createElement("button");
// btn.innerText = "Add";

// //Đẩy node vào cây DOM
// //1. Đẩy xuống cuối cùng
// root.append(h1);
// root.append(btn);

// btn.addEventListener("click", () => {
//   //   root.append(h1.cloneNode(true));
//   //   root.prepend(h1.cloneNode(true));
//   //   root.insertBefore(h1.cloneNode(true), btn);
//   const p = document.createElement("p");
//   p.innerText = `Ahihi`;
//   //   root.replaceChild(p, h1);
//   root.removeChild(h1);
// });

const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const todoListEl = document.querySelector(".todo-list");
btnEl.addEventListener("click", () => {
  const value = inputEl.value;
  todoListEl.innerHTML += `<p>${value}</p>`;
  //   const p = document.createElement("p");
  //   p.innerText = value;
  //   todoListEl.append(p);
  inputEl.value = "";
});

//<img src=""  onerror="window.location.href='https://google.com'"/>
//XSS
