import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import ViewUIPlus from "view-ui-plus";

import zh from "view-ui-plus/dist/locale/zh-CN";
import vn from "view-ui-plus/dist/locale/vi-VN";

const i18n = createI18n({
  allowComposition: true,
  globalInjection: true,
  legacy: false,
  locale: "en-US",
  messages: {
    "zh-CN": zh,
    "vi-VN": vn,
  },
});

const app = createApp({
  //... options
});

app.use(i18n);
app.use(ViewUIPlus, {
  i18n,
});
