<script setup lang="ts">
  import MicIcon from '@/assets/MicIcon.vue';
  import { setRecordingState, useRecordingState } from '@/services/store';

  const isRecording = useRecordingState();
  const flipRecording = setRecordingState();
</script>

<template>
  <button
    @click="flipRecording()"
    :class="
      isRecording ? 'bg-c-red-300 fill-c-white animate-pulse' : 'bg-c-red-600'
    "
    class="fixed bottom-0 left-1/2 -translate-x-1/2 m-4 px-6 py-6 rounded-full transition ease-in-out filter drop-shadow-md"
  >
    <MicIcon />
  </button>
</template>

<style></style>
