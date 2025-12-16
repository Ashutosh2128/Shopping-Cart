import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
    return (<div>
        <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900">
            <Navbar/>
        </div>

        <div className="pt-20">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </div>
        
    </div>)
};

export default App;
