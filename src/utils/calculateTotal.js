export const calculateTotal = (cart) => {
  return cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );
};
