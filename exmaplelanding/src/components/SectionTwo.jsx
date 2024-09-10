import React from 'react'
import { PiWaveformThin } from "react-icons/pi";
import { FaStarOfLife } from "react-icons/fa6";
import background from '../../public/background.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SectionTwo = () => {

        // const detailsElements = [
        //     {
        //         imageOne: 'https://drive.google.com/thumbnail?id=1nYzjBLYLpwH7Q8chkJKuJJFW2u_X_ggu&sz=w1000',
        //         imageTwo: 'https://drive.google.com/thumbnail?id=16oGM4L0733ZsDxFe_zHSfIgmc3YEUuLD&sz=w1000',
        //         imageThree: 'https://drive.google.com/thumbnail?id=1NVp7GuZjeSbTZADlV01UrX8kdxgwzYKt&sz=w1000',
        //         description: 'Automatyczna brama wjazdowa na posesję',
        //     },
        //     {
        //         imageOne: 'https://drive.google.com/thumbnail?id=1m_kTPSEI4_Arx_4QxYysKDOPE2DoIRmF&sz=w1000',
        //         imageTwo: 'https://drive.google.com/thumbnail?id=1dVFi4kp1UCE5A0t2JNeW7h_JiZiOkl4Y&sz=w1000',
        //         imageThree: 'https://drive.google.com/thumbnail?id=1bNMqAMDzr0oygkiep3UjLqThgDtJEwws&sz=w1000',
        //         description: 'Zautomatyzowane systemy do fotowoltaiki, drzwi i bramy garażowej',
        //     },
        //     {
        //         imageOne: 'https://drive.google.com/thumbnail?id=1UDOVclhLFq3a-rUSQSGIVhlDsWpEHRXU&sz=w1000',
        //         imageTwo: 'https://drive.google.com/thumbnail?id=1WrZp5JG0AjX9tVJtp42XN9C5zUtbAj0r&sz=w1000',
        //         imageThree: 'https://drive.google.com/thumbnail?id=1Iub1f4OoQwJlQHpgHnC_rWaQ9r_uxMa6&sz=w1000',
        //         description: 'Najwyższej jakości meble domowe',
        //     },
        //     {
        //         imageOne: 'https://drive.google.com/thumbnail?id=1ki73c0XHD8Zc97y3stes0DwFDQEkVvKZ&sz=w1000',
        //         imageTwo: 'https://drive.google.com/thumbnail?id=1w5xzT8v6JOtepeVHRlq9UZ_aolW9s_dL&sz=w1000',
        //         imageThree: 'https://drive.google.com/thumbnail?id=16-cnzQSzbhEao2mPwDOJSvVn_aKgw_EC&sz=w1000',
        //         description: 'Strefa relaksu i odpoczynku- przytulny kominek, sauna oraz jaccuzi',
        //     },
        // ]

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1200 },
              items: 2
            },
            tablet: {
              breakpoint: { max: 1200, min: 700 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 700, min: 0 },
              items: 1
            }
          };

        const detailsElements = [
            {
                image: 'https://drive.google.com/thumbnail?id=16oGM4L0733ZsDxFe_zHSfIgmc3YEUuLD&sz=w1000',
                description: 'Automatyczna brama wjazdowa na posesję',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1m_kTPSEI4_Arx_4QxYysKDOPE2DoIRmF&sz=w1000',
                description: ' Falownik do fotowoltaiki',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1dVFi4kp1UCE5A0t2JNeW7h_JiZiOkl4Y&sz=w1000',
                description: ' Drzwi otwierane za pomocą odcisku palca',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1bNMqAMDzr0oygkiep3UjLqThgDtJEwws&sz=w1000',
                description: ' Automatyczna brama garażu',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1WrZp5JG0AjX9tVJtp42XN9C5zUtbAj0r&sz=w1000',
                description: ' Akcesoria kuchenne blum',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1Iub1f4OoQwJlQHpgHnC_rWaQ9r_uxMa6&sz=w1000',
                description: ' Tip-on',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1UsR-baL4hVYlS39OA7bPp6iXKknoCzP1&sz=w1000',
                description: ' Okno przesuwne HS',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=173EX4_PNyz74xzICoIlrdQig02h5ZtaD&sz=w1000',
                description: ' AGD KERNAU',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1qUTkkB7jXKtHW07E-7ib8BzrgierD3HQ&sz=w1000',
                description: ' Dębowy stół z metalowym stelażem',
            },
            {
                image: 'https://drive.google.com/thumbnail?id=1ZHGPR5D_42DD7BPXJNHaPFwzD8cq0vv2&sz=w1000',
                description: ' Łóżko zrobione z palet',
            },
        ]

  return (
    <div className=' w-full bg-[#f3f3f3] relative'  id='AboutSectionTwo'>
        <div className=' absolute top-0 left-0 w-full h-full' style={{background: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPositionX:"80%", opacity:'4%'}}></div>
        <div className=' relative p-6 max-w-[1500px] mx-auto'>
                {/* <h1 className=' text-center font-mont font-[600] text-4xl uppercase'>Lorem ipsum dolor sit.</h1> */}

                <div className=' md:w-2/3 mx-auto my-10 grid'>

                    <div className='md:w-3/4 relative mb-5'>
                        <FaStarOfLife className=' text-xl text-[rgba(160,86,42)] absolute'/>
                        <h1 className=' font-mont font-[700] text-5xl mt-10 '>Detale tworzą rzeczy wielkie.</h1>
                    </div>

                    <div className=' w-[90%] md:w-3/4 relative left-[10%] md:left-1/4 md:ml-5 text-center'>
                        {/* <PiWaveformThin className=' ml-5 text-5xl text-[rgba(160,86,42)]'/> */}
                        <p className=' font-fig font-[600] text-xl text-[rgba(173,89,40)]'>Każdy szczegół ma znaczenie – to one decydują o&nbsp;doskonałości. Staranność w&nbsp;każdym etapie tworzenia składają się na efekt, który wyróżnia się jakością i&nbsp;elegancją.</p>
                    </div>


                {/* <div className='  w-[90%] md:w-3/4 text-center pt-10'>
                        <p className=' font-fig font-[600] text-xl text-[rgba(173,89,40)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, mollitia deserunt? Voluptatibus ullam dolores nobis doloribus nostrum, distinctio consectetur minima.</p>
                    </div> */}

                </div>

                   <div className="relative">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            arrows={true}
                            swipeable={true}
                            draggable={true}
                            renderDotsOutside={true}
                            showDots={true}
                            className=" rounded-[40px] h-full">
                                {detailsElements.map((detail, i)=>(
                                    <div className=''>
                                        <div key={i} className='aspect-square overflow-hidden md:aspect-video h-full rounded-[40px] project group relative transition-all mx-2 duration-500'
                                        style={{
                                        background: `url(${detail.image})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPositionY:'70%',
                                        backgroundPositionX:'50%'}} 
                                        >
                                    
                                    <div className=' absolute bottom-0 left-0 bg-gradient-to-t from-zinc-950 to-transparent w-full h-full'>
                                        <p className=' font-mont font-[700] bg-gradient-to-r from-[rgb(187,187,187)] to-[rgb(255,255,255)]
                                                                 inline-block text-transparent bg-clip-text ml-10 bottom-2 absolute uppercase'>{detail.description}</p>
                                    </div>

                                    </div>
                                    </div>
                                ))}
                        </Carousel>
                   </div>



        </div>

    </div>
  )
}

export default SectionTwo