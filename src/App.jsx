import Blog from "./components/sections/Blog"
import Footer from "./components/sections/Footer"
import Games from "./components/sections/Games"
import Hero from "./components/sections/Hero"
import Navbar from "./components/sections/Navbar"
import Newsletter from "./components/sections/Newsletter"
import Products from "./components/sections/Products"
import Topbar from "./components/sections/Topbar"
import VRbanner from "./components/sections/VRBanner"

function App() {
  return (
    <>
    <div className="font-sans">
      <Topbar/>
      <Navbar/>
      <Hero/>
      <VRbanner/>
      <Products/>
      <Games/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
    </>
  )
}

export default App
