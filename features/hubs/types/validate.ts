import type { Review } from '@/features/reviews/types/validate';
import { StaticImageData } from 'next/image';

export interface User {
  id: string;
  name: string;
  profile_url: StaticImageData | string;
}

interface Categories {
  alias: string;
  title: string;
}

interface Attributes {
  accepts_credit_cards?: boolean;
  wheelchair_accessible?: boolean;
  gender_neutral_restrooms?: boolean;
  offers_in_store_pickup?: boolean;
  repair_services?: boolean;
  [key: string]: boolean | string | number | null | undefined;
}

interface Location {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  neighborhood: string[];
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Hour {
  open: {
    day: number;
    start: string;
    end: string;
    is_overnight: boolean;
  }[];
  hours_type: string;
  is_open_now: boolean;
}

interface Photo {
  id: string;
  caption: string;
  url: StaticImageData | string;
  width: number;
  height: number;
}

interface MoreInfo {
  people_also_viewed: string[];
  similar_places_nearby: string[];
  top_tags: {
    tag: string;
    count: number;
  }[];
}

interface ContactInfo {
  type: string;
  label: string;
  address: string;
}

export interface Hub {
  id: string;
  slug: string;
  name: string;
  url: string;
  logo: StaticImageData | string;
  banner: StaticImageData | string;
  is_claimed: boolean;
  is_closed: boolean;
  rating: number;
  review_count: number;
  photos_count: number;
  categories: Categories[];
  price: string;
  attributes: Attributes;
  phone: string;
  display_phone: string;
  location: Location;
  coordinates: Coordinates;
  hours: Hour[];
  photos: Photo[];
  highlights: string[];
  description: string;
  recent_reviews: Review[];
  more_info: MoreInfo;
  contact_info: ContactInfo[];
  created_at: string;
  updated_at: string;
}

export type Hubs = Hub[];
