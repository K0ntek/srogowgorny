import React from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import background from '../../public/background.png'

const Assets = () => {
  return (
    <div id='assets' className=' w-full bg-zinc-950 text-white relative py-10'>
      {/* <div className=' absolute top-0 left-0 w-full h-full ' style={{background: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPositionX:"80%", opacity: '2%' }}></div> */}
        <div className="z-[99]">
            <div className="max-w-[1500px] px-6 mx-auto z-90">

      <div className='md:w-1/3 relative mb-5 justify-center mx-auto'>
          <FaStarOfLife className=' text-xl text-[rgba(160,86,42)]'/>
          <h1 className=' font-mont font-[700] text-3xl sm:text-5xl text-center'>Inne materiały z nieruchomości</h1>
      </div>

      <div className=" mt-10 max-w-[1000px] mx-auto z-[99]">
      <iframe src="https://drive.google.com/file/d/16-4f94T7BQkKfDecx7SwZhEmglrvEBOv/preview" allow="autoplay" className=' w-full aspect-video rounded-3xl shadow-[0px_0px_20px_0px] shadow-[rgba(160,86,42,.2)]'></iframe>
      <p className=' text-center mt-3 font-fig font-[600] text-[#dddddd]'>Home Tour</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Assets