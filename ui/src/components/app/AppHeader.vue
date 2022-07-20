<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";
import { type LocationAsRelativeRaw, useRoute } from "vue-router";

import ProfileDropdown from "@/components/dropdown/ProfileDropdown.vue";

const { t } = useI18n();

// TODO: get real status
const isAuthenticated = false;

const menuItems = [
  {
    label: "menu.home",
    to: { name: "home" },
  },
  {
    label: "menu.browse",
    to: { name: "browse" },
  },
];

const isActive = (route: LocationAsRelativeRaw) => {
  const currentRoute = useRoute();

  return currentRoute.name == route.name;
};
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto" src="/logo.png" alt="Logo" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-primary text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link
              v-for="(item, index) in menuItems"
              :key="index"
              :to="item.to"
              :class="[
                isActive(item.to)
                  ? 'border-blue-500 text-gray-900'
                  : 'border-transparent text-gray-600',
              ]"
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
            >
              {{ t(item.label) }}
            </router-link>
          </div>
        </div>

        <!-- Right menu -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <ProfileDropdown v-if="isAuthenticated" />

          <template v-else>
            <router-link
              :to="{ name: 'login' }"
              class="relative hidden items-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 sm:mr-2 sm:inline-flex"
            >
              <span>{{ t("menu.register") }}</span>
            </router-link>
            <router-link
              :to="{ name: 'login' }"
              class="relative inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryDark focus:outline-none"
            >
              <span>{{ t("menu.login") }}</span>
            </router-link>
          </template>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pt-2 pb-4">
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
        >
          <DisclosureButton
            :class="[
              isActive(item.to)
                ? 'border-primary bg-blue-50'
                : 'border-transparent',
            ]"
            class="block w-full border-l-4 py-4 pl-3 pr-4 text-left text-base font-medium text-primary"
          >
            {{ t(item.label) }}
          </DisclosureButton>
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
