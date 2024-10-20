import {BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransition from "./components/GsapTransition";

export default function App() {
  return(
    <>
      <BrowserRouter>
       <Navbar/>
       <GsapTransition />
          
          {/*Add your Footer here*/}
           <Footer/>
          </BrowserRouter>
          </>
  )
}
