<template>
  <BaseDropdown :items="menuItems">
    <template #trigger>
      <MenuButton
        class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </MenuButton>
    </template>
  </BaseDropdown>
</template>

<script setup lang="ts">
import { MenuButton } from "@headlessui/vue";

import BaseDropdown from "@/components/base/BaseDropdown.vue";

const menuItems = [
  {
    label: "profile.dropdown.profile",
    href: "#",
  },
  {
    label: "profile.dropdown.settings",
    href: "#",
  },
  {
    label: "profile.dropdown.logout",
    href: "#",
  },
];
</script>
