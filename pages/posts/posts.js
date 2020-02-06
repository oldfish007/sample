// pages/posts/posts.js
var postData = require('../../data/posts-data')
Page({

  /**产生事件 捕捉事件  回调函数 处理事件
   * 页面的初始数据
   * onload
   * onShow
   * onReady
   */
  data: {
    'date':'Nov 18 2016',
    'title':'正是虾肥蟹壮时',
    'posts_key':[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      'posts_key': postData.postList
    })

  },

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid
    //console.log("on post id is"+postId)
    wx.navigateTo({
      url:"post-detail/post-detail"
    })
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')

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
    console.log('onShare')
  }
})