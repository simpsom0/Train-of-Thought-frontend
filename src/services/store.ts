import { readonly, ref, type Ref } from 'vue';
import { severityLevel } from '../constants/severity';
import type { NotificationItem } from '@/types/NotificationItem';
import { notifications } from '../constants/notifications';

const isRecording: Ref<boolean> = ref(false);
const notification: Ref<NotificationItem> = ref({
  level: severityLevel.info,
  text: ''
});

// recording state functions
function flipRecording(): void {
  isRecording.value = !isRecording.value;
  const notification: NotificationItem = isRecording.value
    ? { level: severityLevel.info, text: notifications.recording }
    : { level: severityLevel.warning, text: notifications.stopRecording };
  setNotification(notification);
}

export function useRecordingState(): Ref<boolean> {
  return readonly(isRecording);
}

export function setRecordingState(): () => void {
  return flipRecording;
}

// notification state functions
function setNotification(notificationItem: NotificationItem): void {
  notification.value = notificationItem;
}

export function useNotificationState(): Ref<NotificationItem> {
  return readonly(notification);
}

export function setNotificationState(): (
  notificationItem: NotificationItem
) => void {
  return setNotification;
}
