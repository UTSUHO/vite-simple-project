/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import { registerStore } from '@/stores/main';

export function registerPlugins(app) {
  app.use(pinia).use(vuetify).use(router)
  //注册打包好的全局store
  registerStore();
}

import "@/router/navigationGuards";
