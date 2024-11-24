import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='flex gap-10 p-6 w-full'>
            <div className='w-[731px] h-[825px]'>
                <div className='relative w-[740px] h-[825px]'>
                    <div>
                        <img className='w-full h-[690px] object-cover rounded-lg' src="https://s3-alpha-sig.figma.com/img/d703/064a/3964ba217a784d145ec31cf171c822ca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBMdgocUlp~JX1bZ0IQsBts5CQSSCGttgM5eDcuodlWA0jWtN6H-65UOXPCZrXhZAxGvQwK408w6VAVMMN~V7oHFd-I-~ir3htYpyeoy91MCkpOYyZX4mVqzooq3~h-rmppI6TWWbbw1kaJokbimlks6DRl~14saDMONIWHKwlGHq0x0eb3juGi8OX0HyX-xocZKVSUUP3f-WUP2hrLMMN36tACApn77Ph54DZfW2P-r9RxOoAKa0LUrU9BR4f53VLOXMADK~lXFkbcZ82YZXJ3PFClEfeMaSyvGSJL1Uw2BIThDXzVn23i9Pfe8mP7~9EG1fW63Ocg68C-VS-EAlA__" alt="" />
                    </div>

                    <div className='absolute top-[520px] left-12 w-[400px] h-[100px]'>
                        <h1 className='font-poppins font-[700] text-[37px] text-white '>Lorem Ipsum is simply </h1>
                        <p className='font-poppins font-[400] text-[25px] text-white'>Lorem Ipsum is simply </p>
                    </div>
                </div>
            </div>

            {/* LEFT-DIV-END */}

            <div className="mt-12 w-[600px] h-[800px] ">
                <div className="flex flex-col place-items-center space-y-4 ml-24 w-[330px] h-[107px]">
                    <h1 className='font-poppins font-[400] text-lg'>Welcome to lorem..!</h1>
                    <div className='flex place-items-center justify-around w-[330px] h-[60px] bg-[#49BBBD] bg-opacity-60 rounded-[33px] '>
                       <Link to="/login"><button className='w-[146px] h-[40px] bg-[#49BBBD] rounded-[33px]'><span className='text-white'>Login</span></button></Link> 
                       <span className='text-white'>register</span>

                    </div>
                </div>

                <p className='font-poppins font-[400] text-[16px]  text-[#5B5B5B] w-[400px] ml-12 mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <form className='w-[400px] h-[301px] space-y-6 ml-10 mt-8 '>
                    <div className='flex flex-col'>
                        <label className='ml-4 mb-2' htmlFor='email'>Email Address</label>
                        <input className='w-[400px] h-[54px] border-2 border-[#49BBBD] rounded-[33px] pl-8 ' type="email" name="email" id="email" placeholder='Enter your Email Address' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='ml-4 mb-2' htmlFor='name'>User name</label>
                        <input className='w-[400px] h-[54px] border-2 border-[#49BBBD] rounded-[33px] pl-8 ' type="type" name="name" id="name" placeholder='Enter your User name' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='ml-4 mb-2' htmlFor='password'>Password</label>
                        <div className='relative'>
                            <input className='w-[400px] h-[54px] border-2 border-[#49BBBD] rounded-[33px] pl-8 ' type="password" name="password" id="password" placeholder='Enter your Password' />

                            <svg class="absolute left-[360px] top-1/2 transform -translate-y-1/2" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86328 5.14929L11.44 7.72598L11.4522 7.59101C11.4522 6.23722 10.352 5.13702 8.99825 5.13702L8.86328 5.14929Z" fill="black" />
                                <path d="M8.99795 3.50094C11.2556 3.50094 13.0879 5.33326 13.0879 7.59093C13.0879 8.11854 12.9816 8.62161 12.7976 9.08376L15.1902 11.4764C16.4254 10.4457 17.3988 9.1124 18 7.59093C16.5808 3.99994 13.092 1.45596 8.99798 1.45596C7.85278 1.45596 6.75669 1.66045 5.73828 2.02855L7.50515 3.79132C7.96727 3.61137 8.47034 3.50094 8.99795 3.50094Z" fill="black" />
                                <path d="M0.817983 1.27204L2.68301 3.13707L3.05521 3.50927C1.70552 4.56449 0.638037 5.96736 0 7.59106C1.41515 11.182 4.90798 13.726 8.99797 13.726C10.2659 13.726 11.4765 13.4806 12.5849 13.0348L12.9326 13.3825L15.317 15.771L16.36 14.7322L1.86093 0.229095L0.817983 1.27204ZM5.34153 5.79148L6.60533 7.05528C6.56852 7.23117 6.54398 7.40701 6.54398 7.59106C6.54398 8.94485 7.64417 10.045 8.99797 10.045C9.18202 10.045 9.3579 10.0205 9.52968 9.9837L10.7935 11.2475C10.2495 11.5174 9.64421 11.6811 8.99797 11.6811C6.7403 11.6811 4.90798 9.84873 4.90798 7.59106C4.90798 6.94485 5.07159 6.33952 5.34153 5.79148Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <button className='mt-3 ml-52 bg-[#49BBBD] text-white py-3 px-20 rounded-[33px]'>Register</button>

                </form>


            </div>
        </div>
    )
}

export default Register