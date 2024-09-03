<script setup lang="ts">
import SpeechOutputView from './views/SpeechOutputView.vue';
import RecordButton from './components/RecordButton.vue';
import { type Ref } from 'vue';
import { useRecordingState } from './constants/store';

const isRecording: Ref<boolean> = useRecordingState();
</script>

<template>
  <body
    class="w-screen h-screen max-h-screen bg-c-white flex justify-center transition-base"
  >
    <div class="w-2/3 h-full flex flex-col justify-between">
      <SpeechOutputView />
      <RecordButton />
    </div>
  </body>
</template>
