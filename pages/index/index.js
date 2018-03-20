//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
       {img:'/image/1.jpg',type:'banOne'},
       {img:'/image/2.jpg',type:'banTwo'},
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },



    // item
    index_index_items_tmpl: {
      items: [
        { image: '/image/a1.jpg'},
        { image: '/image/a2.jpg'},
        { image: '/image/a3.jpg'}
      ]
    }
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    // console.log(e.detail.current)
  },
  clickBanner:function (e) {
    console.log(e.target.dataset.type)
    let commtype = e.target.dataset.type;
    if(commtype=='banOne'){
      console.log(1111)
    }
    if(commtype=='banTwo'){
      console.log(2222)
    }
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      console.log(userInfo)
      that.setData( {
        userInfo: userInfo
      })
    })
   
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
    wx.openLocation({
      latitude: 22.793340,
      longitude: 114.479970,
      scale: 18,
      name: '惠州市惠阳源记汽车音响改装中心',
      address: '惠州市惠阳区谈水大埔卢屋山桥头'
    })
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