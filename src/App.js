 // import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singal from './components/Singal';
import Product from './components/Product';
import {Routes, Route} from "react-router-dom";

function App() {
    return (
    <>
    <Routes>
         {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/" element={ <Product/> } />
        <Route path="/Singal/:id" element={ <Singal/> } />

      </Routes></>
      );
}

export default App;
