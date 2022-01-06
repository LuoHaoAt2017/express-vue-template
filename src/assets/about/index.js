import Vue from "vue";
import App from './index.vue';

const app = new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
});

export default app;