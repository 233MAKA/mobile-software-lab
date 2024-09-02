// pages/detail/detail.js
var common = require('../../utils/common.js') //引用公共JS文件
Page({
  /**
   * 页面的初始数据
   */
  data: {
    article:{
      id:"264698",
      title:"俄罗斯联邦驻华大使杰尼索夫会见校党委书记顾家山一行并接受《力冈译文全集》赠予",
      poster:'http://www.ahnu.edu.cn/__local/A/C7/68/C2C9E5E2161A466A2D54D21A63C_DD3FEC40_4EBBB.jpg?e=.jpg',
      content:'本网讯……巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉',
      add_date:'2018-03-05',
      num:0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    let id = options.id

    var article = wx.getStorageSync(id)
    if(article!=''){
      this.setData({
        article:article,
        isAdd:true
      })
    }
    else {
      let result = common.getNewsDetail(id)
      if(result.code=="200")
      {
        this.setData({
          article:result.news,
          isAdd:false
        })
      }
    }

    let result = common.getNewsDetail(id)
    if(result.code == "200"){
      this.setData({article:result.news})
    }
  },
// 添加到收藏夹
  addFavorites:function(options) 
  {
    let article = this.data.article;
    wx.setStorageSync(article.id,article);
    this.setData({isAdd:true});
  },
// 取消收藏
  cancelFavorites:function(){
    let article = this.data.article;
    wx.removeStorageSync(article.id);
    this.setData({isAdd:false});
  },


  goToDetail:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../detail/detail?id='+id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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