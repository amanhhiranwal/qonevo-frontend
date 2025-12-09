
import './App.css';
import Footer from './component/NavbarAndFooter/Footer';

import Navbar from './component/NavbarAndFooter/Navbar';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
