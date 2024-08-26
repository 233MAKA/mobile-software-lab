Page({
//页面初始数据
  data: {
    region:['安徽省','芜湖市','弋江区']
  },
//更新
regionChange:function(e){
  this.setData({region:e.detail.value});
  this.getLocation();
  this.getWeather();
},

//实况天气
getLocation:function(){
  var that = this;
  wx.request({
    url: 'https://geoapi.qweather.com/v2/city/lookup' ,
    data:{
      location:that.data.region[1],
      key:'95a5b63cbd544b48a175cf69d7088f6b'
    },
    success:function(res){
      // console.log(res.data);
      that.setData({location:res.data.location[0].id});
    }
    
  })
},
getWeather:function(){
  var that = this;
  // var locationid='0';
  var locationid='101220301';
  // this.getLocation();
  console.log(that.data.location);
  console.log(that.data.region[1]);
  console.log(that.data.__webviewId__);
  wx.request({
    url:'https://devapi.qweather.com/v7/weather/now',
    data:{
      // location:that.data.location,
      location:locationid,
      key:'95a5b63cbd544b48a175cf69d7088f6b'
    },
    success:function(res){
      that.setData({now:res.data.now});
      // console.log(res.data);
    }
    
  })
},

//生命周期函数--监听页面加载
  onLoad: function (options) {
    this.getLocation();
    this.getWeather();
  },

//生命周期函数--监听页面初次渲染完成
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

//生命周期函数--监听页面隐藏
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