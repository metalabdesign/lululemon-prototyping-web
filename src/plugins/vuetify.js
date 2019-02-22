import Vue from "vue";
import Vuetify, {
  VFlex,
  VLayout,
  VSpacer,
  VContainer,
  VImg,
  VExpansionPanel,
  VIcon,
  VBtn,
  VApp,
  VContent
} from "vuetify/lib";
import '../custom-vuetify.styl';

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
    VContent,
    VExpansionPanel
  },
  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
  customProperties: true,
  iconfont: "md"
});
