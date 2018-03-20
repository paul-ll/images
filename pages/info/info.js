//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //向模板传入数据
    // 轮播
    userInfo:'',
    index_index_scroll_tmpl: {
      images: [
        '/image/1.jpg',
        '/image/2.jpg',
        '/image/3.jpg',
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    }
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    new app.globalData.WeToast();
    if(app.globalData.userInfo){
      app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    }else {
      this.wetoast.toast({
          title: '您未授权登录~'
      })
      setTimeout(function  (argument) {
        wx.openSetting({
         success: function (data) {
          console.log(data)
            if(data) {
               if (data.authSetting["scope.userInfo"] == true) {
                  app.getUserInfo(function (userInfo) {
                  //更新数据
                  that.setData({
                    userInfo: userInfo
                  })
                })
              }
            }         },
          fail: function () {
            console.info("设置失败返回数据");
          }       
        });
      },2000)

    }
    

  },
  calling: function () {
    
    wx.makePhoneCall({
      phoneNumber: '13910563969',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  //http://lbs.qq.com/tool/getpoint/ 坐标拾取器
  click: function (e) {
    this.wetoast.toast({
                    title: '正在跳转到地图~'
                })
    setTimeout(function () {
      wx.openLocation({
        latitude: 23.107094,
        longitude: 113.321185,
        scale: 18,
        name: '西服定制',
        address: '广东省广州市越秀区S2芳村-广州塔航线'
      })
    }, 2000)
    
  },
  onShareAppMessage: function () {
    return {
      title: '盛丰再生资源回收',
      imageUrl: '../../image/1.jpg',
      path: '/pages/index/index',
      success: function (res) {
        
        // 转发成功

      }
    }
    
  },
})