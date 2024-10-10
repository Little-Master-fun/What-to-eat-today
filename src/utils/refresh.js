import http from "./http";
import { useUserState } from "@/composables/state";


const stateUser = useUserState()
let newObj = {};
for (let key in stateUser.value.refresh) {
    newObj[`"${key}"`] = stateUser.value.refresh[key];
}


export function refreshToken() {
    const refresh = {
        "access_token": stateUser.value.refresh.access_token,
        "token_type": "bearer",
        "refresh_token": stateUser.value.refresh.refresh_token
    }
    console.log(refresh);
    
    http.post('/users/token/refresh', stateUser.value.refresh).then(res => {
        stateUser.value.refresh = res.data
        stateUser.value.accesstoken = res.data.access_token
        console.log('刷新令牌成功');
        
    }).catch(error => {
        console.log(error);
        
    })

}


export function stopRefresh() {
    clearInterval(timer)
}