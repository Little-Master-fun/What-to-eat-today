import http from "@/utils/http";

export function refreshToken(refreshTokenUrl, refreshToken) {
  return http.post('/users/token/refresh', 
    localStorage.getItem('state-user').refresh
  )
 .then(response => {
    // 处理成功获取新令牌的情况
    return response.data.accessToken;
  })
 .catch(error => {
    // 处理刷新令牌时的错误
    console.error('刷新令牌失败:', error);
    throw error;
  });
}