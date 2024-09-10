import React from 'react'
import { PiWaveformThin } from "react-icons/pi";

const SectionOne = () => {

    const exchangeLink =()=>{

    }

  return (
    <div className=' w-full min-h-screen bg-zinc-950 text-white' id='AboutSectionOne'>
        <div className="max-w-[1500px] px-6 mx-auto py-[100px] ">
            <div className="w-full md:w-4/5 mx-auto space-y-10">
                    <h1 className=' text-center font-mont font-[600] text-5xl w-3/4 mx-auto'>Samowystarczalny i&nbsp;<span className=' text-[#9b9b9b]'>ekologiczny</span> dom.</h1>
                    <img src="https://drive.google.com/thumbnail?id=11mu_OgtblIviONsOxcwzX255gJdCeyux&sz=w1000" alt="image" className='w-full shadow-[0px_0px_10px_0px] shadow-[rgba(160,86,42,.2)] mx-auto aspect-square sm:aspect-[18/9] object-cover rounded-[40px]' />
                
                    <div className="flex justify-around">
                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont text-[silver] font-[500] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[#ff8f4e]'/>
                            <p>ekologia</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont text-[silver] font-[500] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[#ff8f4e]'/>
                            <p>nowoczesność</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont text-[silver] font-[500] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[#ff8f4e]'/>
                            <p>oszczędność</p>
                        </div>

                        {/* <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[300] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>prywatność</p>
                        </div> */}
                    </div>
                    
                    <div className=''>
                        <h1 className=' w-1/2 mx-auto mb-4 text-center font-mont font-[600] text-3xl text-white'>Jakie korzyści niesie ze sobą wybór domu zasilanego energią słoneczną?</h1>
                        <div className=' text-center sm:w-3/4 lg:w-1/2 font-mont font-[600] text-xl text-[silver]'>
                            <p> Energia słoneczna jest przekształcana w&nbsp;prąd elektryczny, który zasila nasze urządzenia. Dzięki temu możemy korzystać z&nbsp;energii bez obciążania sieci elektroenergetycznej. To nie tylko oszczędność, ale także redukcja emisji CO2. </p>
                        </div>
                        <div className=' text-center sm:w-3/4 lg:w-1/2 relative sm:left-1/4 mt-4 lg:left-1/3 font-mont font-[600] text-xl'>
                            <p>Ogrzewanie gazowe to kolejny element, który wpływa na komfort życia w&nbsp;naszym domu. W&nbsp;chłodniejsze dni zapewnia ciepło, a&nbsp;jego wydajność pozwala na oszczędności. Połączenie energii słonecznej i&nbsp;ogrzewania gazowego to harmonijne rozwiązanie, które łączy nowoczesność z&nbsp;ekologią. To krok, który przynosi korzyści zarówno nam, jak i&nbsp;środowisku naturalnemu.</p>
                        </div>
                    </div>
                
                {/* <div className="grid lg:grid-cols-2 gap-5 pt-[60px]">

                    <div>
                        <img src="https://drive.google.com/thumbnail?id=11mu_OgtblIviONsOxcwzX255gJdCeyux&sz=w1000" alt=" image" className=' aspect-square sm:aspect-video lg:aspect-[1/2] object-cover rounded-[40px]'/>
                    </div>

                    <div>
                        <div className=' space-y-2 relative top-[50%] translate-y-[-50%] '>
                            <h4 className=' font-mont font-[500] text-xl text-[rgb(209,189,182)]'>Fotowoltaika</h4>
                            <h3 className=' font-mont font-[500] text-3xl text-[#f1f1f1]'> Panele fotowoltaiczne źródłem czystej energii</h3>
                            <p className=' font-fig font-[600] text-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore ipsam a modi esse. Sit odit iure velit eum quaerat. Odio pariatur quas impedit et. Quia, maiores! Sint, unde quasi.</p>
                            <div className="ml-5 pt-3">
                                <button className=' bg-white text-black px-3 py-1 rounded-full font-mont font-[600] text-lg hover:tracking-widest transition-all duration-150'>contact me</button>
                            </div>
                        </div>
                    </div>

                </div> */}
         
            </div>
        </div>

    </div>
  )
}

export default SectionOne