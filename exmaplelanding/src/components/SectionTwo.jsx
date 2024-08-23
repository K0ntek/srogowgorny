import React from 'react'
import { PiWaveformThin } from "react-icons/pi";
import { FaStarOfLife } from "react-icons/fa6";
import background from '../../public/background.png'

const SectionTwo = () => {

        const detailsElements = [
            {
                imageOne: 'https://drive.google.com/thumbnail?id=1nYzjBLYLpwH7Q8chkJKuJJFW2u_X_ggu&sz=w1000',
                imageTwo: 'https://drive.google.com/thumbnail?id=16oGM4L0733ZsDxFe_zHSfIgmc3YEUuLD&sz=w1000',
                imageThree: 'https://drive.google.com/thumbnail?id=1NVp7GuZjeSbTZADlV01UrX8kdxgwzYKt&sz=w1000',
                description: 'Automatyczna brama wjazdowa na posesję',
            },
            {
                imageOne: 'https://drive.google.com/thumbnail?id=1m_kTPSEI4_Arx_4QxYysKDOPE2DoIRmF&sz=w1000',
                imageTwo: 'https://drive.google.com/thumbnail?id=1dVFi4kp1UCE5A0t2JNeW7h_JiZiOkl4Y&sz=w1000',
                imageThree: 'https://drive.google.com/thumbnail?id=1bNMqAMDzr0oygkiep3UjLqThgDtJEwws&sz=w1000',
                description: 'Zautomatyzowane systemy do fotowoltaiki, drzwi i bramy garażowej',
            },
            {
                imageOne: 'https://drive.google.com/thumbnail?id=1UDOVclhLFq3a-rUSQSGIVhlDsWpEHRXU&sz=w1000',
                imageTwo: 'https://drive.google.com/thumbnail?id=1WrZp5JG0AjX9tVJtp42XN9C5zUtbAj0r&sz=w1000',
                imageThree: 'https://drive.google.com/thumbnail?id=1Iub1f4OoQwJlQHpgHnC_rWaQ9r_uxMa6&sz=w1000',
                description: 'Najwyższej jakości meble domowe',
            },
            {
                imageOne: 'https://drive.google.com/thumbnail?id=1ki73c0XHD8Zc97y3stes0DwFDQEkVvKZ&sz=w1000',
                imageTwo: 'https://drive.google.com/thumbnail?id=1w5xzT8v6JOtepeVHRlq9UZ_aolW9s_dL&sz=w1000',
                imageThree: 'https://drive.google.com/thumbnail?id=16-cnzQSzbhEao2mPwDOJSvVn_aKgw_EC&sz=w1000',
                description: 'Strefa relaksu i odpoczynku- przytulny kominek, sauna oraz jaccuzi',
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
                        <p className=' font-fig font-[600] text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, mollitia deserunt? Voluptatibus ullam dolores nobis doloribus nostrum, distinctio consectetur minima.</p>
                    </div>


                <div className='  w-[90%] md:w-3/4 text-center pt-10'>
                        <p className=' font-fig font-[600] text-xl text-[rgba(173,89,40)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, mollitia deserunt? Voluptatibus ullam dolores nobis doloribus nostrum, distinctio consectetur minima.</p>
                    </div>

                </div>


                    <div className=" grid gap-[100px]">
                    {detailsElements.map((detail, i)=>(
                        <div className=' relative max-w-[1000px] mx-auto'>
                            <div className="grid grid-cols-2 gap-3 aspect-video">

                                <div className="w-full h-full shadow-[0px_0px_30px_0px] shadow-[rgba(74,47,32,.5)] relative -top-5 rounded-3xl overflow-hidden" style={{left: `${i%2==0 ? '-10px' : 0}`}}>
                                    <img src={detail.imageOne} alt="image"  className=' h-full object-cover'/>
                                </div>

                                <div className="grid gap-3 h-full">

                                        <img src={detail.imageTwo} alt="image" className=' relative shadow-[0px_0px_30px_0px] shadow-[rgba(74,47,32,.5)] rounded-3xl h-full aspect-[20/9] object-cover ' style={{left: `${i%2!=0 ? '20px' : '10px'}`}}/>

                                        <img src={detail.imageThree} alt="image" className=' relative top-2 shadow-[0px_0px_30px_0px] shadow-[rgba(74,47,32,.5)] rounded-3xl h-full aspect-[4/3] object-cover ' />

                                </div>

                            </div>
                            <p className=' mt-5 px-6 font-fig font-[700] text-2xl text-center'>{detail.description}</p>
                        </div>
                    ))}
                    </div>


        </div>

    </div>
  )
}

export default SectionTwo