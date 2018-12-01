// pages/homework/homework.js
Page({

  /**
   * Page initial data
   */
  data: {
      text: "",
      content:[{
          type:"text",
          text:"今天的作业",
      },
        {
          type: "text",
          text: "Hubot 是 GitHub 团队开源的一款聊天机器人技术，原目的是帮助 GitHub 员工更好的管理他们的软件。直到大家为这个机器人发掘了更多强大和好玩的用途。它能为团队内的任一成员服务，自动处理各种复杂的任务。",
        },
        {
          type: "text",
          text: "一种 ChatOps 式的技术，Hubot 可以用来记录和帮助公司所发生的几乎一切。它常被戏称为 GitHub 最勤奋的「员工」，因为它始终尽职尽责勤勤勉勉，并且作为团队的「一员」，如果你愿意，它会永远在线。",
        },
        {
          type: "text",
          text: "小程序中双击顶部的textbar，无法回到顶部",
        },
        {
          type: "text",
          text: "小程序中双击顶部的textbar，无法回到顶部",
        },
        {
          type: "text",
          text: "今天的作业",
        },
        {
          type: "photo",
          url: "/images/local/1.jpg",
        }
      ]
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
  hideTabBar: function() {
    wx.hideTabBar();
  },
  showTabBar: function() {
    wx.showTabBar()
  },
  sendHomework: function(event) {
   this.send({type: "text", text: event.detail.value})
  },
  sendPhoto: function() {
    let that = this;
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        let data = [];
        tempFilePaths.forEach(function(path) {
          data.push({ type: "photo", url: tempFilePaths[0]})
        });
        
        that.send(data);
      }
    })
  },
  send: function(data){

    this.data.content = this.data.content.concat(data);
   
    this.setData({
      content: this.data.content,
      text: ''
    })

    //滚动到底部
    const query = wx.createSelectorQuery()
    query.select('#content-view').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res[0].bottom);
      wx.pageScrollTo({
        scrollTop: res[0].bottom
      })
    })

  },
  preview: function(event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
     //图片预览
    wx.previewImage({
    current: src, // 当前显示图片的http链接
    // urls: [imgList]
      urls: ['https://s1.ax1x.com/2018/05/09/CwDdtP.png', 'https://s1.ax1x.com/2018/11/30/Fm2hlD.jpg'] // 需要预览的图片http链接列表
    })
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