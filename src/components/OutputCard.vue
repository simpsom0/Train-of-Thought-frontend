<script setup lang="ts">
import type { OutputCardProps } from '@/types/props/OutputCardProps';

const props = defineProps<OutputCardProps>();
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
