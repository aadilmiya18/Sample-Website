<template>
  <q-layout view="lHh Lpr lFf" class="bg-deep-purple-1">
    <q-header elevated >
      <NavBar />
    </q-header>

    <q-page-container>
      <Header />
      <Lessons/>
      <Footer />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NavBar from "src/components/NavBar.vue";
import Header from "src/components/HeaderBanner.vue";
import Lessons from "src/components/Lessons.vue";
import Footer from "src/components/Footer.vue";

</script>
