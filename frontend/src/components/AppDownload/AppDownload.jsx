import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div className="mx-auto my-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium " id='app-download'>
        <p className=' font-medium '>For Better Experience download <br /> Tomato App</p>
        <div className="flex justify-center gap-[max(2vw,10px)] mt-[40px]">
          <img className='w-[max(30vw,120px)] max-w-[180px] duration-500 cursor-pointer transition-transform transform hover:scale-105 ' src={assets.play_store} alt="" />
          <img className='w-[max(30vw,120px)] max-w-[180px] duration-500 cursor-pointer transition-transform transform hover:scale-105 ' src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload