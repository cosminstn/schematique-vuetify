<template>
  <v-container>
    <v-col cols="12" xs="12">
      <text-widget label="Text input" />
    </v-col>
  </v-container>
</template>

<script>
import TextWidget from '@/components/widgets/TextWidget.vue';

export default {
  components: { TextWidget },
};
</script>
