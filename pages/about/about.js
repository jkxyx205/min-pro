// about.js
Page({

  /**
   * Page initial data
   */
  data: {
    phone: "18136411015"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },
  makePhoneCall: function() {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phone,
    })
  },
  setClipboardData: function() {
    wx.setClipboardData({
      data: 'jiananjiaoxue',
      success(res) {
       wx.showToast({
         title: '复制成功',
       })
      }
    })
  },
  addContact: function() {
    var that = this;
    wx.addPhoneContact({
      firstName: '罗老师',//联系人姓名
      mobilePhoneNumber: that.data.phone,//联系人手机号
    })
  },
  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})