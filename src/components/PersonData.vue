<template>
  <div class="d-flex justify-space-around">
    <v-col cols="6" class="d-flex justify-space-around">
      <v-card class="person-card">
          <v-card-title>{{name}}</v-card-title>
          <v-card-text>
              <div class="age">Age: {{age}}</div>
              <div class="email">Email: {{email}}</div>
          </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
    name: 'PersonCard',
    props: ['name', 'age', 'email'],
};
</script>

<style lang="scss" scoped>
.person-card {
    width: 100%;
}
</style>
