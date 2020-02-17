<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    People App
    </v-app-bar>
    <router-view/>
  </v-app>
</template>

<script>
export default {
    name: 'App',
};
</script>
