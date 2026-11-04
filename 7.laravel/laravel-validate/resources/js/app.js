import "toastify-js/src/toastify.css";
import { toastify } from './toastify';
import "./update-status";
if (msg && type) {
    toastify(msg, type);
}
