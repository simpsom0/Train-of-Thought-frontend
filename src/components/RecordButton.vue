<script setup lang="ts">
import { setRecordingState, useRecordingState } from '@/constants/store';

const isRecording = useRecordingState();
const flipRecording = setRecordingState();
</script>

<template>
  <div class="flex justify-center">
    <button
      @click="flipRecording()"
      :class="isRecording ? 'bg-green-300' : 'bg-red-300'"
      class="m-4 px-8 py-6 rounded-full transition-base"
    >
      R
    </button>
  </div>
</template>

<style></style>
