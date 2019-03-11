/*
 * Created Date: 2019-03-11 14:51:47
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2019-03-11 15:00:39
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2019 IQIYI
 */

<template>
  <div v-videojs="{m3u8: m3u8, f4vUrl: f4vUrl, videoType: videoType, type: type, id: playerId, options: options}" class="videojs-vue" :style="innerDimension"></div>
</template>

<script>
import VideojsDirective from '../directives/VideojsDirective'
import { PlayerContainerMixin } from '../mixins/playerContainer'
export default {
  name: 'Videojs',

  props: {
    m3u8: String,
    f4vUrl: String,
    videoType: String,
    playerId: {
      type: String,
      default: '1'
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 450
    },
    type: {
      type: String,
      default: 'application/m3u8'
    },
  },

  computed: {
    innerDimension () {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      };
    }
  },

  directives: {
    videojs: VideojsDirective
  },

  mixins: [PlayerContainerMixin],

  mounted () {
    this.video = window.vueVideojsVideo[this.playerId]
    this.videoOnEvents()
    this.$emit('video-ready', this.video)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../css/components/videojs.css";
</style>
