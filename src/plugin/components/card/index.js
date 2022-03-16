import QANcard from './src/card';

/* istanbul ignore next */
QANcard.install = function(Vue) {
  Vue.component(QANcard.name, QANcard);
};

export default QANcard;
