import Vue from "vue";

import "./styles/quasar.styl";
import "quasar/dist/quasar.ie.polyfills";
import lang from "quasar/lang/pt-br.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

import {
  Quasar,
  QLayout,
  QTabs,
  QRouteTab,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QFab,
  QFabAction,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QAvatar,
  QFooter
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QFab,
    QFabAction,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QAvatar,
    QTabs,
    QRouteTab,
    QFooter
  },
  directives: {},
  plugins: {},
  lang: lang
});
