import QANmenu from './src/menu';
import QANmenuItem from './src/menu-item.vue'
let QAN_Menu = {}
QAN_Menu.install = function (Vue) {
  Vue.component(QANmenu.name, QANmenu);
  Vue.component(QANmenuItem.name, QANmenuItem);


}

export default QAN_Menu;
