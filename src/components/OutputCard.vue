<script setup lang="ts">
  import { notificationOptions } from '@/constants/notifications';
  import { severityLevel } from '@/constants/severity';
  import { Log } from '@/services/LogService';
  import { setNotificationsState } from '@/services/store';
  import type { OutputCardProps } from '@/types/OutputCardProps';

  const logger = new Log();
  const props: OutputCardProps = defineProps<OutputCardProps>();
  const pushNotification = setNotificationsState();

  async function copyToClipboard(): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(props.text);
      pushNotification(notificationOptions.copy, severityLevel.info);
      return true;
    } catch (e) {
      pushNotification(notificationOptions.errorCopy, severityLevel.error);
      logger.print(e as string);
      return false;
    }
  }
</script>

<template>
  <div
    @mouseup="copyToClipboard()"
    :class="[
      'w-2/3 flex justify-center m-2 p-2 rounded',
      'transition duration-200 ease-in-out',
      'filter drop-shadow-lg',
      'bg-c-white-100',
      'hover:bg-c-white-200',
      'active:bg-c-white-400',
      { ['bg-c-white-200']: isActive }
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
