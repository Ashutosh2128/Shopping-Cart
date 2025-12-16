import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove, incrementQuantity, decrementQuantity, } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  const increment = () => {
    dispatch(incrementQuantity(item.id));
  };

  const decrement = () => {
    if (item.quantity === 1) {
      dispatch(decrementQuantity(item.id));
      toast.error("Item Removed");
    } else {
      dispatch(decrementQuantity(item.id));
    }
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between  mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={item.image} alt={item.title}/>
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg text-green-600">
                Price: ${item.price}
              </p>

              <p className="text-slate-700 font-medium">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={decrement}
                  className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
                >
                  −
                </button>

                <span className="font-semibold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={increment}
                  className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
