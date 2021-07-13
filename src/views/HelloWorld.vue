<template>
  <div>Hello</div>
  <ul>
    <li v-for="item in playDemos" :key="item.path">
      <router-link :to="'/play/' + item.path">Play {{ item.path }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { playDemos } from "../router";

export default defineComponent({
  setup() {
    return {
      playDemos,
    };
  },
});
</script>

<style scoped></style>
