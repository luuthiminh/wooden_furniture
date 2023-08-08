import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "authLayout-layout",
    defineAsyncComponent(() => import("@/layouts/authLayout"))
  );
  app.component(
    "customerLayout-layout",
    defineAsyncComponent(() => import("@/layouts/customerLayout"))
  );
  app.component(
    "adminLayout-layout",
    defineAsyncComponent(() => import("@/layouts/adminLayout"))
  );
}
