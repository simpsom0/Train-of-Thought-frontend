<script setup lang="ts">
import type { OutputItemProps } from '@/types/props/OutputItemProps';

const props = defineProps<OutputItemProps>();
</script>

<template>
  <div class="flex justify-center">
    {{ props.text }}
  </div>
</template>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
