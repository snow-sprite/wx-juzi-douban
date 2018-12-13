// import wx from 'wx'
const baseUrl = 'https://api.jinse.com'
const wxApi = {
  get (url, data) {
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
        method: 'GET',
        dataType: 'json',
        success: (res) => {
          wx.hideLoading()
          resolve(res)
        },
        fail: err => {
          wx.hideLoading()
          reject(err)
        },
        complete: () => {
          wx.hideLoading()
        }
      })
    })
  },
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
          console.log('res', res)
          resolve(res)
          wx.hideLoading()
        },
        fail: err => {
          console.log('err', err)
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
