import { createApp } from "vue";
import { createPinia } from "pinia";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import VideoBackground from 'vue-responsive-video-background-player'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App).use(vuetify);
app.component('video-background', VideoBackground);

app.use(createPinia());
app.use(router);

app.mount("#app");
