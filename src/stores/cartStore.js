import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],

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

  clearCart: () => set({ cart: [] }),
}));

export default useCart;
