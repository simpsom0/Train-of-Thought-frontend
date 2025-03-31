import type { severityLevel } from '@/constants/severity';

export interface NotificationItem {
  level: severityLevel;
  text: string;
  id: number;
}
