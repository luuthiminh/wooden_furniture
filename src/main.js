import { createApp } from "vue";
import ViewUIPlus from "view-ui-plus";
import locale from "view-ui-plus/dist/locale/en-US";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

window.axios = axios;

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponents } from "./utils/import";
// import i18n from "./i18n";

// const lang = localStorage.getItem("lang") || "en";

axios.defaults.baseURL = "https://landlstore.azurewebsites.net/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

// axios.defaults.headers.common["Accept-language"] = lang;
// document.documentElement.language = lang;

const app = createApp(App);
registerGlobalComponents(app);

app.use(router).use(store);
app.use(ViewUIPlus, {
  locale,
});

app.mount("#app");
