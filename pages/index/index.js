//index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/local/1.jpg',
      '/images/local/2.jpg',
      '/images/local/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {

  },
  fzMore: function() {
    wx.switchTab({
      url: '/pages/about/about'
    })
  }
    
})
