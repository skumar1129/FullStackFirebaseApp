<template>
    <div class="search-page">
        <Nav></Nav>
        <div class="jumbotron">
           <form>
                <h1 class="display-2 mb-2">Choose your matchup</h1>
                <Search :team="first" v-on:first="team1Change" />
                <Search :team="second" v-on:second="team2Change" />
                <button class="btn btn-primary" type="submit" @click="submitTeams">Submit</button>
            </form>
            <img class="img-fluid mt-2" src="../assets/michigan_sucks_page.jpeg">
        </div>
    </div>
</template>

<script>
import Search from '../components/Search.vue';
import Nav from '../components/Nav.vue';

import { ref, defineComponent } from '@vue/composition-api';
export default defineComponent({
    name: "SearchPage",
    components: {
        Search,
        Nav
    },
    setup(props, context) {
        const team1 = ref('');
        const team2 = ref('');
        const first = ref('first');
        const second = ref('second');
        function team1Change(value) {
            team1.value = value;
        }
        function team2Change(value) {
            team2.value = value;
        }
        function submitTeams() {
            try {
                context.root.$store.dispatch('fetchTeam1', team1.value);
                context.root.$store.dispatch('fetchTeam2', team2.value);
                context.root.$router.push({ name: 'Scoring' });
            } catch(e) {
                alert('Error fetching the teams. Check your network connection and try again');
            }
        }
        return { team1Change, first, second, team2Change, submitTeams };
    }
});
</script>

<style>
    .img-fluid {
        height: 40rem;
        widows: 40rem;
    }
    
</style>
