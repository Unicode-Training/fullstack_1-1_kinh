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

const Welcome = () => {
    const [value, setValue] = React.useState("");
    const handleInputChange = (e) => {
        setValue(e.target.value);
    }
    return <div>
        <h2>Value: {value}</h2>
        <Input onChange={handleInputChange} />
    </div>
}

const Input = ({ onChange }) => {
    return <input placeholder="Nhập gì đó..." onChange={onChange} />
}

const div = <>
    <Welcome />
</>

const root = document.querySelector('#root');
const container = ReactDOM.createRoot(root);
container.render(div);

