import React from 'react'

const Description = () => {
    return (
        <div className=''>
            <div className='flex justify-center items-center m-auto gap-10 w-[650px] h-[40px] '>
                <span className='font-poppins font-[500] text-[24px]'>Description</span>
                <span className='font-poppins font-[400] text-[24px] text-[#9F9F9F]'>Additional Information</span>
                <span className='font-poppins font-[400] text-[24px] text-[#9F9F9F]'>Reviews [5]</span>
            </div>
            <div className='space-y-6 pt-12 pl-32 w-[1030px] h-[180px] '>
                <p className='font-poppins font-[400] text-[16px] text-[#9F9F9F]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className='font-poppins font-[400] text-[16px] text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>

            <div className='flex justify-center items-center m-auto gap-2 w-[1200px] h-[350px] mt-32'>
                <div className='w-[600px] h-[350px] bg-[#F9F1E7] rounded-lg '>
                    <img className='w-full h-full object-cover' src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLYtfnrRVIgKIq7Sf41RKmgYWVKS3VmtdV0dOJru-IfCjORYJkZ-LMwK8jhEK~z4fsE63Prf8fU8eFmjuHNzXq6Cmgg4HlDeM0sl4SfGY9mvSslkIYAlcpMjQjNw4LlOi2KIUMJJWP1pbezPvWwDK2Bc8yXCM7pzJxngFsS7LxX7Xip8~e7cc-pi1ck-oU-zPDSsY72NjQ2U8qoEkEZqXPPSkU6Om10vjgGr8CdRBT6rg9odq27K933kvtBwan6yyVR6M8xrGS~GwIOjppV7T4FKAoBNzDHs8-ZwCl38Ko3RCVvn-kjM8EM19iVcrJLBcnOgrWAdfvlrDL22jHbygA__" alt="" />

                </div>
                <div className='w-[600px] h-[350px] bg-[#F9F1E7] rounded-lg '>
                    <img className='w-full h-full object-cover' src="https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DUfTFSFu2TcTCMPx3Ek6Wcwd7D1wWn1fCYv-vNaf094DxZrAhqWgWfOYg0zkBBozyxnq1GXQA~h-mhyF8wHRmer9B8jwRyoMNU4B9NacYI-qI~jeoDsapnaALQInmfzsT1B~Ad-7QFiRIPS889AkP57oIZ36H0-tF6xGahNfd13zbPuwOm6Y6iUqD-iNDy8eUblZXZzQJf3AV5Atd6unefBrfK8Iv-0vfoxdFP4jzy1-ACbORjFE35Jw003~x62Z3ygDiixhELIe-GzNIUljxjDxqJhtt7l3stmQNP8lvEoI1e1MvoSVXsBaIqW472enKw0zJFpddGxw0nUeFXxpkw__" alt="" />
                </div>
            </div>
            <div className='border-b-2 w-full border-[#9F9F9F] pb-10'></div>
        </div>
    )
}

export default Description