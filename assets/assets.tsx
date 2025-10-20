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

import sephora_1 from './images/hub/sephora-1.jpg';
import sephora_2 from './images/hub/sephora-2.jpg';
import sephora_main from './images/hub/sephora-main.jpg';

import userImage from './images/users/user.jpg';

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
      id: '001',
      slug: 'sephora-nyc-1535-broadway',
      name: 'Sephora',
      url: 'https://example.com/hub/sephora-nyc',
      logo: sephora_main,
      banner: sephora_main,
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
      phone: '+254-743-053-331',
      display_phone: '+254-743-053-331',
      location: {
        address1: '1523-KVDA Road',
        address2: '',
        address3: '',
        city: 'Eldoret',
        state: 'El',
        postal_code: '10036',
        country: 'KE',
        neighborhood: ['KVDA Square', 'Eldoret'],
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
          url: sephora_1,
          width: 800,
          height: 600,
        },
        {
          id: 'photo2',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo3',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo4',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo5',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo6',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo7',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo8',
          caption: 'Interior',
          url: sephora_2,
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
            profile_url: userImage,
          },
          rating: 5,
          time_created: '2025-04-01T14:20:00Z',
          text: 'Amazing staff and product variety! I really love this place and recommend it to my friends. So if you are in the area, check it out.',
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
      contact_info: [
        {
          type: 'direction',
          label: 'Get Directions',
          address:
            'https://google.com/maps?q=1535 Broadway, New York, NY 10036',
        },
        {
          type: 'phone',
          label: '(212) 944-6789',
          address: 'https://example.com/hub/sephora-nyc/phone/1234567890',
        },
        {
          type: 'website',
          label: 'https://example.com/hub/sephora-nyc',
          address: 'https://example.com/hub/sephora-nyc',
        },
      ],
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2025-07-01T12:00:00Z',
    },
    {
      id: '002',
      slug: 'mac-store-bryant-park',
      name: 'MAC',
      url: 'https://example.com/hub/sephora-nyc',
      logo: sephora_main,
      banner: sephora_main,
      is_claimed: true,
      is_closed: false,
      rating: 4.2,
      review_count: 2500,
      photos_count: 132,
      categories: [{ alias: 'restaurants', title: 'Restaurants' }],
      price: '$$',
      attributes: {
        accepts_credit_cards: true,
        wheelchair_accessible: true,
        gender_neutral_restrooms: false,
        offers_in_store_pickup: true,
      },
      phone: '+254-743-053-331',
      display_phone: '+254-743-053-331',
      location: {
        address1: '1523-KVDA Road',
        address2: '',
        address3: '',
        city: 'Eldoret',
        state: 'El',
        postal_code: '10036',
        country: 'KE',
        neighborhood: ['KVDA Square', 'Eldoret'],
      },
      coordinates: {
        latitude: 0.51928,
        longitude: 35.27854,
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
          url: sephora_1,
          width: 800,
          height: 600,
        },
        {
          id: 'photo2',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo3',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo4',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo5',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo6',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo7',
          caption: 'Interior',
          url: sephora_2,
          width: 1200,
          height: 800,
        },
        {
          id: 'photo8',
          caption: 'Interior',
          url: sephora_2,
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
            profile_url: userImage,
          },
          rating: 5,
          time_created: '2025-04-01T14:20:00Z',
          text: 'Amazing staff and product variety! I really love this place and recommend it to my friends. So if you are in the area, check it out.',
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
      contact_info: [
        {
          type: 'direction',
          label: 'Get Directions',
          address:
            'https://google.com/maps?q=1535 Broadway, New York, NY 10036',
        },
        {
          type: 'phone',
          label: '(212) 944-6789',
          address: 'https://example.com/hub/sephora-nyc/phone/1234567890',
        },
        {
          type: 'website',
          label: 'https://example.com/hub/sephora-nyc',
          address: 'https://example.com/hub/sephora-nyc',
        },
      ],
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2025-07-01T12:00:00Z',
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
