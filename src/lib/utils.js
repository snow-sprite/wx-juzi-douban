const utils = {
  getTime (value) {
    if (typeof value === 'string' && value.indexOf('-') > 0) {
      value = value.replace(/-/g, '/')
    } else {
      value = value * 1000
    }
    // 获取详细时间
    let myDate = new Date(value)
    // let Y = myDate.getFullYear()
    // let M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1)
    // let D = (myDate.getDate() < 10 ? '0' + (myDate.getDate()) : myDate.getDate())
    let h = (myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
    let m = (myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
    // let detailDate = Y + '/' + M + '/' + D + ' ' + h + ':' + m
    let detailDate = h + ':' + m
    return detailDate
  }
}

export default utils
