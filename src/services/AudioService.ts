import { lorem_chunked } from '@/constants/loremIpsum';
import { useRecordingState } from '@/constants/store';
import type { AudioData } from '@/types/view-models/AudioData';
import { ref, watch, type Ref } from 'vue';

const isRecording: Ref<boolean> = useRecordingState();
let index: number = -1;
let intervalId: NodeJS.Timeout | null = null;

const mockData: Ref<AudioData> = ref({
  word: '',
  index: -1,
  confidence: 1000
});

export function useMockData(): Ref<AudioData> {
  return mockData;
}

watch(
  () => isRecording.value,
  (value) => {
    if (value) {
      intervalId = setInterval(() => {
        index += 1;
        mockData.value = {
          word: lorem_chunked[index],
          index: index,
          confidence: 1000
        };
      }, 100);
    } else if (!value && intervalId != null) {
      clearInterval(intervalId);
    }
  }
);
