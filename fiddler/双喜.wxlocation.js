var locationUtil  = {
  getWxset: function() {
	//  alert('ddd')
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: location.origin + '/userwx/getConfigJs?url=' + encodeURIComponent(location.href),
        success: function (res) {
          resolve(JSON.parse(res.result))
        }
      });
    })
  },
  configWechat: function (configData) {
    // 获取地址信息
    wx.config({
      debug: false,
      appId: configData.appId,
      timestamp: parseInt(configData.timestamp),
      nonceStr: configData.nonceStr,
      signature: configData.signature,
      jsApiList: ['getLocation']
    });

    wx.ready(() => {
      wx.getLocation({
        type: 'gcj02',
        success: (res) => {
          const geocoder = new qq.maps.Geocoder({
            complete: (result) => {
              // 解析到地址
              // console.log('获取address: ', result.detail);
			  var xx=(parseInt(99000*Math.random())/1000000).toFixed(5);
			  var d=["黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","浦东新区","闵行区","宝山区","嘉定区","金山区","松江区","青浦区","奉贤区","崇明区"]
			  result.detail.addressComponents.district=d[parseInt(Math.random()*d.length)];
			 // alert(result.detail.addressComponents.district)
              let area = {
                province: result.detail.addressComponents.province,
                city: result.detail.addressComponents.city,
                region: result.detail.addressComponents.district,
                longitude: parseFloat(result.detail.location.lng)+parseFloat(xx),
                latitude: parseFloat(result.detail.location.lat)+parseFloat(xx)
              };
              // 保存位置信息
              localStorage.setItem("gameLocation", JSON.stringify(area));
            },
            error: () => {
              alert("未解析到地址，请重新授权定位！");
              window.location.reload();
            }
          })

          geocoder.getAddress(new qq.maps.LatLng(res.latitude, res.longitude));
        },
        fail: () => {
          
        },
        cancel: () => {
          
        }
      })
    });
  }
}
localStorage.removeItem("gameLocation")
//localStorage.setItem("gameLocation", null);
// 
