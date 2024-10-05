<script setup>
import { RouterView } from 'vue-router'
import navside from './components/partials/navside.vue';
import appbar from './components/partials/app.vue';
</script>

<template>
  <div class="pages">
    <navside />
    <div class="page-wrapper">
      <appbar />
      <RouterView />
    </div>
  </div>
</template>
