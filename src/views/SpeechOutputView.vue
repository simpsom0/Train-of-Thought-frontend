<script setup lang="ts">
import OutputCard from '@/components/OutputCard.vue';
import { useRecordingState } from '@/constants/store';
import { useMockData } from '@/services/AudioService';
import type { OutputCardProps } from '@/types/props/OutputCardProps';
import type { AudioData } from '@/types/view-models/AudioData';
import { nextTick, onUpdated, ref, watch, type Ref } from 'vue';

const isRecording: Ref<boolean> = useRecordingState();
const childProps: Ref<OutputCardProps[]> = ref([]);
const mockData: Ref<AudioData> = useMockData();
const bufferContainer: Ref<HTMLElement | null> = ref(null);

watch(
  () => isRecording.value,
  (value) => {
    childProps.value.forEach((prop) => {
      prop.isActive = false;
    });

    if (value) {
      childProps.value.push({
        isActive: value,
        index: childProps.value.length,
        text: ''
      });
    }
  }
);

watch(
  () => mockData.value,
  (mockData) => {
    const activeCard: OutputCardProps | undefined = getActiveOutputCard();
    if (activeCard && mockData.index > 0) {
      activeCard.text += ' ' + mockData.word;
    }
  }
);

function getActiveOutputCard(): OutputCardProps | undefined {
  return childProps.value.find((props) => props.isActive);
}

onUpdated(() => {
  nextTick(() => {
    if (bufferContainer.value) {
      bufferContainer.value.scrollIntoView();
    }
  });
});
</script>

<template>
  <main class="w-full flex justify-start items-center flex-col flex-nowrap">
    <OutputCard v-for="props in childProps" v-bind="props" :key="props.index" />
  </main>
  <div class="buffer w-full h-24" ref="bufferContainer"></div>
</template>

<style scoped>
/* .buffer {
  border: 1px solid red;
} */
</style>
