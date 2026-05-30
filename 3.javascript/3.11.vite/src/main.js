import moment from "moment";
import { home } from "./components/home";
import "./styles/style.css"
import config from "./config.json";
import image01 from "./images/x-y-z-cv-compressed.jpg"
console.log(config);
console.log(import.meta.env.VITE_BACKEND_URL);

const app = document.querySelector('#app');
app.innerHTML = `<div class="max-w-[80%] mx-auto py-5">
<h1>Hello anh em</h1>
<img src="${image01}" />
${home()}
<h2>Now: ${moment().format('DD/MM/YYYY HH:mm:ss')}</h2>
</div>
`