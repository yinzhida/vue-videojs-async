<template>
  <div id="app">
    <vue-videojs-async :src="src" :type="type" width="800" height="480"/>
    <button @click="changeSrc" class="btn">change src to m3u8</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }
  },
  methods: {
    changeSrc () {
      this.src = 'https://cdn.theguardian.tv/HLS/2015/07/20/150716YesMen.m3u8'
      this.type = 'video/m3u8'
    }
  }
}
</script>

<style>
.btn {
  margin: 50px 10px;
}
</style>
