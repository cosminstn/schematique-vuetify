<template>
    <TextWidget v-if="schema.type === 'text'" v-model="data" v-bind="schema"/>
    <date-widget v-else-if="schema.type === 'date'" v-model="data" v-bind="schema" />
</template>

<script>
import TextWidget from './widgets/TextWidget.vue';
import DateWidget from './widgets/DateWidget.vue';

export default {
  name: 'SchematiqueWidget',
  components: {
    TextWidget,
    DateWidget,
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
