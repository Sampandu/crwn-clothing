export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const exitingItem = cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id
  );

  if (exitingItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
  }
};
