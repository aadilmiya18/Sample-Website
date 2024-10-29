<template>
  <q-layout view="lHh LpR fFf">
    <q-page-container>
      <q-page class="q-pa-md">
        <h1 class="text-h4 q-mb-md">Login</h1>
        <q-form @submit.prevent="SubmitBtn">
          <q-input
            filled
            label="Email"
            v-model="email"
            type="text"
            id="email"
            placeholder="Enter email"
            :rules="[val => !!val || 'Email is required']"
            class="q-mb-md"
          />
          <q-input
            filled
            label="Password"
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter password"
            :rules="[val => !!val || 'Password is required']"
            class="q-mb-md"
          />
          <q-btn
            label="Sign Up"
            color="primary"
            type="submit"
            class="full-width"
          />
        </q-form>
        <p>Register account if you dont have <router-link to="/signup">Sign-Up</router-link></p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';



const router = useRouter()
const email = ref('');
const password = ref('');

const SubmitBtn = async() => {
  if ( !email.value || !password.value) {
    alert("Please fill out all fields.");
    return
  }

    let result = await axios.get(`http://localhost:3000/users?email=${email.value}&password=${password.value}`)

    console.log(result)


    if(result.status === 200 && result.data.length>0){
      localStorage.setItem("user-information",JSON.stringify(result.data[0]))
       router.push('/')
    }
};





</script>
