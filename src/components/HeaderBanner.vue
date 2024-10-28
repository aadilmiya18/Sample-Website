<template>
  <div class="row bg-primary">
    <div class="col text-white" style="max-width: 650px; margin-left: auto; margin-right: auto;">
      <div class="text-center q-ml-md q-mr-md q-mb-md">
        <h4 class="text-bold">
          Learn fullstack development form industry experts
        </h4>
        <h6 class="text-center q-mb-sm">
          Join codeguru.io community today to get started
        </h6>
        <q-input class="bg-white q-mb-sm" outlined label="Your email">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
          <template v-slot:append>
            <q-btn
              :loading="loading[3]"
              color="purple"
              @click="simulateProgress(3)"
              style="max-width: 150px"
            >
              START LEARNING
              <template v-slot:loading>
                <q-spinner-hourglass class="on-left" />
                Loading...
              </template>
            </q-btn>
          </template>
        </q-input>
      </div>
    </div>
    <div class="col gt-sm" ><q-img
      src="icons/favicon-96x96.png"
      style="max-width: 330px; height: 370px; margin-left: auto; margin-right: auto; display: block;"
        fit="contain"

      /></div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const loading = ref([false, false, false, false]); // Initialize loading as an array

function simulateProgress(index) {
  loading.value[index] = true;
  setTimeout(() => {
    loading.value[index] = false;
  }, 3000);
}
</script>
