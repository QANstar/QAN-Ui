import QANmenu from './src/menu';

/* istanbul ignore next */
QANmenu.install = function(Vue) {
  Vue.component(QANmenu.name, QANmenu);
};

export default QANmenu;
