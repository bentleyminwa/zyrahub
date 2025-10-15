import {
  BellIcon,
  ChefHatIcon,
  DumbbellIcon,
  FlowerIcon,
  HeartIcon,
  HousePlugIcon,
  PizzaIcon,
  ShirtIcon,
  StarIcon,
  StoreIcon,
  WineIcon,
} from 'lucide-react';

import logo from '../public/logo.png';
import heroImage from './images/hero.jpg';

import chickenInn from './images/hub/chicken-inn.jpg';
import quickmart from './images/hub/quickmart.jpg';
import wines from './images/hub/wines.jpg';

export const assets = {
  logo,
  heroImage,
  services: [
    {
      node: <PizzaIcon />,
      title: 'Fast Food',
      slug: 'fast-food',
    },
    {
      node: <ChefHatIcon />,
      title: 'Restaurants',
      slug: 'restaurants',
    },
    {
      node: <WineIcon />,
      title: 'Nightlife',
      slug: 'nightlife',
    },
    {
      node: <StoreIcon />,
      title: 'Shopping',
      slug: 'shopping',
    },
    {
      node: <ShirtIcon />,
      title: 'Fashion',
      slug: 'fashion',
    },
    {
      node: <HousePlugIcon />,
      title: 'Home Services',
      slug: 'home-services',
    },
    {
      node: <FlowerIcon />,
      title: 'Beauty & Wellness',
      slug: 'beauty-wellness',
    },
    {
      node: <DumbbellIcon />,
      title: 'Gym & Fitness',
      slug: 'gym-fitness',
    },
  ],
  navIcons: [
    {
      node: <HeartIcon />,
      label: 'Favorites',
      path: '/favorites',
    },
    {
      node: <BellIcon />,
      label: 'Notifications',
      path: '/notifications',
    },
  ],
  footer: {
    companyInfo: {
      title: 'Hub.',
      description:
        'Feel your world shrunk on the same platform. Access all your favorite services in one place.',
    },
    aboutInfo: {
      title: 'About',
      links: [
        { title: 'About Z Hub', path: '/about' },
        { title: 'Terms & Conditions', path: '/terms' },
        { title: 'Privacy Policy', path: '/privacy' },
      ],
    },
    contactInfo: {
      title: 'Contact',
      links: [
        { title: 'Contact Z Hub', path: '/contact' },
        { title: 'Support', path: '/support' },
      ],
    },
  },
  hubs: [
    {
      id: 'sephora-nyc-1535-broadway',
      name: 'Sephora',
      url: 'https://example.com/hub/sephora-nyc',
      is_claimed: true,
      is_closed: false,
      rating: 4.2,
      review_count: 2500,
      photos_count: 132,
      categories: [{ alias: 'beauty-wellness', title: 'Beauty & Wellness' }],
      price: '$$',
      attributes: {
        accepts_credit_cards: true,
        wheelchair_accessible: true,
        gender_neutral_restrooms: false,
        offers_in_store_pickup: true,
      },
      phone: '(212) 944-6789',
      display_phone: '(212) 944-6789',
      location: {
        address1: '1535 Broadway',
        address2: '',
        address3: '',
        city: 'New York',
        state: 'NY',
        postal_code: '10036',
        country: 'US',
        neighborhood: ['Times Square'],
      },
      coordinates: {
        latitude: 0.51928,
        longitude: 35.27469,
      },
      hours: [
        {
          open: [
            { day: 0, start: '0900', end: '2300', is_overnight: false },
            { day: 1, start: '0900', end: '2300', is_overnight: false },
            { day: 2, start: '0900', end: '2300', is_overnight: false },
            { day: 3, start: '0900', end: '2300', is_overnight: false },
            { day: 4, start: '0900', end: '2300', is_overnight: false },
            { day: 5, start: '0900', end: '2300', is_overnight: false },
            { day: 6, start: '0900', end: '2300', is_overnight: false },
          ],
          hours_type: 'REGULAR',
          is_open_now: true,
        },
      ],
      photos: [
        {
          id: 'photo1',
          caption: 'Storefront',
          url: chickenInn,
          width: 800,
          height: 600,
        },
        {
          id: 'photo2',
          caption: 'Interior',
          url: 'https://example.com/img/sephora2.jpg',
          width: 1200,
          height: 800,
        },
      ],
      highlights: [
        'In-store pickup',
        'Wheelchair accessible',
        'Great selection',
      ],
      description:
        'A leading beauty hub offering makeup, skincare, and fragrance collections with in-store experiences.',
      recent_reviews: [
        {
          id: 'r1',
          user: {
            id: 'u1',
            name: 'Lena M.',
            profile_url: 'https://example.com/user/u1',
          },
          rating: 5,
          time_created: '2025-04-01T14:20:00Z',
          text: 'Amazing staff and product variety!',
          url: 'https://example.com/hub/sephora-nyc/review/r1',
        },
      ],
      more_info: {
        people_also_viewed: ['ulta-beauty-midtown', 'mac-store-bryant-park'],
        similar_places_nearby: ['blue-mercantile-nyc'],
        top_tags: [
          { tag: 'Makeup', count: 320 },
          { tag: 'Skincare', count: 210 },
        ],
      },
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2025-07-01T12:00:00Z',
    },
    {
      id: 'Divora-nyc-1535-broadway',
      name: 'Divora',
      url: 'https://example.com/hub/sephora-nyc',
      is_claimed: true,
      is_closed: true,
      rating: 4.2,
      review_count: 2500,
      photos_count: 132,
      categories: [{ alias: 'beauty-wellness', title: 'Beauty & Wellness' }],
      price: '$$',
      attributes: {
        accepts_credit_cards: true,
        wheelchair_accessible: true,
        gender_neutral_restrooms: false,
        offers_in_store_pickup: true,
      },
      phone: '(212) 944-6789',
      display_phone: '(212) 944-6789',
      location: {
        address1: '1535 Broadway',
        address2: '',
        address3: '',
        city: 'New York',
        state: 'NY',
        postal_code: '10036',
        country: 'US',
        neighborhood: ['Times Square'],
      },
      coordinates: {
        latitude: 0.5,
        longitude: 35.28,
      },
      hours: [
        {
          open: [
            { day: 0, start: '0900', end: '2300', is_overnight: false },
            { day: 1, start: '0900', end: '2300', is_overnight: false },
            { day: 2, start: '0900', end: '2300', is_overnight: false },
            { day: 3, start: '0900', end: '2300', is_overnight: false },
            { day: 4, start: '0900', end: '2300', is_overnight: false },
            { day: 5, start: '0900', end: '2300', is_overnight: false },
            { day: 6, start: '0900', end: '2300', is_overnight: false },
          ],
          hours_type: 'REGULAR',
          is_open_now: true,
        },
      ],
      photos: [
        {
          id: 'photo1',
          caption: 'Storefront',
          url: chickenInn,
          width: 800,
          height: 600,
        },
        {
          id: 'photo2',
          caption: 'Interior',
          url: 'https://example.com/img/sephora2.jpg',
          width: 1200,
          height: 800,
        },
      ],
      highlights: [
        'In-store pickup',
        'Wheelchair accessible',
        'Great selection',
      ],
      description:
        'A leading beauty hub offering makeup, skincare, and fragrance collections with in-store experiences.',
      recent_reviews: [
        {
          id: 'r1',
          user: {
            id: 'u1',
            name: 'Lena M.',
            profile_url: 'https://example.com/user/u1',
          },
          rating: 5,
          time_created: '2025-04-01T14:20:00Z',
          text: 'Amazing staff and product variety!',
          url: 'https://example.com/hub/sephora-nyc/review/r1',
        },
      ],
      more_info: {
        people_also_viewed: ['ulta-beauty-midtown', 'mac-store-bryant-park'],
        similar_places_nearby: ['blue-mercantile-nyc'],
        top_tags: [
          { tag: 'Makeup', count: 320 },
          { tag: 'Skincare', count: 210 },
        ],
      },
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2025-07-01T12:00:00Z',
    },
    {
      id: 'urban-outfitters-downtown',
      name: 'Urban Outfitters',
      url: 'https://example.com/hub/urban-outfitters-downtown',
      is_claimed: true,
      is_closed: false,
      rating: 4.0,
      review_count: 1100,
      photos_count: 85,
      categories: [
        { alias: 'fashion', title: 'Clothing Stores' },
        { alias: 'accessories', title: 'Accessories' },
      ],
      price: '$$',
      attributes: {
        accepts_credit_cards: true,
        wheelchair_accessible: true,
        gender_neutral_restrooms: true,
        offers_in_store_pickup: true,
      },
      phone: '(212) 600-1220',
      display_phone: '(212) 600-1220',
      location: {
        address1: '628 Broadway',
        address2: '',
        address3: '',
        city: 'New York',
        state: 'NY',
        postal_code: '10012',
        country: 'US',
        neighborhood: ['SoHo'],
      },
      coordinates: {
        latitude: 0.48954,
        longitude: 35.997,
      },
      hours: [
        {
          open: [
            { day: 0, start: '1000', end: '2100', is_overnight: false },
            { day: 1, start: '1000', end: '2100', is_overnight: false },
            { day: 2, start: '1000', end: '2100', is_overnight: false },
            { day: 3, start: '1000', end: '2100', is_overnight: false },
            { day: 4, start: '1000', end: '2100', is_overnight: false },
            { day: 5, start: '1000', end: '2100', is_overnight: false },
            { day: 6, start: '1000', end: '2100', is_overnight: false },
          ],
          hours_type: 'REGULAR',
          is_open_now: false,
        },
      ],
      photos: [
        {
          id: 'photo1',
          caption: 'Storefront',
          url: wines,
          width: 800,
          height: 600,
        },
      ],
      highlights: ['Trendy clothing', 'Student discounts'],
      description:
        'Trendy lifestyle retailer featuring fashion, accessories, and home décor.',
      recent_reviews: [
        {
          id: 'r2',
          user: {
            id: 'u2',
            name: 'Chris B.',
            profile_url: 'https://example.com/user/u2',
          },
          rating: 4,
          time_created: '2025-02-12T16:10:00Z',
          text: 'Great vibes and friendly staff.',
          url: 'https://example.com/hub/urban-outfitters-downtown/review/r2',
        },
      ],
      more_info: {
        people_also_viewed: ['zara-nyc', 'hm-soho'],
        similar_places_nearby: ['uniqlo-soho'],
        top_tags: [
          { tag: 'Streetwear', count: 160 },
          { tag: 'Vintage', count: 90 },
        ],
      },
      created_at: '2023-06-01T00:00:00Z',
      updated_at: '2025-05-21T11:00:00Z',
    },

    {
      id: 'apple-store-fifth-avenue',
      name: 'Apple Store Fifth Avenue',
      url: 'https://example.com/hub/apple-store-fifth-avenue',
      is_claimed: true,
      is_closed: false,
      rating: 4.5,
      review_count: 5400,
      photos_count: 210,
      categories: [
        { alias: 'electronics', title: 'Electronics' },
        { alias: 'tech-support', title: 'Tech Support' },
      ],
      price: '$$$',
      attributes: {
        accepts_credit_cards: true,
        wheelchair_accessible: true,
        offers_in_store_pickup: true,
        repair_services: true,
      },
      phone: '(212) 336-1440',
      display_phone: '(212) 336-1440',
      location: {
        address1: '767 5th Ave',
        address2: '',
        address3: '',
        city: 'New York',
        state: 'NY',
        postal_code: '10153',
        country: 'US',
        neighborhood: ['Midtown East'],
      },
      coordinates: {
        latitude: 40.7639,
        longitude: -73.9725,
      },
      hours: [
        {
          open: [
            { day: 0, start: '0000', end: '2359', is_overnight: false },
            { day: 1, start: '0000', end: '2359', is_overnight: false },
            { day: 2, start: '0000', end: '2359', is_overnight: false },
            { day: 3, start: '0000', end: '2359', is_overnight: false },
            { day: 4, start: '0000', end: '2359', is_overnight: false },
            { day: 5, start: '0000', end: '2359', is_overnight: false },
            { day: 6, start: '0000', end: '2359', is_overnight: false },
          ],
          hours_type: 'REGULAR',
          is_open_now: true,
        },
      ],
      photos: [
        {
          id: 'photo1',
          caption: 'Glass Cube Entrance',
          url: quickmart,
          width: 1024,
          height: 768,
        },
        {
          id: 'photo2',
          caption: 'Store Interior',
          url: 'https://example.com/img/apple2.jpg',
          width: 1200,
          height: 800,
        },
      ],
      highlights: ['24-hour store', 'Tech support available', 'Modern design'],
      description:
        'Flagship Apple Store offering the latest devices, repairs, and technical support around the clock.',
      recent_reviews: [
        {
          id: 'r3',
          user: {
            id: 'u3',
            name: 'Jordan P.',
            profile_url: 'https://example.com/user/u3',
          },
          rating: 5,
          time_created: '2025-06-18T12:05:00Z',
          text: 'Incredible architecture and helpful staff!',
          url: 'https://example.com/hub/apple-store-fifth-avenue/review/r3',
        },
      ],
      more_info: {
        people_also_viewed: ['best-buy-midtown', 'bose-store-nyc'],
        similar_places_nearby: ['samsung-experience-store'],
        top_tags: [
          { tag: 'Tech', count: 450 },
          { tag: 'Gadgets', count: 320 },
        ],
      },
      created_at: '2022-10-15T00:00:00Z',
      updated_at: '2025-07-10T10:00:00Z',
    },
  ],
  hubActions: [
    {
      label: 'Write a review',
      href: '#',
      icon: <StarIcon />,
    },
    {
      label: 'Save Hub',
      href: '#',
      icon: <HeartIcon />,
    },
  ],
};
