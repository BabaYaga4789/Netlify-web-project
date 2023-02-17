import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";

function App() { 


  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
