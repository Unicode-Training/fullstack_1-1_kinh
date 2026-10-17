import moment from "moment";
export const getCurrentTime = function () {
    return moment().format('DD/MM/YYYY HH:mm:ss');
}