// import wx from 'wx'
const baseUrl = 'https://api.jinse.com'

// 请求参数 重构
const paramsSpliceUrl = (url, params) => {
  if (params) {
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return url
}

const wxApi = {
  // get
  get (url, data) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: 'loading...',
        mask: true
      })
      url = paramsSpliceUrl(url, data)
      wx.request({
        url: `${baseUrl}${url}`,
        header: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        success: (res) => {
          wx.hideLoading()
          resolve(res)
        },
        fail: err => {
          console.warn('err', err)
          wx.hideLoading()
          reject(err)
        },
        complete: () => {
          wx.hideLoading()
        }
      })
    })
  },
  // post
  post (url, data) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: 'loading...',
        mask: true
      })
      wx.request({
        url: `${baseUrl}${url}`,
        data,
        header: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
          resolve(res)
          wx.hideLoading()
        },
        fail: err => {
          console.warn('err', err)
          reject(err)
          wx.hideLoading()
        },
        complete: () => {
          wx.hideLoading()
        }
      })
    })
  }
}

export default wxApi
