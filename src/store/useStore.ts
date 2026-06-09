import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  storage?: string;
}

interface AppState {
  cart: CartItem[];
  wishlist: Product[];
  compare: Product[];
  isLoggedIn: boolean;
  
  // Cart Actions
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Wishlist Actions
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Compare Actions
  toggleCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;

  // Auth Actions
  login: () => void;
  logout: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      compare: [],
      isLoggedIn: false,

      addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(i => i.product.id === item.product.id);
        if (existingItem) {
          return {
            cart: state.cart.map(i => 
              i.product.id === item.product.id 
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          };
        }
        return { cart: [...state.cart, item] };
      }),

      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.product.id !== productId)
      })),

      updateQuantity: (productId, quantity) => set((state) => ({
        cart: state.cart.map(item => 
          item.product.id === productId 
            ? { ...item, quantity: Math.max(1, quantity) } 
            : item
        )
      })),

      clearCart: () => set({ cart: [] }),

      toggleWishlist: (product) => set((state) => {
        const exists = state.wishlist.some(p => p.id === product.id);
        if (exists) {
          return { wishlist: state.wishlist.filter(p => p.id !== product.id) };
        }
        return { wishlist: [...state.wishlist, product] };
      }),

      removeFromWishlist: (productId) => set((state) => ({
        wishlist: state.wishlist.filter(p => p.id !== productId)
      })),

      isInWishlist: (productId) => {
        return get().wishlist.some(p => p.id === productId);
      },

      toggleCompare: (product) => set((state) => {
        const exists = state.compare.some(p => p.id === product.id);
        if (exists) {
          return { compare: state.compare.filter(p => p.id !== product.id) };
        }
        if (state.compare.length >= 4) {
          alert("You can only compare up to 4 products.");
          return state;
        }
        return { compare: [...state.compare, product] };
      }),

      removeFromCompare: (productId) => set((state) => ({
        compare: state.compare.filter(p => p.id !== productId)
      })),

      clearCompare: () => set({ compare: [] }),

      isInCompare: (productId) => {
        return get().compare.some(p => p.id === productId);
      },

      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: 'drmobiles-storage',
    }
  )
);
