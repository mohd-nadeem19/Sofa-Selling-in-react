import React from 'react'

const Contact = () => {
    return (
        <div className='wifull mt-12'>
            <div className='relative w-full h-[320px] '>
                <img className='w-full h-full object-cover blur-[6px]' src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9cbFVUZca1fVJ44G3Cc0ss3dqPXOvYSoo7Lh4hQ4gjUAXytMdGP-EsGYQskDPkIXUc1TsXAxpO3cDhy-6x3I8sRlKjXKn51rRFAlKsekSUW5g27CeJkWaFasmjRlH4dsG5d6OHgVCsxlnSJ2ALqhVeqhWGC~Pthc2pOdtqClDYZyJcNXMDMHYeRWH-tsESJXIangzqGHPZrIFyCZvYo4diMRwutzvQBBfw48c9QRk11swd~6oG706PkaREPOKb3UJFaK6p8~J6UrjfDcXmGK80CNcM3lAf7TDPE~UhoIuMrNJT-~4xtHGkwKjGTUeSNm~LTzBsxpfY33Z4NCn7eQA__" alt="" />
            </div>
            <div className='absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className=' w-[240px] h-[140px] -space-y-5 '>
                    <img className='w-[80px] h-[80px] object-cover ml-10 ' src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DSLuvz2qVcURnwgLJEofZ3eYz~cS4rYp4ec5NkV6VHJaBdxC8pE1fwdAh-cNbDqv2sI1-OmIRQTfFfi3Gs0Ww3kmoeBGdF9LuMfnXoElZ5Qj1IorTuaUF9e4OsXFn-Rka1rZnFwFRgozMFv4R0W0mpY6AOeUc-Wa5qZvYsRrqZLjSn92kGkekzp~6kguPK85SSj7k-iGbA7oMdvgvdMKtAxbMY8Tfa--oddDHZEQgwtu2ANfyG3kxPV1KUf3Pc7zPWJWKSz9vm~Rwpa6AkKtt76UYTwsy9S-ofaizn9iY4ROtqdz1yfS6EnNWlHu6MmD8if9HIBrx057-2ns2coKSA__" alt="" />
                    <h1 className='font-poppins font-[500] text-[48px] '>Contact</h1>
                </div>
                <div className='flex gap-2 place-items-center ml-6'>
                    <span className='text-[16px]'>Home</span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                    </svg>
                    <span className='text-[16px]'>Shop</span>
                </div>
            </div>
        </div>
    )
}

export default Contact