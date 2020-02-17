<template>
    <div class="d-flex justify-space-around">
    <v-col cols="6" class="d-flex justify-space-around">
    <v-card class="form-card">
        <v-col>
          <v-text-field class="field-name" v-model="name" label="Name" required/>
          <v-text-field class="field-age" v-model="age" label="age" required/>
          <v-text-field class="field-email" v-model="email" label="email" required/>
          <div class="d-flex justify-space-around">
            <v-btn dark class="v-btn--text-white" color="black" @click="validate">Submit</v-btn>
          </div>
        </v-col>
    </v-card>
    </v-col>
    </div>
</template>

<script>
export default {
  name: 'PeopleForm',
  data: () => ({
    name: null,
    age: null,
    email: null,
  }),
  methods: {
    validate() {
      this.$emit('addPerson', {
        name: this.name,
        age: this.age,
        email: this.email,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-card {
    width: 100%;
}
</style>
