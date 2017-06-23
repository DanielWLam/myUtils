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
  },
  isJSON: function (str) {
    try {
      let o = JSON.parse(str);
      if (o && typeof o === 'object') { // 考虑null的情况
        return o
      }
    } catch(e) {
      
    }
    return false;
  },
  // 数组乱序
  shuffle: function (array) {
    let _arr = array.concat(); // 形成副本
    for (let i = 0; i < _arr.length; i++) {
      let j = Math.floor(Math.random() * i)
      // if (j !== i) {
        let tmp = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = tmp
      // }
    }
    return _arr;
  }
};

// window.utils = utils;