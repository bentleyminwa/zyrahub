import type { User } from '@/features/hubs/types/validate';

export interface Review {
  id: string;
  user: User;
  rating: number;
  time_created: string;
  text: string;
  url: string;
}
