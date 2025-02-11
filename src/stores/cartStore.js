import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const isProductInCart = state.cart.some((item) => item.id === product.id);
      if (isProductInCart) return state;

      return { cart: [...state.cart, product] };
    }),

  clearCart: () => set({ cart: [] }),

  cartCount: (state) => state.cart.length,
}));

export default useCart;
