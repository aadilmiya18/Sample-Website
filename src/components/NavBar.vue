<template>
  <q-toolbar>
    <q-toolbar-title class="q-ml-md"
      ><span clickable class="cursor-pointer" href="#"> Aadil Web</span>
    </q-toolbar-title>
    <div class="gt-xs flex">
      <q-btn flat label="Courses" class="q-mr-xs">
        <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Web development</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>AI/ML</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Graphic Designinig</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
      </q-btn>
      <div v-if="isLoggedIn">
        <span></span>
        <q-btn to="/logout" :isLoggedIn="false" outline rounded label="Log OUt" class="q-mr-sm" />
      </div>
      <div v-else>
      <q-btn to="/signup" outline rounded label="SIGN UP" class="q-mr-sm" />

      <q-btn to="/login" outline rounded label="Login" class="q-mr-sm" />
    </div>
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
    class="bg-grey-2 text-black"
    :breakpoint="600"
  >
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title class="q-ml-lg"> Aadil Web </q-toolbar-title>
    </q-toolbar>
    <q-list>
      <q-item clickable>
        <q-item-section>
          <q-item-label>COURSES</q-item-label>
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Having fun</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item-section>
      </q-item>

      <q-item clickable to="/signup">
        <q-item-section>
          <q-item-label> SIGN UP </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable to="/login">
        <q-item-section>
          <q-item-label>LOGIN</q-item-label>
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
