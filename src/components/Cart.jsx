import { FaMinus, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import img from "../assets/chick.jpg";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, dealetItem, decrementItem, incrementItem, setCartClose } from "../redux/cart/cartSlice";
import { truncate } from "lodash";
import { useEffect, useState } from "react";
import Empty from "./Empty";

export default function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.cartState);
  const addProduct = useSelector((state) => state.product.cartProduct);
  const [totalAmount, setTotalAmount] = useState("");
  console.log(totalAmount);

  useEffect(() => {
    let total = 0;
    addProduct.map((item) => {
      total += item.price * item.quantity;
      return setTotalAmount(total);
    });
  }, [addProduct]);
  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-white z-100 w-[350px] shadow-lg ${
        !product
          ? "hidden"
          : "fixed top-0 transform translate-x transition-all  -right-0 h-screen bg-white z-20 w-[300px] shadow-lg duration-300"
      }`}
    >
      <div className=" p-3 flex flex-col w-full h-auto gap-4">
        <div className=" text-2xl border-b flex justify-between items-center">
          <FaTimes
            onClick={() => dispatch(setCartClose())}
            className="text-red-700 font-semibold active:scale-110 cursor-pointer "
          />
          <div className="flex justify-center items-center">
            <h1 className="text-red-600 text-2xl lg:text-base font-semibold">
              YUMMY
            </h1>
            <img
              src={img}
              alt="img"
              className="w-10 h-10 lg:w-14 lg:h-14 object-cover"
            />
          </div>
          <div className="">
            <button
              onClick={() => dispatch(clearItem())}
              className="border px-1 py-1 rounded-lg border-orange-400 text-orange-400 font-semibold active:scale-105"
            >
              Clear
            </button>
          </div>
        </div>

        {addProduct.length > 0 ? (
          <div className="flex flex-col justify-start items-start overflow-y-scroll px-2 gap-3 overflow-x-hidden scroll-smooth h-[81vh]">
            {addProduct?.map((item) => (
              <div className="flex justify-between  w-full border-b gap-2 mb-2 py-2">
                <div className="w-full h-full">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover  rounded-lg hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex justify-center w-full flex-col full">
                  <h6 className="text-sm font-semibold">{item.name}</h6>
                  <p className="text-sm text-gray-500">
                    {truncate(item.desc, { length: 30 })}
                  </p>
                  <span className="font-semibold">
                    unit price: ${item.price}
                  </span>
                  <div className="flex items-center gap-2 ">
                    <span className="font-medium">quantity: </span>
                    <button onClick={()=>dispatch(decrementItem(item.id))} className="bg-orange-500 flex items-center justify-center w-5 h-5  text-white active:scale-105 rounded-lg ">
                      <FaMinus />
                    </button>
                    <span className="">{item.quantity}</span>
                    <button onClick={()=>dispatch(incrementItem(item.id))} className="bg-orange-500 flex items-center justify-center w-5 h-5  text-white active:scale-105 rounded-lg">
                      <FaPlus/>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-3 px-3 w-12 ">
                  <h3 className="font-semibold">
                    ${item.price * item.quantity}
                  </h3>
                  <FaTrash
                    onClick={() => dispatch(dealetItem(item.id))}
                    className="text-orange-400 cursor-pointer"
                  />
                </div>
              </div>
            ))}
            <div className=" sticky flex flex-col p-2 gap-3 bottom-0 bg-white w-full h-full z-20 shadow-lg">
              <div className="flex justify-between p-3 border-b-2">
                <h1>Shopping cart</h1>
                <h2 className="font-semibold">Total: ${totalAmount}</h2>
              </div>
              <div className="">
                <button className="bg-orange-400 w-full p-2 rounded-lg text-white shadow-md font-semibold shadow-orange-400 active:scale-105">
                  Proceed To Buy
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
