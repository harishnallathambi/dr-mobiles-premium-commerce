export type Product = {
  id: string;
  name: string;
  brand: string;
  category: 'iPhone' | 'Android' | 'iPad' | 'Accessory' | 'Service' | 'Watches' | 'Audio';
  price: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
  image: string; // main image
  images?: string[]; // gallery images
  emiAvailable: boolean;
  inStock: boolean;
  deliveryEstimate: string;
  colors?: { name: string; hex: string }[];
  storageOptions?: string[];
  specs?: {
    display?: string;
    processor?: string;
    camera?: string;
    battery?: string;
    ram?: string;
  };
  description?: string;
};

export const products: Product[] = [
  // iPhones
  {
    id: 'iph-17-pm',
    name: 'iPhone 17 Pro Max Concept',
    brand: 'Apple',
    category: 'iPhone',
    price: 159900,
    rating: 4.9,
    reviews: 1245,
    image: '/images/hero/iphone-17-pro-max-concept-4-colors.png',
    images: [
      '/images/hero/iphone-17-pro-max-concept-4-colors.png',
      '/images/hero/iphone-17-pro-max-concept-4-colors.png',
      '/images/hero/iphone-17-pro-max-concept-4-colors.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: [
      { name: 'Black Titanium', hex: '#31353A' },
      { name: 'Silver Titanium', hex: '#F2F1ED' },
      { name: 'Deep Blue', hex: '#1B2A47' },
      { name: 'Desert Gold', hex: '#D4AF37' }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.9" Super Retina XDR',
      processor: 'A18 Pro',
      camera: '48MP Main | 5x Telephoto',
      battery: 'Up to 32 hrs video playback'
    },
    description: 'The ultimate iPhone concept featuring an expansive 6.9-inch display, the revolutionary A18 Pro chip, and a breathtaking quad-color titanium finish.'
  },
  {
    id: 'iph-15-pm',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'iPhone',
    price: 119900,
    rating: 4.9,
    reviews: 5245,
    image: '/images/products/iphone/iphone-15-pro-max.png',
    images: [
      '/images/products/iphone/iphone-15-pro-max.png',
      '/images/products/iphone/iphone-15-pro-max.png',
      '/images/products/iphone/iphone-15-pro-max.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: [
      { name: 'Black Titanium', hex: '#4B4845' },
      { name: 'Natural Titanium', hex: '#F2F1ED' },
      { name: 'Blue Titanium', hex: '#31353A' }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.7" Super Retina XDR',
      processor: 'A17 Pro',
      camera: '48MP Main | 5x Telephoto',
      battery: 'Up to 29 hrs video playback'
    }
  },
  {
    id: 'iph-15',
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'iPhone',
    price: 79900,
    rating: 4.7,
    reviews: 3856,
    image: '/images/products/iphone/iphone-15-pro-max.png',
    images: [
      '/images/products/iphone/iphone-15-pro-max.png',
      '/images/products/iphone/iphone-15-pro-max.png',
      '/images/products/iphone/iphone-15-pro-max.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days',
    colors: [
      { name: 'Pink', hex: '#FCE7ED' },
      { name: 'Yellow', hex: '#FBF4D3' },
      { name: 'Black', hex: '#31353A' }
    ],
    storageOptions: ['128GB', '256GB', '512GB']
  },

  // Androids
  {
    id: 'and-s24u',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'Android',
    price: 129900,
    rating: 4.8,
    reviews: 2840,
    image: '/images/products/android/galaxy-s24-ultra.png',
    images: [
      '/images/products/android/galaxy-s24-ultra.png',
      '/images/products/android/galaxy-s24-ultra.png',
      '/images/products/android/galaxy-s24-ultra.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: [
      { name: 'Titanium Black', hex: '#282A2D' },
      { name: 'Titanium Gray', hex: '#D9D7DA' }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      camera: '200MP Main | 100x Zoom',
      battery: '5000mAh',
      ram: '12GB'
    },
    description: 'Welcome to the era of AI. Galaxy S24 Ultra empowers you to unleash your creativity, productivity and possibility.'
  },
  {
    id: 'and-op12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    category: 'Android',
    price: 64999,
    rating: 4.7,
    reviews: 2350,
    image: '/images/products/android/galaxy-s24-ultra.png',
    images: [
      '/images/products/android/galaxy-s24-ultra.png',
      '/images/products/android/galaxy-s24-ultra.png',
      '/images/products/android/galaxy-s24-ultra.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: [
      { name: 'Flowy Emerald', hex: '#1C3B32' },
      { name: 'Silky Black', hex: '#1C1C1C' }
    ],
    storageOptions: ['256GB', '512GB']
  },
  {
    id: 'and-px8p',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    category: 'Android',
    price: 99999,
    discountPrice: 89999,
    rating: 4.5,
    reviews: 1512,
    image: '/images/products/android/galaxy-s24-ultra.png',
    images: [
      '/images/products/android/galaxy-s24-ultra.png',
      '/images/products/android/galaxy-s24-ultra.png',
      '/images/products/android/galaxy-s24-ultra.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '3 Days',
    colors: [
      { name: 'Bay', hex: '#87CEEB' },
      { name: 'Obsidian', hex: '#121212' }
    ],
    storageOptions: ['128GB', '256GB', '512GB']
  },

  // iPads
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro 13" (M4)',
    brand: 'Apple',
    category: 'iPad',
    price: 129900,
    rating: 4.9,
    reviews: 1045,
    image: '/images/products/ipad/ipad-pro.png',
    images: [
      '/images/products/ipad/ipad-pro.png',
      '/images/products/ipad/ipad-pro.png',
      '/images/products/ipad/ipad-pro.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: [
      { name: 'Space Black', hex: '#31353A' },
      { name: 'Silver', hex: '#D9D7DA' }
    ],
    storageOptions: ['256GB', '512GB', '1TB', '2TB'],
    specs: {
      display: '13" Ultra Retina XDR',
      processor: 'Apple M4',
      camera: '12MP Wide',
      battery: 'Up to 10 hrs'
    }
  },

  // Watches
  {
    id: 'watch-awu2',
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    category: 'Watches',
    price: 89900,
    rating: 4.9,
    reviews: 2100,
    image: '/images/products/watches/apple-watch.png',
    images: [
      '/images/products/watches/apple-watch.png',
      '/images/products/watches/apple-watch.png',
      '/images/products/watches/apple-watch.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: [
      { name: 'Natural Titanium', hex: '#F2F1ED' }
    ],
    specs: {
      display: 'Always-On Retina display',
      battery: 'Up to 36 hours'
    }
  },
  {
    id: 'watch-gw6',
    name: 'Samsung Galaxy Watch 6 Classic',
    brand: 'Samsung',
    category: 'Watches',
    price: 36999,
    rating: 4.6,
    reviews: 1850,
    image: '/images/products/watches/apple-watch.png',
    images: [
      '/images/products/watches/apple-watch.png',
      '/images/products/watches/apple-watch.png',
      '/images/products/watches/apple-watch.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days',
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Silver', hex: '#C0C0C0' }
    ],
    specs: {
      display: 'Super AMOLED',
      battery: 'Up to 40 hours'
    }
  },

  // Audio
  {
    id: 'audio-ap2',
    name: 'AirPods Pro (2nd Gen)',
    brand: 'Apple',
    category: 'Audio',
    price: 24900,
    rating: 4.9,
    reviews: 15200,
    image: '/images/products/audio/airpods.png',
    images: [
      '/images/products/audio/airpods.png',
      '/images/products/audio/airpods.png',
      '/images/products/audio/airpods.png'
    ],
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  },
  {
    id: 'audio-xm5',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Audio',
    price: 34990,
    discountPrice: 29990,
    rating: 4.8,
    reviews: 8100,
    image: '/images/products/audio/airpods.png',
    images: [
      '/images/products/audio/airpods.png',
      '/images/products/audio/airpods.png',
      '/images/products/audio/airpods.png'
    ],
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days'
  },

  // Accessories
  {
    id: 'acc-ms1',
    name: 'MagSafe Charger',
    brand: 'Apple',
    category: 'Accessory',
    price: 4500,
    rating: 4.8,
    reviews: 5200,
    image: '/images/products/accessories/airpods.png',
    images: [
      '/images/products/accessories/airpods.png',
      '/images/products/accessories/airpods.png',
      '/images/products/accessories/airpods.png'
    ],
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  }
];
