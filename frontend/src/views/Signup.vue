<template>
    <div class="signup">
        <div class="jumbotron">
            <h1 class="display-4">Sign Up</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Email" v-model="email" aria-label="Email">
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" v-model="password" aria-label="Password">
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirm" aria-label="Confirm Password">
            </div>
            <div class="row mb-3">
                <button @click="checkPassword" class="btn btn-primary" type="submit">Sign Up</button>
                <button @click="goToSignIn" class="btn btn-primary" type="submit">Back To Sign In</button>
            </div>
            <img class="img-fluid" src="../assets/homepage_pic.jpg">
        </div>
    </div>
</template>

<script>
import { ref, defineComponent } from '@vue/composition-api';
import firebase from 'firebase';

export default defineComponent({
    name: 'Signup',
    setup(props, context) {
        const email = ref('');
        const password = ref('');
        const confirm = ref('');
        async function signUp() { 
            try {
                await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
                context.root.$router.push({ name: 'Home' });
            } catch (e) {
                alert('Signing up failed, check your network connection and try again');
            }
        }
        async function checkPassword() {
            if (password.value === confirm.value) {
                await signUp();
            } else {
                alert('Make sure you passwords match!');
            }
        }
        function goToSignIn() {
            context.root.$router.push({ name: 'Signin' });
        }
        return { email, password, confirm, checkPassword, goToSignIn };
    }
});
</script>

<style scoped>
    .row {
        display: flex;
        justify-content: space-around;
    }
</style>