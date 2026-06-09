export type Product = {
  id: string;
  name: string;
  brand: string;
  category: 'iPhone' | 'Android' | 'iPad' | 'Accessory' | 'Service';
  price: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  emiAvailable: boolean;
  inStock: boolean;
  deliveryEstimate: string;
  colors?: string[];
  storageOptions?: string[];
  specs?: {
    display?: string;
    processor?: string;
    camera?: string;
    battery?: string;
    ram?: string;
  };
};

export const products: Product[] = [
  // iPhones
  {
    id: 'iph-17-pm',
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'iPhone',
    price: 159900,
    rating: 4.9,
    reviews: 1245,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: ['#4B4845', '#F2F1ED', '#31353A', '#D4AF37'],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.9" Super Retina XDR',
      processor: 'A18 Pro',
      camera: '48MP Main | 5x Telephoto',
      battery: 'Up to 32 hrs video playback'
    }
  },
  {
    id: 'iph-16-pm',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'iPhone',
    price: 144900,
    rating: 4.8,
    reviews: 2314,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: ['#4B4845', '#F2F1ED', '#31353A'],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      display: '6.9" Super Retina XDR',
      processor: 'A18 Pro',
      camera: '48MP Main | 5x Telephoto',
      battery: 'Up to 33 hrs video playback'
    }
  },
  {
    id: 'iph-15-pm',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'iPhone',
    price: 119900,
    rating: 4.9,
    reviews: 5245,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: ['#4B4845', '#F2F1ED', '#31353A', '#242526'],
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
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days'
  },
  {
    id: 'iph-14',
    name: 'iPhone 14',
    brand: 'Apple',
    category: 'iPhone',
    price: 69900,
    discountPrice: 64900,
    rating: 4.6,
    reviews: 6100,
    image: 'https://images.unsplash.com/photo-1663465374413-83c700efbed4?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
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
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: ['#282A2D', '#D9D7DA', '#BDB76B', '#483D8B'],
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      camera: '200MP Main | 100x Zoom',
      battery: '5000mAh',
      ram: '12GB'
    }
  },
  {
    id: 'and-s24',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    category: 'Android',
    price: 79900,
    rating: 4.6,
    reviews: 1420,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days'
  },
  {
    id: 'and-op12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    category: 'Android',
    price: 64999,
    rating: 4.7,
    reviews: 2350,
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
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
    image: 'https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '3 Days'
  },
  {
    id: 'and-vx100p',
    name: 'Vivo X100 Pro',
    brand: 'Vivo',
    category: 'Android',
    price: 89999,
    rating: 4.6,
    reviews: 1210,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: false,
    deliveryEstimate: 'Out of Stock'
  },
  {
    id: 'and-x14',
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    category: 'Android',
    price: 69999,
    rating: 4.5,
    reviews: 1290,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days'
  },
  {
    id: 'and-np2',
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    category: 'Android',
    price: 44999,
    rating: 4.6,
    reviews: 1450,
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
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
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: ['#31353A', '#D9D7DA'],
    specs: {
      display: '13" Ultra Retina XDR',
      processor: 'Apple M4',
      camera: '12MP Wide',
      battery: 'Up to 10 hrs'
    }
  },
  {
    id: 'ipad-air-m2',
    name: 'iPad Air 11" (M2)',
    brand: 'Apple',
    category: 'iPad',
    price: 59900,
    rating: 4.8,
    reviews: 840,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days'
  },
  {
    id: 'ipad-10',
    name: 'iPad (10th Generation)',
    brand: 'Apple',
    category: 'iPad',
    price: 34900,
    rating: 4.7,
    reviews: 2150,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  },

  // Accessories
  {
    id: 'acc-ap2',
    name: 'AirPods Pro (2nd Gen)',
    brand: 'Apple',
    category: 'Accessory',
    price: 24900,
    rating: 4.9,
    reviews: 15200,
    image: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=600&auto=format&fit=crop',
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  },
  {
    id: 'acc-xm5',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Accessory',
    price: 34990,
    discountPrice: 29990,
    rating: 4.8,
    reviews: 8100,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: '2 Days'
  },
  {
    id: 'acc-msc',
    name: 'MagSafe Charger',
    brand: 'Apple',
    category: 'Accessory',
    price: 4500,
    rating: 4.5,
    reviews: 3400,
    image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=600&auto=format&fit=crop',
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  },
  {
    id: 'acc-pb',
    name: 'Anker 10000mAh Power Bank',
    brand: 'Anker',
    category: 'Accessory',
    price: 4999,
    rating: 4.7,
    reviews: 2890,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop',
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  }
];
