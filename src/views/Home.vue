<template>
  <div class="home">
    <PeopleForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PeopleForm from '@/components/PeopleForm.vue';

export default {
  name: 'Home',
  components: {
    PeopleForm,
  },
};
</script>
