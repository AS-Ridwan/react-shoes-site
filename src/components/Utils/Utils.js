const addToStore = (id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  shoppingCart;

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    console.log(newQuantity);
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const addToCart = () => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const newStored = JSON.parse(storedCart);
    shoppingCart = newStored;
  }
  return shoppingCart;
};
const handleCartRemove = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToStore, addToCart, handleCartRemove };
