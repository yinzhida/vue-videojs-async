/*
 * Created Date: 2018-10-17 4:47:52
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2018-11-05 11:30:07
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */

export default {
  props: {
    initMarkers: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      togglekey: 0,
      newInitMarker: undefined,
      loadedmetadata: false
    }
  },

  watch: {
    initMarkers: {
      handler (value) {
        let initMarkers = this.getRegularMarkers(this.initMarkers)
        if (this.loadedmetadata) {
          this.$nextTick(() => {
            this.delAllMarkers()
            this.addMarkers(initMarkers)
          })
        } else {
          this.newInitMarker = initMarkers
        }
      },
      deep: true
    },

    m3u8 () {
      this.loadedmetadata = false
    }
  },

  methods: {
    addMarkers (markers) {
      let regularMarkers = this.getRegularMarkers(markers)
      this.video.markerspro.add(regularMarkers)
    },

    addMarker (marker) {
      this.addMarkers([marker])
    },

    delAllMarkers () {
      this.video.markerspro.removeAll()
    },

    delMarkersByIdx (idxArray) {
      this.video.markerspro.removeByIdx(idxArray)
    },

    updateMarkers (markers) {
      let regularMarkers = this.getRegularMarkers(markers)
      this.video.markerspro.updateMarkers(regularMarkers)
    },

    updateMarker (marker) {
      this.updateMarkers([marker])
    },

    getAllMarkers () {
      return this.video.markerspro.getMarkers()
    },

    getMarkersByIdx (idx) {
      let markers = []
      let allMarkers = this.video.markerspro.getMarkers()
      for (let marker of allMarkers) {
        if (marker.idx === idx) {
          markers.push(marker)
        }
      }
      return markers
    },

    getRegularMarkers (markers) {
      return markers.map((marker) => {
        let simpleMarker = this.createSimpleMarker()
        let simpleStyle = simpleMarker.markerStyle
        let mixStyle = Object.assign({}, simpleStyle, marker.markerStyle)
        return Object.assign({}, simpleMarker, marker, { markerStyle: mixStyle })
      })
    },

    loadedmetadataPlayerHandler () {
      this.loadedmetadata = true
      if (this.newInitMarker) {
        this.$nextTick(() => {
          this.delAllMarkers()
          this.addMarkers(this.newInitMarker)
        })
      }
    },

    createSimpleMarker () {
      return {
        type: 'simple',
        time: undefined,
        text: 'marker',
        idx: undefined,
        draggable: false,
        clickHandler: () => { },
        dragging: () => { },
        endDrag: () => { },
        markerStyle: {
          'height': '0',
          'width': '0',
          'border-radius': '0',
          'border': '6px solid #ffe300',
          'border-color': 'gold transparent transparent transparent',
          'background-color': 'transparent',
          'margin-left': '-4px',
          'bottom': '4px',
          'z-index': '200',
          'transform': 'none'
        }
      }
    }
  },

  mounted () {
    let initMarkers = this.getRegularMarkers(this.initMarkers)
    this.video.markerspro({
      markerStyle: {},
      markerTip: {
        display: false,
        text: function (marker) {
          return 'This is a break: ' + marker.text
        }
      },
      breakOverlay: {
        display: false,
        displayTime: 3
      },
      onMarkerReached: function (marker) {
      },
      onMarkerClick: function (marker) {
      },
      markers: initMarkers
    })
  }
}
