import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove, incrementQuantity, decrementQuantity} from "../redux/Slices/CartSlice";
import {AiFillDelete} from "react-icons/ai"

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const cartItem = cart.find((item) => item.id === post.id);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const increment = () => {
    dispatch(incrementQuantity(post.id));
  };

  const decrement = () => {
    if (cartItem.quantity === 1) {
      dispatch(decrementQuantity(post.id));
      toast.error("Item Removed from cart");
    } else {
      dispatch(decrementQuantity(post.id));
    }
  };

  const deleteItem = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        
        {
          cartItem ? (
            <div className="flex items-center justify-between w-full max-w-[160px]">
              
              <button
                onClick={decrement}
                 className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold hover:bg-gray-300"
              >
                −
              </button>

              <span className="font-semibold">
                {cartItem.quantity}
              </span>

              <button
                onClick={increment}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold hover:bg-gray-300"
              >
                +
              </button>

              <button
                onClick={deleteItem}
                className="text-red-500 hover:text-red-700 transition"
              >
                <AiFillDelete />
              </button>
            </div>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700 hover:text-white transition duration-300"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;
