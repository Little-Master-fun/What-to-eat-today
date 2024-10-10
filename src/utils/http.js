import axios from "axios"
import { useUserState } from "@/composables/state";
import router from "@/router";

const apiBase = "https://eat.vincent.0nline.tech/"
const http = axios.create({
    baseURL: apiBase
})
//refreshtocken的相关值
const stateUser = useUserState()
let newObj = {};
for (let key in stateUser.value.refresh) {
    newObj[`"${key}"`] = stateUser.value.refresh[key];
}
//请求拦截器相关参数
// 是否正在刷新的标记
let isRefreshing = false
// 待执行函数容器
let requests = []


//refreshtocken函数
function refreshToken() {
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
    return http.post('/users/token/refresh', stateUser.value.refresh)
}

//token相关函数
http.interceptors.response.use(
    (response) => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    (error) => {
      if (error.response.status === 401) {
        var config = error.config; //获取401失败请求的axios中的config配置数据
  
        if (!isRefreshing) {
          //没有刷新
          isRefreshing = true;
  
          return refreshToken()
            .then(
              (res) => {
                config.headers["Authorization"] = `Bearer ${token}`;
                // 已经刷新了token，将所有队列中的请求进行重试
                requests.forEach((cb) => cb(token));
                requests = [];
                return http(config);
              },
              (err) => {
                router.push("/login"); //跳转到登录页
              }
            )
            .catch((res) => {
              console.error("rawtoken error =>", res);
            })
            .finally(() => {
              //无论是否有触发异常，该语句都会执行
              isRefreshing = false;
            });
        } else {
          // 保存函数 等待执行
          // 吧请求都保存起来 等刷新完成后再一个一个调用
          new Promise((resolve) => {
            // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
            requests.push((token) => {
              config.headers["Authorization"] = `Bearer ${token}`;
              resolve(http(config));
            });
          });
        }
      }
      return Promise.reject(error.response);
    }
  );
  




export {
    http
};

export default http;