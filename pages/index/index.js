//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    location: '位置不明',
    weather:"雾霾",
    array:["蒋文强",26,"男","17688922500","632795201@qq.com","前端开发工程师","二年"],
    key:["性别：","年龄：","电话：","邮箱：","工作年限：","学历/专业：","现居地："],
    name:["姓名："],
  },
  callphone:function(){
    wx.makePhoneCall({
      phoneNumber: '17688922500'
    })
  },
  changeBig: function (e) {
    console.log(e);
    var that = this;
    wx.previewImage({
      current:"http://jwqiang.cn/test/ewm.jpg",
      urls: ["http://jwqiang.cn/test/ewm.jpg"] // 需要预览的图片http链接列表
    })
  }  
})
