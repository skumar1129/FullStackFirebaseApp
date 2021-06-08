<template>
   <div class="form-group">
        <label class="label mr-2" for="stat">{{statName}}: </label>
        <select v-model="statValue" @change="emitStat">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
    </div>
</template>

<script>
import { ref, defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
    name:  "Stat",
    props: {
        stat: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        const statValue = ref(1);
        const statName = ref('');
        function emitStat() {
            context.emit(props.stat, statValue.value);
        }
        onBeforeMount(() => {
            switch (props.stat) {
                case 'off_rtg':
                    statName.value = 'Offensive Rating';
                    break;
                case 'off_reb_percent':
                    statName.value = 'Offensive Rebounding Percentage';
                    break;
                case 'def_reb_percent_allow':
                    statName.value = 'Defensive Rebounding Percentage Allowed';
                    break;
                case 'ft_over_fga_allow':
                    statName.value = 'Free Throw to Field Goal Attempt Allowed';
                    break;
                case 'efg_percent':
                    statName.value = 'Efficiency Field Goal Percentage';
                    break;
                case 'ft_rate':
                    statName.value = 'Free Throw Rate';
                    break;
                case 'to_percent_allow':
                    statName.value = 'Turnover Percentage Allowed';
                    break;
                case 'pace':
                    statName.value = 'Pace';
                    break;
                case 'three_fg_trend':
                    statName.value = 'Three Point Field Goal Trend';
                    break;
                case 'ft_over_fga':
                    statName.value = 'Free Throw to Field Goal Attempt';
                    break;
                case 'to_percent':
                    statName.value = 'Turnover Percentage';
                    break;
                case 'efg_percent_allow':
                    statName.value = 'Efficiency Field Goal Percentage Allowed';
                    break;
                case 'def_rtg':
                    statName.value = 'Defensive Rating';
                    break;
                case 'ts_percent':
                    statName.value = 'True Shooting Percentage';
                    break;
                default:
                    break;
            }            
        });
        return { statValue, emitStat, statName };
    }
});
</script>

<style>

</style>