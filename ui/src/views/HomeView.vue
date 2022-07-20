<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";

import SearchBarSimple from "@/components/search/SearchBarSimple.vue";

const { t } = useI18n();

const benefits = ["home.benefits.0", "home.benefits.1", "home.benefits.2"];
</script>

<template>
  <main class="home">
    <section class="home__hero">
      <div
        class="relative my-16 flex h-auto w-full max-w-7xl flex-col rounded-3xl bg-primary px-12 py-12 lg:mx-auto lg:h-96"
      >
        <h1
          class="z-10 mb-6 max-w-2xl text-3xl font-semibold text-white lg:text-5xl"
          v-html="t('home.title')"
        />

        <div class="text-white">
          <p
            v-for="(item, index) in benefits"
            :key="index"
            class="my-1 flex items-center"
          >
            <CheckCircleIcon class="mr-2 h-4 w-4" />
            {{ t(item) }}
          </p>
        </div>

        <img
          src="@/assets/images/hero-img.png"
          alt="hero background image"
          class="absolute bottom-0 right-0 hidden max-h-full rounded-lg lg:block"
        />

        <SearchBarSimple
          class="absolute -bottom-12 left-1/2 z-20 w-192 -translate-x-1/2"
        />
      </div>
    </section>
  </main>
</template>
