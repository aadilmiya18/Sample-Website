<template>
  <q-layout view="lHh LpR fFf">
    <q-page-container>
      <q-page class="q-pa-md">
        <h1 class="text-h4 q-mb-md">Sign Up</h1>
        <q-form @submit.prevent="SubmitBtn">
          <q-input
            filled
            label="Name"
            v-model="name"
            type="text"
            id="name"
            placeholder="Enter Name"
            :rules="[val => !!val || 'Name is required']"
            class="q-mb-md"
          />
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
        <p>Already have account ? <router-link to="/login">Login</router-link></p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const name = ref('');
const email = ref('');
const password = ref('');

const SubmitBtn = async() => {
  if (!name.value || !email.value || !password.value) {
    alert("Please fill out all fields.");
    return
  }

    let result = await axios.post("http://localhost:3000/users",{
      name:name.value,
      email:email.value,
      password:password.value
    })
    console.log(result)

    if(result.status === 201){
      localStorage.setItem("user-information",JSON.stringify(result.data))
       router.push('/')
    }
};


</script>
