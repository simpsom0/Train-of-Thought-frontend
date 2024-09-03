import { readonly, ref, type Ref } from 'vue';

const isRecording: Ref<boolean> = ref(false);

function flipRecording(): void {
  isRecording.value = !isRecording.value;
}

export function useRecordingState(): Ref<boolean> {
  return readonly(isRecording);
}

export function setRecordingState(): () => void {
  return flipRecording;
}
