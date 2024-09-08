<script setup lang="ts">
  import { severityLevel } from '@/constants/severity';
  import { useNotificationState } from '@/services/store';
  import type { NotificationItem } from '@/types/NotificationItem';
  import { onUpdated, ref, watch, type Ref } from 'vue';

  const notification: Ref<NotificationItem> = useNotificationState();
  const show: Ref<boolean> = ref(false);
  const sizeOffset: number = 12;
  const container: Ref<HTMLElement | null> = ref(null);
  const containerSize: Ref<number> = ref(sizeOffset);
  const justRendered: Ref<boolean> = ref(true);

  watch(
    () => notification.value,
    (newNotification) => {
      console.log('in watch');
      show.value = true;
      // commented out while debugging
      setTimeout(() => {
        if (notification.value == newNotification) {
          show.value = false;
        }
      }, 2000);
    }
  );

  onUpdated(() => {
    console.log('in onUpdated');
    if (container.value) {
      justRendered.value = false;
      containerSize.value = container.value.offsetWidth + sizeOffset;
      console.log(containerSize.value);
    }
  });
</script>

<template>
  <div
    class="fixed top-3 left-full transition duration-1000 ease-in-out filter drop-shadow-md"
    :style="show ? `transform: translateX(-${containerSize}px)` : ''"
    ref="container"
  >
    <div
      class="transition duration-100 ease-in-out rounded px-4 py-2"
      :class="{
        'bg-c-green-400': notification.level == severityLevel.info,
        'bg-c-orange': notification.level == severityLevel.warning,
        'bg-c-red-900': notification.level == severityLevel.error
      }"
    >
      <p class="text-nowrap">{{ notification.text }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped>
  /* .hide {
  translate: calc(containerSize + 16px);
} */
</style>
