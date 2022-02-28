import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route} from "react-router-dom";
import LandingPage from './Views/LandingPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
