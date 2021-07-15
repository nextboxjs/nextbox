<template>
  <div class="button">Button</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useButton } from "@nextbox/core/src";

export default defineComponent({
  name: "NButton",
  setup() {
    useButton();
    return {};
  },
});
</script>

<style scoped></style>
