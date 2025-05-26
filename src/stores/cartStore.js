/**
 * useCart Store (Zustand)
 *
 * Global state management for the shopping cart.
 * Provides actions and state to:
 * - Add items to the cart
 * - Increase or decrease item quantity
 * - Remove items from the cart
 * - Clear the entire cart
 * - Toggle the visibility of the cart sidebar
 *
 * State:
 * @property {Array} cart - List of products in the cart with quantity.
 * @property {boolean} isCartOpen - Whether the cart sidebar is open.
 *
 * Actions:
 * @function addToCart(product) - Adds a product or increases quantity if already in cart.
 * @function increaseQuantity(productId) - Increases quantity of a product.
 * @function decreaseQuantity(productId) - Decreases quantity but not below 1.
 * @function removeFromCart(productId) - Removes product from the cart.
 * @function clearCart() - Empties the cart.
 * @function toggleCart() - Toggles the cart sidebar open/closed.
 *
 * @returns {Object} Zustand store with state and actions.
 */

import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  isCartOpen: false,

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Increases the quantity if the product already exists in the cart
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

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
