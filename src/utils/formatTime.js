const formatObj = {
  getTime (value) {
    if (typeof value === 'string' && value.indexOf('-') > 0) {
      value = value.replace(/-/g, '/')
    }
    // 获取详细时间
    let myDate = new Date(value)
    let Y = myDate.getFullYear()
    let M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1)
    let D = (myDate.getDate() < 10 ? '0' + (myDate.getDate()) : myDate.getDate())
    let h = (myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
    let m = (myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
    let detailDate = Y + '/' + M + '/' + D + ' ' + h + ':' + m
    return detailDate
  }
}

export default formatObj
