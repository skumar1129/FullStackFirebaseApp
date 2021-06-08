<template>
    <div class="scoring-page">
        <Nav></Nav>
        <div class="jumbotron">
            <img class="img-fluid mb-2" src="../assets/final_four_pic.jpg">
            <form>
                 <h1 class="display-5">Choose the Value of each metric for the Teams</h1>
                 <div class="row" id="comps">
                    <Scoring :team="team1" v-on:score="setScore1" class="comp1" />
                    <Scoring :team="team2" v-on:score="setScore2" class="comp2" />
                 </div>
                 
            </form>
            <img class="img-fluid mt-2 mb-2" id="bot" src="../assets/brunson_pic.jpeg">
            <div class="container mt-2">
                <label class="label">{{team1.teamName}}'s Score: {{score1}}</label>
                <br/>
                <label class="label">{{team2.teamName}}'s Score: {{score2}}</label>
            </div>
            
        </div>
    </div>
</template>

<script>
import Scoring from '../components/Scoring.vue';
import Nav from '../components/Nav.vue';
import { ref, computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: "ScoringPage",
    components: {
        Scoring,
        Nav
    },
    setup(props, context) {
        const score1 = ref(0);
        const score2 = ref(0);
        const team1 = computed(() => context.root.$store.getters.getTeam1);
        const team2 = computed(() => context.root.$store.getters.getTeam2);
        function setScore1(newValue) {
            score1.value = newValue.toFixed(20);
        }
        function setScore2(newValue) {
            score2.value = newValue.toFixed(20);
        }
        return { score1, score2, team1, team2, setScore1, setScore2 };
    }
});
</script>

<style scoped>
    #bot {
        height: 25rem;
        width: 50rem;
    }
    .label {
        font-size: xx-large;
    }
    #comps {
        display: flex;
        justify-content: center;
    }
    .comp1 {
        margin-right: 5%;
    }
    .comp2 {
        margin-left: 5%;
    }
    .container {
        display: flex;
        justify-content: flex-start;
        flex-flow: column;
    }
    
</style>
