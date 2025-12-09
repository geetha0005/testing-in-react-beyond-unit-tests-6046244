import Dashboard from "./components/Dashboard";
import { CartProvider } from "./context/CartContext";
import AddToCartButton from "./components/AddToCartButton";
import CartCounter from "./components/CartCounter";

function App() {
  return (
    <>
      <Dashboard />
      <CartProvider>
        <h1>Shopping App</h1>
        <AddToCartButton />
        <CartCounter />
      </CartProvider>
    </>
  );
}

export default App;
