
import Navigation from "../../Routes/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";




export default function Layout() {

    

  return (
    <>
    <Navigation />  
    <Outlet />
    <Footer />
    </>
  )
}