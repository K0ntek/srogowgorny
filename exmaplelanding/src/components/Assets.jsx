import React from 'react'
import { FaStarOfLife } from "react-icons/fa6";

const Assets = () => {
  return (
    <div className=' w-full bg-zinc-950 text-white py-10'>
       <div className="max-w-[1500px] px-6 mx-auto">

                        <div className='md:w-1/3 relative mb-5 justify-center mx-auto'>
                            <FaStarOfLife className=' text-xl text-[rgba(160,86,42)]'/>
                            <h1 className=' font-mont font-[700] text-5xl text-center'>Inne materiały z nieruchomości</h1>
                        </div>

            <div className=" mt-10 max-w-[1000px] mx-auto">
            <iframe src="https://drive.google.com/file/d/16-4f94T7BQkKfDecx7SwZhEmglrvEBOv/preview" allow="autoplay" className=' w-full aspect-video rounded-3xl shadow-[0px_0px_20px_0px] shadow-[rgba(160,86,42,.2)]'></iframe>
                <p className=' ml-10 font-fig font-[700] text-[silver]'>Home Tour</p>
            </div>
       </div>
    </div>
  )
}

export default Assets