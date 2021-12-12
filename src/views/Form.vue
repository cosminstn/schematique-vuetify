<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" md="6" xl="4">
        Schema:
        <v-textarea
          label="Play with the schema"
          @input="updateSchema1"
          :value="JSON.stringify(schema1, null, 2)"
        />
      </v-col>
      <v-col cols="12" xs="12" md="6" xl="4">
        Form:
        <schematique-form :schema="schema1" v-model="data1" />
      </v-col>
      <v-col cols="12" xs="12" md="6" xl="4">
        <v-textarea
            label="Data"
            :value="JSON.stringify(data1, null, 2)"
            readonly />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SchematiqueForm from '../components/SchematiqueForm.vue';

export default {
  data() {
    return {
      schema1: {
        firstName: {
          type: 'text',
          label: 'First Name',
        },
        birthDate: {
          type: 'date',
          label: 'Birth Date',
        },
      },
      data1: null,
    };
  },
  components: { SchematiqueForm },
  methods: {
    updateSchema1(value) {
      if (value == null || value.trim() === '') {
        this.schema1 = null;
      }
      try {
        this.schema1 = JSON.parse(value);
      } catch (ex) {
        // do nothing
      }
    },
  },
};
</script>
