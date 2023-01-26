<template>
  <div>
    <Card>
      <template #header>
        <layout-header />
      </template>
      <template #title> 笔记小助手 </template>
      <template #content>
        <div class="card">
          <div class="grid">
            <div class="col-2 flex align-items-center justify-content-center">
              <layout-aside />
            </div>
            <div class="col-2">
              <Divider layout="vertical"> </Divider>
            </div>
            <div class="col-8 flex align-items-center justify-content-center">
              <layout-main />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        WordReciter 1.0.0 on Vue 3 by Styunlen Copyright © 2023 九仞 版权所有
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { LayoutAside, LayoutHeader, LayoutMain } from "./components";
</script>

<style></style>
