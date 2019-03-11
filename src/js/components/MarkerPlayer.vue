/*
 * Created Date: 2018-12-11 14:19:00
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2019-03-11 15:47:29
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */
<script>
import Videojs from './Videojs'
import { PlayerMarkerMixin } from '../mixins/playerMarker'

export default {
  name: 'MarkerPlayer',

  extends: Videojs,

  mixins: [PlayerMarkerMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
