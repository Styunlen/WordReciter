<template>
  <div id="app" class="h-full w-full">
    <Dialog v-model:visible="display">
      <template #header>
        <h3>公告</h3>
      </template>
      <div>网站施工中</div>
      <template #footer>
        <Button label="No" icon="pi pi-times" class="p-button-text" />
        <Button
          label="Yes"
          icon="pi pi-check"
          autofocus
          @click="display = false"
        />
      </template>
    </Dialog>
    <Message :closable="false">加班加点制作中</Message>
    <layout></layout>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import layout from "./layout/index.vue";
const display = ref(false);
onMounted(() => {
  setTimeout(() => {
    display.value = true;
  }, 1000);
});
</script>
