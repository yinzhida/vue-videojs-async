/*
 * Created Date: 2018-12-11 14:19:00
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2018-12-11 18:07:07
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */
<script>
import Lvjs from './Lvjs'
import { PlayerMarkerMixin } from '../mixins/playerMarker'

export default {
  name: 'MarkerPlayer',

  extends: Lvjs,

  mixins: [PlayerMarkerMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
