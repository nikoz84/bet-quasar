import NotFound from "./pages/Error404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "./pages/Home.vue"),
    meta: {
      requiresAuth: false,
      title: "Inicio"
    }
  },
  {
    path: "/esportes",
    name: "esportes",
    component: () =>
      import(/* webpackChunkName: "esporte" */ "./pages/Esportes.vue"),
    meta: {
      requiresAuth: false,
      title: "Esportes"
    }
  },
  {
    path: "/ao-vivo",
    name: "aovivo",
    component: () =>
      import(/* webpackChunkName: "aovivo" */ "./pages/Aovivo.vue"),
    meta: {
      requiresAuth: false,
      title: "Ao Vivo"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./pages/Login.vue"),
    meta: {
      requiresAuth: false,
      title: "Login"
    }
  },
  { path: "*", component: NotFound }
];

export default routes;
