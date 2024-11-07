import {BrowserRouter, useLocation} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransition from "./components/GsapTransition";
import { Provider } from "react-redux";
import { store } from "../store/store";


export default function App() {
 

  return(
    <>
      <Provider store={store}>
      <BrowserRouter>
       <Navbar/>
           
       <GsapTransition />
          
         
           {/*footer*/}
           <Footer/>
          </BrowserRouter>
          </Provider>
          </>   
  );
}
