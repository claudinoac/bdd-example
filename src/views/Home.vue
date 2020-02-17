<template>
    <v-content>
      <PeopleForm @addPerson="addPerson"/>
      <div v-for="person in people" :key="person.name">
        <PersonCard :name="person.name" :age="person.age" :email="person.email"/>
      </div>
    </v-content>
</template>

<script>
// @ is an alias to /src
import PeopleForm from '@/components/PeopleForm.vue';
import PersonCard from '@/components/PersonData.vue';

export default {
    name: 'Home',

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
