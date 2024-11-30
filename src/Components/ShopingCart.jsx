import React from 'react'

const ShopingCart = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className=' w-[450px] h-[7-0px] bg-gray-100'>

        <div className='w-[350px] pt-10 pl-4 '>
          <div className='flex justify-center items-center justify-between '>
            <h1 className='font-poppins font-bold text-2xl'>Shopping Cart</h1>
            <svg  width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11059 9.67346C6.16575 9.61817 6.23127 9.5743 6.3034 9.54436C6.37554 9.51443 6.45287 9.49902 6.53097 9.49902C6.60907 9.49902 6.6864 9.51443 6.75853 9.54436C6.83067 9.5743 6.89619 9.61817 6.95134 9.67346L8.31222 11.0355L9.67309 9.67346C9.78458 9.56197 9.9358 9.49933 10.0935 9.49933C10.2511 9.49933 10.4024 9.56197 10.5138 9.67346C10.6253 9.78495 10.688 9.93616 10.688 10.0938C10.688 10.2515 10.6253 10.4027 10.5138 10.5142L9.15178 11.8751L10.5138 13.236C10.6253 13.3474 10.688 13.4987 10.688 13.6563C10.688 13.814 10.6253 13.9652 10.5138 14.0767C10.4024 14.1882 10.2511 14.2508 10.0935 14.2508C9.9358 14.2508 9.78458 14.1882 9.67309 14.0767L8.31222 12.7146L6.95134 14.0767C6.83985 14.1882 6.68864 14.2508 6.53097 14.2508C6.3733 14.2508 6.22208 14.1882 6.11059 14.0767C5.9991 13.9652 5.93647 13.814 5.93647 13.6563C5.93647 13.4987 5.9991 13.3474 6.11059 13.236L7.47266 11.8751L6.11059 10.5142C6.0553 10.4591 6.01143 10.3935 5.9815 10.3214C5.95156 10.2493 5.93616 10.1719 5.93616 10.0938C5.93616 10.0157 5.95156 9.9384 5.9815 9.86627C6.01143 9.79414 6.0553 9.72861 6.11059 9.67346Z" fill="#9F9F9F" />
              <path d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z" fill="#9F9F9F" />
            </svg>
          </div>
          <div className='border-[1px] border-[#D9D9D9] mt-4 w-[300px]'></div>
        </div>

        <div className='flex pl-2 gap-12 pt-12  '>
          <div className='w-[108px] h-[105px] bg-[#F9F1E7] rounded-lg '>
            <img className='rounded-lg w-full h-full object-cover' src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=noMBRPSyOWy9lEhbDPQp1GxND97sDVyrHdF~T~UgA5UUDXfIYlFm7F4ehEqO3jlW1~QTQR77RPjjtdZTNCn8ujhc9W0WrArYIeCwz2V8uiSKP~095E9DGsd3ItdZEcRp~254WrDjnj4V3R19g1W0JbA69SVaQwLMnp0GDgvFRw0tGHwue9393HGRD4~9yOZjVdP7JY87mjt7IUCrPDGt8g~B-YWNzfFp8RTYXkUGTsH0xx9JZpSRRhRKfGDlcgmYvZLwS1ctvPLkzA3gdbNcIYWYclwKs1E7DpP1EjiBIM7DbyjUIxSpkxxvBxEk9mKilxjiPv8TCDA7JKDpLQoLpQ__" alt="" />
          </div>

          <div className='w-[130px] h-[56px] mt-5 '>
            <span className='font-normal text-lg'>Asgaard sofa</span>
            <div className='pt-2'><span>1</span> <span>*</span> <span className='text-[#B88E2F]'>Rs. 250,000.00</span></div>
          </div>
          <svg className='mt-8' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z" fill="#9F9F9F" />
          </svg>
        </div>

        <div className='flex pl-2 gap-12 pt-12  '>
          <div className='w-[108px] h-[105px] rounded-lg '>
            <img className='rounded-lg w-full h-full object-cover' src="https://s3-alpha-sig.figma.com/img/7614/9a1a/1d489ea6ae7783215d8976dab5c582e3?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cft4CDB2qD8e5A7S20~zk0N4ff-HXS0fZIMLYhOImQCCu~xnafIUqEtse3kA1HFBaZcun~w5nG5VacBcn0cogXyKT21e7CEKn9HMNmtTKsKckrMa~ZOwubmabA7fW7argSznxJrHQHXZcGMTa8nt6ifpsqkeQ25lKngErZyfVecJfYf2f8mZnXXxIUn8tomihzHc2ZtHP4fYl7p5MKCHQhoo64eIDbSjIOxGO0AMZMkwHvAfbhR~RNSQKOqq4rCbTg9dEgIKlGQOEDdTV66fvsG7P0bG6B2Utqx9NC1OQnaFUJjd9iUDGfOnL9Zxm8kq1wda0E6EyaTXaig66Fz6HQ__" alt="" />
          </div>

          <div className='w-[130px] h-[56px] mt-5 '>
            <span className='font-normal text-lg whitespace-nowrap'>Casaliving Wood</span>
            <div className='pt-2'><span>1</span> <span>*</span> <span className='text-[#B88E2F]'>Rs. 270,000.00</span></div>
          </div>
          <svg className='mt-8' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z" fill="#9F9F9F" />
          </svg>
        </div>

        <div className='flex mt-40 ml-4 gap-32'>
          <span className='font-normal text-base'>Subtotal</span>
          <span className='text-[#B88E2F] font-bold text-base '>Rs. 520,000.00</span>
        </div>

        <div className='border-[1px] border-[#D9D9D9] mt-4'></div>

        <div className='flex justify-center items-center m-auto pt-8 pb-2 gap-6 w-[350px]'>
          <div className='w-[80px] h-[30px] border-2 border-black rounded-[50px] '>
            <span className='flex justify-center items-center'>cart</span>
          </div>
          <div className='w-[100px] h-[30px] border-2 border-black rounded-[50px] '>
            <span className='flex justify-center items-center'>checkout</span>
          </div>
          <div className='w-[110px] h-[30px] border-2 border-black rounded-[50px] '>
            <span className='flex justify-center items-center'>Comparison</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ShopingCart