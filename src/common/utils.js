import moment from "moment";


export function dateFormat(params) {
    return moment(params).format("YYYY/MM/DD  HH:mm:ss");
}