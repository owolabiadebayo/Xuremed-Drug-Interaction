import './App.css';
import Routerr from './route';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/route" element={<Routerr/>} />
      </Routes>
        
        </Router>
    </>
  );
}

export default App;
