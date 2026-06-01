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

const getUser = (id: number) => {
    console.log(id);
}
const id: undefined | number = undefined;
getUser(id!);