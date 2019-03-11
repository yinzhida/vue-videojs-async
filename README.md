# vue-videojs-async

use videojs async throw vue async component

# install
npm install vue-videojs-async

# use
```js
// main.js
import { VueVideojs } from 'vue-videojs-async'
import 'vue-videojs-async.css'

Vue.use(VueVideojs)
```

```html
// vue file
<vue-videojs-async :src="src" :type="type" width="800" height="480"/>
```

you can change src through change props, you can see a demo in test folder 
```js
changeSrc () {
    this.src = 'https://cdn.theguardian.tv/HLS/2015/07/20/150716YesMen.m3u8'
    this.type = 'video/m3u8'
}
```

# TODO
add plugins...