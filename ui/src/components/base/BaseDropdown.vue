<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <slot name="trigger">
        <MenuButton
          class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          {{ props.trigger }}
          <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </MenuButton>
      </slot>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }" v-for="(item, i) in props.items" :key="i">
          <router-link
            :to="item.href"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
          >
            {{ t(item.label) }}
          </router-link>
        </MenuItem>
        <slot name="items" />
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import type { PropType } from "vue";
import { useI18n } from "vue-i18n";

export interface DropdownItem {
  label: string;
  href: string;
}

const { t } = useI18n();

const props = defineProps({
  items: {
    type: Array as PropType<DropdownItem[]>,
    required: true,
  },

  trigger: {
    type: String,
    default: "Options",
  },
});
</script>
