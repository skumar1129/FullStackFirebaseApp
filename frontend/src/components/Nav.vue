<template>
    <div id="nav">
        <router-link to="/home">Home</router-link> | 
        <router-link to="/search">Search</router-link>
        <div id='logout'>
            <button @click="logOut" class="btn btn-primary" type="submit">Log out</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import firebase from 'firebase';

export default defineComponent({
    name: 'Nav',
    setup(props, context) {
        async function logOut() {
            try {
                await firebase.auth().signOut();
                context.root.$router.push({ name: 'Signin' });
            } catch (e) {
                alert('Signing out failed, check your network connection and try again');
            }
        }
        return { logOut };
    }
});
</script>

<style>

</style>