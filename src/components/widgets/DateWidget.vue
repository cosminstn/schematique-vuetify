<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :disabled="readonly"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="inputDateText"
        :rules="rules"
        :readonly="readonly"
        :label="label"
        persistent-hint
        prepend-icon="event"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="data"
      no-title
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>
k
<script>
import { DateTime } from 'luxon';

export default {
  name: 'DateWidget',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    /**
     * Uses date formats as specified by the luxon library
     */
    dateFormat: {
      type: String,
      default: 'yyyy-LL-dd',
    },
  },
  watch: {
    data(val) {
      this.$emit('input', val);
      if (val == null && this.inputDateText != null) {
        this.inputDateText = null;
      }
      if (val === this.inputDateText) {
        return;
      }
      this.inputDateText = val;
    },
    inputDateText(val) {
      if (val == null || val.trim() === '') {
        this.data = null;
        return;
      }

      if (val.trim() === this.data) {
        return;
      }

      try {
        const date = DateTime.fromFormat(val, this.dateFormat);
        if (date == null) {
          throw new Error();
        }
        this.data = val;
      } catch (ex) {
        // TODO: display error in widget somehow
        console.error(`Could not parse ${val} to date using format ${this.dateFormat}`);
        this.data = null;
      }
    },
  },
  data() {
    return {
      data: null,
      inputDateText: null,
      menu: false,
    };
  },
};
</script>
