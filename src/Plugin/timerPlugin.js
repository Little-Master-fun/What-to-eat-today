export default {
    install(Vue) {
      let timer;
      Vue.prototype.$startTimer = function () {
        timer = setInterval(() => {
          console.log('定时器执行');
        }, 1000);
      };
      Vue.prototype.$stopTimer = function () {
        clearInterval(timer);
      };
    },
  };