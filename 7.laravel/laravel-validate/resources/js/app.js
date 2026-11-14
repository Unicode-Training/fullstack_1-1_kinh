import "toastify-js/src/toastify.css";
import { toastify } from './toastify';
import "./update-status";
import "./delete-form";
import "./delete-many";
if (msg && type) {
    toastify(msg, type);
}
