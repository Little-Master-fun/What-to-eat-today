import http from "./http";
import { useUserState } from "@/composables/state";


const stateUser = useUserState()
let newObj = {};
for (let key in stateUser.value.refresh) {
    newObj[`"${key}"`] = stateUser.value.refresh[key];
}
// let obj = { 1: 'value1', 2: 'value2' };
// for (let key in obj) {
//   newObj[key.toString()] = obj[key];
// }
// console.log(newObj);
// console.log(stateUser.value.refresh);

let timer
export function refreshToken() {
    const refresh = {}
    for (let key in stateUser.value.refresh) {
        refresh[`"${key}"`] = stateUser.value.refresh[key];
    }
    console.log(refresh);

    const res = http.post('/users/token/refresh', refresh)
    stateUser.value.accesstoken = res.data.access_token
    stateUser.value.refresh = res.data
    console.log('发送刷新令牌请求');

}

export function stopRefresh() {
    clearInterval(timer)
}