/*
 * Created Date: 2018-10-17 4:38:41
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2019-03-11 14:57:55
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */

import { Videojs, MarkerPlayer } from './src/js/components'
import { PlayerMarkerMixin } from './src/js/mixins/playerMarker'
import { PlayerContainerMixin } from './src/js/mixins/playerContainer'
import DynamicOnline from 'dynamic-loader'

function asyncLoaderFactory (comp, videojsPath, videojsCssPath) {
  videojsPath = videojsPath || 'https://vjs.zencdn.net/ie8/ie8-version/videojs-ie8.min.js'
  videojsCssPath = videojsCssPath || 'https://vjs.zencdn.net/7.4.1/video-js.css'
  return (resolve, reject) => {
    DynamicOnline([videojsPath, videojsCssPath], true).then(() => {
      resolve(comp)
    }, () => {
      reject('videojs加载失败')
    })
  }
}

function asyncVideojsCompFactory (compName, comp, videojsPath, videojsCssPath) {
  return {
    install (Vue) {
      Vue.component(compName, asyncLoaderFactory(comp, videojsPath, videojsCssPath))
    }
  }
}

const VueVideojs = {
  install (Vue) {
    Vue.component('vue-videojs', asyncLoaderFactory(Videojs))
    Vue.component('marker-player', asyncLoaderFactory(MarkerPlayer))
  }
}

export {
  VueVideojs,
  Videojs,
  MarkerPlayer,
  PlayerMarkerMixin,
  PlayerContainerMixin,
  asyncVideojsCompFactory
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueVideojs)
}
