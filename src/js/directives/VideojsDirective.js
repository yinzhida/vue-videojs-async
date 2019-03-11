/*
 * Created Date: 2018-08-21 10:09:55
 * Author: yinzhida Email: zhaoxinxin@qiyi.com
 * -----
 * Last Modified: 2019-03-11 15:01:03
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
    videoTag.setAttribute('class', 'video-js vjs-default-skin vjs-big-play-centered')

    // 用以检查videojs的版本， 旧版本采用videojs函数直接初始化
    if (!videojs.playerRun) {
      let sourceTag = document.createElement('source')
      sourceTag.setAttribute('src', v.m3u8)
      sourceTag.setAttribute('type', 'application/x-mpegURL')
      sourceTag.setAttribute('videotype', v.videoType)
      sourceTag.setAttribute('f4vurl', v.f4vUrl)
      videoTag.appendChild(sourceTag)
      el.appendChild(videoTag)
      window.vueVideojsVideo[v.id] = videojs(videoTag, options)
    } else {
      // videojs 新版本，通过playerRun初始化
      el.appendChild(videoTag)
      window.vueVideojsVideo[v.id] = videojs.playerRun(Object.assign(options, {
        videoId: videoTag,
        m3u8Url: v.m3u8,
        f4vUrl: v.f4vUrl,
        videoType: v.videoType,
        type: v.type
      }))
    }
  },

  // 切换src，其他属性变化暂时不予响应
  update: function (el, binding) {
    let v = binding.value
    let oldv = binding.oldValue
    if (oldv.m3u8 === v.m3u8 && oldv.f4vUrl === v.f4vUrl) {
      return
    }
    let video = window.vueVideojsVideo[v.id]
    if (!video) {
      return
    }
    video.tech_.hls_.config.f4vUrl = v.f4vUrl
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
