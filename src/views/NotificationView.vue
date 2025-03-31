<script setup lang="ts">
  import { useNotificationsState } from '@/services/store';
  import type { NotificationItem } from '@/types/NotificationItem';
  import type { Ref } from 'vue';
  import { severityLevel } from '@/constants/severity';

  const notifications: Ref<Readonly<NotificationItem[]>> =
    useNotificationsState();
</script>

<template>
  <div class="fixed w-52 top-3 right-3 z-10">
    <TransitionGroup name="fade">
      <div
        v-for="n in notifications.values()"
        :class="[
          'rounded w-fit',
          'ml-auto mr-0 px-4 py-2 my-2',
          { 'bg-c-green-400': n.level == severityLevel.info },
          { 'bg-c-orange': n.level == severityLevel.warning },
          { 'bg-c-red-900': n.level == severityLevel.error }
        ]"
        :key="n.id"
      >
        <span class="text-nowrap">{{ n.text }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="css" scoped>
  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
  }

  .fade-leave-active {
    position: absolute;
    margin: auto;
  }
</style>
