/**
 * Calculates the total price of all items in the cart, considering discounted prices and quantities.
 *
 * @param {Array<{ discountedPrice: number, quantity: number }>} cart - Array of cart items.
 * Each item should have a `discountedPrice` and `quantity` property.
 * @returns {number} The total price of all items in the cart.
 */

export const calculateTotal = (cart) => {
  return cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );
};
