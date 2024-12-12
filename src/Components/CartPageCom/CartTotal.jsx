import React from 'react'

const CartTotal = () => {
    return (

        <div className='flex justify-center items-center gap-8 w-full h-[600px]'>

            <div className='w-[650px] mb-[330px]'>
                <div className='w-full h-[55px] bg-[#F9F1E7]'>
                    <div className='flex justify-evenly'>
                        <span className='font-poppine font-medium text-xl pt-2'>Product</span>
                        <span className='font-poppine font-medium text-xl pt-2'>Price</span>
                        <span className='font-poppine font-medium text-xl pt-2'>Quantity</span>
                        <span className='font-poppine font-medium text-xl pt-2'>Subtotal</span>
                    </div>
                    
                    <div className='flex gap-12 w-[600px] mt-12'>
                        <div className='w-[105px] h-[105px] bg-[#F9F1E7] rounded-lg '>
                            <img className='w-full h-full object-cover' src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=noMBRPSyOWy9lEhbDPQp1GxND97sDVyrHdF~T~UgA5UUDXfIYlFm7F4ehEqO3jlW1~QTQR77RPjjtdZTNCn8ujhc9W0WrArYIeCwz2V8uiSKP~095E9DGsd3ItdZEcRp~254WrDjnj4V3R19g1W0JbA69SVaQwLMnp0GDgvFRw0tGHwue9393HGRD4~9yOZjVdP7JY87mjt7IUCrPDGt8g~B-YWNzfFp8RTYXkUGTsH0xx9JZpSRRhRKfGDlcgmYvZLwS1ctvPLkzA3gdbNcIYWYclwKs1E7DpP1EjiBIM7DbyjUIxSpkxxvBxEk9mKilxjiPv8TCDA7JKDpLQoLpQ__" />
                        </div>
                        <div className='flex justify-evenly w-[570px] h-[25px] pt-12'>
                            <span className='font-poppins font-normal text-[#9F9F9F] text-sm'>Asgaard sofa</span>
                            <span className='font-poppins font-normal text-[#9F9F9F] text-sm'>Rs. 250,000.00</span>
                            <span className='flex justify-center items-center w-[32px] h-[32px] rounded border-2 border-[#9F9F9F]'>1</span>
                            <span className='font-poppins font-normal  text-sm'>Rs. 250,000.00</span>
                        </div>
                        <div className='pt-10'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#B88E2F" />
                        </svg></div>
                    </div>
                </div>

            </div>
            {/* LEFT-DEV-END */}

            <div className='right-container w-[400px] h-[400px] bg-[#F9F1E7] '>
                <h1 className='font-poppins mt-16 font-bold text-2xl text-center'>Cart Totals</h1>
                <div className='flex flex-col mt-20 space-y-4 justify-center items-center'>
                    <div className='flex  gap-12'>
                        <span className='font-poppins font-medium text-sm'>Subtotal</span>
                        <span className='font-poppins font-normal text-sm text-[#9F9F9F]'>Rs. 250,000.00</span>
                    </div>
                    <div className='flex  gap-12'>
                        <span className='font-poppins font-medium text-sm'>Total</span>
                        <span className='font-poppins font-normal text-lg text-[#B88E2F]'>Rs. 250,000.00</span>
                    </div>

                    <button className='w-[150px] h-[60px] rounded-lg border-2 border-black'>
                        Check Out
                    </button>
                </div>
            </div>

        </div>

    )
}

export default CartTotal