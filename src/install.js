import DateWidget from './components/widgets/DateWidget.vue';
import TextWidget from './components/widgets/TextWidget.vue';
import SchematiqueForm from './components/SchematiqueForm.vue';
import SchematiqueWidget from './components/SchematiqueWidget.vue';

const SchematiqueSimple = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('date-widget', DateWidget);
    Vue.component('text-widget', TextWidget);
    Vue.component('schematique-form', SchematiqueForm);
    Vue.component('schematique-widget', SchematiqueWidget);
  },
};

export default SchematiqueSimple;
