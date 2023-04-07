 // 封装存值/删除方法   time为正值是存值    time为负值是删除
 function setcookie(key, value, time) {
     // 1获取当前时间
     var date = new Date()
         // 2设置过期时间
     date.setDate(date.getDate() + time)
         // 3存值
     document.cookie = key + '=' + escape(value) + ';expires=' + date.toGMTString()
 }


 // 封装cookie取值
 // sessionStorage.getItem('key')
 function getcookie(key) {
     // 将字符串转化成数组
     var arr = document.cookie.split('; ')
         // 循环数组
     for (var i = 0; i < arr.length; i++) {
         // 将数组中每一项进行切割
         var list = arr[i].split('=')
             // 判断我传入的key是否和切割后的key相等
         if (key == list[0]) {
             // 如果相等直接把key的值return出去
             return unescape(list[1])
         }
     }

 }