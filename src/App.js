import "./App.css";
import Carousel from "./Component/Carousel/Carousel";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import StorageBank from "./Component/storageBank/storageBank";

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
      <div className="container mx-auto">
        <Carousel/>
      </div>

    
    </div>
  );
}

export default App;
