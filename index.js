const utils = {
  queryStringify: function (obj) {
    // {
    //   a: 1, 
    //   b: 2,
    //   c: 3
    // }
    // ====>
    // ?a=1&b=2&c=3
    let str = `?`
    let arr = []
    for (let i in obj) {
      arr.push(`${i}=${obj[i]}`)
    }
    str += arr.join('&')
    return str;
  },
  // 不等人了
  throttle: function (func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    return () => {
      var now = +new Date();
      if (!previous) previous = now;
      var remain = wait - now + previous;
      if (remain <= 0) {
        if (timeout) {
          clearTimeout(timeout)
        }
      } else if(!timeout) {
        timeout = setTimeout(() => {
          previous = 0;
          timeout = null;
          func.call(this, arguments)
        }, remain)
      }
      // console.log(wait, remain, now, previous, timeout)
    };
  },
  // 等人一起上
  debounce: function (fn ,delay) {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.call(this, arguments)
      }, delay)
    }
  }
};

// window.utils = utils;