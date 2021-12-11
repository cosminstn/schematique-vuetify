<template>
    <TextWidget v-if="schema.type === 'text'" v-model="data" v-bind="schema"/>
    <DynamicWidget v-else :schema="schema" />
</template>

<script>
import TextWidget from './widgets/TextWidget.vue';
import DynamicWidget from './widgets/DynamicWidget.vue';

export default {
  name: 'SchematiqueWidget',
  components: {
    TextWidget,
    DynamicWidget,
  },
  props: {
    schema: {
      type: Object,
    },
  },
  data() {
    return {
      data: null,
    };
  },
};
</script>
