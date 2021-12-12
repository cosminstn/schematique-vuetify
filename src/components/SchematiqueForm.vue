<template>
  <v-container>
    <schematique-widget :schema="{ type: 'text', label: 'Form component' }" />
  </v-container>
</template>

<script>
import SchematiqueWidget from './SchematiqueWidget.vue';

export default {
  name: 'SchematiqueForm',
  props: {
    schema: {
      type: Object,
    },
  },
  components: {
    SchematiqueWidget,
  },
  created() {},
  data() {
    return {
      data: null,
    };
  },
};
</script>
