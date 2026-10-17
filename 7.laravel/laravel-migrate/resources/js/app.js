import { getCurrentTime } from "./datetime";

//Gắn vào global để các file blade sử dụng được
window.getCurrentTime = getCurrentTime;