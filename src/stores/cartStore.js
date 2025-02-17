import { StartRounded } from "@mui/icons-material";
import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  isCartOpen: false,

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Increase quantity if the product already exists in the cart
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // The original add to cart
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  increaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ cart: [] }),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

export default useCart;
