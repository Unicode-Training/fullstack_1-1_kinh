//es module --> Từ khóa: import, export
//commonjs --> nodejs (require)

// import doSomething, { a as _a, c } from "./modules/home.js";

// console.log(_a);
// console.log(c);

// doSomething();

// import * as home from "./modules/home.js";
// console.log(home);
// const { default: doSomething } = home;
// doSomething();

/*
index.js --> users/list.js
index.js --> users/create.js
index.js --> users/update.js
index.js --> users/delete.js
*/

// import { createUser } from "./users/create.js";
// import { getUsers } from "./users/listing.js";
// import { updateUser } from "./users/update.js";
// import { deleteUser } from "./users/delete.js";
import { createUser, getUsers, updateUser, deleteUser } from "./users/index.js";
createUser();
getUsers();
updateUser();
deleteUser();