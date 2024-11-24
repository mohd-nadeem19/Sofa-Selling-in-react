import React from 'react'
import OurProduct from './OurProduct'

const OurProducts = () => {
    return (
        <div className='mt-12'>
            <h1 className='font-poppins font-[700] text-[40px] text-[#3A3A3A] text-center mb-12'>Our Products</h1>


            <div className='grid grid-cols-4 grid-rows-2 place-items-center gap-4 ml-8 w-[1200px]'>
                <OurProduct
                    img="https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gVm9lLm~XAPOYFZXTg30yde~Ixv9LaNYUya5RkEPWozJ~NJZNb1utY57dFh375Rjf4mcifPkF-apjHcGw4uSpz-ixaj~AaeUT8Q~Wb28pPJWgWQ0QwqvYANovzuKqGG8m1W6-wipnPeMyh8SbRHH7~2FciUUkgZEQB2XTJe5NbNMrFqUnydRlsnS341RGrR6oPN9ooaw92QxASdiIuBZHNwujqNOwNfaJxb2brFQugLtK6pJYBbibWHbX6pBIjiF6BcmqoO~p8XMRb0ZMfhyIfINgZAi8TkW1FZTnbESc3aLguIRIYueIGfxK~VHhWwTNBwoOvbjq~Ks4HXPOiEumg__"
                    svg='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E97171" />
                    <path d="M12.968 23.44V24.976H6.392V23.44H12.968ZM15.2874 21.216C15.3514 20.224 15.73 19.4507 16.4234 18.896C17.1274 18.3413 18.0234 18.064 19.1114 18.064C19.858 18.064 20.5034 18.1973 21.0474 18.464C21.5914 18.7307 22.002 19.0933 22.2794 19.552C22.5567 20.0107 22.6954 20.528 22.6954 21.104C22.6954 21.7653 22.5194 22.3307 22.1674 22.8C21.8154 23.2693 21.394 23.584 20.9034 23.744V23.808C21.5327 24 22.0234 24.352 22.3754 24.864C22.7274 25.3653 22.9034 26.0107 22.9034 26.8C22.9034 27.4293 22.7594 27.9893 22.4714 28.48C22.1834 28.9707 21.7567 29.36 21.1914 29.648C20.626 29.9253 19.9487 30.064 19.1594 30.064C18.0074 30.064 17.058 29.7707 16.3114 29.184C15.5754 28.5867 15.1807 27.7333 15.1274 26.624H16.8874C16.93 27.1893 17.1487 27.6533 17.5434 28.016C17.938 28.368 18.4714 28.544 19.1434 28.544C19.794 28.544 20.2954 28.368 20.6474 28.016C20.9994 27.6533 21.1754 27.1893 21.1754 26.624C21.1754 25.8773 20.9354 25.3493 20.4554 25.04C19.986 24.72 19.2607 24.56 18.2794 24.56H17.8634V23.056H18.2954C19.1594 23.0453 19.8154 22.9013 20.2634 22.624C20.722 22.3467 20.9514 21.9093 20.9514 21.312C20.9514 20.8 20.786 20.3947 20.4554 20.096C20.1247 19.7867 19.6554 19.632 19.0474 19.632C18.45 19.632 17.986 19.7867 17.6554 20.096C17.3247 20.3947 17.1274 20.768 17.0634 21.216H15.2874ZM24.8194 24.016C24.8194 22.1707 25.1287 20.7307 25.7474 19.696C26.3767 18.6507 27.454 18.128 28.9794 18.128C30.5047 18.128 31.5767 18.6507 32.1954 19.696C32.8247 20.7307 33.1394 22.1707 33.1394 24.016C33.1394 25.8827 32.8247 27.344 32.1954 28.4C31.5767 29.4453 30.5047 29.968 28.9794 29.968C27.454 29.968 26.3767 29.4453 25.7474 28.4C25.1287 27.344 24.8194 25.8827 24.8194 24.016ZM31.3474 24.016C31.3474 23.152 31.2887 22.4213 31.1714 21.824C31.0647 21.2267 30.8407 20.7413 30.4994 20.368C30.158 19.984 29.6514 19.792 28.9794 19.792C28.3074 19.792 27.8007 19.984 27.4594 20.368C27.118 20.7413 26.8887 21.2267 26.7714 21.824C26.6647 22.4213 26.6114 23.152 26.6114 24.016C26.6114 24.912 26.6647 25.664 26.7714 26.272C26.878 26.88 27.102 27.3707 27.4434 27.744C27.7954 28.1173 28.3074 28.304 28.9794 28.304C29.6514 28.304 30.158 28.1173 30.4994 27.744C30.8514 27.3707 31.0807 26.88 31.1874 26.272C31.294 25.664 31.3474 24.912 31.3474 24.016ZM34.7814 21.152C34.7814 20.3733 35.0054 19.7653 35.4534 19.328C35.912 18.88 36.4987 18.656 37.2134 18.656C37.928 18.656 38.5094 18.88 38.9574 19.328C39.416 19.7653 39.6454 20.3733 39.6454 21.152C39.6454 21.9307 39.416 22.544 38.9574 22.992C38.5094 23.44 37.928 23.664 37.2134 23.664C36.4987 23.664 35.912 23.44 35.4534 22.992C35.0054 22.544 34.7814 21.9307 34.7814 21.152ZM44.5414 18.864L38.1574 30H36.3654L42.7494 18.864H44.5414ZM37.2134 19.76C36.5414 19.76 36.2054 20.224 36.2054 21.152C36.2054 22.0907 36.5414 22.56 37.2134 22.56C37.5334 22.56 37.7787 22.448 37.9494 22.224C38.1307 21.9893 38.2214 21.632 38.2214 21.152C38.2214 20.224 37.8854 19.76 37.2134 19.76ZM41.2934 27.696C41.2934 26.9173 41.5174 26.3093 41.9654 25.872C42.424 25.424 43.0107 25.2 43.7254 25.2C44.4294 25.2 45.0054 25.424 45.4534 25.872C45.912 26.3093 46.1414 26.9173 46.1414 27.696C46.1414 28.4747 45.912 29.088 45.4534 29.536C45.0054 29.984 44.4294 30.208 43.7254 30.208C43.0107 30.208 42.424 29.984 41.9654 29.536C41.5174 29.088 41.2934 28.4747 41.2934 27.696ZM43.7094 26.304C43.0374 26.304 42.7014 26.768 42.7014 27.696C42.7014 28.624 43.0374 29.088 43.7094 29.088C44.3814 29.088 44.7174 28.624 44.7174 27.696C44.7174 26.768 44.3814 26.304 43.7094 26.304Z" fill="white" />
                </svg>'
                    heading="Syltherine"
                    para="Stylish cafe chair"
                    span="Rp 2.500.000"
                    span1="Rp 3.500.000"
                />
                <OurProduct
                    img="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
                    heading="Syltherine"
                    para="Stylish cafe chair"
                    span="Rp 2.500.000"
                    span1="Rp 3.500.000"
                />
                <OurProduct
                    img="https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H37x7E8NpXgrzTD-sl4opO9zArRy1m4LgcdFIgggDhhmHBL1PcdPf~EpBRj9S~L3XgdtCa9IEy1TvCwlPxiqtLeXRWkoIhXxj0-wmXmpjfW4OahT7zps7Gd41O4U~FIDvjilfBKkDmmNPw3YaPkHBKsEf~Mefh81bfo8C8Wsw8xXBZ7R~F4ISPAAmHw3r7U4UKDccLGpp2nMb~oyai44oVtNMfOEgaOXA4Wpx8nnmP9QyfxcEBImdVd0K5a-8nt4-CtvQfsztUhbhfpGGG3wqu8TTfYPXs7CID85dyI4QTXrlqd9RjIXy8B47YZUjwut7dOuCzHVJTRZIwgY0HjbRA__"
                    svg='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#E97171"/>
<path d="M12.968 23.44V24.976H6.392V23.44H12.968ZM22.8394 19.904H17.4794V23.088C17.7034 22.7893 18.034 22.5387 18.4714 22.336C18.9194 22.1333 19.394 22.032 19.8954 22.032C20.7914 22.032 21.5167 22.224 22.0714 22.608C22.6367 22.992 23.0367 23.4773 23.2714 24.064C23.5167 24.6507 23.6394 25.2693 23.6394 25.92C23.6394 26.7093 23.4847 27.4133 23.1754 28.032C22.8767 28.64 22.4234 29.12 21.8154 29.472C21.218 29.824 20.482 30 19.6074 30C18.4447 30 17.5114 29.712 16.8074 29.136C16.1034 28.56 15.682 27.7973 15.5434 26.848H17.3194C17.4367 27.3493 17.698 27.7493 18.1034 28.048C18.5087 28.336 19.0154 28.48 19.6234 28.48C20.3807 28.48 20.946 28.2507 21.3194 27.792C21.7034 27.3333 21.8954 26.7253 21.8954 25.968C21.8954 25.2 21.7034 24.6133 21.3194 24.208C20.9354 23.792 20.37 23.584 19.6234 23.584C19.1007 23.584 18.658 23.7173 18.2954 23.984C17.9434 24.24 17.6874 24.592 17.5274 25.04H15.7994V18.304H22.8394V19.904ZM25.5381 24.016C25.5381 22.1707 25.8475 20.7307 26.4661 19.696C27.0955 18.6507 28.1728 18.128 29.6981 18.128C31.2235 18.128 32.2955 18.6507 32.9141 19.696C33.5435 20.7307 33.8581 22.1707 33.8581 24.016C33.8581 25.8827 33.5435 27.344 32.9141 28.4C32.2955 29.4453 31.2235 29.968 29.6981 29.968C28.1728 29.968 27.0955 29.4453 26.4661 28.4C25.8475 27.344 25.5381 25.8827 25.5381 24.016ZM32.0661 24.016C32.0661 23.152 32.0075 22.4213 31.8901 21.824C31.7835 21.2267 31.5595 20.7413 31.2181 20.368C30.8768 19.984 30.3701 19.792 29.6981 19.792C29.0261 19.792 28.5195 19.984 28.1781 20.368C27.8368 20.7413 27.6075 21.2267 27.4901 21.824C27.3835 22.4213 27.3301 23.152 27.3301 24.016C27.3301 24.912 27.3835 25.664 27.4901 26.272C27.5968 26.88 27.8208 27.3707 28.1621 27.744C28.5141 28.1173 29.0261 28.304 29.6981 28.304C30.3701 28.304 30.8768 28.1173 31.2181 27.744C31.5701 27.3707 31.7995 26.88 31.9061 26.272C32.0128 25.664 32.0661 24.912 32.0661 24.016ZM35.5001 21.152C35.5001 20.3733 35.7241 19.7653 36.1721 19.328C36.6308 18.88 37.2175 18.656 37.9321 18.656C38.6468 18.656 39.2281 18.88 39.6761 19.328C40.1348 19.7653 40.3641 20.3733 40.3641 21.152C40.3641 21.9307 40.1348 22.544 39.6761 22.992C39.2281 23.44 38.6468 23.664 37.9321 23.664C37.2175 23.664 36.6308 23.44 36.1721 22.992C35.7241 22.544 35.5001 21.9307 35.5001 21.152ZM45.2601 18.864L38.8761 30H37.0841L43.4681 18.864H45.2601ZM37.9321 19.76C37.2601 19.76 36.9241 20.224 36.9241 21.152C36.9241 22.0907 37.2601 22.56 37.9321 22.56C38.2521 22.56 38.4975 22.448 38.6681 22.224C38.8495 21.9893 38.9401 21.632 38.9401 21.152C38.9401 20.224 38.6041 19.76 37.9321 19.76ZM42.0121 27.696C42.0121 26.9173 42.2361 26.3093 42.6841 25.872C43.1428 25.424 43.7295 25.2 44.4441 25.2C45.1481 25.2 45.7241 25.424 46.1721 25.872C46.6308 26.3093 46.8601 26.9173 46.8601 27.696C46.8601 28.4747 46.6308 29.088 46.1721 29.536C45.7241 29.984 45.1481 30.208 44.4441 30.208C43.7295 30.208 43.1428 29.984 42.6841 29.536C42.2361 29.088 42.0121 28.4747 42.0121 27.696ZM44.4281 26.304C43.7561 26.304 43.4201 26.768 43.4201 27.696C43.4201 28.624 43.7561 29.088 44.4281 29.088C45.1001 29.088 45.4361 28.624 45.4361 27.696C45.4361 26.768 45.1001 26.304 44.4281 26.304Z" fill="white"/>
</svg>'
                    heading="Lolito"
                    para="Luxury big sofa"
                    span="Rp 7.000.000"
                    span1="Rp 14.000.000"
                />
                <OurProduct
                    img="https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8S9sURtklnUGaYVLRdcCB~oYGP~2MnmpVyeAlXpLz1GbFCKiTx3Ah1zZm5~7Qgmwd2fyFYp5uz-HwP3lKQDCW1HW~qcTYkIbI5MDSncqmagHEMApwfAnCXCebZJl1sjNyKp5GLUC2jAArY7r-bFmFq8V8VaxVhwdaS9OE2pJwwSLEqATz-Gl9dvSWAskbTlq7Za~bRr0mP-1VzrexepUoJ3atJYXRYZ5tXo4YoC0b2-HZWso~fexLe2USSGZL~GXRmC1ZC9YQ0Jm8nJvPwwCt190IQMfGUDDo8M6Sa91~kR3OC-mwQeYb1X16yXG5obDqLNmmX~YA7NVFYZU4mnbg__"
                    svg='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#2EC1AC"/>
<path d="M18.336 30H16.512L11.024 21.696V30H9.2V18.864H11.024L16.512 27.152V18.864H18.336V30ZM28.8113 25.376C28.8113 25.7067 28.7899 26.0053 28.7473 26.272H22.0113C22.0646 26.976 22.3259 27.5413 22.7953 27.968C23.2646 28.3947 23.8406 28.608 24.5233 28.608C25.5046 28.608 26.1979 28.1973 26.6033 27.376H28.5712C28.3046 28.1867 27.8193 28.8533 27.1153 29.376C26.4219 29.888 25.5579 30.144 24.5233 30.144C23.6806 30.144 22.9233 29.9573 22.2513 29.584C21.5899 29.2 21.0673 28.6667 20.6833 27.984C20.3099 27.2907 20.1233 26.4907 20.1233 25.584C20.1233 24.6773 20.3046 23.8827 20.6673 23.2C21.0406 22.5067 21.5579 21.9733 22.2193 21.6C22.8913 21.2267 23.6593 21.04 24.5233 21.04C25.3553 21.04 26.0966 21.2213 26.7473 21.584C27.3979 21.9467 27.9046 22.4587 28.2673 23.12C28.6299 23.7707 28.8113 24.5227 28.8113 25.376ZM26.9073 24.8C26.8966 24.128 26.6566 23.5893 26.1873 23.184C25.7179 22.7787 25.1366 22.576 24.4433 22.576C23.8139 22.576 23.2753 22.7787 22.8273 23.184C22.3793 23.5787 22.1126 24.1173 22.0273 24.8H26.9073ZM42.4463 21.184L39.7103 30H37.7903L36.0143 23.488L34.2383 30H32.3183L29.5663 21.184H31.4223L33.2623 28.272L35.1343 21.184H37.0383L38.8303 28.24L40.6543 21.184H42.4463Z" fill="white"/>
</svg>'
                    heading="Respira"
                    para="Outdoor bar table and stool"
                    span="Rp 500.000"
                    span1="Rp 14.000.000"
                />
                <OurProduct
                    img="https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pm4BEUybYQNBF6wZZO9BxwFnaABw1Qdnfo7voZ9KQHpfwQPbHeHgEWTpnmXFQxAcxqmOU4xSJEmqrUQXec~CCMF5Mst4lduO6uj2WXqH18QXDT3-PQoftqBJ~8y8CC-B0rs6maQbw1vjRZE3X8HWYLjHZJpG2tqg6W1xg5ZJjJNRQkyqJ7Drwo~CcDQMZs8~HCZuH4joE2k0mYC6DfUoB08JvErOirpM576YPBoWi8difmOBjYGy~xc1~aeyhMT6F5fXCOUpFf6QA0K~mENGXTY9V-h2Z0QYNJO1~3AGmd3wPVfo8xJJ9TagMbhsHokY39WcN8P2QoZV8vsa-2ye2w__"

                    heading="Grifo"
                    para="Night lamp"
                    span="Rp 2.500.000"
                    span1="Rp 3.500.000"
                />
                <OurProduct
                    img="https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6qXvTf6LC5FuLFJC7Jr-asfSGXwEiYZ8WkUuZdOA8oRI3QxX2dAMeHAEc4YibgqMzxPwZvL4~MJN7U65Wg2Jy9o9OzcZa3ue0~-TWup0rN-LIFnFfj76mLgclPZtoCCKNw8~mwB4ljxp3JPPe8r23ZX4qf9EbehaSgp4DczPXiMuyqnC0DqSOFYOJ11zhYG9mShraEuzbTAEhFEUoIsFGWTFPT1K7-JIBWvhEYXB16qv9QRRTW0IYxcm5qMWSVlSiNNBukeaQb0PWacbcHoobJFE0Fxe1NHmjD7jj8Jpx8unB3dRjhrZYezUlJXU-7aMGSzcOHvRy7lDEEXp98nEw__"
                    svg='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#2EC1AC"/>
<path d="M18.336 30H16.512L11.024 21.696V30H9.2V18.864H11.024L16.512 27.152V18.864H18.336V30ZM28.8113 25.376C28.8113 25.7067 28.7899 26.0053 28.7473 26.272H22.0113C22.0646 26.976 22.3259 27.5413 22.7953 27.968C23.2646 28.3947 23.8406 28.608 24.5233 28.608C25.5046 28.608 26.1979 28.1973 26.6033 27.376H28.5712C28.3046 28.1867 27.8193 28.8533 27.1153 29.376C26.4219 29.888 25.5579 30.144 24.5233 30.144C23.6806 30.144 22.9233 29.9573 22.2513 29.584C21.5899 29.2 21.0673 28.6667 20.6833 27.984C20.3099 27.2907 20.1233 26.4907 20.1233 25.584C20.1233 24.6773 20.3046 23.8827 20.6673 23.2C21.0406 22.5067 21.5579 21.9733 22.2193 21.6C22.8913 21.2267 23.6593 21.04 24.5233 21.04C25.3553 21.04 26.0966 21.2213 26.7473 21.584C27.3979 21.9467 27.9046 22.4587 28.2673 23.12C28.6299 23.7707 28.8113 24.5227 28.8113 25.376ZM26.9073 24.8C26.8966 24.128 26.6566 23.5893 26.1873 23.184C25.7179 22.7787 25.1366 22.576 24.4433 22.576C23.8139 22.576 23.2753 22.7787 22.8273 23.184C22.3793 23.5787 22.1126 24.1173 22.0273 24.8H26.9073ZM42.4463 21.184L39.7103 30H37.7903L36.0143 23.488L34.2383 30H32.3183L29.5663 21.184H31.4223L33.2623 28.272L35.1343 21.184H37.0383L38.8303 28.24L40.6543 21.184H42.4463Z" fill="white"/>
</svg>'
                    heading="Muggo"
                    para="Small mug"
                    span="Rp 2.500.000"
                    span1="Rp 3.500.000"
                />
                <OurProduct
                    img="https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-AxcsXR2EPyHormEeF0CeV-iOG0IWB-dDHxVM8SkPzYgTQZ77LJCnCpc-Z5zNikFr~a1EHFtaVSpsXT9eXHR1uLTqj6CckPpDZJ8vOKSXt7g-M-9vhAqkgE6CuqCxgz8234TPTmciVY2dEoJUwrB-0NiBSBbGf9DtRF6ZB0pKEUK7CSFGqvDng68pQ6CmrTQjd2Go~m1u6b1KvQnlGKbSqM-~vpe4NY9Yriv~KQ85E80LgnINq5WmDXvVEWFJQBwVec-GNcRFjfONP~~3VrC8d96XPN7trR3T~TPsvMFEnQwoPG~arPLct7IENzRes50qAV9s7WbwsI3cUckiYNpg__"
                    svg='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#E97171"/>
<path d="M12.968 23.44V24.976H6.392V23.44H12.968ZM22.8394 19.904H17.4794V23.088C17.7034 22.7893 18.034 22.5387 18.4714 22.336C18.9194 22.1333 19.394 22.032 19.8954 22.032C20.7914 22.032 21.5167 22.224 22.0714 22.608C22.6367 22.992 23.0367 23.4773 23.2714 24.064C23.5167 24.6507 23.6394 25.2693 23.6394 25.92C23.6394 26.7093 23.4847 27.4133 23.1754 28.032C22.8767 28.64 22.4234 29.12 21.8154 29.472C21.218 29.824 20.482 30 19.6074 30C18.4447 30 17.5114 29.712 16.8074 29.136C16.1034 28.56 15.682 27.7973 15.5434 26.848H17.3194C17.4367 27.3493 17.698 27.7493 18.1034 28.048C18.5087 28.336 19.0154 28.48 19.6234 28.48C20.3807 28.48 20.946 28.2507 21.3194 27.792C21.7034 27.3333 21.8954 26.7253 21.8954 25.968C21.8954 25.2 21.7034 24.6133 21.3194 24.208C20.9354 23.792 20.37 23.584 19.6234 23.584C19.1007 23.584 18.658 23.7173 18.2954 23.984C17.9434 24.24 17.6874 24.592 17.5274 25.04H15.7994V18.304H22.8394V19.904ZM25.5381 24.016C25.5381 22.1707 25.8475 20.7307 26.4661 19.696C27.0955 18.6507 28.1728 18.128 29.6981 18.128C31.2235 18.128 32.2955 18.6507 32.9141 19.696C33.5435 20.7307 33.8581 22.1707 33.8581 24.016C33.8581 25.8827 33.5435 27.344 32.9141 28.4C32.2955 29.4453 31.2235 29.968 29.6981 29.968C28.1728 29.968 27.0955 29.4453 26.4661 28.4C25.8475 27.344 25.5381 25.8827 25.5381 24.016ZM32.0661 24.016C32.0661 23.152 32.0075 22.4213 31.8901 21.824C31.7835 21.2267 31.5595 20.7413 31.2181 20.368C30.8768 19.984 30.3701 19.792 29.6981 19.792C29.0261 19.792 28.5195 19.984 28.1781 20.368C27.8368 20.7413 27.6075 21.2267 27.4901 21.824C27.3835 22.4213 27.3301 23.152 27.3301 24.016C27.3301 24.912 27.3835 25.664 27.4901 26.272C27.5968 26.88 27.8208 27.3707 28.1621 27.744C28.5141 28.1173 29.0261 28.304 29.6981 28.304C30.3701 28.304 30.8768 28.1173 31.2181 27.744C31.5701 27.3707 31.7995 26.88 31.9061 26.272C32.0128 25.664 32.0661 24.912 32.0661 24.016ZM35.5001 21.152C35.5001 20.3733 35.7241 19.7653 36.1721 19.328C36.6308 18.88 37.2175 18.656 37.9321 18.656C38.6468 18.656 39.2281 18.88 39.6761 19.328C40.1348 19.7653 40.3641 20.3733 40.3641 21.152C40.3641 21.9307 40.1348 22.544 39.6761 22.992C39.2281 23.44 38.6468 23.664 37.9321 23.664C37.2175 23.664 36.6308 23.44 36.1721 22.992C35.7241 22.544 35.5001 21.9307 35.5001 21.152ZM45.2601 18.864L38.8761 30H37.0841L43.4681 18.864H45.2601ZM37.9321 19.76C37.2601 19.76 36.9241 20.224 36.9241 21.152C36.9241 22.0907 37.2601 22.56 37.9321 22.56C38.2521 22.56 38.4975 22.448 38.6681 22.224C38.8495 21.9893 38.9401 21.632 38.9401 21.152C38.9401 20.224 38.6041 19.76 37.9321 19.76ZM42.0121 27.696C42.0121 26.9173 42.2361 26.3093 42.6841 25.872C43.1428 25.424 43.7295 25.2 44.4441 25.2C45.1481 25.2 45.7241 25.424 46.1721 25.872C46.6308 26.3093 46.8601 26.9173 46.8601 27.696C46.8601 28.4747 46.6308 29.088 46.1721 29.536C45.7241 29.984 45.1481 30.208 44.4441 30.208C43.7295 30.208 43.1428 29.984 42.6841 29.536C42.2361 29.088 42.0121 28.4747 42.0121 27.696ZM44.4281 26.304C43.7561 26.304 43.4201 26.768 43.4201 27.696C43.4201 28.624 43.7561 29.088 44.4281 29.088C45.1001 29.088 45.4361 28.624 45.4361 27.696C45.4361 26.768 45.1001 26.304 44.4281 26.304Z" fill="white"/>
</svg>'
                    heading="Pingky"
                    para="Cute bed set"
                    span="Rp 2.500.000"
                    span1="Rp 3.500.000"
                />
                <OurProduct
                    img="https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7AQjn7xM17-bbDW16OXWzdUJLh~v7cRhDjdWqX7KF7k~WvUzgwu8~FAlsMsXaDkmm1HP9AadGGJqa-HG7Z~L-5fhYRPhMCUUsuBSd23wLJzFOVBP2VWHTd~m8gxgfPO~iAq5zwpRSdfFYf925VhdGCYMr0Pf9mhmXnIAVtMCydW8Rszhs3wPmkq1JPCgSzKFj5gdBjUAl3k5fuBUCiwKpm7OaHfTsiam~rN4XxjbCOX4YFkBmNLeSS2oL8KDArx-IPPeZgQN9XYNCB6G0jGI65ioZjARSjeJMXvmml-~HyPvS3u6bRG48h-hJonslgKeuAG2B~9r-UYPgyFJ1hCRg__"
                    svg='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#2EC1AC"/>
<path d="M18.336 30H16.512L11.024 21.696V30H9.2V18.864H11.024L16.512 27.152V18.864H18.336V30ZM28.8113 25.376C28.8113 25.7067 28.7899 26.0053 28.7473 26.272H22.0113C22.0646 26.976 22.3259 27.5413 22.7953 27.968C23.2646 28.3947 23.8406 28.608 24.5233 28.608C25.5046 28.608 26.1979 28.1973 26.6033 27.376H28.5712C28.3046 28.1867 27.8193 28.8533 27.1153 29.376C26.4219 29.888 25.5579 30.144 24.5233 30.144C23.6806 30.144 22.9233 29.9573 22.2513 29.584C21.5899 29.2 21.0673 28.6667 20.6833 27.984C20.3099 27.2907 20.1233 26.4907 20.1233 25.584C20.1233 24.6773 20.3046 23.8827 20.6673 23.2C21.0406 22.5067 21.5579 21.9733 22.2193 21.6C22.8913 21.2267 23.6593 21.04 24.5233 21.04C25.3553 21.04 26.0966 21.2213 26.7473 21.584C27.3979 21.9467 27.9046 22.4587 28.2673 23.12C28.6299 23.7707 28.8113 24.5227 28.8113 25.376ZM26.9073 24.8C26.8966 24.128 26.6566 23.5893 26.1873 23.184C25.7179 22.7787 25.1366 22.576 24.4433 22.576C23.8139 22.576 23.2753 22.7787 22.8273 23.184C22.3793 23.5787 22.1126 24.1173 22.0273 24.8H26.9073ZM42.4463 21.184L39.7103 30H37.7903L36.0143 23.488L34.2383 30H32.3183L29.5663 21.184H31.4223L33.2623 28.272L35.1343 21.184H37.0383L38.8303 28.24L40.6543 21.184H42.4463Z" fill="white"/>
</svg>'
                    heading="Potty"
                    para="Minimalist flower pot"
                    span="Rp 2.500.000"
                    span1="Rp 3.500.000"
                />

            </div>
            <button className='w-[245px] h-[48px] border-2 border-[#B88E2F] text-[#B88E2F] font-poppins font-[600] text-[16px] ml-[500px] mt-12'>
                Show More
            </button>
        </div>
    )
}

export default OurProducts