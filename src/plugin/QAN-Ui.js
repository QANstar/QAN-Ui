import QANbutton from "./components/button/src/button.vue";
import QANmenuItem from "./components/menu/src/menu-item.vue";
import QANmenu from "./components/menu/src/menu.vue";
import QANcard from "./components/card/src/card.vue";
import QANmodal from "./components/modal/src/modal.vue";
let QAN_Ui = {};
QAN_Ui.install = function (Vue) {
  Vue.component(QANmenu.name, QANmenu);
  Vue.component(QANmenuItem.name, QANmenuItem);
  Vue.component(QANbutton.name, QANbutton);
  Vue.component(QANcard.name, QANcard);
  Vue.component(QANmodal.name, QANmodal);
};

export default QAN_Ui;
