import { readonly, ref, type Ref } from 'vue';
import { severityLevel } from '@/constants/severity';
import { notificationOptions } from '@/constants/notifications';
import type { NotificationItem } from '@/types/NotificationItem';
import { IdService } from '@/services/IdService';

const idService: IdService = new IdService({});
const notifications: Ref<NotificationItem[]> = ref([]);

const isRecording: Ref<boolean> = ref(false);

// recording state functions
function flipRecording(): void {
  isRecording.value = !isRecording.value;

  if (isRecording.value) {
    pushNotification(notificationOptions.recording, severityLevel.info);
  } else {
    pushNotification(notificationOptions.stopRecording, severityLevel.warning);
  }
}

export function useRecordingState(): Ref<boolean> {
  return readonly(isRecording);
}

export function setRecordingState(): () => void {
  return flipRecording;
}

// notification state functions
export function useNotificationsState(): Ref<Readonly<NotificationItem[]>> {
  return readonly(notifications);
}

export function setNotificationsState(): (
  message: string,
  level: severityLevel
) => void {
  return pushNotification;
}

function pushNotification(message: string, level: severityLevel): void {
  // FIFO queue
  notifications.value.push({
    level: level,
    text: message,
    id: idService.getNextId()
  });
  setTimeout(() => notifications.value.splice(0, 1), 2000);
}
