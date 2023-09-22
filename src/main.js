import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

window.axios = axios;

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponents } from "./utils/import";
import i18n from "./i18n";

const lang = localStorage.getItem("lang") || "en";

axios.defaults.baseURL = "https://landlstore.azurewebsites.net/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

axios.defaults.headers.common["Accept-language"] = lang;
document.documentElement.language = lang;

const app = createApp(App).use(i18n);

registerGlobalComponents(app);

app.use(router);

app.mount("#app");
