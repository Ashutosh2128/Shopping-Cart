import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"

const Navbar = () => {

  const {cart} = useSelector((state) => state);
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src={Logo} alt="Shopping Cart Logo" className="h-14"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    totalItems > 0 &&
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white">
                      {totalItems}
                    </span>
                  }
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
