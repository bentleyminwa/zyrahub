import { StaticImageData } from 'next/image';

export interface Hub {
  id: string;
  name: string;
  url: string;
  is_claimed: boolean;
  is_closed: boolean;
  rating: number;
  review_count: number;
  photos_count: number;

  categories: {
    alias: string;
    title: string;
  }[];

  price: string;

  attributes: {
    accepts_credit_cards?: boolean;
    wheelchair_accessible?: boolean;
    gender_neutral_restrooms?: boolean;
    offers_in_store_pickup?: boolean;
    repair_services?: boolean;
    [key: string]: boolean | string | number | null | undefined;
  };

  phone: string;
  display_phone: string;

  location: {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    neighborhood: string[];
  };

  coordinates: {
    latitude: number;
    longitude: number;
  };

  hours: {
    open: {
      day: number;
      start: string;
      end: string;
      is_overnight: boolean;
    }[];
    hours_type: string;
    is_open_now: boolean;
  }[];

  photos: {
    id: string;
    caption: string;
    url: StaticImageData | string;
    width: number;
    height: number;
  }[];

  highlights: string[];
  description: string;

  recent_reviews: {
    id: string;
    user: {
      id: string;
      name: string;
      profile_url: string;
    };
    rating: number;
    time_created: string;
    text: string;
    url: string;
  }[];

  more_info: {
    people_also_viewed: string[];
    similar_places_nearby: string[];
    top_tags: {
      tag: string;
      count: number;
    }[];
  };

  created_at: string;
  updated_at: string;
}

export type Hubs = Hub[];
