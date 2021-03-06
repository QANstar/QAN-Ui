import Vue from "vue";
import VueRouter from "vue-router";
import ComponentView from "../views/ComponentView.vue";
import Button from "../components/button.vue";
import Nav from "../components/nav.vue";
import Card from "../components/card.vue";
import Modal from "../components/modal.vue";
import Color from "../components/color.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/component/button",
  },
  {
    path: "/component",
    component: ComponentView,
    redirect: "/component/button",
    children: [
      {
        path: "/component/button",
        component: Button,
      },
      {
        path: "/component/nav",
        component: Nav,
      },
      {
        path: "/component/card",
        component: Card,
      },
      {
        path: "/component/modal",
        component: Modal,
      },
      {
        path: "/component/color",
        component: Color,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
