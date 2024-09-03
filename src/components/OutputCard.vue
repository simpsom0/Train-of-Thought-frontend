<script setup lang="ts">
import type { OutputCardProps } from '@/types/props/OutputCardProps';

const props = defineProps<OutputCardProps>();

async function copyToClipboard(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(props.text);
    console.log('copied');

    return true;
  } catch (e) {
    console.log('error copying');
    console.log(e);

    return false;
  }
}
</script>

<template>
  <div
    @click="copyToClipboard()"
    class="flex justify-center m-2 p-2 rounded bg-c-white-100"
  >
    {{ props.text }}
  </div>
</template>

<style scoped>
/* div {
  border: 1px solid blue;
} */
</style>
