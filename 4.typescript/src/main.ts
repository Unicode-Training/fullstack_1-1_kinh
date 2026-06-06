// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(10, 20));
// ;
// const a = 10;
// console.log(a);
// const doSomething = () => { }
// doSomething();

//any

//unknown
// let a: unknown = 10;
// console.log(a);
// a = "An";
// console.log(a);

// const value: unknown = 10;
// const a: string = value as string;
// console.log(a, typeof a);

// const a: number = 10;
// const b: string = a as unknown as string;
// const b: string = a + "";
// console.log(b);

// const names: string[] = ['An', 'Dat', 'Tung'];
// console.log(names);

// const myArr: [string, number, boolean] = ['An', 30, true];
// console.log(myArr);

// const user: {
//     name: string;
//     email: string;
//     age: number;
//     status?: boolean;
// } = {
//     name: "Hoàng An",
//     email: 'an@gmail.com',
//     age: 33,
//     status: false,
// }
// console.log(user);

// const users: {
//     id: number;
//     name: string;
//     status?: boolean;
//     children?: string[]
// }[] = [
//         {
//             id: 1,
//             name: "An",
//             status: false
//         },
//         {
//             id: 2,
//             name: "Anh",
//             status: true,
//             children: ["A", 'B', "C"]
//         },
//         {
//             id: 3,
//             name: "Tung",
//             status: false
//         }
//     ]
// console.log(users);

// const display = (callback: (a: string) => void) => {
//     callback("An");
// }
// display((a: string) => {
//     console.log('hello anh em');
//     console.log(a);
// });

// const doSomething = (a: number, b?: number) => {
//     console.log(a, b);
// }

// doSomething(10)

//type
// type Address = {
//     province: string;
//     address: string;
// }
// type User = {
//     id: number;
//     name: string;
//     status: boolean;
//     address: Address
// }
// const user: User = {
//     id: 10,
//     name: 'An',
//     status: false,
//     address: {
//         province: "Hà Nội",
//         address: "Tây Mỗ"
//     }
// }
// console.log(user);

// const customer: User = {
//     id: 10,
//     name: 'Hoàng An',
//     status: false,
//     address: {
//         province: "Hà Nội",
//         address: "Tây Mỗ"
//     }
// }
// console.log(customer);

// type User = string[];
// const users: User = ['1', '2', '3']
// console.log(users);

// type User = {
//     id: number;
//     name: string;
//     status?: boolean;
//     children?: string[]
// }

// const users: User[] = [
//     {
//         id: 1,
//         name: "An",
//         status: false
//     },
//     {
//         id: 2,
//         name: "Anh",
//         status: true,
//         children: ["A", 'B', "C"]
//     },
//     {
//         id: 3,
//         name: "Tung",
//         status: false
//     }
// ]
// console.log(users);

// const user: User = {
//     id: 1,
//     name: "An",
//     status: false
// }
// console.log(user);

// type User = {
//     id: number;
//     name: string;
// }
// type Address = {
//     address: string;
// }

// type UserAndAddress = User & Address

// type UserOrAddress = User | Address

// const myAddress: Address = {
//     address: 'Hồ Chí Minh'
// }
// console.log(myAddress);

// const myObj: UserAndAddress = {
//     id: 1,
//     name: "An",
//     address: 'Hà Nội'
// }
// console.log(myObj);

// const myObj2: UserOrAddress = {
//     id: 1,
//     address: 'HN'
// }
// console.log(myObj2);


// const user: User = {
//     id: 1,
//     name: "An",
// }
// console.log(user);

//interface
// interface IUser {
//     id: number;
//     name: string;
//     status: boolean;
// }
// interface IUser {
//     address?: string;
// }
// const user: IUser = {
//     id: 1,
//     name: 'An',
//     status: false
// }
// console.log(user);

// const customer: IUser = {
//     id: 1,
//     name: 'An',
//     status: false,
//     address: 'HN'
// }
// console.log(customer);
// interface ErrorWithStatus extends Error {
//     status?: number;
// }
// try {
//     const error: ErrorWithStatus = new Error("Lỗi gì đó");
//     error.status = 400;
//     throw error;
// } catch (error) {
//     // if (error instanceof Error) {
//     //     const err: ErrorWithStatus = error;
//     //     console.log(err.message);
//     //     console.log(err.status);
//     // }

//     const err = error as ErrorWithStatus;
//     console.log(err.message);
//     console.log(err.status);
// }

// const names: string | number = 10;
// console.log(names);

// const status: "pending" | "success" | "failed" = "pending";
// console.log(status);

// type Key = "header" | "footer" | "logo";
// const getOption = (key: Key) => {
//     //key: header, footer, logo
//     console.log(key);
// }
// getOption("header")

//keyof: Trích xuất key trong 1 type
//typeof: Trích xuất type của từng key trong 1 object
// type User = {
//     name: string;
//     email: string;
//     status: boolean;
//     age: number;
//     address: string;
// }


// type User = typeof user;

//"name" | "email" | "status" | "age" | "address"
// type User = {
//     name: string;
//     email: string;
//     status: boolean;
//     age: number;
//     address: string;
// }
// const getUser = (key: keyof User) => {
//     const user = {
//         name: "An",
//         email: "an@gmail.com",
//         status: false,
//         age: 35,
//         address: 'Hn'
//     };
//     return user[key];
// }

// console.log(getUser("age"));

//placeholder
// const getUser = <T>(myObj: T, key: keyof T) => {
//     return myObj[key];
// }

// const user = {
//     name: "An",
//     email: "an@gmail.com",
//     status: false,
//     age: 35,
//     address: 'Hn',
//     job: "it"
// };

// console.log(getUser(user, "job"));

//readonly
// type User = {
//     name: string;
//     readonly age: number
// }
// const user: User = {
//     name: 'An',
//     age: 35
// }
// user.age = 40;

// const user = {
//     id: 10,
//     name: 'An',
//     status: false
// } as const;
// user.id = 10;

// const getUser = (id: number) => {
//     console.log(id);
// }
// const id: undefined | number = undefined;
// getUser(id!);

//Class
// - Cú pháp cơ bản giống js, bổ sung thêm phần khai báo type cho thuộc tính
// - Phạm vi truy cập
// + private: Chỉ truy cập nội bộ trong class
// + public hoặc không viết gì: Truy cập được ở mọi nơi
// + protected: Truy cập được trong nội bộ class và các class kế thừa. Bên ngoài class không truy cập
// class User {
//     //Khai báo kiểu dữ liệu cho thuộc tính
//     name: string;
//     email: string;
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }

//     //Phương thức
//     getName(): string {
//         return this.name;
//     }
//     getEmail(): string {
//         return this.email;
//     }
// }

// class Auth extends User {
//     getInfo() {
//         console.log(this.name);
//         console.log(this.email);
//     }
// }
// //Instance
// const auth = new Auth('Hoàng An', 'hoangan.web@gmail.com');
// auth.getInfo();
// console.log(auth.name);

// const user = new User('Hoàng An', 'hoangan.web@gmail.com');
// console.log(user);
// console.log(user.email);

//Tình huống: Cần tạo class có các phương thức và thuộc tính sau
// - name: string
// - email: string
// - getName(): string;
// - setName(value: string): void

// interface IUser {
//     name: string;
//     email: string;
//     getName(): string;
//     setName(value: string): void;
// }

// interface IAuth {
//     isLogin: boolean;
// }

// class User implements IUser, IAuth {
//     name: string;
//     email: string;
//     age: number;
//     isLogin: boolean;
//     //static
//     static message: string = 'Học TypeScript không khó';
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//         this.age = 35;
//         this.isLogin = false;
//     }
//     getName(): string {
//         return this.name;
//     }
//     setName(value: string): void {
//         this.name = value;
//     }
//     //non-static
//     getMessage() {
//         console.log(User.message);
//     }
// }
// const user = new User('Hoang An', 'hoangan.web@gmail.com');
// // console.log(user);
// user.getMessage();

//clone code
//npm i
//npm run dev


//Module (file)
// - namespace 1
//   - class, interface, function, variable
// - namespace 2
//   - class, interface, function, variable

// import b, { a } from "./home";
// console.log(a);
// console.log(b);

// import { Home, Home2 } from "./home";
// console.log(Home.a);
// console.log(Home.b);
// Home2.showMessage();
// console.log(Home2.a);

// import { ProductCategory } from "./products";
// console.log(ProductCategory.a);
// console.log(ProductCategory.ProductCatelog.b);

// import { ProductCategory } from "./products";
// console.log(ProductCategory.a);
// console.log(ProductCategory.b);

// type User = {
//     name: string;
//     email: string;
//     age: number;
// }
// type UserOptional = Partial<User>;

// type UserOptional = {
//     name?: string;
//     email?: string;
//     age?: number;
// }
// type User = Required<UserOptional>;

// type User = {
//     name: string;
//     email: string;
//     age: number;
// }
// type UserReadonly = Readonly<User>;

// type Role = "admin" | "user" | "guest";
// type Permissions = Record<Role, string[]>
// const permissions: Permissions = {
//     admin: ["read", 'write', "delete"],
//     user: ["read", 'write'],
//     guest: ["read"]
// }
// console.log(permissions);

// type Keys = "name" | "email" | "age";
// type Test = Record<Keys, number>
// const test: Test = {
//     name: 1,
//     email: 2,
//     age: 3
// }
// console.log(test);

// type User = {
//     name: string;
//     email: string;
//     age: number;
// }

// type UserInfo = Pick<User, "name" | "email">

// type User = {
//     name: string;
//     email: string;
//     age: number;
// }
// type UserInfo = Omit<User, "email">
