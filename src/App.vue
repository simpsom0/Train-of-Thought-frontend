<script setup lang="ts">
import SpeechOutputView from './views/SpeechOutputView.vue'
import RecordButton from './components/RecordButton.vue'
import { ref, type Ref } from 'vue'

let isRecording: Ref<boolean> = ref(false)
</script>

<template>
  <body
    :class="isRecording ? 'bg-green-50' : 'bg-slate-50'"
    class="w-screen h-screen flex justify-center transition-base"
  >
    <div class="w-2/3 h-full flex flex-col justify-between">
      <SpeechOutputView />
      <RecordButton />
    </div>
  </body>
</template>
