import "./App.css";
import Carousel from "./Component/Carousel/Carousel";
import Testimonials from "./Component/Carousel/Testimonials";
import Download from "./Component/Download/Download";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import StorageBank from "./Component/storageBank/storageBank";
import Subscribe from "./Component/Subscribe/Subscribe";
import TryFree from "./Component/TryFree/TryFree";

function App() {
  return (
    <div className="bg-[#282828]">
      {/* navbar start  */}
      <div className="container mx-auto">
        <Navbar />
      </div>


      {/* Hero Section start  */}
      <div className="container mx-auto">
        <Hero />
      </div>



      {/* Storage Section start  */}
      <div className="container mx-auto">
        <StorageBank/>
      </div>

    
      {/* Carousel Section start  */}
      <div className="container mx-auto relative">
        <Carousel/>
      </div>

    
      {/* Download Section start  */}
      <div className="container mx-auto relative">
        <Download/>
      </div>

    
      {/* Testimonial Section start  */}
      <div className="container mx-auto relative">
        <Testimonials/>
      </div>

    
      {/* Subscribe Section start  */}
      <div className="container mx-auto relative">
        <Subscribe/>
      </div>

      <hr className="text-[#9C69E2] mt-5" />

      {/* TryFree Section start  */}
      <div className="container mx-auto relative">
        <TryFree/>
      </div>


      
      {/* Footer  start  */}
      <div className="container mx-auto relative">
        <Footer/>
      </div>



    </div>
  );
}

export default App;
