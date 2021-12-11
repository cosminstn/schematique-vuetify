<template>
    <component :is="schema.$type" v-bind="schema" />
</template>

<script>
export default {
  name: 'DynamicWidget',
  props: {
    schema: {
      type: Object,
    },
  },
};
</script>
