import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "authLayout-layout",
    defineAsyncComponent(() => import("@/layouts/authLayout"))
  );
}
