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
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200',
    link: '/shop?collection=solstice'
  },
  {
    id: 'c2',
    title: 'Modern Tailoring',
    subtitle: 'Core Collection',
    description: 'Timeless silhouettes reimagined for the contemporary professional.',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=1200',
    link: '/shop?collection=tailoring'
  },
  {
    id: 'c3',
    title: 'Minimalist Essentials',
    subtitle: 'Basics',
    description: 'The foundation of a curated wardrobe. High-quality basics that last a lifetime.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=1200',
    link: '/shop?collection=essentials'
  }
];
