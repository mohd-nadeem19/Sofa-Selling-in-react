

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShopingCart from "../ShopingCart";

const Navbar = () => {
    const [IsCartOpen, setIsCartOpen] = useState(false);
    const closeCart = () => {
        setIsCartOpen(false)
    }
    return (
        <nav>
            <div className="flex gap-4 justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img className='w-[50px]' src="data:image/png;base64,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" alt="Furniro"></img>

                        <span className="ml-2 text-xl font-semibold">Furniro</span>
                    </div>


                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-10 ml-44">
                    <Link to="/" className="text-black hover:text-[#B88E2F]">Home</Link>
                    <Link to="/shop" className="text-black hover:text-[#B88E2F]">Shop</Link>
                    <Link to="/contact" className="text-black hover:text-[#B88E2F]">Contact</Link>
                    <Link to="/cart" className="text-black hover:text-[#B88E2F]">CartTotal</Link>
                </div>

                {/* Icons Section */}
                <div className="flex space-x-5 ml-auto mr-4">
                    <Link to="/login">
                        <button className="text-black hover:text-[#B88E2F]">
                            <svg width="22" height="22" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.3335 10.0001V4.16675H23.6668V11.1667H21.3335M21.3335 15.8334H23.6668V13.5001H21.3335M9.66683 11.1667C12.7818 11.1667 19.0002 12.7301 19.0002 15.8334V19.3334H0.333496V15.8334C0.333496 12.7301 6.55183 11.1667 9.66683 11.1667ZM9.66683 0.666748C10.9045 0.666748 12.0915 1.15841 12.9667 2.03358C13.8418 2.90875 14.3335 4.09574 14.3335 5.33341C14.3335 6.57109 13.8418 7.75808 12.9667 8.63325C12.0915 9.50842 10.9045 10.0001 9.66683 10.0001C8.42915 10.0001 7.24217 9.50842 6.367 8.63325C5.49183 7.75808 5.00016 6.57109 5.00016 5.33341C5.00016 4.09574 5.49183 2.90875 6.367 2.03358C7.24217 1.15841 8.42915 0.666748 9.66683 0.666748ZM9.66683 13.3834C6.20183 13.3834 2.55016 15.0867 2.55016 15.8334V17.1167H16.7835V15.8334C16.7835 15.0867 13.1318 13.3834 9.66683 13.3834ZM9.66683 2.88341C9.01705 2.88341 8.39388 3.14154 7.93442 3.601C7.47495 4.06047 7.21683 4.68363 7.21683 5.33341C7.21683 5.98319 7.47495 6.60636 7.93442 7.06583C8.39388 7.52529 9.01705 7.78341 9.66683 7.78341C10.3166 7.78341 10.9398 7.52529 11.3992 7.06583C11.8587 6.60636 12.1168 5.98319 12.1168 5.33341C12.1168 4.68363 11.8587 4.06047 11.3992 3.601C10.9398 3.14154 10.3166 2.88341 9.66683 2.88341Z" fill="black" />
                            </svg>
                        </button>
                    </Link>

                    <button className="text-black hover:text-[#B88E2F]">
                        <svg width="20" height="21" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path d="M23.5002 23.4999L18.2665 18.2569M21.1668 11.2499C21.1668 13.88 20.122 16.4023 18.2623 18.2621C16.4026 20.1218 13.8802 21.1666 11.2502 21.1666C8.6201 21.1666 6.09776 20.1218 4.23802 18.2621C2.37828 16.4023 1.3335 13.88 1.3335 11.2499C1.3335 8.61985 2.37828 6.09751 4.23802 4.23778C6.09776 2.37804 8.6201 1.33325 11.2502 1.33325C13.8802 1.33325 16.4026 2.37804 18.2623 4.23778C20.122 6.09751 21.1668 8.61985 21.1668 11.2499V11.2499Z" stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    <button className="text-black hover:text-[#B88E2F]">
                        <svg width="21" height="20" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.16683 1.5C3.94566 1.5 1.3335 4.08533 1.3335 7.275C1.3335 9.84983 2.35433 15.9608 12.4028 22.1383C12.5828 22.2479 12.7895 22.3058 13.0002 22.3058C13.2109 22.3058 13.4175 22.2479 13.5975 22.1383C23.646 15.9608 24.6668 9.84983 24.6668 7.275C24.6668 4.08533 22.0547 1.5 18.8335 1.5C15.6123 1.5 13.0002 5 13.0002 5C13.0002 5 10.388 1.5 7.16683 1.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button 
                    onClick={() => setIsCartOpen(true)}
                    className="text-black hover:text-[#B88E2F]">
                        <svg width="22" height="20" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2354 16.1926H7.95225L8.76982 14.5273L22.3542 14.5027C22.8136 14.5027 23.2073 14.1746 23.2894 13.7207L25.1706 3.19062C25.2198 2.91445 25.146 2.63008 24.9655 2.41406C24.8763 2.30775 24.7651 2.22211 24.6395 2.16309C24.5139 2.10407 24.377 2.07308 24.2382 2.07227L6.95693 2.01484L6.80928 1.32031C6.71631 0.877344 6.31709 0.554688 5.86318 0.554688H1.63857C1.38258 0.554688 1.13707 0.656381 0.95605 0.837398C0.775034 1.01841 0.67334 1.26393 0.67334 1.51992C0.67334 1.77592 0.775034 2.02143 0.95605 2.20245C1.13707 2.38346 1.38258 2.48516 1.63857 2.48516H5.08115L5.72646 5.55312L7.31514 13.2449L5.26982 16.5836C5.16361 16.727 5.09963 16.8972 5.08514 17.075C5.07064 17.2528 5.1062 17.4312 5.18779 17.5898C5.35186 17.9152 5.68271 18.1203 6.04912 18.1203H7.76631C7.40023 18.6065 7.20249 19.1988 7.20303 19.8074C7.20303 21.3551 8.46084 22.6129 10.0085 22.6129C11.5562 22.6129 12.814 21.3551 12.814 19.8074C12.814 19.1977 12.6116 18.6043 12.2507 18.1203H16.6558C16.2897 18.6065 16.0919 19.1988 16.0925 19.8074C16.0925 21.3551 17.3503 22.6129 18.8979 22.6129C20.4456 22.6129 21.7034 21.3551 21.7034 19.8074C21.7034 19.1977 21.5011 18.6043 21.1401 18.1203H24.2382C24.7687 18.1203 25.2034 17.6883 25.2034 17.1551C25.2018 16.8994 25.0992 16.6546 24.9178 16.4743C24.7365 16.294 24.4912 16.1927 24.2354 16.1926ZM7.35889 3.91797L23.1034 3.96992L21.5612 12.6051L9.19365 12.627L7.35889 3.91797ZM10.0085 20.6715C9.53271 20.6715 9.14443 20.2832 9.14443 19.8074C9.14443 19.3316 9.53271 18.9434 10.0085 18.9434C10.4843 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7815 20.2564 10.6195 20.4184C10.4574 20.5805 10.2377 20.6715 10.0085 20.6715ZM18.8979 20.6715C18.4222 20.6715 18.0339 20.2832 18.0339 19.8074C18.0339 19.3316 18.4222 18.9434 18.8979 18.9434C19.3737 18.9434 19.762 19.3316 19.762 19.8074C19.762 20.0366 19.671 20.2564 19.5089 20.4184C19.3469 20.5805 19.1271 20.6715 18.8979 20.6715Z" fill="black" />
                        </svg>
                    </button>


                </div>

                {/* Mobile Menu Links */}
                <div className="md:hidden">
                    <div className="flex flex-col space-y-4 mt-4">
                        <Link to="/" className="text-black hover:text-[#B88E2F]">Home</Link>
                        <Link to="/shop" className="text-black hover:text-[#B88E2F]">Shop</Link>
                        <Link to="/about" className="text-black hover:text-[#B88E2F]">About</Link>
                        <Link to="/contact" className="text-black hover:text-[#B88E2F]">Contact</Link>
                    </div>
                </div>
            </div>
            <ShopingCart isOpen={IsCartOpen} onClose={closeCart}>
                {/* <Cart /> */}
            </ShopingCart>
        </nav>

    );
};

export default Navbar;
