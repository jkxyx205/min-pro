// pages/me/bind/bind.js
import Dialog from '../../../plugins/vant-weapp/dist/dialog/dialog';

Page({

  /**
   * Page initial data
   */
  data: {
    show: false,
    userId: '',
  },
  onClose(event) {
    if (event.detail === 'confirm') {
      // 异步关闭弹窗
      setTimeout(() => {
        this.setData({
          show: false
        });
      }, 1000);
    } else {
      this.setData({
        show: false
      });
    }
  },
  onConfirm: function(event) {
    if (event.detail) {
      this.data.userId = event.detail;
    } else {//TODO
      console.log("...." + this.data.userId)
      this.setData({
        userId: ''
      });
    }
  },
  addChild: function() {
      this.setData({
        show: true
      })
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