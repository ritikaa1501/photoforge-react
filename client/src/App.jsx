import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sellerdashboard from "./Sellerdashboard";
import Buyerdashboard from "./Buyerdashboard";
import Navbar from "./components/Navbar";




export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar>
    </Navbar>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/seller/profile" element={<Sellerdashboard/>}/>
         <Route path="/buyer/profile" element={<Buyerdashboard/>}/>
       </Routes>
         
    </BrowserRouter>
    </>
  )
}