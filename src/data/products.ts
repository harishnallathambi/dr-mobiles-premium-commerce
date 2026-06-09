export type Product = {
  id: string;
  name: string;
  brand: string;
  category: 'iPhone' | 'Android' | 'Accessory' | 'Service';
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
  };
};

export const products: Product[] = [
  // iPhones
  {
    id: 'iph-15-pm',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'iPhone',
    price: 1199,
    rating: 4.9,
    reviews: 1245,
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
    id: 'iph-15-p',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'iPhone',
    price: 999,
    rating: 4.8,
    reviews: 985,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  },
  {
    id: 'iph-15',
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'iPhone',
    price: 799,
    rating: 4.7,
    reviews: 856,
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
    price: 699,
    discountPrice: 649,
    rating: 4.6,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1663465374413-83c700efbed4?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  },
  {
    id: 'iph-13',
    name: 'iPhone 13',
    brand: 'Apple',
    category: 'iPhone',
    price: 599,
    rating: 4.7,
    reviews: 3400,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop',
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: '3 Days'
  },

  // Androids
  {
    id: 'and-s24u',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'Android',
    price: 1299,
    rating: 4.8,
    reviews: 840,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: true,
    deliveryEstimate: 'Tomorrow',
    colors: ['#282A2D', '#D9D7DA', '#BDB76B', '#483D8B']
  },
  {
    id: 'and-s24',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    category: 'Android',
    price: 799,
    rating: 4.6,
    reviews: 420,
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
    price: 799,
    rating: 4.7,
    reviews: 350,
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
    price: 999,
    discountPrice: 899,
    rating: 4.5,
    reviews: 512,
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
    price: 899,
    rating: 4.6,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=600&auto=format&fit=crop',
    emiAvailable: true,
    inStock: false,
    deliveryEstimate: 'Out of Stock'
  },
  {
    id: 'and-or10',
    name: 'Oppo Reno 10 Pro',
    brand: 'Oppo',
    category: 'Android',
    price: 499,
    rating: 4.3,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=600&auto=format&fit=crop',
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: '4 Days'
  },
  {
    id: 'and-x14',
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    category: 'Android',
    price: 749,
    rating: 4.5,
    reviews: 290,
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
    price: 599,
    rating: 4.6,
    reviews: 450,
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=600&auto=format&fit=crop',
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
    price: 249,
    rating: 4.9,
    reviews: 5200,
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
    price: 398,
    discountPrice: 348,
    rating: 4.8,
    reviews: 3100,
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
    price: 39,
    rating: 4.5,
    reviews: 1400,
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
    price: 49,
    rating: 4.7,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop',
    emiAvailable: false,
    inStock: true,
    deliveryEstimate: 'Tomorrow'
  }
];
