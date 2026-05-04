export interface Product {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Accessories';
  subCategory: string;
  price: number;
  description: string;
  details: string[];
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isTrending?: boolean;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Silk Evening Gown',
    category: 'Women',
    subCategory: 'Dresses',
    price: 1250,
    description: 'A floor-length evening gown crafted from 100% mulberry silk, featuring a delicate cowl neckline and a subtle side slit.',
    details: [
      '100% Mulberry Silk',
      'Hand-finished seams',
      'Dry clean only',
      'Ethically made in Italy'
    ],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Onyx', hex: '#141414' },
      { name: 'Champagne', hex: '#F1E9D2' }
    ],
    isNew: true,
    isTrending: true
  },
  {
    id: 'p2',
    name: 'Cashmere Overcoat',
    category: 'Men',
    subCategory: 'Outerwear',
    price: 1850,
    description: 'The definitive winter staple. Our structured overcoat is tailored from heavy-weight Italian cashmere for ultimate warmth and a refined silhouette.',
    details: [
      '100% Italian Cashmere',
      'Lined in cupro silk',
      'Three-button closure',
      'Interior breast pockets'
    ],
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['46', '48', '50', '52', '54'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Midnight', hex: '#191970' }
    ],
    isTrending: true
  },
  {
    id: 'p3',
    name: 'Leather Minimalist Tote',
    category: 'Accessories',
    subCategory: 'Bags',
    price: 680,
    description: 'Clean lines and premium pebble-grain leather define this spacious everyday companion. Designed to age beautifully over time.',
    details: [
      'Full-grain Tuscan leather',
      'Magnetic closure',
      'Detachable interior pouch',
      'Reinforced base'
    ],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Espresso', hex: '#3B2F2F' },
      { name: 'Ivory', hex: '#FFFFF0' }
    ],
    isNew: true
  },
  {
    id: 'p4',
    name: 'Wool Pleated Trousers',
    category: 'Men',
    subCategory: 'Trousers',
    price: 420,
    description: 'Precision-cut trousers with a modern relaxed fit and single pleat detail. Crafted from breathable tropical wool.',
    details: [
      '100% Virgin Wool',
      'Hook and bar closure',
      'Unfinished hems for custom tailoring',
      'Side adjusters'
    ],
    images: [
      'https://images.unsplash.com/photo-1624371414361-e6e0ed2b6f6c?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Slate', hex: '#708090' },
      { name: 'Black', hex: '#000000' }
    ]
  },
  {
    id: 'p5',
    name: 'Cashmere Knit Set',
    category: 'Women',
    subCategory: 'Knitwear',
    price: 890,
    description: 'The ultimate lounger luxury. A matching two-piece set featuring a relaxed polo knit and wide-leg trousers.',
    details: [
      '70% Cashmere, 30% Silk',
      'Seamless construction',
      'Elasticated waistband',
      'Ribbed cuffs'
    ],
    images: [
      'https://images.unsplash.com/photo-1576566582440-a39399120422?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Oatmeal', hex: '#EAE0C8' },
      { name: 'Sage', hex: '#B2AC88' }
    ],
    isNew: true
  },
  {
    id: 'p6',
    name: 'Structured Wool Blazer',
    category: 'Women',
    subCategory: 'Jackets',
    price: 950,
    description: 'A sharp, minimalist blazer tailored from exceptionally fine Italian wool. Featuring a clean silhouette with hidden closures.',
    details: [
      '100% Virgin Wool',
      'Silk lining',
      'Structured shoulders',
      'Internal smartphone pocket'
    ],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aec36adad?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['34', '36', '38', '40', '42'],
    colors: [
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Onyx', hex: '#141414' }
    ],
    isNew: true,
    isTrending: true
  },
  {
    id: 'p7',
    name: 'Cotton Poplin Shirt',
    category: 'Men',
    subCategory: 'Shirts',
    price: 280,
    description: 'The essential white shirt, redefined. Crafted from crisp Giza cotton with a refined point collar and mother-of-pearl buttons.',
    details: [
      '100% Giza Cotton',
      'Mother-of-pearl buttons',
      'Tailored fit',
      'Removable collar stays'
    ],
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1621072156002-e2fcc103e81e?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['15', '15.5', '16', '16.5', '17'],
    colors: [
      { name: 'Optic White', hex: '#FFFFFF' },
      { name: 'Light Blue', hex: '#ADD8E6' }
    ],
    isTrending: true
  },
  {
    id: 'p8',
    name: 'Suede Chelsea Boots',
    category: 'Men',
    subCategory: 'Footwear',
    price: 550,
    description: 'Elegant footwear for the modern minimalist. Hand-lasted in Portugal from premium calf suede with a durable Goodyear welt.',
    details: [
      'Calf Suede',
      'Goodyear Welted',
      'Leather lining',
      'Elastic side panels'
    ],
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Taupe', hex: '#B38B6D' },
      { name: 'Chocolate', hex: '#3E2723' }
    ]
  },
  {
    id: 'p9',
    name: 'Solar Minimalist Watch',
    category: 'Accessories',
    subCategory: 'Watches',
    price: 1100,
    description: 'A masterpiece of sustainable engineering and design. This solar-powered timepiece features a titanium case and a sapphire crystal face.',
    details: [
      'Titanium Case',
      'Sapphire Crystal',
      'Solar-powered movement',
      'Water resistant to 50m'
    ],
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Gold', hex: '#D4AF37' }
    ],
    isNew: true
  },
  {
    id: 'p10',
    name: 'Silk Twill Scarf',
    category: 'Accessories',
    subCategory: 'Scarves',
    price: 320,
    description: 'Luxurious silk twill scarf featuring a bespoke geometric print inspired by modernist architecture. Hand-rolled edges.',
    details: [
      '100% Silk Twill',
      'Hand-rolled edges',
      'Bespoke print',
      'Made in France'
    ],
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Terracotta', hex: '#E2725B' },
      { name: 'Navy', hex: '#000080' }
    ]
  },
  {
    id: 'p11',
    name: 'Cashmere Turtleneck',
    category: 'Women',
    subCategory: 'Knitwear',
    price: 480,
    description: 'An essential layering piece for cooler months. Knitted from ultra-soft Mongolian cashmere for a second-skin feel.',
    details: [
      '100% Mongolian Cashmere',
      'Ribbed neckline and cuffs',
      'Seamless finish',
      'Hypoallergenic'
    ],
    images: [
      'https://images.unsplash.com/photo-1576566582440-a39399120422?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Sand', hex: '#D2B48C' },
      { name: 'Charcoal', hex: '#36454F' }
    ]
  },
  {
    id: 'p12',
    name: 'Linen Wide-Leg Trousers',
    category: 'Women',
    subCategory: 'Trousers',
    price: 350,
    description: 'Effortless elegance for the sun-drenched days. These wide-leg trousers are cut from high-density Belgian linen.',
    details: [
      '100% Belgian Linen',
      'High-waisted fit',
      'Side seam pockets',
      'Breathable weave'
    ],
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['34', '36', '38', '40'],
    colors: [
      { name: 'Natural', hex: '#F5F5DC' },
      { name: 'Black', hex: '#000000' }
    ],
    isNew: true
  },
  {
    id: 'p13',
    name: 'Merino Wool Cardigan',
    category: 'Men',
    subCategory: 'Knitwear',
    price: 390,
    description: 'A versatile layer for any occasion. This classic cardigan is knitted from fine-gauge merino wool for a lightweight yet warm feel.',
    details: [
      '100% Extra-fine Merino Wool',
      'Horn buttons',
      'Fully fashioned construction',
      'V-neck silhouette'
    ],
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1550992383-7c8703792015?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Navy', hex: '#000080' },
      { name: 'Grey Melange', hex: '#808080' }
    ]
  },
  {
    id: 'p14',
    name: 'Leather Card Holder',
    category: 'Accessories',
    subCategory: 'Small Leather Goods',
    price: 180,
    description: 'Minimalist efficiency for your essentials. Hand-stitched from vegetable-tanned leather with space for four cards and folded notes.',
    details: [
      'Vegetable-tanned leather',
      'Four card slots',
      'Central compartment',
      'Burnished edges'
    ],
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Cognac', hex: '#9A4638' },
      { name: 'Black', hex: '#000000' }
    ]
  },
  {
    id: 'p15',
    name: 'Minimalist Hoop Earrings',
    category: 'Accessories',
    subCategory: 'Jewelry',
    price: 350,
    description: 'Timeless 18k gold-plated hoops with a subtle brushed finish. Designed for daily wear and effortless sophistication.',
    details: [
      '18k Gold Plated',
      'Sterling silver base',
      'Brushed finish',
      'Lightweight design'
    ],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Gold', hex: '#D4AF37' }
    ],
    isTrending: true
  },
  {
    id: 'p16',
    name: 'Premium Leather Belt',
    category: 'Accessories',
    subCategory: 'Belts',
    price: 220,
    description: 'A classic accessory crafted from thick, full-grain bridle leather with a solid brass buckle.',
    details: [
      'Full-grain Bridle Leather',
      'Solid brass buckle',
      'Hand-burnished edges',
      'Width: 3cm'
    ],
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['80', '85', '90', '95'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Tan', hex: '#D2B48C' }
    ]
  },
  {
    id: 'p17',
    name: 'Oversized Silk Scarf',
    category: 'Women',
    subCategory: 'Accessories',
    price: 450,
    description: 'A statement piece for any season. This oversized scarf is printed on 16mm silk twill with a hand-painted floral motif.',
    details: [
      '100% Silk Twill',
      'Hand-painted motif',
      'Dimensions: 140x140cm',
      'Hand-rolled edges'
    ],
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Midnight Garden', hex: '#191970' }
    ]
  },
  {
    id: 'p18',
    name: 'Structured Wool Cap',
    category: 'Men',
    subCategory: 'Accessories',
    price: 150,
    description: 'The luxury recreation of a sports classic. Tailored from the same premium wool as our overcoats.',
    details: [
      '100% Merino Wool',
      'Leather adjuster',
      'Satin lining',
      'Minimalist branding'
    ],
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['Adjustable'],
    colors: [
      { name: 'Anthracite', hex: '#383E42' },
      { name: 'Camel', hex: '#C19A6B' }
    ]
  },
  {
    id: 'p19',
    name: 'Cashmere Beanie',
    category: 'Accessories',
    subCategory: 'Hats',
    price: 120,
    description: 'A luxurious ribbed beanie knitted from 100% Mongolian cashmere. Soft, warm, and timeless.',
    details: [
      '100% Cashmere',
      'Ribbed knit',
      'One size fits all',
      'Made in Scotland'
    ],
    images: [
      'https://images.unsplash.com/photo-1576871333062-70592a83f8ca?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Grey', hex: '#808080' },
      { name: 'Black', hex: '#000000' }
    ]
  },
  {
    id: 'p20',
    name: 'Relaxed Silk Shirt',
    category: 'Women',
    subCategory: 'Shirts',
    price: 380,
    description: 'An oversized silk shirt with a slight sheen and beautiful drape. Perfect for layering or wearing on its own.',
    details: [
      '100% Silk Twill',
      'Dropped shoulders',
      'Mother of pearl buttons',
      'Oversized fit'
    ],
    images: [
      'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Pearl', hex: '#FBFCF8' },
      { name: 'Deep Navy', hex: '#000080' }
    ],
    isNew: true
  },
  {
    id: 'p21',
    name: 'Wool Harrington Jacket',
    category: 'Men',
    subCategory: 'Outerwear',
    price: 650,
    description: 'A modern take on the classic Harrington. Made from structured wool with a clean, minimalist design.',
    details: [
      '100% Melton Wool',
      'Satin lining',
      'Internal chest pocket',
      'Two-way zipper'
    ],
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Olive', hex: '#556B2F' },
      { name: 'Black', hex: '#000000' }
    ]
  }
];
