
// import './App.css';
// import Footer from './component/NavbarAndFooter/Footer';
// import { Routes, Route } from "react-router-dom";
// import Navbar from './component/NavbarAndFooter/Navbar';
// import HomePage from './pages/HomePage/HomePage';
// import IFPPage from './pages/IFP/IFPPage';
// import ProductPage from "./pages/ProductPage/ProductPage";
// import ActiveLed from './pages/ActiveLEDPage/ActiveLed';
// import SupportPage from './pages/SupportPage/SupportPage';
// import ListingPage from './pages/ListingPage/ListingPage';



// function App() {
//   return (
//     <div className="App">
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/IFP" element={<IFPPage />} />
//                 <Route path="/product" element={<ProductPage />} />
//         <Route path="/active-led" element={<ActiveLed/>}/>
//         <Route path="/support" element={<SupportPage/>}/>
//         <Route path="/listing-page" element={<ListingPage/>}/>

//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import IFPPage from "./pages/IFP/IFPPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ActiveLed from './pages/ActiveLEDPage/ActiveLed';
import SupportPage from './pages/SupportPage/SupportPage';
import ListingPage from './pages/ListingPage/ListingPage';
import SupportList from './pages/SupportPage/SupportList';
import ListLed from "./pages/ListLEDs/ListLed";
// import Navbar from './component/NavbarAndFooter/Navbar';
// import Footer from './component/NavbarAndFooter/Footer';




function App() {
  return (
    <div  className="App">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/IFP" element={<IFPPage />} />
                <Route path="/product" element={<ProductPage />} />
        <Route path="/active-led" element={<ActiveLed/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="/support/ifp" element={<SupportList/>}/>
        <Route path="/listing-page" element={<ListingPage/>}/>
        <Route path="/listing-page-Led" element={<ListLed/>}/>
                


      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;