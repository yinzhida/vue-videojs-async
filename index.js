/*
 * Created Date: 2018-10-17 4:38:41
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2019-03-11 16:11:40
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */

import { Videojs } from './src/js/components'
import { PlayerContainerMixin } from './src/js/mixins/playerContainer'
import loadjs from 'loadjs'

function asyncLoaderFactory (comp, videojsPath, videojsCssPath) {
  videojsPath = videojsPath || '//vjs.zencdn.net/7.3.0/video.min.js'
  videojsCssPath = videojsCssPath || '//vjs.zencdn.net/7.3.0/video-js.min.css'
  return (resolve, reject) => {
    try {
      loadjs([videojsPath, videojsCssPath], 'videojs')
      loadjs.ready('videojs', function () {
        /* foo.js & bar.js loaded */
        resolve(comp)
      })
    } catch (e) {
      console.warn(e)
      reject('videojs加载失败!')
    }
  }
}

function asyncVideojsCompFactory (compName = 'vue-custom-videojs', comp, videojsPath, videojsCssPath) {
  return {
    install (Vue) {
      Vue.component(compName, asyncLoaderFactory(comp, videojsPath, videojsCssPath))
    }
  }
}

const VueVideojs = {
  install (Vue) {
    Vue.component('vue-videojs', asyncLoaderFactory(Videojs))
  }
}

export {
  VueVideojs,
  Videojs,
  PlayerContainerMixin,
  asyncVideojsCompFactory
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueVideojs)
}
