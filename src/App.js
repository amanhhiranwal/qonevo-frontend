
import './App.css';
import Footer from './component/NavbarAndFooter/Footer';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/NavbarAndFooter/Navbar';
import HomePage from './pages/HomePage/HomePage';
import IFPPage from './pages/IFP/IFPPage';
import ProductPage from "./pages/ProductPage/ProductPage";
import ActiveLed from './pages/ActiveLEDPage/ActiveLed';
import SupportPage from './pages/SupportPage/SupportPage';
import ListingPage from './pages/ListingPage/ListingPage';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/IFP" element={<IFPPage />} />
                <Route path="/product" element={<ProductPage />} />
        <Route path="/active-led" element={<ActiveLed/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="/listing-page" element={<ListingPage/>}/>
        

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
