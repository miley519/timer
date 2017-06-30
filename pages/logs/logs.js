const util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    modalHidden: true,
    toastHidden: true
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '任务记录'
    })
    console.log('aa',this);
    this.getLogs()
  },
  onLoad: function () { },
  getLogs: function() {
    let logs = wx.getStorageSync('logs')
    console.log('bbb', logs);
    logs.forEach(function(item,index,arr){
      item.startTime = new Date(item.startTime).toLocaleString()
    })
    console.log('logs', logs)
    this.setData({
      logs: logs
    })
  },
  switchModal: function() {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  hideToast: function() {
    this.setData({
      toastHidden: true
    })
  },
  clearLog: function(e) {
    wx.setStorageSync('logs', [])
    this.switchModal()
    this.setData({
      toastHidden: false,
      logs: []
    })
  }
})
