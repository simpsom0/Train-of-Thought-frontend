<script setup lang="ts">
import { setRecordingState, useRecordingState } from '@/constants/store';

const isRecording = useRecordingState();
const flipRecording = setRecordingState();
</script>

<template>
  <button
    @click="flipRecording()"
    :class="isRecording ? 'bg-c-red-300' : 'bg-c-red-600'"
    class="fixed bottom-0 left-1/2 -translate-x-1/2 m-4 px-8 py-6 rounded-full transition-base"
  >
    R
  </button>
</template>

<style></style>
