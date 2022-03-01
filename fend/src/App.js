import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route} from "react-router-dom";
import LandingPage from './Views/LandingPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Contact from './Views/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
