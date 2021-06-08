<template>
    <div class="score1">
        <h3 class="display-6">{{team.teamName}}'s Metrics:</h3>
        <Stat stat="off_rtg" v-on:off_rtg="newStat1" />
        <Stat stat="off_reb_percent" v-on:off_reb_percent="newStat2" />
        <Stat stat="def_reb_percent_allow" v-on:def_reb_percent_allow="newStat3" />
        <Stat stat="ft_over_fga_allow" v-on:ft_over_fga_allow="newStat4" />
        <Stat stat="efg_percent" v-on:efg_percent="newStat5" />
        <Stat stat="ft_rate" v-on:ft_rate="newStat6" />
        <Stat stat="to_percent_allow" v-on:to_percent_allow="newStat7" />
        <Stat stat="pace" v-on:pace="newStat8" />
        <Stat stat="three_fg_trend" v-on:three_fg_trend="newStat9" />
        <Stat stat="ft_over_fga" v-on:ft_over_fga="newStat10" />
        <Stat stat="to_percent" v-on:to_percent="newStat11" />
        <Stat stat="efg_percent_allow" v-on:efg_percent_allow="newStat12" />
        <Stat stat="def_rtg" v-on:def_rtg="newStat13" />
        <Stat stat="ts_percent" v-on:ts_percent="newStat14" />
        <button type="button" @click="calculateScore" class="btn btn-primary">Get Score</button>
    </div>
</template>

<script>
import Stat from './Stat.vue';
import { ref, defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: "Scoring",
    components: {
        Stat
    },
    props: {
        team: {
            type: Object,
            required: true
        }
    },
    setup(props, context) {
        const score = ref(0);
        const stat1 = ref(1);
        const stat2 = ref(1);
        const stat3 = ref(1);
        const stat4 = ref(1);
        const stat5 = ref(1);
        const stat6 = ref(1);
        const stat7 = ref(1);
        const stat8 = ref(1);
        const stat9 = ref(1);
        const stat10 = ref(1);
        const stat11 = ref(1);
        const stat12 = ref(1);
        const stat13 = ref(1);
        const stat14 = ref(1);
        const stats = { stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, stat11, stat12, stat13, stat14 };
        function newStat1(newValue) {
            stat1.value = newValue; 
        }
        function newStat2(newValue) {
            stat2.value = newValue; 
        }
        function newStat3(newValue) {
            stat3.value = newValue; 
        }
        function newStat4(newValue) {
            stat4.value = newValue; 
        }
        function newStat5(newValue) {
            stat5.value = newValue; 
        }
        function newStat6(newValue) {
            stat6.value = newValue; 
        }
        function newStat7(newValue) {
            stat7.value = newValue; 
        }
        function newStat8(newValue) {
            stat8.value = newValue; 
        }
        function newStat9(newValue) {
            stat9.value = newValue; 
        }
        function newStat10(newValue) {
            stat10.value = newValue; 
        }
        function newStat11(newValue) {
            stat11.value = newValue; 
        }
        function newStat12(newValue) {
            stat12.value = newValue; 
        }
        function newStat13(newValue) {
            stat13.value = newValue; 
        }
        function newStat14(newValue) {
            stat14.value = newValue; 
        }
        function calculateScore() {
            score.value = (stat1.value * props.team.off_rtg) + (stat2.value * props.team.def_rtg) + (stat3.value * props.team.pace)
            + (stat4.value * props.team.ft_rate) + (stat5.value * props.team.three_fg_trend) + (stat6.value + props.team.ts_percent)
            + (stat7.value * props.team.efg_percent) + (stat8.value * props.team.to_percent) + (stat9.value + props.team.off_reb_percent)
            + (stat10.value * props.team.ft_over_fga) + (stat11.value * props.team.efg_percent_allow) + (stat12.value * props.team.to_percent_allow)
            + (stat13.value * props.team.def_reb_percent_allow) + (stat14.value * props.team.ft_over_fga_allow);
            context.emit('score', score.value);
        }
        const nStats = {newStat1, newStat2, newStat3, newStat4, newStat5, newStat6, newStat7, newStat8, newStat9, newStat10, newStat11, newStat12, newStat13, newStat14};
        return { score, ...stats, ...nStats, calculateScore};
    }

});
</script>

<style>

</style>