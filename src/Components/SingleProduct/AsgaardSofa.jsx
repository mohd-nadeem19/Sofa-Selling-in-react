import React from 'react'
import { useParams } from 'react-router-dom'
const products = [
        
    {
        id: "1",
        img: "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gVm9lLm~XAPOYFZXTg30yde~Ixv9LaNYUya5RkEPWozJ~NJZNb1utY57dFh375Rjf4mcifPkF-apjHcGw4uSpz-ixaj~AaeUT8Q~Wb28pPJWgWQ0QwqvYANovzuKqGG8m1W6-wipnPeMyh8SbRHH7~2FciUUkgZEQB2XTJe5NbNMrFqUnydRlsnS341RGrR6oPN9ooaw92QxASdiIuBZHNwujqNOwNfaJxb2brFQugLtK6pJYBbibWHbX6pBIjiF6BcmqoO~p8XMRb0ZMfhyIfINgZAi8TkW1FZTnbESc3aLguIRIYueIGfxK~VHhWwTNBwoOvbjq~Ks4HXPOiEumg__",
        heading: "Syltherine",
        para: "Stylish cafe chair",
        current: "Rp 2.500.000",
        original: "Rp 3.500.000",
        img1: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mYSUyMHNlbGxpbmd8ZW58MHx8MHx8fDA%3D",
        img2: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mYSUyMHNlbGxpbmd8ZW58MHx8MHx8fDA%3D",
        img3: "https://images.unsplash.com/photo-1504194008492-c55ffe34e18d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvZmElMjBzZWxsaW5nfGVufDB8fDB8fHww",
        img4: "https://plus.unsplash.com/premium_photo-1723834562784-a56d7b234360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmElMjBzZWxsaW5nfGVufDB8fDB8fHww"
    },
    {
        id: "2",
        img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
        heading: "Leviosa",
        para: "Comfortable living room chair",
        current: "Rp 2.000.000",
        original: "Rp 3.000.000",
        img1: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmElMjBzZWxsaW5nfGVufDB8fDB8fHww",
        img2: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        img3: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        img4: "https://images.unsplash.com/photo-1547166812-0fca6370dc03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"
    },
    {
        id: "3",
        img: "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H37x7E8NpXgrzTD-sl4opO9zArRy1m4LgcdFIgggDhhmHBL1PcdPf~EpBRj9S~L3XgdtCa9IEy1TvCwlPxiqtLeXRWkoIhXxj0-wmXmpjfW4OahT7zps7Gd41O4U~FIDvjilfBKkDmmNPw3YaPkHBKsEf~Mefh81bfo8C8Wsw8xXBZ7R~F4ISPAAmHw3r7U4UKDccLGpp2nMb~oyai44oVtNMfOEgaOXA4Wpx8nnmP9QyfxcEBImdVd0K5a-8nt4-CtvQfsztUhbhfpGGG3wqu8TTfYPXs7CID85dyI4QTXrlqd9RjIXy8B47YZUjwut7dOuCzHVJTRZIwgY0HjbRA__",
        heading: "Lolito",
        para: "Luxury big sofa",
        current: "Rp 7.000.000",
        original: "Rp 14.000.000",
        im1: "https://images.unsplash.com/photo-1509764986935-841accffc894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmElMjBzZWxsaW5nfGVufDB8fDB8fHww",
        img2: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        img3: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
        img4: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    },
    {
        id: "4",
        img: "https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8S9sURtklnUGaYVLRdcCB~oYGP~2MnmpVyeAlXpLz1GbFCKiTx3Ah1zZm5~7Qgmwd2fyFYp5uz-HwP3lKQDCW1HW~qcTYkIbI5MDSncqmagHEMApwfAnCXCebZJl1sjNyKp5GLUC2jAArY7r-bFmFq8V8VaxVhwdaS9OE2pJwwSLEqATz-Gl9dvSWAskbTlq7Za~bRr0mP-1VzrexepUoJ3atJYXRYZ5tXo4YoC0b2-HZWso~fexLe2USSGZL~GXRmC1ZC9YQ0Jm8nJvPwwCt190IQMfGUDDo8M6Sa91~kR3OC-mwQeYb1X16yXG5obDqLNmmX~YA7NVFYZU4mnbg__",
        heading: "Respira",
        para: "Outdoor bar table and stool",
        current: "Rp 500.000",
        original: "Rp 14.000.000",
        img1: "https://images.unsplash.com/photo-1602872030276-17d4d67bb130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        img2: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        img3: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        img4: "https://images.unsplash.com/photo-1579520306276-7d07992a6efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    },
    {
        id: "5",
        img: "https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pm4BEUybYQNBF6wZZO9BxwFnaABw1Qdnfo7voZ9KQHpfwQPbHeHgEWTpnmXFQxAcxqmOU4xSJEmqrUQXec~CCMF5Mst4lduO6uj2WXqH18QXDT3-PQoftqBJ~8y8CC-B0rs6maQbw1vjRZE3X8HWYLjHZJpG2tqg6W1xg5ZJjJNRQkyqJ7Drwo~CcDQMZs8~HCZuH4joE2k0mYC6DfUoB08JvErOirpM576YPBoWi8difmOBjYGy~xc1~aeyhMT6F5fXCOUpFf6QA0K~mENGXTY9V-h2Z0QYNJO1~3AGmd3wPVfo8xJJ9TagMbhsHokY39WcN8P2QoZV8vsa-2ye2w__",
        heading: "Grifo",
        para: "Night lamp",
        current: "Rp 500.000",
        original: "Rp 14.000.000",
        img1: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        img2: "https://images.unsplash.com/photo-1603204077809-d94bb1ea0fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        img3: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        img4: "https://images.unsplash.com/photo-1491926626787-62db157af940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
    },
    {
        id: "6",
        img: "https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6qXvTf6LC5FuLFJC7Jr-asfSGXwEiYZ8WkUuZdOA8oRI3QxX2dAMeHAEc4YibgqMzxPwZvL4~MJN7U65Wg2Jy9o9OzcZa3ue0~-TWup0rN-LIFnFfj76mLgclPZtoCCKNw8~mwB4ljxp3JPPe8r23ZX4qf9EbehaSgp4DczPXiMuyqnC0DqSOFYOJ11zhYG9mShraEuzbTAEhFEUoIsFGWTFPT1K7-JIBWvhEYXB16qv9QRRTW0IYxcm5qMWSVlSiNNBukeaQb0PWacbcHoobJFE0Fxe1NHmjD7jj8Jpx8unB3dRjhrZYezUlJXU-7aMGSzcOHvRy7lDEEXp98nEw__",
        heading: "Muggo",
        para: "Small mug",
        current: "Rp 500.000",
        original: "Rp 14.000.000",
        img1: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
        img2: "https://images.unsplash.com/photo-1653972233229-1b8c042d6d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
        img3: "https://images.unsplash.com/photo-1653972233739-667468bbd5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
        img4: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8"
    },
    {
        id: "7",
        img: "https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-AxcsXR2EPyHormEeF0CeV-iOG0IWB-dDHxVM8SkPzYgTQZ77LJCnCpc-Z5zNikFr~a1EHFtaVSpsXT9eXHR1uLTqj6CckPpDZJ8vOKSXt7g-M-9vhAqkgE6CuqCxgz8234TPTmciVY2dEoJUwrB-0NiBSBbGf9DtRF6ZB0pKEUK7CSFGqvDng68pQ6CmrTQjd2Go~m1u6b1KvQnlGKbSqM-~vpe4NY9Yriv~KQ85E80LgnINq5WmDXvVEWFJQBwVec-GNcRFjfONP~~3VrC8d96XPN7trR3T~TPsvMFEnQwoPG~arPLct7IENzRes50qAV9s7WbwsI3cUckiYNpg__",
        heading: "Pingky",
        para: "Cute bed set",
        current: "Rp 2.500.00",
        original: "Rp 14.000.000",
        img1: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
        img2: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
        img3: "https://images.unsplash.com/photo-1605917197321-b460a94bd747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
        img4: "https://images.unsplash.com/photo-1560449752-3fd4bdbe7df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8"
    },
    {
        id: "8",
        img: "https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7AQjn7xM17-bbDW16OXWzdUJLh~v7cRhDjdWqX7KF7k~WvUzgwu8~FAlsMsXaDkmm1HP9AadGGJqa-HG7Z~L-5fhYRPhMCUUsuBSd23wLJzFOVBP2VWHTd~m8gxgfPO~iAq5zwpRSdfFYf925VhdGCYMr0Pf9mhmXnIAVtMCydW8Rszhs3wPmkq1JPCgSzKFj5gdBjUAl3k5fuBUCiwKpm7OaHfTsiam~rN4XxjbCOX4YFkBmNLeSS2oL8KDArx-IPPeZgQN9XYNCB6G0jGI65ioZjARSjeJMXvmml-~HyPvS3u6bRG48h-hJonslgKeuAG2B~9r-UYPgyFJ1hCRg__",
        heading: "Potty",
        para: "Minimalist flower pot",
        current: "Rp 2.500.00",
        original: "Rp 14.000.000",
        img1: "https://images.unsplash.com/photo-1560449752-3fd4bdbe7df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
        img2: "https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
        img3: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8",
        img4: "https://images.unsplash.com/photo-1653972233678-5d1c28d2a99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8"
    }

]

// Array of Objects End


const AsgaardSofa = () => {

const result = useParams();
console.log(result.id)

const singleProduct = products.find((item) => item.id === result.id)

    return (
        <div className='w-full h-[850px]'>
            <div className='flex gap-16 pt-20 pl-12 w-[1200px] h-[750px]'>
                <div className='flex gap-4 w-[550px] h-[500px]'>
                    <div className='w-[80px] h-[420px] space-y-4'>
                        <div className='w-[80px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center'>
                            <img className='w-full h-full object-cover rounded-[10px]' src={singleProduct.img1} alt="" />
                        </div>
                        <div className='w-[80px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center'>
                            <img className='w-full h-full object-cover rounded-[10px]' src={singleProduct.img2} alt="" />
                        </div>
                        <div className='w-[80px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center'>
                            <img className='w-full h-full object-cover rounded-[10px]' src={singleProduct.img3} alt="" />
                        </div>
                        <div className='w-[80px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex justify-center items-center'>
                            <img className='w-full h-full object-cover rounded-[10px]' src={singleProduct.img4} alt="" />
                        </div>

                    </div>

                    <div className='w-[423px] h-[500px] bg-[#F9F1E7] rounded-[10px] overflow-hidden'>
                        <img className='w-full h-full object-cover transition transform duration-500 hover:scale-110' src={singleProduct.img} alt="" />
                    </div>

                </div>
                {/* LEFT-DIV-END */}

                <div className='w-[400px] h-[750px] space-y-7'>
                    <h1 className='font-poppins font-[400] text-[42px]'>{ singleProduct.heading }</h1>
                    <span className='font-poppins font-[500] text-[24px] text-[#9F9F9F]'>{ singleProduct.current }</span>
                    <br />
                    <span className='font-poppins font-[500] text-[24px] text-[#9F9F9F]'>{ singleProduct.original }</span>
                    <div className='flex gap-4'>
                        <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                            <path d="M36 1L39 7L45 7.75L40.88 12.37L42 19L36 16L30 19L31.13 12.37L27 7.75L33 7L36 1Z" fill="#FFC700" />
                            <path d="M62 1L65 7L71 7.75L66.88 12.37L68 19L62 16L56 19L57.13 12.37L53 7.75L59 7L62 1Z" fill="#FFC700" />
                            <path d="M88 1L91 7L97 7.75L92.88 12.37L94 19L88 16L82 19L83.13 12.37L79 7.75L85 7L88 1Z" fill="#FFC700" />
                            <path d="M111.156 7.0125L104.8 7.9375L109.4 12.4188L108.313 18.75L114 15.7625V1.25L111.156 7.0125Z" fill="#FFC700" />
                        </svg>
                        <div className="border-l-2 border-[#9F9F9F] h-[30px]"></div>
                        <span className='font-poppins font-[400] text-[13px] text-[#9F9F9F]'>5 Customer Review</span>
                    </div>
                    <p className='font-poppins font-[400] text-[13px]'>{ singleProduct.para }</p>

                    <div className='space-y-2'>
                        <span className='font-poppins font-[400] text-[#9F9F9F] text-[14px]'>Size</span>
                        <div className='flex gap-2'>
                            <div className='w-[30px] h-[30px] rounded-[5px] bg-[#B88E2F] text-white text-[13px] pt-1 pl-2'>L</div>
                            <div className='w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7]  text-[13px] pt-1 pl-2'>XL</div>
                            <div className='w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7]  text-[13px] pt-1 pl-2'>XS</div>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <span className='text-[14px] text-[#9F9F9F]'>Color</span>
                        <div className='flex gap-4'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="15" fill="#816DFA" />
                            </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="15" fill="black" />
                            </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="15" fill="#B88E2F" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex justify-center items-center gap-4 w-[110px] h-[50px] border-2 border-[#9F9F9F] rounded-[10px] '>
                            <span className='text-[16px]'>-</span>
                            <span className='text-[16px]'>1</span>
                            <span className='text-[16px]'>+</span>
                        </div>
                        <div className='flex justify-center items-center w-[150px] h-[50px] border-2 border-black rounded-[10px] '>
                            <span className='text-[15px] font-poppins font-[400]'>Add To Cart</span>
                        </div>
                        <div className='flex justify-center items-center gap-2  w-[150px] h-[50px] border-2 border-black rounded-[10px] '>
                            <span>+</span>
                            <span className='text-[15px] font-poppins font-[400]'>Compare</span>
                        </div>
                    </div>
                    <div className='border-b-2 border-[#D9D9D9]'></div>

                    <div className='space-y-4'>
                        <div>
                            <span className='text-[#9F9F9F]'>SKU</span><span className='text-[#9F9F9F] ml-16'>:SS001</span>
                        </div>
                        <div>
                            <span className='text-[#9F9F9F]'>Category</span><span className='text-[#9F9F9F] ml-7'>:Sofas</span>
                        </div>
                        <div>
                            <span className='text-[#9F9F9F]'>Tags</span><span className='text-[#9F9F9F] ml-[60px]'>:Sofa, Chair, Home, Shop</span>
                        </div>
                        <div>
                            <span className='text-[#9F9F9F]'>Share</span><span className='text-[#9F9F9F] space-x-2 ml-12'>:<svg className='inline' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_858)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_858">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg><svg className='inline' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 2.36504C0.833252 1.95882 0.994624 1.56923 1.28187 1.28199C1.56911 0.994748 1.9587 0.833376 2.36492 0.833376H17.6333C17.8346 0.833047 18.034 0.872428 18.22 0.949265C18.4061 1.0261 18.5752 1.13888 18.7176 1.28116C18.8601 1.42343 18.973 1.5924 19.0501 1.77838C19.1271 1.96437 19.1667 2.16373 19.1666 2.36504V17.6334C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5754 18.7183 18.7178C18.5759 18.8602 18.4069 18.9732 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.1271 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5755 1.02653 18.4065 0.949604 18.2206C0.87268 18.0347 0.833143 17.8354 0.833252 17.6342V2.36504ZM8.08992 7.82338H10.5724V9.07004C10.9308 8.35338 11.8474 7.70838 13.2249 7.70838C15.8658 7.70838 16.4916 9.13588 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0184 12.5508 10.0184C11.2883 10.0184 10.7633 10.9259 10.7633 12.3517V16.6067H8.08992V7.82338ZM3.50659 16.4925H6.17992V7.70838H3.50659V16.4917V16.4925ZM6.56242 4.84338C6.56746 5.07227 6.52673 5.29987 6.44262 5.5128C6.35851 5.72574 6.23271 5.91974 6.07261 6.0834C5.91251 6.24707 5.72133 6.3771 5.5103 6.46588C5.29926 6.55466 5.07262 6.60039 4.84367 6.60039C4.61472 6.60039 4.38808 6.55466 4.17704 6.46588C3.966 6.3771 3.77483 6.24707 3.61473 6.0834C3.45463 5.91974 3.32883 5.72574 3.24472 5.5128C3.16061 5.29987 3.11988 5.07227 3.12492 4.84338C3.13481 4.39409 3.32024 3.96654 3.64149 3.65228C3.96274 3.33803 4.39427 3.16206 4.84367 3.16206C5.29307 3.16206 5.7246 3.33803 6.04585 3.65228C6.3671 3.96654 6.55253 4.39409 6.56242 4.84338Z" fill="black" />
                                </svg><svg className='inline' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z" fill="black" />
                                </svg>
                            </span>
                        </div>

                    </div>

                </div>
            </div>
            <div className='border-b-2 mt-16 border-[#D9D9D9]'></div>

        </div>
    )
}

export default AsgaardSofa