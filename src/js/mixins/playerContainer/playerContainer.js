/*
 * Created Date: 2018-10-19 3:39:40
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2019-02-26 11:41:14
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */

export default {
  methods: {
    playerEventHandler (e, args, video) {
      let handlerName = e + 'PlayerHandler'
      if (typeof this[handlerName] === 'function') {
        this[handlerName]({ args, video })
      }
    },

    videoReady (video) {
      // 将video挂载到this上
      this.video = video
      // 监听video事件，实现快捷监听
      this.videoOnEvents()
      // 继续向上层汇报video-ready事件
      this.$emit('video-ready', video)
    },

    videoOnEvents () {
      let events = [
        'fullscreenchange',
        'stageclick',
        'loadstart',
        'waiting',
        'canplay',
        'canplaythrough',
        'playing',
        'ended',
        'seeking',
        'seeked',
        'play',
        'firstplay',
        'pause',
        'durationchange',
        'error',
        'loadedmetadata',
        'posterchange',
        'textdata',
        'mousedown',
        'touchstart',
        'touchmove',
        'touchend',
        'touchleave',
        'touchcancel',
        'tap',
        'click',
        'focus',
        'blur',
        'mousemove',
        'mouseup',
        'keydown',
        'keyup',
        'progress',
        'ready',
        'timeupdate',
        'loadeddata',
        'dispose',
        'abort',
        'suspend',
        'emptied',
        'stalled',
        'ratechange',
        'volumechange',
        'texttrackchange'
      ]
      for (let e of events) {
        this.video.on(e, (...args) => {
          this.playerEventHandler(e, args, this.video)
        })
      }
    }
  }
}
