import { use } from "react";
import { AppContext } from "../context/AppContext";
export default function Button() {
  const { title, setTitle } = use(AppContext);
  return <button onClick={() => setTitle("Ok chưa?")}>Button: {title}</button>;
}
