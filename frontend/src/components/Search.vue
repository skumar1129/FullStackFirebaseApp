<template>
    <form>
        <div class="form-group">
            <label class="label mr-1" for="team">{{numTeam}}:</label>
            <select v-model="choice" @change="emitTeam">
                <option v-for="team in teams" :key="team.teamName">{{team.teamName}}</option>
            </select>
        </div>
    </form>
</template>

<script>
import ApiService from '../api/api.service';
import { ref, onBeforeMount } from '@vue/composition-api';

export default {
    name: "Search",
    props: {
        team: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        const teams = ref([]);
        const choice = ref('');
        const numTeam = ref('');
        onBeforeMount(() => {
            ApiService.getNames().then(res => {
                teams.value = res.data;
            }).catch((e) => {
                alert('Error grabbing the teams. Check your network connection and try again');
            });
            if (props.team === 'first') {
                numTeam.value = 'First Team';
            } else {
                numTeam.value = 'Second Team';
            }
        });
        function emitTeam() {
            context.emit(props.team, choice.value);
        }
        return { teams, numTeam, choice, emitTeam };
    }
}
</script>

<style>

</style>