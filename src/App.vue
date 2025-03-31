<script setup lang="ts">
  import SpeechOutputView from '@/views/SpeechOutputView.vue';
  import RecordButton from '@/components/RecordButton.vue';
  import RefreshButton from '@/components/utility/RefreshButton.vue';
  import NotificationView from './views/NotificationView.vue';
</script>

<template>
  <body class="w-screen h-full min-h-screen bg-c-white transition-base">
    <div class="w-full h-full">
      <NotificationView />
      <RefreshButton />
      <SpeechOutputView />
      <RecordButton />
    </div>
  </body>
</template>
