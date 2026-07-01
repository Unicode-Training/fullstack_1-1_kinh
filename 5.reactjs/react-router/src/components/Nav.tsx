import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="w-[20%] p-3">
      <h3 className="text-xl mb-3 border-b border-[#ddd]">Menu</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
