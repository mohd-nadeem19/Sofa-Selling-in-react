
import React from 'react';
import OurProduct from './OurProduct';
const products = [
        
    {
        id: "1",
        img: "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gVm9lLm~XAPOYFZXTg30yde~Ixv9LaNYUya5RkEPWozJ~NJZNb1utY57dFh375Rjf4mcifPkF-apjHcGw4uSpz-ixaj~AaeUT8Q~Wb28pPJWgWQ0QwqvYANovzuKqGG8m1W6-wipnPeMyh8SbRHH7~2FciUUkgZEQB2XTJe5NbNMrFqUnydRlsnS341RGrR6oPN9ooaw92QxASdiIuBZHNwujqNOwNfaJxb2brFQugLtK6pJYBbibWHbX6pBIjiF6BcmqoO~p8XMRb0ZMfhyIfINgZAi8TkW1FZTnbESc3aLguIRIYueIGfxK~VHhWwTNBwoOvbjq~Ks4HXPOiEumg__",
        heading: "Syltherine",
        para: "Stylish cafe chair",
        current: "Rp 2.500.000",
        original: "Rp 3.500.000",
    },
    {
        id: "2",
        img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
        heading: "Leviosa",
        para: "Comfortable living room chair",
        current: "Rp 2.000.000",
        original: "Rp 3.000.000"
    },
    {
        id: "3",
        img: "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H37x7E8NpXgrzTD-sl4opO9zArRy1m4LgcdFIgggDhhmHBL1PcdPf~EpBRj9S~L3XgdtCa9IEy1TvCwlPxiqtLeXRWkoIhXxj0-wmXmpjfW4OahT7zps7Gd41O4U~FIDvjilfBKkDmmNPw3YaPkHBKsEf~Mefh81bfo8C8Wsw8xXBZ7R~F4ISPAAmHw3r7U4UKDccLGpp2nMb~oyai44oVtNMfOEgaOXA4Wpx8nnmP9QyfxcEBImdVd0K5a-8nt4-CtvQfsztUhbhfpGGG3wqu8TTfYPXs7CID85dyI4QTXrlqd9RjIXy8B47YZUjwut7dOuCzHVJTRZIwgY0HjbRA__",
        heading: "Lolito",
        para: "Luxury big sofa",
        current: "Rp 7.000.000",
        original: "Rp 14.000.000"
    },
    {
        id: "4",
        img: "https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8S9sURtklnUGaYVLRdcCB~oYGP~2MnmpVyeAlXpLz1GbFCKiTx3Ah1zZm5~7Qgmwd2fyFYp5uz-HwP3lKQDCW1HW~qcTYkIbI5MDSncqmagHEMApwfAnCXCebZJl1sjNyKp5GLUC2jAArY7r-bFmFq8V8VaxVhwdaS9OE2pJwwSLEqATz-Gl9dvSWAskbTlq7Za~bRr0mP-1VzrexepUoJ3atJYXRYZ5tXo4YoC0b2-HZWso~fexLe2USSGZL~GXRmC1ZC9YQ0Jm8nJvPwwCt190IQMfGUDDo8M6Sa91~kR3OC-mwQeYb1X16yXG5obDqLNmmX~YA7NVFYZU4mnbg__",
        heading: "Respira",
        para: "Outdoor bar table and stool",
        current: "Rp 500.000",
        original: "Rp 14.000.000"
    },
    {
        id: "5",
        img: "https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pm4BEUybYQNBF6wZZO9BxwFnaABw1Qdnfo7voZ9KQHpfwQPbHeHgEWTpnmXFQxAcxqmOU4xSJEmqrUQXec~CCMF5Mst4lduO6uj2WXqH18QXDT3-PQoftqBJ~8y8CC-B0rs6maQbw1vjRZE3X8HWYLjHZJpG2tqg6W1xg5ZJjJNRQkyqJ7Drwo~CcDQMZs8~HCZuH4joE2k0mYC6DfUoB08JvErOirpM576YPBoWi8difmOBjYGy~xc1~aeyhMT6F5fXCOUpFf6QA0K~mENGXTY9V-h2Z0QYNJO1~3AGmd3wPVfo8xJJ9TagMbhsHokY39WcN8P2QoZV8vsa-2ye2w__",
        heading: "Grifo",
        para: "Night lamp",
        current: "Rp 500.000",
        original: "Rp 14.000.000"
    },
    {
        id: "6",
        img: "https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6qXvTf6LC5FuLFJC7Jr-asfSGXwEiYZ8WkUuZdOA8oRI3QxX2dAMeHAEc4YibgqMzxPwZvL4~MJN7U65Wg2Jy9o9OzcZa3ue0~-TWup0rN-LIFnFfj76mLgclPZtoCCKNw8~mwB4ljxp3JPPe8r23ZX4qf9EbehaSgp4DczPXiMuyqnC0DqSOFYOJ11zhYG9mShraEuzbTAEhFEUoIsFGWTFPT1K7-JIBWvhEYXB16qv9QRRTW0IYxcm5qMWSVlSiNNBukeaQb0PWacbcHoobJFE0Fxe1NHmjD7jj8Jpx8unB3dRjhrZYezUlJXU-7aMGSzcOHvRy7lDEEXp98nEw__",
        heading: "Muggo",
        para: "Small mug",
        current: "Rp 500.000",
        original: "Rp 14.000.000"
    },
    {
        id: "7",
        img: "https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-AxcsXR2EPyHormEeF0CeV-iOG0IWB-dDHxVM8SkPzYgTQZ77LJCnCpc-Z5zNikFr~a1EHFtaVSpsXT9eXHR1uLTqj6CckPpDZJ8vOKSXt7g-M-9vhAqkgE6CuqCxgz8234TPTmciVY2dEoJUwrB-0NiBSBbGf9DtRF6ZB0pKEUK7CSFGqvDng68pQ6CmrTQjd2Go~m1u6b1KvQnlGKbSqM-~vpe4NY9Yriv~KQ85E80LgnINq5WmDXvVEWFJQBwVec-GNcRFjfONP~~3VrC8d96XPN7trR3T~TPsvMFEnQwoPG~arPLct7IENzRes50qAV9s7WbwsI3cUckiYNpg__",
        heading: "Pingky",
        para: "Cute bed set",
        current: "Rp 2.500.00",
        original: "Rp 14.000.000"
    },
    {
        id: "8",
        img: "https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7AQjn7xM17-bbDW16OXWzdUJLh~v7cRhDjdWqX7KF7k~WvUzgwu8~FAlsMsXaDkmm1HP9AadGGJqa-HG7Z~L-5fhYRPhMCUUsuBSd23wLJzFOVBP2VWHTd~m8gxgfPO~iAq5zwpRSdfFYf925VhdGCYMr0Pf9mhmXnIAVtMCydW8Rszhs3wPmkq1JPCgSzKFj5gdBjUAl3k5fuBUCiwKpm7OaHfTsiam~rN4XxjbCOX4YFkBmNLeSS2oL8KDArx-IPPeZgQN9XYNCB6G0jGI65ioZjARSjeJMXvmml-~HyPvS3u6bRG48h-hJonslgKeuAG2B~9r-UYPgyFJ1hCRg__",
        heading: "Potty",
        para: "Minimalist flower pot",
        current: "Rp 2.500.00",
        original: "Rp 14.000.000"
    }

]

// Array of Objects End

const OurProducts = () => {
    return (
        <div className="mt-12 px-4 sm:px-6 md:px-12">
            <h1 className="font-poppins font-[700] text-[32px] sm:text-[36px] md:text-[40px] text-[#3A3A3A] text-center mb-8 hover:text-[#B88E2F]">
                Our Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                {products.map((product) =>( 
                    <OurProduct productPrps = {product} />
                ))
                }

            </div>
        </div>
    );
};

export default OurProducts;
