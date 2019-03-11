# vue-videojs-async

use videojs through vue async component, so you can load video.js and video.css when you really need it.

# github
https://github.com/yinzhida/vue-videojs-async for more details

# install
npm install --save vue-videojs-async

# use
```js
// main.js
import { VueVideojs } from 'vue-videojs-async'
import 'vue-videojs-async/dist/vue-videojs-async.css'

Vue.use(VueVideojs)
```

```html
// vue template
<vue-videojs-async :src="src" :type="type" width="800" height="480"/>
```

you can change src through change props, you can see a demo in test folder 
```js
changeSrc () {
    this.src = 'https://cdn.theguardian.tv/HLS/2015/07/20/150716YesMen.m3u8'
    this.type = 'video/m3u8'
}
```

# change videojs source file path(cdn or your private source path)
the default path of videojs source file is '//vjs.zencdn.net/7.3.0/video.min.js' and '//vjs.zencdn.net/7.3.0/video-js.min.css'
you can change the path(url) of videojs source file like this: 
```js
import { Videojs, asyncVideojsCompFactory } from 'vue-videojs-async'
// ...
asyncVideojsCompFactory(Videojs, videojsPath, videojsCssPath, compName)
```

the default compName is 'vue-custom-videojs' you can overwrite it by give the forth parameter.
asyncVideojsCompFactory will register a new async vue component,
the new component named compName will load your custom videojs source files.
then you can use your custom component like this:
```html
// vue template
<vue-custom-videojs :src="src" :type="type" width="800" height="480"/>
```

# TODO
add plugins...