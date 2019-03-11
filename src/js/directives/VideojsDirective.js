/*
 * Created Date: 2018-08-21 10:09:55
 * Author: yinzhida Email: zhaoxinxin@qiyi.com
 * -----
 * Last Modified: 2019-03-11 15:39:49
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */
let videojsDirective = {
  inserted: function (el, binding) {
    let v = binding.value
    let videojs = window.videojs
    if (!videojs) {
      throw new Error('videojs未定义，初始化播放器失败！')
    }
    window.vueVideojsVideo = window.vueVideojsVideo || {}

    let options = Object.assign({
      'controlBar': {
        'playbackRateMenuButton': {
          'playbackRates': [1, 1.5, 2]
        }
      },
      'controls': true,
      'autoplay': true,
      'preload': 'auto',
      'inactivityTimeout': 0
    }, v.options)

    let videoTag = document.createElement('video')
    videoTag.setAttribute('class', 'video-js')

    let sourceTag = document.createElement('source')
    sourceTag.setAttribute('src', v.src)
    sourceTag.setAttribute('type', v.type || 'video/mp4')
    videoTag.appendChild(sourceTag)
    el.appendChild(videoTag)
    window.vueVideojsVideo[v.id] = videojs(videoTag, options)
  },

  // 切换src，其他属性变化暂时不予响应
  update: function (el, binding) {
    let v = binding.value
    let oldv = binding.oldValue
    if (oldv.src === v.src) {
      return
    }
    let video = window.vueVideojsVideo[v.id]
    if (!video) {
      return
    }
    video.src({
      'src': v.m3u8
    })
  },

  // 销毁播放器
  unbind: function (el, binding) {
    let v = binding.value
    let video = window.vueVideojsVideo[v.id]
    video.dispose()
    window.vueVideojsVideo[v.id] = undefined
  }
}
export default videojsDirective
