import { ChefHatIcon, PizzaIcon, StoreIcon, WineIcon } from 'lucide-react';
import logo from '../public/logo.png';
import heroImage from './images/hero.jpg';

export const assets = {
  logo,
  heroImage,
  serviceLogos: [
    {
      node: <PizzaIcon />,
      title: 'Fast Food',
    },
    {
      node: <ChefHatIcon />,
      title: 'Restaurant',
    },
    {
      node: <WineIcon />,
      title: 'Nightlife',
    },
    {
      node: <StoreIcon />,
      title: 'Shop',
    },
  ],
};
