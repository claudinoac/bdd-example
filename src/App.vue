<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    People App
    </v-app-bar>

    <v-content>
      <PeopleForm @addPerson="addPerson"/>
      <div v-for="person in people" :key="person.name">
        <PersonCard :name="person.name" :age="person.age" :email="person.email"/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import PeopleForm from './components/PeopleForm.vue';
import PersonCard from './components/PersonData.vue';

export default {
  name: 'App',

  components: {
    PeopleForm,
    PersonCard,
  },

  data: () => ({
    people: [],
  }),
  methods: {
    addPerson(data) {
      this.people.push(data);
    },
  },
};
</script>
