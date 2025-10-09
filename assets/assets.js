import {
  ChefHatIcon,
  DumbbellIcon,
  FlowerIcon,
  HousePlugIcon,
  PizzaIcon,
  ShirtIcon,
  StoreIcon,
  WineIcon,
} from 'lucide-react';
import logo from '../public/logo.png';
import heroImage from './images/hero.jpg';

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
      title: 'Shop',
      slug: 'shop',
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
};
