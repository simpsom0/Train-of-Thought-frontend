<script setup lang="ts">
  import { notifications } from '@/constants/notifications';
  import { severityLevel } from '@/constants/severity';
  import { setNotificationState } from '@/services/store';
  import type { OutputCardProps } from '@/types/OutputCardProps';
  import { ref, type Ref } from 'vue';

  const props: OutputCardProps = defineProps<OutputCardProps>();
  const setNotification = setNotificationState();
  const midClick: Ref<boolean> = ref(false);

  async function copyToClipboard(): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(props.text);
      setNotification({ level: severityLevel.info, text: notifications.copy });
      return true;
    } catch (e) {
      setNotification({
        level: severityLevel.error,
        text: notifications.errorCopy
      });
      console.log(e);
      return false;
    }
  }
</script>

<template>
  <div
    @mousedown="midClick = true"
    @mouseup="
      midClick = false;
      copyToClipboard();
    "
    :class="[
      'w-2/3 flex justify-center m-2 p-2 rounded',
      'transition duration-200 ease-in-out',
      'filter drop-shadow-lg',
      'hover:drop-shadow-none',
      isActive || midClick ? 'bg-c-white-200' : 'bg-c-white-100'
    ]"
  >
    {{ props.text }}
  </div>
</template>

<style scoped>
  /* div {
  border: 1px solid blue;
} */
</style>
