<template>
  <h6 class="q-ml-md q-mt-md q-mb-none text-bold">Latest lessons</h6>

  <div class="row q-px-md q-my-sm">
    <q-card
      v-for="card in data"
      :key="card.id"
      class="col q-ma-md col-11 col-sm"
    >
      <q-video :src="card.url" />

      <q-card-section>
        <a :href="card.url" class="text-h6" style="text-decoration: none">{{
          card.title
        }}</a>
        <div class="text-subtitle2">{{ card.subtitle }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ card.description }}
      </q-card-section>
    </q-card>
  </div>


  <h6 class="q-ml-md q-mt-md q-mb-none text-bold">Featured lessons</h6>

  <div
    class="row wrap justify-start items-start content-start bg-white q-ma-md "
    style="
      padding: 20px;
      margin-bottom: 30px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    "
  >
    <div
      class="col-4 wrap justify-start items-start content-start bg-white"
      style="
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      "
    >
      <div class="row wrap justify-start items-start content-start q-ma-md">
        <div class="col-7" style=" width: 170px;">
          <q-img src="icons/favicon-96x96.png" height="160px" width="1" />
        </div>
        <div class="bg-white" style="height: 150px; max-width: 150px;">
          <ul class="q-mt-lg text-h6 ">
            <li>Web</li>
            <li>Mobile</li>
            <li>Desktop</li>
          </ul>
        </div>
        <div class="col-12 text-center text-h6" style="overflow-wrap: break-word;" >
          All platforms in one Go
        </div>
      </div>
    </div>
    <div class="col">
      <div  class=" q-ma-lg">
        <div class="q-mb-lg">
      <a
        class="text-h5 cursor-pointer "
        style="text-decoration: none;"
        href="#"
        >Full stack development using quasar and aws-amplify framework</a
      >
    </div>
      <p>
        In this course you will learn how rto build production application
        targeted for multiple environment like Web , mobile and desktop
        applications usign Quasar framework and also create a serverless backemd
        using aws-amplify framework
      </p>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    id: 1,
    url: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
    title: "Our Changing Planet",
    subtitle: "Aadil Miya",
    description: "the quick brown fox jumps over the lazy dog lorem",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
    title: "bla bla bla",
    subtitle: "I dont know",
    description: "oi dod ldfhik",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/k3_tw44QsZQ?rel=0",
    title: "kdsl",
    subtitle: "Bl",
    description: "the quick browdsfdsfdsn fox jumps over the lazy dog lorem",
  },
]);
</script>
