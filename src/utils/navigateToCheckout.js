export const navigateToCheckout = (setLoading, navigate) => {
  setLoading(true);

  setTimeout(() => {
    navigate("/checkout");
    setLoading(false);
  }, 800);
};
