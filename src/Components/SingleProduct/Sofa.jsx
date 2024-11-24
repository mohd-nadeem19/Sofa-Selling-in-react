import React from 'react'

const Sofa = () => {
    return (
        <div className='flex place-items-center  gap-6 w-full h-[100px] bg-[#F9F1E7]'>
            <div className='flex justify-center items-center gap-2'>
                <span className='font-poppins font-[400] text-[16px] text-[#9F9F9F]'>Home</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <span className='font-poppins font-[400] text-[16px] text-[#9F9F9F]'>Shop</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                </svg>
            </div>        

            <div className='border-2 h-12 border-[#9F9F9F]'></div>
        </div>
    )
}

export default Sofa