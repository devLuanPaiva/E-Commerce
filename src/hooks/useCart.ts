import CartContext from "@/context/CartContext";
import { useContext } from "react";

const useCart = () => useContext(CartContext)
export default useCart