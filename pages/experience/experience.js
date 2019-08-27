var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../img/bai.png',
      '../../img/drink.png',
      '../../img/you.png',
      '../../img/good.png',
      '../../img/ai.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 300,
    circular:true,
    indicatorDots:true
  },
  bai:function(){
    wx.navigateTo({
      url: "/pages/bai/bai"
    })
  },
   drink:function(){
    wx.navigateTo({
      url: "/pages/drink/drink"
    })
  },
   ai:function(){
    wx.navigateTo({
      url: "/pages/ai/ai"
    })
  },
   you:function(){
    wx.navigateTo({
      url: "/pages/you/you"
    })
  },
   good:function(){
    wx.navigateTo({
      url: "/pages/good/good"
    })
  },
   nh: function () {
     wx.navigateTo({
       url: "/pages/nh/nh"
     })
   },  
   ushop: function () {
     wx.navigateTo({
       url: "/pages/ushop/ushop"
     })
   },
  sunpan: function () {
    wx.navigateTo({
      url: "/pages/sunpan/sunpan"
    })
  }, 
  zyz: function () {
    wx.navigateTo({
      url: "/pages/zyz/zyz"
    })
  },        
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})