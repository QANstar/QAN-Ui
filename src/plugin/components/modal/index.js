import QANmodal from "./src/modal";

/* istanbul ignore next */
QANmodal.install = function (Vue) {
  Vue.component(QANmodal.name, QANmodal);
};

export default QANmodal;
