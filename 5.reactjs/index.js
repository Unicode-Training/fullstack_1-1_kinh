//React Element --> Thông qua React DOM -> Node Element (Dom trên trình duyệt) --> Hiển thị giao diện
//Khi thao tác cập nhật giao diện -> Thao tác trên React Element, sau đó React DOM sẽ tự động xử lý
//Fragment
//Cú pháp jsx:
// - Gần giống html
// - Biên dịch sang React Element
// - Trình duyệt không hiểu

//JS Compiler: Biên dịch các cú pháp mới sang cú pháp cũ để trình duyệt hiểu được

//JSX --> Babel (JS Compiler) --> React Element --> Thông qua React DOM -> Node Element (Dom trên trình duyệt) --> Hiển thị giao diện

// const a = <a href="#">Hello</a>
// console.log(a);

// const h2 = React.createElement('h2', {
//     className: 'sub-title'
// }, "Học Frontend");
// const h1 = React.createElement('h1', {
//     id: 'title',
//     className: 'abc',
//     onClick: () => {
//         console.log('Hello anh em');
//     }
// }, "Học React không khó");
// const p = React.createElement('p', null, 'lorem')

// const div = React.createElement(React.Fragment, null, h2, h1, p);
// const title = 'Học React không khó';
// // `vd ${tenbien}`
// const handleClick = () => {
//     console.log('Clicked');
// }
// const users = [
//     {
//         id: 1,
//         name: "An"
//     },
//     {
//         id: 2,
//         name: "Kính"
//     },
//     {
//         id: 3,
//         name: "Dũng"
//     }
// ]
// const isAuth = false;
// const isShow = false;
// const div = <>
//     <h1 id="title" className="title">{title}</h1>
//     {
//         isAuth ? <h2 className="sub-title">Học Frontend</h2> : <h3>Vui lòng <a href="">đăng nhập</a></h3>
//     }
//     {isShow && <p>lorem</p>}
//     <button onClick={handleClick}>Click me</button>
//     {users.map((user) => <React.Fragment key={user.id}><span>{user.name}</span></React.Fragment>)}
// </>

//state:
// - Dữ liệu của component
// - Khi state change -> component tự động gọi lại (re-render) --> jsx sẽ được cập nhật lại
//React.useState(giatrikhoitao) => Trả về 1 mảng có 2 phần tử
//- Phần tử 1: Giá trị của State
//- Phần tử 2: Hàm thay đổi state
// const User = ({ name, email }) => {
//     return <div>
//         <p>Name: {name}</p>
//         <p>Email: {email}</p>
//     </div>
// }
// const Welcome = () => {
//     const [title, setTitle] = React.useState("Chào ReactJS");
//     const [users, setUsers] = React.useState([]);
//     const [isLoading, setLoading] = React.useState(false);
//     //Xử lý logic trong này
//     const handleClick = () => {
//         setTitle("Học React không khó");
//     }
//     const handleLoadUsers = async () => {
//         setLoading(true);
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const data = await response.json();
//         setTimeout(() => {
//             setUsers(data);
//             setLoading(false);
//         }, 500)
//     }
//     return <>
//         <h1>{title}</h1>
//         <button onClick={handleClick}>Click me</button>
//         <hr />
//         <button onClick={handleLoadUsers} disabled={isLoading}>{isLoading ? 'Đang tải' : 'Load user'}</button>
//         {
//             users.map(user => <User key={user.id} name={user.name} email={user.email} />)
//         }
//     </>
// }

// const div = <>
//     <Welcome></Welcome>
// </>
//a = () => {}
//b = a
//c = b
//d = c
//d()

// const Input = ({ onChange }) => {
//     return <input placeholder="Nhập gì đó..." onChange={onChange} />
// }
// const Welcome = () => {
//     const [value, setValue] = React.useState("");
//     const handleInputChange = (e) => {
//         setValue(e.target.value);
//     }
//     return <div>
//         <h2>Value: {value}</h2>
//         <Input onChange={handleInputChange} />
//     </div>
// }
//Nguyên tắc khi làm việc react
// - State phải nắm dữ liệu
// - Khi cần update lại giao diện -> cập nhật state
// - TUYỆT ĐỐI: Không được update trực tiếp giao diện thông qua DOM (Mất đồng bộ dữ liệu)

//Flow react:
// - State thay đổi
// - Component re-render
// - Update giao diện (jsx)
// - Logic nặng --> đẩy sang Side Effect --> React.useEffect(): Quản lý các side effect (Chạy sau khi giao diện update)
// const LoginForm = ({ onSubmit, user }) => {
//     const [form, setForm] = React.useState({});
//     const [errors, setErrors] = React.useState({});
//     //{email: 'abc', password: '123'}
//     const handleChangeValue = (e) => {
//         // console.log(e.target.name, e.target.value);
//         setForm({ ...form, [e.target.name]: e.target.value });
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errorBag = {}
//         if (!form.email) {
//             errorBag.email = 'Email không được để trống';
//         }
//         if (!form.password) {
//             errorBag.password = 'Password không được để trống';
//         }
//         setErrors(errorBag);

//         if (!Object.keys(errorBag).length) {
//             onSubmit(form);
//             setForm({}); //Update lại state -> Kích hoạt re-render -> JSX Update với state mới
//         }
//     }
//     //Logic
//     //Khi nào user thay đổi thì lưu user vào form
//     React.useEffect(() => {
//         setForm(user);
//     }, [user]);
//     return <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//             <label className="block font-medium">Email</label>
//             <input type="text" name="email" placeholder="Email..." className="px-3 py-1 outline-none border border-[#ddd] w-full" onChange={handleChangeValue} value={form.email ?? ''} />
//             {errors.email && <span className="text-red-600">{errors.email}</span>}
//         </div>
//         <div className="mb-3">
//             <label className="block font-medium">Password</label>
//             <input type="password" name="password" placeholder="Password..." className="px-3 py-1 outline-none border border-[#ddd] w-full" onChange={handleChangeValue} value={form.password ?? ''} />
//             {errors.password && <span className="text-red-600">{errors.password}</span>}
//         </div>
//         <button className="w-full py-1 bg-green-700 text-white rounded-xl">Login</button>
//     </form>
// }

// const Listing = ({ userList, onDelete, onEdit }) => {

//     return <div>
//         <h2 className="text-2xl my-3">Danh sách user</h2>
//         <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
//             <table className="w-full text-sm text-left rtl:text-right text-body">
//                 <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
//                     <tr>
//                         <th scope="col" className="px-6 py-3 font-medium">
//                             Email
//                         </th>
//                         <th scope="col" className="px-6 py-3 font-medium">
//                             Password
//                         </th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         userList.map((user) => <tr
//                             key={user.id} className="bg-neutral-primary border-b border-default">
//                             <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
//                                 {user.email}
//                             </th>
//                             <td className="px-6 py-4">
//                                 {user.password}
//                             </td>
//                             <td>

//                                 <button className="px-2 py-1 bg-green-600 text-white"
//                                     onClick={() => onEdit(user.id)}
//                                 >Edit</button>
//                             </td>
//                             <td>

//                                 <button className="px-2 py-1 bg-red-600 text-white"
//                                     onClick={() => onDelete(user.id)}
//                                 >Delete</button>
//                             </td>
//                         </tr>)
//                     }

//                 </tbody>
//             </table>
//         </div>

//     </div>
// }

// const Welcome = () => {
//     const [userList, setUserList] = React.useState([]);
//     const [user, setUser] = React.useState({});
//     const handleSubmit = (data) => {
//         if (!user.id) {
//             setUserList([...userList, { ...data, id: crypto.randomUUID() }])
//         } else {
//             setUserList(userList.map(item => {
//                 if (item.id === user.id) {
//                     return {
//                         ...item,
//                         ...data
//                     }
//                 }
//                 return {
//                     ...item
//                 }
//             }));
//             setUser({}) //reset user: hoàn thành việc update
//         }
//     }
//     const handleDelete = (id) => {
//         setUserList(userList.filter((user) => user.id !== id));
//     }

//     const handleEdit = (id) => {
//         setUser(userList.find(user => user.id === id))
//     }

//     return (
//         <div className="max-w-1/2 mx-auto py-3">
//             <h1 className="text-3xl text-center mb-3">Login</h1>
//             <LoginForm onSubmit={handleSubmit} user={user} />
//             <Listing userList={userList} onDelete={handleDelete} onEdit={handleEdit} />
//         </div>
//     );
// };

/*
Welcome
    - LoginForm
    - Listing
*/

//Các công việc được gọi là Side Effect
// - Call API
// - addEventListener, removeEventListener
// - timer: setTimeout, setInterval,...
// - storage: localStorage, cookie, sessionStorage,...
// - Logic nặng: Hàm đệ quy, xử lý mảng nhiều phần tử

/*
React.useEffect(callback, dependencies?)
- []: callback chỉ chạy lần đầu tiên sau khi component được gắn vào DOM
- null, undefined: callback chạy lại khi component re-render
- [bien1, bien2,...]: Chỉ chạy khi 1 trong các biến được khai báo thay đổi
*/

//Thứ tự chạy của useEffect
//1. State thay đổi
//2. Component re-render
//3. UI Update
//4. Cleanup (Nếu có)
//5. Callback trong useEffect
// const Counter = () => {
//     const [count, setCount] = React.useState(0);

//     const handleIncrement = () => {
//         setCount(count + 1);
//     }
//     console.log('Counter re-render', count);
//     React.useEffect(() => {
//         console.log('Effect', count);
//         return () => {
//             //Trả về dữ liệu của lần render trước
//             console.log(`Cleanup`, count);
//         }
//     }, [count]);
//     return <div>
//         <h1 className="text-3xl">Count: {count}</h1>
//         <button className="px-3 py-1 bg-green-600 text-white" onClick={handleIncrement}>Increment</button>
//         {console.log('Update UI', count)}
//     </div>
// }

// const Avatar = () => {
//     const [image, setImage] = React.useState("");
//     const handleChangeImage = (e) => {
//         const previewUrl = URL.createObjectURL(e.target.files[0]);
//         setImage(previewUrl);
//     }
//     React.useEffect(() => {
//         return () => {
//             if (image) {
//                 URL.revokeObjectURL(image);
//             }
//         }
//     }, [image]);
//     return <div className="flex justify-center py-3">
//         <label>
//             <img src={image || "https://images.spiderum.com/sp-images/9ae85f405bdf11f0a7b6d5c38c96eb0e.jpeg"} className="w-50 h-50 rounded-[50%]" />
//             <input type="file" hidden onChange={handleChangeImage} />
//         </label>
//     </div>
// }

// const Welcome = () => {
//     // return <Counter />
//     return <Avatar />
// }

//Ref:
// - Giữ giá trị xuyên suốt trong component (Khi re-render nó không. bị mất)
// - Tham chiếu để phần tử DOM => Dễ dàng thao tác với DOM
// const Welcome = () => {
//     const [count, setCount] = React.useState(0);
//     const myRef = React.useRef(0);
//     const inputRef = React.useRef();
//     const handleIncrement = () => {
//         setCount(count + 1);
//         myRef.current = count + 1;
//     }
//     React.useEffect(() => {
//         inputRef.current.focus();
//     }, []);
//     return <div>
//         <h1 className="text-3xl">Count: {count}</h1>
//         <input className="px-3 py-1 outline-none border border-[#ddd]" placeholder="Search..." ref={inputRef} />
//         <button onClick={handleIncrement} className="px-3 py-1 bg-green-600 text-white">Click me</button>
//     </div>
// }

//Khi bấm xuống
// - Đăng ký mousemove
// - Đăng ký mouseup

//Khi nhả ra:
// - mouseup tự kích hoạt -> xóa mousemove
// - clean chạy --> xóa mouseup

const Welcome = () => {
    const sidebarRef = React.useRef();
    const currentWidthRef = React.useRef(220);
    const [isDrag, setIsDrag] = React.useState(false);
    const [isShow, setShow] = React.useState(true);
    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDrag(true);
    }

    React.useEffect(() => {
        if (!isDrag) {
            return;
        }
        console.log('effect');

        const handleResize = (e) => {
            let value = e.clientX;
            if (e.clientX < 180) {
                value = 180;
            }
            if (e.clientX > 320) {
                value = 320;
            }
            currentWidthRef.current = value;
            sidebarRef.current.style.width = `${value}px`
        }
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleResize);
            setIsDrag(false);
        }
        document.addEventListener('mousemove', handleResize);
        document.addEventListener('mouseup', handleMouseUp);
        //Cleanup
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }, [isDrag]);
    const handleClose = () => {
        setShow(false);
        sidebarRef.current.style.width = null;
    }
    const handleOpen = () => {
        setShow(true);
        sidebarRef.current.style.width = null;
    }

    return <div className={`flex ${isDrag ? 'cursor-ew-resize' : ''}`}>
        <div ref={sidebarRef} className={`${!isDrag ? 'transition-all' : ''} overflow-hidden w-[${isShow ? currentWidthRef.current + 'px' : '0'}] ${isShow ? 'px-3' : 'px-0'} bg-gray-300 h-screen py-3 relative group`}>
            <div className={`absolute top-0 right-0 bottom-0 w-[4px] bg-gray-500 opacity-0 group-hover:opacity-100 cursor-ew-resize ${isDrag ? 'opacity-100 cursor-ew-resize' : ''}`} onMouseDown={handleMouseDown}></div>
            <button className="absolute right-5" onClick={handleClose}>Close</button>
            <h3>Menu</h3>
        </div>
        <div className="flex-1 p-3">
            <div className="flex">
                {!isShow && <button onClick={handleOpen}>Open</button>}
                <h2>Content</h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam reiciendis sunt quaerat impedit enim, atque earum, voluptatibus vero explicabo repudiandae molestiae incidunt eveniet tempora exercitationem, nemo natus autem doloribus.
            </p>
        </div>
    </div>
}
const div = (
    <>
        <Welcome />
    </>
);

const root = document.querySelector("#root");
const container = ReactDOM.createRoot(root);
container.render(div);

//Buổi sau:
// - Setup dự án bằng Vite -> Học cách tách file, sử dụng TypeScript
// - Học kiến thức nâng cao: Context