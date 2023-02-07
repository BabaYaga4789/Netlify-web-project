import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import News from "./pages/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <News />
    </ChakraProvider>
  );
}

export default App;
