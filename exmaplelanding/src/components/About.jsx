import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiWaveformThin } from "react-icons/pi";
import { FaStarOfLife } from "react-icons/fa";
import RoomsCarousel from './RoomsCarousel';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PiStarFourFill, PiStarFourThin } from "react-icons/pi";
import { LuWaves } from "react-icons/lu";
import rooms from '../rooms.json'
import { Link } from 'react-scroll';

const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1400, min: 750 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1
    }
  };

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.interiorHorizontalAnimation', {x: -200, opacity:0}, {x:0, opacity:1, duration:.8, stagger:.2,
       scrollTrigger:{trigger:'.interiorHorizontalAnimationWrapper', start: 'top 60%'}})

       gsap.fromTo('.interiorVerticalAnimation', {y: 200, opacity:0}, {y:0, opacity:1, duration:.8, stagger:.2,
        scrollTrigger:{trigger:'.interiorVerticalAnimationWrapper', start: 'top 60%'}})
  },[])

  const aboutPros = [
    {
      icon: <PiWaveformThin/>,
      desc: 'Na tarasie w sercu Bieszczad można poczuć prawdziwą harmonię z naturą, odpoczywając wśród zieleni i ciesząc się ciszą, jaką oferuje to urokliwe miejsce.'
    },
    {
      icon: <LuWaves/>,
      desc: 'Otoczony lasem, ten taras to idealne miejsce, by zrelaksować się na świeżym powietrzu, podziwiając piękno bieszczadzkich krajobrazów z wygodnych foteli.'
    },
    {
      icon: <PiStarFourThin/>,
      desc: 'Zanurz się w spokoju, jaki przynosi taras z widokiem na Bieszczady, gdzie można oderwać się od codziennych trosk i na chwilę zapomnieć o świecie, zanurzeni w naturze.'
    },
  ]


  return (
    <div id='interior' className=''>
        <div className='w-full min-h-screen bg-[rgb(238,238,238)] pt-[20px]'>
            <div className="max-w-[1500px] px-6 py-10 mx-auto">

              <div className="grid lg:grid-cols-[5fr_3fr] gap-10">

              <div className="grid gd-carousel-wrapper interiorHorizontalAnimationWrapper">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      autoPlaySpeed={5000}
                      autoPlay={true}
                      arrows={false }

                      className=" relative gd-carousel interiorHorizontalAnimation">
                        {rooms.map((roomElement, i) => {
                                return (
                                        <div className=' project group rounded-3xl relative overflow-hidden mx-[2px] transition-all duration-500'>
                                                <div style={{
                                                    background: `url(${roomElement.image})`,
                                                    aspectRatio: '16/9',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    backgroundPositionY:'50%'
                                                }} className=""></div>

                                                    <div className=" bg-black/20 w-full h-full z-40 transition-all absolute top-0 left-0">

                                                        <div className=" absolute bottom-2 left-2">
                                                                <h2 className="text-lg font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.room}</h2>
                                                        </div>

                                                        <div className=" absolute top-2 left-2">
                                                                <h2 className="text-md font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.size}</h2>
                                                        </div>

                                                        <PiWaveformThin className=" absolute top-2 right-2 text-white text-xl"/>

                                                    </div>
                                        </div>
                                )
                            })}
                    </Carousel>
                      <div className=' mt-5'>
                      {/* <h2 className='text-[rgba(255,110,58)] font-mont font-[600] text-2xl'>subheading</h2> */}
                          <h1 className='interiorHorizontalAnimation text-[#000000] w-full sm:w-4/5 lg:w-2/3 font-fig font-[400] text-5xl lg:text-6xl tracking-tight'>Zobacz oferowaną nieruchomość z bliska!</h1>
                          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4 interiorHorizontalAnimation">

                            <div className=' border-[1px] border-black rounded-full px-5 py-2 cursor-default hover:bg-zinc-950 hover:text-white transition-all duration-150'>
                                <p className=' font-mont font-[500]'>nowoczesny</p>
                            </div>

                            <div className=' border-[1px] border-black rounded-full px-5 py-2 cursor-default hover:bg-zinc-950 hover:text-white transition-all duration-150'>
                                <p className=' font-mont font-[500]'>wygodny</p>
                            </div>

                            <div className=' border-[1px] border-black rounded-full px-5 py-2 cursor-default hover:bg-zinc-950 hover:text-white transition-all duration-150'>
                                <p className=' font-mont font-[500]'>przestronny</p>
                            </div>

                          </div>
                      </div>
                    </div>


                  <div className='interiorVerticalAnimationWrapper'>
                      <div className=' relative top-[50%] translate-y-[-50%] md:w-1/2 lg:w-3/4'>
                          <p className=' text-start font-fig font-[600] text-lg interiorVerticalAnimation'>Dom jak i jego wnętrze jest wykonane z najwyższej jakości materiałów i świetnie komponujących się ze sobą kolorów- od bieli, po szarość oraz brąz, kończąc na czarnym akcencie.</p>
                      
                            <h1 className=' font-fig font-[600] text-4xl mt-2 interiorVerticalAnimation'>Bezpieczna lokalizacja z dala od zgiełku miasta.</h1>

                          <div className=' mt-5'>
                          <div className="flex mt-6 interiorVerticalAnimation">
                            <div>
                              {rooms.map((littleImage, i)=>(
                                <div className=' relative'>
                                  <div className=' absolute left-0 top-0 w-[50px]' style={{left: `calc(40px * ${i})`}}>
                                    <img src={littleImage.image} alt="littleImage" className='w-full aspect-square object-cover rounded-full border-[2px] border-[rgb(238,238,238)]' />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className=' relative top-[13px] text-[12px] font-mont font-[600] interiorVerticalAnimation' style={{marginLeft: `calc(45px*${rooms.length})`}}> wszystkie pomieszczenia</p>
                          </div>
                      </div>

                      </div>
                  </div>

              </div>

                <RoomsCarousel/>


              <div className=' sm:w-3/4 lg:w-2/3 mt-[20px] mx-auto' id='terrace'>
              <h1 className=' text-center font-fig font-[500] text-4xl mb-10 mt-[100px]'>Przestronny taras</h1>

               <div className=' space-y-6 md:space-y-0'>
                  <h1 className=' font-mont tracking-tight font-[700] text-5xl lg:text-4xl md:w-1/2 relative md:top-3'>Przestronny taras z widokiem na Bieszczady</h1>
                  <div className='md:w-1/2 relative md:left-1/2 md:-top-10'>
                        <div>
                          <PiStarFourFill className='text-[rgb(255,125,65)] text-xl'/>
                        </div>
                    <p className=' font-fig font-[500] text-xl'>Taras z widokiem na Bieszczady to miejsce, skąd można podziwiać malownicze, zielone wzgórza i lasy, oferujące spokojne i zapierające dech w piersiach krajobrazy. To idealna przestrzeń do relaksu w otoczeniu natury.</p>
                  </div>
                </div>
                {/* https://drive.google.com/file/d/1b7FpQWPMoAUB988vOkcxsmnjV2GDbs8Y */}

                  <p className=' font-mont font-[700] text-[12px] ml-6 relative top-4 md:-top-2'>kliknij/najedź myszką na zdjęcia !</p>
               <div className="grid grid-cols-[70%_30%] gap-2 hover:grid-cols-[30%_70%] transition-all duration-500 aspect-video">
               {/* https://drive.google.com/thumbnail?id=1-Vb9tqD1InJyFod2W5wSavBj0HhkwL6w&sz=w1000 */}
               <img src="https://drive.google.com/thumbnail?id=19_hhacgZoY6rRAgq-yuMg6j29x33PpgG&sz=w1000" alt="aboutImage" className=' shadow-[0px_0px_30px_0px] shadow-[rgba(104,54,32,.5)] mt-6 md:mt-0 rounded-3xl h-full object-cover'/>
               <img src="https://drive.google.com/thumbnail?id=1-Vb9tqD1InJyFod2W5wSavBj0HhkwL6w&sz=w1000" alt="aboutImage" className=' shadow-[0px_0px_30px_0px] shadow-[rgba(104,54,32,.5)] mt-6 md:mt-0 rounded-3xl h-full object-cover bg-[100%]'/>
               </div>

                  {/* <div className=" max-w-[400px] mx-auto text-center">
                  <h1 className=' mt-4 text-3xl font-fig font-[600] text-[rgb(155,83,50)] '>Lorem, ipsum dolor.</h1>
                  <p className=' mb-4 font-fig font-[600]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae.</p>
                  </div> */}

                  <p className=' mb-4 font-fig font-[600] text-end mr-4 md:mr-10 relative top-7 md:top-2'>Przestrzeń do relaksu w otoczeniu natury</p>

               <div className="grid grid-cols-[30%_70%] gap-2 hover:grid-cols-[70%_30%] mt-2 transition-all duration-500 aspect-video">
                    {/* https://drive.google.com/thumbnail?id=1-Vb9tqD1InJyFod2W5wSavBj0HhkwL6w&sz=w1000 */}
                    <img src="https://drive.google.com/thumbnail?id=1KB1mCOkstpvf8QDxErklxdpGVKpWTli4&sz=w1000" alt="aboutImage" className=' shadow-[0px_0px_30px_0px] shadow-[rgba(104,54,32,.5)] mt-6 md:mt-0 rounded-3xl h-full object-cover'/>
                    <img src="https://drive.google.com/thumbnail?id=1_00ycncsOEbndTmR8CCv0Zp2tH1vOD6V&sz=w1000" alt="aboutImage" className=' shadow-[0px_0px_30px_0px] shadow-[rgba(104,54,32,.5)] mt-6 md:mt-0 rounded-3xl h-full object-cover bg-[100%]'/>
               </div>
                
                <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-4">
                  {aboutPros.map((prosElement, i)=>(
                    <div className=' justify-center space-y-2 text-center'>
                      <div className=' mx-auto justify-center text-center w-fit'>
                        <h1 className=' mx-auto text-center text-4xl justify-center text-[rgb(104,54,32)]'>{prosElement.icon}</h1>
                      </div>

                      <p className=' mx-auto w-5/6 justify-center text-start text-md font-mont font-[600]'>{prosElement.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
              
            </div>
        </div>

    </div>
  )
}

export default About