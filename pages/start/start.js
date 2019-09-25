// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      { imageUrl: '../images/小猪引导页-生鲜果蔬.jpg' },
      { imageUrl: '../images/小猪引导页-医药快送.jpg' },
      { imageUrl: '../images/小猪引导页-超多百货.jpg'}
    ],
    swiperCurrent: 0,
    swiperMaxNumber: 3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 启动页面变换触发事件
   */
  swiperchange: function (e) {
    this.setData({
      // e.detail.current当前启动页的索引数值从0开始
      swiperCurrent: e.detail.current
    })
  },
  /**
   * 最后启动页的跳转首页按钮事件
   */
  gotToIndex: function (e) {
    // 进入首页
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})