<template>
    <div class="signin">
        <div class="jumbotron">
            <h1 class="display-4">Sign In</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Email" v-model="email" aria-label="Email">
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" v-model="password" aria-label="Password">
            </div>
            <div class="row mb-3">
                <button @click="signin" class="btn btn-primary" type="submit">Sign In</button>
                <button @click="goToSignUp" class="btn btn-primary" type="submit">Go to Sign Up</button>
            </div>
            <img class="img-fluid" src="../assets/homepage_pic.jpg">
        </div>
    </div>
</template>

<script>
import { ref, defineComponent } from '@vue/composition-api';
import firebase from 'firebase';

export default defineComponent({
    name: 'Signin',
    setup(props, context) {
        const email = ref('');
        const password = ref('');
        async function signin() {
            try {
                await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
                context.root.$router.push({ name: 'Home' });
            } catch (e) {
                alert('Sign in failed, make sure your username and password are correct');
            }
        }
        function goToSignUp() {
            context.root.$router.push({ name: 'Signup' });
        }
        return { email, password, signin, goToSignUp };
    } 
});
</script>

<style scoped>
    .row {
        display: flex;
        justify-content: space-around;
    }
</style>