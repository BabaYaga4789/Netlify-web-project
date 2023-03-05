import { createBrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import News from "./pages/News";
import LoginProfile from "./pages/LoginProfile";
import RegisterProfile from "./pages/RegisterProfile";
import Registration from "./pages/Registration";
import UserProfile from "./pages/UserProfile";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return(
    <ChakraProvider>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/loginprofile" element={<LoginProfile />}/>
      <Route path="/register" element={<Registration />}/>
      <Route path="/registerprofile" element={<RegisterProfile />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/userprofile/:userid" element={<UserProfile />}/>
    </Routes>
  </ChakraProvider>
  )
}

export default App;