<template>
  <main>
    <h1 class="text-3xl font-bold underline">
      {{ t("hello") }}
    </h1>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
