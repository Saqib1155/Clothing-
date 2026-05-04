export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export const collections: Collection[] = [
  {
    id: 'c1',
    title: 'The Solstice Edit',
    subtitle: 'Summer 2026',
    description: 'Lightweight linens and flowy silks designed for the warmth of the golden hour.',
    image: 'https://images.unsplash.com/photo-1523381235212-d7b2d728144e?auto=format&fit=crop&q=80&w=1200',
    link: '/shop?collection=solstice'
  },
  {
    id: 'c2',
    title: 'Modern Tailoring',
    subtitle: 'Core Collection',
    description: 'Timeless silhouettes reimagined for the contemporary professional.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
    link: '/shop?collection=tailoring'
  },
  {
    id: 'c3',
    title: 'Minimalist Essentials',
    subtitle: 'Basics',
    description: 'The foundation of a curated wardrobe. High-quality basics that last a lifetime.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=1200',
    link: '/shop?collection=essentials'
  }
];
