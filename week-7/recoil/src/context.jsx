import { createContext } from "react";

// Create the context with default values
export const CountContext = createContext({
  count: 0,
  setCount: () => {}
});