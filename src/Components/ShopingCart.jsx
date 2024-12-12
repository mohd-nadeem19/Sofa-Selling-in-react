import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const ShopingCart = ({ isOpen, onClose, children }) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const gotData = async () => {
        try {
          const response = await fetch("http://localhost:8000/get");
          const data = await response.json();
          // console.log(data);
          setCartItems(data);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }
      gotData();

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "scroll";
      document.body.style.position = "relative";
    }
  }, [isOpen]);

  // Update deleteItem function to only delete the specific item

  const deleteItem = async (id) => {
    //console.log("delete item");
    try {
      const response = await fetch(`http://localhost:8000/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      // Remove the deleted item from the cart items
      setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };



  if (!isOpen) return null;
  return ReactDOM.createPortal(<div className='flex justify-end fixed inset-0 z-50 w-[100vw] h-[100vh]'>

    <div
      onClick={onClose}
      className='w-[70%] bg-black bg-opacity-50 transition-opacity border-2 border-red-500'></div>
    {/* LEFT-DIV-END */}

    <div className='w-[30%]  bg-white border-2 border-blue-500 h-full shadow-xl '>

      <div className='w-[300px] pt-10 pl-4 '>
        <div className='flex justify-center items-center justify-between '>
          <h1 className='font-poppins font-bold text-2xl'>Shopping Cart</h1>
          <button onClick={onClose}>
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11059 9.67346C6.16575 9.61817 6.23127 9.5743 6.3034 9.54436C6.37554 9.51443 6.45287 9.49902 6.53097 9.49902C6.60907 9.49902 6.6864 9.51443 6.75853 9.54436C6.83067 9.5743 6.89619 9.61817 6.95134 9.67346L8.31222 11.0355L9.67309 9.67346C9.78458 9.56197 9.9358 9.49933 10.0935 9.49933C10.2511 9.49933 10.4024 9.56197 10.5138 9.67346C10.6253 9.78495 10.688 9.93616 10.688 10.0938C10.688 10.2515 10.6253 10.4027 10.5138 10.5142L9.15178 11.8751L10.5138 13.236C10.6253 13.3474 10.688 13.4987 10.688 13.6563C10.688 13.814 10.6253 13.9652 10.5138 14.0767C10.4024 14.1882 10.2511 14.2508 10.0935 14.2508C9.9358 14.2508 9.78458 14.1882 9.67309 14.0767L8.31222 12.7146L6.95134 14.0767C6.83985 14.1882 6.68864 14.2508 6.53097 14.2508C6.3733 14.2508 6.22208 14.1882 6.11059 14.0767C5.9991 13.9652 5.93647 13.814 5.93647 13.6563C5.93647 13.4987 5.9991 13.3474 6.11059 13.236L7.47266 11.8751L6.11059 10.5142C6.0553 10.4591 6.01143 10.3935 5.9815 10.3214C5.95156 10.2493 5.93616 10.1719 5.93616 10.0938C5.93616 10.0157 5.95156 9.9384 5.9815 9.86627C6.01143 9.79414 6.0553 9.72861 6.11059 9.67346Z" fill="#9F9F9F" />
              <path d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z" fill="#9F9F9F" />
            </svg>
          </button>
        </div>
        <div className='border-[1px] border-[#D9D9D9] mt-4 w-[300px]'></div>
      </div>
      {/* Display cart items dynamically */}
      <div className="flex flex-col overflow-auto space-y-1">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex items-center">
                {/* Display item name, price, and image */}
                <div className="flex justify-center items-center space-x-12 ml-4">
                  {/* Display the image */}
                  {item.image && <img src={item.image} className="w-[80px] h-[80px] rounded-lg object-cover" />}
                  {/* Display name and price */}
                  <div className='flex flex-col'>
                    <div className="text-lg font-medium">{item.heading}</div>
                    <div className="text-gray-500">{item.current}</div>
                  </div>
                </div>
                {/* Delete Button */}
                <button onClick={() => deleteItem(item._id)} className=" text-2xl ml-16">X</button>
              </div>
            </div>
          ))
        ) : (
          <div>No items in the cart</div>
        )}
      </div>

      <div className='flex mt-40 ml-4 gap-32'>
        <span className='font-normal text-base'>Subtotal</span>
        <span className='text-[#B88E2F] font-bold text-base '>Rs. 520,000.00</span>
      </div>

      <div className='border-[1px] border-[#D9D9D9] mt-4'></div>

      <div className='flex justify-center items-center m-auto pt-5 pb-2 gap-6 w-[350px]'>
        <button className='w-[80px] h-[30px] border-2 border-black rounded-[50px] '>
          <span className='flex justify-center items-center'>cart</span>
        </button>
        <button className='w-[100px] h-[30px] border-2 border-black rounded-[50px] '>
          <span className='flex justify-center items-center'>checkout</span>
        </button>
        <button className='w-[110px] h-[30px] border-2 border-black rounded-[50px] '>
          <span className='flex justify-center items-center'>Comparison</span>
        </button>
      </div>

      {/* <div className='flex-1 overflow-y-auto p-6'>{children}</div> */}

    </div>
    {/* RIGHT-DIV-END */}
  </div>, document.getElementById("portal")

  )
}

export default ShopingCart