<template>
  <v-container>
    <schematique-widget
      v-for="(schema, field) in schema"
      v-bind:key="field"
      v-model="data[field]"
      :schema="schema"
    />
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
    value: {
      type: Object,
      default: null,
    },
  },
  components: {
    SchematiqueWidget,
  },
  created() {},
  data() {
    return {
      data: this.value || {},
    };
  },
  watch: {
    data(val) {
      this.$emit('input', val);
    },
  },
};
</script>
