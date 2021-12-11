<template>
    <v-text-field v-model="data" :label="label"/>
</template>

<script>
export default {
  name: 'TextWidget',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
  watch: {
    data(val) {
      this.$emit('input', val);
    },
  },
  data() {
    return {
      data: this.value,
    };
  },
};
</script>
