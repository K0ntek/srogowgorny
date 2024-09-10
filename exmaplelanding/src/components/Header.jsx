import React, { useEffect } from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import { PiApproximateEqualsBold } from "react-icons/pi";
import rooms from '../rooms.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiWaveformThin } from "react-icons/pi";
import gsap from 'gsap';
import { Link } from 'react-scroll';
import background from '../../public/background.png'
import { PiStarFourFill } from "react-icons/pi";

const Header = () => {
  
    const pros = [
        {
            prosElement: 'Metraż domu',
            prosNumber: '175m2'
        },
        {
            prosElement: 'Pomieszczenia',
            prosNumber: '7 pom.'
        },
        {
            prosElement: 'Cena',
            prosNumber: ' 1.699.000 PLN'
        },
    ]

    const responsive = {
        mobile: {
          breakpoint: { max: 3000, min: 0 },
          items: 1
        }
      };

      useEffect(()=>{
        gsap.fromTo('.headingTitle', {x: -200, opacity:0}, {x:0, opacity:1, delay:.2, duration:.8, stagger:.1})
        gsap.fromTo('.headingContent', {y: 200, opacity:0}, {y:0, opacity:1, delay:.2, duration:.8, stagger:.3})
        gsap.fromTo('.headingContentElement', {opacity:0}, { opacity:1, delay:.8, duration:.2, stagger:.2})
      },[])

    return (
    <div className=' pt-[100px] pb-[50px] relative' id='header'>
        <div className=' absolute top-0 left-0 w-full h-full' style={{background: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPositionX:"80%", opacity:'3%'}}></div>
        <div className="max-w-[1500px] mx-auto px-6">
        <div className="grid lg:grid-cols-[3fr_2fr] mb-5 gap-4">

<div className=' space-y-4 relative'>
{/* <p className=' relative top-7 font-mont font-[700] mt-1 text-[12px] lg:ml-[47px] text-[rgb(103,93,92)]'>cena: 1.700.000 PLN</p> */}
    <h1 className=' text-5xl md:text-8xl font-mont font-[700] text-center lg:text-start lg:ml-10 z-[98] headingTitle'> DOM U BRAM <span className='text-[rgb(232,208,205)]'>BIESZCZAD</span></h1>

        {/* <PiApproximateEqualsBold className=' text-4xl absolute right-[10%] top-[15%] z-[-1] text-[rgb(255,110,58)]'/>
        <PiApproximateEqualsBold className=' text-4xl absolute right-[20%] bottom-[20%] z-[-1] text-[rgb(219,219,219)]'/> */}

        <div>
            <div className=' px-6 sm:w-3/4 mx-auto lg:mx-0'>
                <p className='text-start text-md ml-6 font-fig font-[800] headingTitle'>Odkryj spokój wśród majestatycznych gór i&nbsp;dziewiczej przyrody. Każda chwila tutaj to zaproszenie do przygody w&nbsp;nieskażonym krajobrazie. Ucieknij tam, gdzie horyzonty sięgają nieskończoności, a&nbsp;każdy oddech przynosi czystość.</p>
                {/* text-[rgb(255,110,58)] */}
            </div>
        </div>
</div>

<div className='headingContent bg-white rounded-[40px] p-6 shadow-[0px_0px_10px_0px] shadow-black/20'>
    <div className="relative top-[50%] translate-y-[-50%]">
                <div className=' grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                    <div>
                        <div className=' rounded-3xl overflow-hidden relative top-[50%] translate-y-[-50%]'>
                            <PiApproximateEqualsBold className=' text-4xl headingContentElement'/>
                            <h1 className=' font-fig font-[700] text-2xl headingContentElement'>LUKSUSOWE WNĘTRZE</h1>
                            
                            <div className=' bg-[rgb(238,238,238)] shadow-[0px_0px_10px_0px] shadow-black/20 p-3 rounded-3xl mt-4'>
                                {pros.map((element, i)=>(
                                    <div className=' flex justify-between'>
                                        <p className=' font-fig font-[300] headingContentElement'>{element.prosElement}</p>
                                        <p className=' font-fig font-[600] headingContentElement'>{element.prosNumber}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=' relative'>
                    {/* <div className="absolute right-5 bottom-3 z-[99]">
                            <button className=' font-fig font-[600] z-[99] bg-[rgb(255,110,58)] text-[12px] rounded-full py-1 px-2 text-white'> see more</button>
                    </div> */}
                    <div className="grid relative top-[50%] translate-y-[-50%]">
            <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={5000}
            autoPlay={true}
            arrows={false}
            className=" relative">
                {rooms.map((roomElement, i) => {
                        return (
                                <div className='headingContentElement project group rounded-3xl relative overflow-hidden transition-all duration-500'>
                                    <div className=' overflow-hidden'>
                                        <div style={{
                                                background: `url(${roomElement.image})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                                backgroundPositionY:'50%'
                                            }} className="roomsImageBackgroundWrapper"></div>
                                    </div>

                                            <div className=" bg-black/20 w-full h-full z-40 transition-all absolute top-0 left-0">

                                                <div className=" absolute bottom-2 left-2">
                                                        <h2 className="text-lg font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.room}</h2>
                                                </div>

                                                <div className=" absolute top-2 left-2">
                                                        <h2 className="text-md font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.size}</h2>
                                                </div>

                                                <PiWaveformThin className=" absolute top-2 right-2 text-white text-4xl"/>
                                                <div className="absolute right-5 bottom-3 z-[99]">

                                                    <Link to='interior' spy={true} smooth={true}>
                                                    <button className=' font-fig font-[600] z-[99] bg-zinc-950 text-[12px] rounded-full py-1 px-2 text-white hover:tracking-wider transition-all duration-150'> sprawdź</button>
                                                    </Link>
                                                </div>

                                            </div>
                                </div>
                        )
                    })}
            </Carousel>
            </div>
                    </div>
                </div>
            </div>
        </div>

        </div>

        <div className="grid lg:grid-cols-[5fr_2fr] gap-2 md:gap-5">
        <div className='headingContent overflow-y-hidden rounded-[40px] md:rounded-[60px]  shadow-[0px_0px_10px_0px] shadow-black/20'>
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={3000}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            arrows={false}
            className=" h-full object-cover">
               <img src="https://drive.google.com/thumbnail?id=1rIcFYo9hrRdKaXCKrLgSUaspKOjvhFcw&sz=w1000" alt="headerImage" className=' aspect-square sm:aspect-auto sm:max-h-[700px] sm:min-h-[630px] h-full w-full object-cover relative top-[50%] translate-y-[-50%] '/>
               <img src="https://drive.google.com/thumbnail?id=1KSL5l-I_3SEdZWfZdWAUwBkKlU6GbaLq&sz=w1000" alt="headerImage" className=' aspect-square sm:aspect-auto sm:max-h-[700px] sm:min-h-[630px] h-full w-full object-cover relative top-[50%] translate-y-[-50%] '/>
               <img src="https://drive.google.com/thumbnail?id=1_00ycncsOEbndTmR8CCv0Zp2tH1vOD6V&sz=w1000" alt="headerImage" className=' aspect-square sm:aspect-auto sm:max-h-[700px] sm:min-h-[630px] h-full w-full object-cover relative top-[50%] translate-y-[-50%] '/>
               {/* <img src="https://drive.google.com/thumbnail?id=1JwEv5_GVI-WMV2zoWLS07Js-W2TNbRKK&sz=w1000" alt="headerImage" className=' aspect-square sm:aspect-video xl:aspect-auto h-full w-full object-cover relative top-[50%] translate-y-[-50%] '/> */}
            </Carousel>
        </div>

        <div className='sm:grid-cols-2 lg:grid-cols-1 grid gap-2 md:gap-5 h-full '>
            <div className='headingContent bg-gradient-to-r from-[rgb(238,238,238)] to-[rgb(247,247,247)]  rounded-[40px] p-6 min-h-[300px]'>
                        <FaStarOfLife className='my-2 text-xl '/>
                        {/* <h1 className=' font-mont font-[700] text-3xl'>Lorem, ipsum dolor.</h1> */}
                        <div>
                            <div className=''>
                                <p className=' font-fig font-[700] text-[22px] xl:text-2xl'>Idealne miejsce na relaks i&nbsp;podziwianie górskich krajobrazów.</p>
                                    <Link to='terrace' spy={true} smooth={true} offset={-60}>
                                            <button className=' font-fig font-[600] z-[99] bg-zinc-950 text-xl mt-5 rounded-full py-1 px-2 text-white hover:tracking-wider transition-all duration-150'> czytaj dalej</button>
                                    </Link>
                            </div>
                        </div>   
            </div>

            <div className='headingContent bg-gradient-to-r from-[#161616] to-black text-white rounded-[40px] p-6 min-h-[300px]'>
                <PiStarFourFill className='my-2 text-xl'/>
                {/* <h1 className=' font-mont font-[700] text-3xl upp'>Lorem, ipsum dolor.</h1> */}
                <p className=' font-fig font-[700] text-[22px] xl:text-2xl'>Detale tworzą rzeczy wielkie</p>
                    <Link to='AboutSectionTwo' spy={true} smooth={true} offset={-60}>
                        <button className=' font-fig font-[600] z-[99] bg-white text-xl mt-5 rounded-full py-1 px-2 text-zinc-950 hover:tracking-wider transition-all duration-150'> czytaj dalej</button>
                    </Link>
            </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Header