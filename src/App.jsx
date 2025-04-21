import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./App.css";

function App(){
  return(
    <div>
      <Hero/>
      <About/>
      <Products/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;