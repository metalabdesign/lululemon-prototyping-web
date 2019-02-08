import Vue from "vue";
import Vuetify, {
  VFlex,
  VLayout,
  VSpacer,
  VContainer,
  VImg,
  VIcon,
  VBtn,
  VApp,
  VContent
} from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VFlex,
    VLayout,
    VSpacer,
    VContainer,
    VImg,
    VIcon,
    VBtn,
    VApp,
    VContent
  },
  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  customProperties: true,
  iconfont: "md"
});
