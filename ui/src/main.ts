import "./assets/tailwind.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import en from "./locales/en.json";
import pl from "./locales/pl.json";
import router from "./router";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale:
    navigator.language.split("-")[0] ||
    import.meta.env.VITE_I18N_LOCALE ||
    "en",
  fallbackLocale: "en",
  messages: {
    pl,
    en,
  },
});

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
