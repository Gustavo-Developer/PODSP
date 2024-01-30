import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  // Ignite v80
  {
    id: 'igv801',
    name: 'Grapefruit Mint',
    price: 105,
    favorite: false,
    imageUrl: 'assets/ignitev80-grapefruit-mint.png',
    tags: ['Ignite'],
  },
  {
    id: 'igv802',
    name: 'Strawberry Ice',
    price: 105,
    favorite: false,
    imageUrl: 'assets/ignitev80-strawberry-ice.png',
    tags: ['Ignite'],
  },
  {
    id: 'igv803',
    name: 'Passion Fruit Sour Kiwi',
    price: 105,
    favorite: false,
    imageUrl: 'assets/ignitev80-passion-fruit-sour-kiwi.png',
    tags: ['Ignite'],
  },

  // ElfBar 5k
  {
    id: 'elf5k1',
    name: 'Grape',
    price: 70,
    favorite: false,
    imageUrl: 'assets/elfbar5k-grape.jpg',
    tags: ['ElfBar'],
  },
  {
    id: 'elf5k2',
    name: 'Watermelon Ice',
    price: 70,
    favorite: false,
    imageUrl: 'assets/elfbar5k-watermelon-ice.jpg',
    tags: ['ElfBar'],
  },
  {
    id: 'elf5k3',
    name: 'Apple Peach',
    price: 70,
    favorite: false,
    imageUrl: 'assets/elfbar5k-apple-peach.jpg',
    tags: ['ElfBar'],
  },

  // OxBar 8k
  {
    id: 'ox8k1',
    name: 'Peach Blue Razz',
    price: 95,
    favorite: false,
    imageUrl: 'assets/oxbar8k-peach-blue-razz.png',
    tags: ['OxBar'],
  },
  {
    id: 'ox8k2',
    name: 'Sakura Grape',
    price: 95,
    favorite: false,
    imageUrl: 'assets/oxbar8k-sakura-grape.png',
    tags: ['OxBar'],
  },
  {
    id: 'ox8k3',
    name: 'Fruit Paradise',
    price: 95,
    favorite: false,
    imageUrl: 'assets/oxbar8k-fruit-paradise.png',
    tags: ['OxBar'],
  },
  {
    id: 'ox8k4',
    name: 'Cranberry Lemon Ice',
    price: 95,
    favorite: false,
    imageUrl: 'assets/oxbar8k-cranberry-lemon-ice.png',
    tags: ['OxBar'],
  },
  {
    id: 'ox8k5',
    name: 'Kiwi Passion Kick',
    price: 95,
    favorite: false,
    imageUrl: 'assets/oxbar8k-kiwi-passion-kick.png',
    tags: ['OxBar'],
  },

  // ElfBar 4k
  {
    id: 'elf4k1',
    name: 'Triple Berry Ice',
    price: 65,
    favorite: false,
    imageUrl: 'assets/elfbar4k-triple-berry-ice.jpg',
    tags: ['ElfBar'],
  },
  {
    id: 'elf4k2',
    name: 'Lemon Mint',
    price: 65,
    favorite: false,
    imageUrl: 'assets/elfbar4k-lemon-mint.jpg',
    tags: ['ElfBar'],
  },
];

export const sample_tags: Tag[] = [
  { name: 'ElfBar', count: 7 },
  { name: 'OxBar', count: 5 },
  { name: 'Ignite', count: 3 },
];
