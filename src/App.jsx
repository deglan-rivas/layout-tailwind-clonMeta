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
    {/* [&>div]:text-red-500 */}
    {/* <div className="font-sans [&>div]:text-emerald-500"> */}
    <div className="font-sans">
      {/* <div>ga2</div> */}
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

/**
 * el código de video blob no se pudo descargar de meta :c, por eso usamos otro video libre de shutterstock de ratio 16:9 -> https://www.shutterstock.com/es/video/search/vr-meta-quest?aspect_ratio=16%3A9
 * notar que hay formatos webm y mp4, así como el picture soporta webp jpg avif etc
 * así como la etiqueta "picture" acepta un "srcset" para soportar diferentes tamaños de imágenes según  el tamaño de la pantalla, se puede hacer lo mismo con la etiqueta "video" ?
 * también notar que con el source se puede agregar diferentes tamaños de media según el screen del usuario y diferentes formatos según el navegador
 */

{/* <video  poster="https://scontent.flim15-2.fna.fbcdn.net/v/t39.8562-6/428637832_708368251478423_8629119844228574092_n.jpg?stp=dst-webp&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=19b1fb&amp;_nc_ohc=yZ2Wpmm96JYAb6yPHEd&amp;_nc_ht=scontent.flim15-2.fna&amp;oh=00_AfCstdxqCGG56USlagdogRx5iOyDoYJMxsiGu6CCooAXLA&amp;oe=66237742" src="blob:https://www.meta.com/49178e18-ef81-4754-8146-09a18f64a7dc" style="object-fit: cover; display: block;"></video> */}

{/* <video controls>
  <!-- Fuente de video en formato WebM para navegadores compatibles -->
  <source src="video.webm" type="video/webm">
  <!-- Fuente de video en resolución estándar -->
  <source src="video_sd.mp4" type="video/mp4">
  <!-- Fuente de video en resolución alta -->
  <source src="video_hd.mp4" type="video/mp4" media="(min-width: 1024px)">
</video> */}