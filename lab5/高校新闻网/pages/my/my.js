// pages/my/my.js
var common = require('../../utils/common.js') //引用公共JS文件
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //临时微信用户昵称和头像
    nickName:"未登录",
    src:"../../images/index.png",
    //临时收藏夹新闻数据
    newsList:[{
      // id:"264698",
      // title:"俄罗斯联邦驻华大使杰尼索夫会见校党委书记顾家山一行并接受《力冈译文全集》赠予",
      // poster:'http://www.ahnu.edu.cn/__local/A/C7/68/C2C9E5E2161A466A2D54D21A63C_DD3FEC40_4EBBB.jpg?e=.jpg',
      // add_date:'2018-03-05'
    }]
    
  },
  getMyInfo:function(e){
    let info = e.detail.userInfo;
    this.setData({
      isLogin:true,
      src:info.avatarUrl,
      nickName:info.nickName
    })

    //获取收藏列表
    this.getMyFavorites();
  },
  goToDetail: function(e) {
    //获取携带的data-id数据
    let id = e.currentTarget.dataset.id;
    //携带新闻id进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },

  getMyFavorites:function(){
    let info = wx.getStorageInfoSync();
    let keys = info.keys;
    let num = keys.length;

    let myList = [];
    for (var i = 0;i < num; i++) {
      let obj = wx.getStorageSync(keys[i]);
      myList.push(obj);
    }
    this.setData({
      newsList:myList,
      num:num
    });
    // this.onShow();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(options) {
    // this.setData({
    //   newsList:myList,
    //   num:num
    //   // show:true
    // });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})