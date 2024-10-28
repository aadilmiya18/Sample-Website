<template>

    <q-toolbar>
      <q-toolbar-title class="q-ml-md"> Aadil Web </q-toolbar-title>
      <div class="gt-xs">
        <q-btn flat label="Courses" class="q-mr-xs" />
        <q-btn outline rounded label="SIGN UP" class="q-mr-sm" />
        <q-btn outline rounded label="SIGN IN" class="q-mr-sm" />
      </div>
      <div class="xs">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />
      </div>
    </q-toolbar>


  <q-drawer
    :width="170"
    v-model="leftDrawerOpen"
    bordered
    class="bg-grey-2"
    :breakpoint="600"
  >
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title class="q-ml-lg"> Aadil Web </q-toolbar-title>
    </q-toolbar>
    <q-list>
      <q-item clickable target="_blank" rel="noopener">
        <q-item-section>
          <q-item-label>COURSES</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable target="_blank" rel="noopener">
        <q-item-section>
          <q-item-label>SIGN UP</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable target="_blank" rel="noopener">
        <q-item-section>
          <q-item-label>SIGN IN</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>
