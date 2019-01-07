import Vue from 'vue'
// 获取月份
Vue.filter('getMonth', (value) => {
  if (value) {
    value = new Date(value.toString()).getMonth() + 1
  }
  return value
})
// 获取日期
Vue.filter('getDate', (value) => {
  if (value) {
    value = new Date(value.toString()).getDate()
  }
  if (value < 10) {
    value = '0' + value
  }
  return value
})
// 获取“昨天”日期
Vue.filter('getDay', (value) => {
  if (value) {
    let tempValue = value.replace(/-/g, '/')
    var oldTime = new Date(tempValue).getTime() / (1000 * 3600 * 24)

    var y = new Date().getFullYear()
    var m = new Date().getMonth() + 1
    var d = new Date().getDate()

    var tempNewDate = y + '/' + m + '/' + d + ' ' + '00:00'
    var time = new Date(tempNewDate).getTime() / (1000 * 3600 * 24)

    if (time - oldTime > 0 && time - oldTime <= 1) {
      value = '昨天'
    } else if (time - oldTime <= 0) {
      value = '今天'
    } else {
      value = ''
    }
  }
  return value
})

// 获取星期
Vue.filter('getWeek', (value) => {
  if (value) {
    var oneDay = 1000 * 3600 * 24
    var time = new Date().getTime()
    var oldTime = new Date(value.toString()).getTime()
    if (time - oldTime > 0 && time - oldTime > oneDay) {
      let tempVal = new Date(value.toString()).getDay()
      switch (tempVal) {
        case 0:
          value = '星期日'
          break
        case 1:
          value = '星期一'
          break
        case 2:
          value = '星期二'
          break
        case 3:
          value = '星期三'
          break
        case 4:
          value = '星期四'
          break
        case 5:
          value = '星期五'
          break
        case 6:
          value = '星期六'
          break
      }
    } else {
      let tempVal = new Date(value.toString()).getDay()
      switch (tempVal) {
        case 0:
          value = '星期日'
          break
        case 1:
          value = '星期一'
          break
        case 2:
          value = '星期二'
          break
        case 3:
          value = '星期三'
          break
        case 4:
          value = '星期四'
          break
        case 5:
          value = '星期五'
          break
        case 6:
          value = '星期六'
          break
      }
    }
  }
  return value
})
