import React from 'react'
import Brand1 from '../../assets/download.svg'
import Brand2 from '../../assets/download (1).svg'
import Brand3 from '../../assets/4-giEUXdG0.svg'
import Brand4 from '../../assets/3-eN47R1Tj.svg'
import Brand5 from '../../assets/download (3).svg'
const Brand = () => {
  return (
    <>
    <div className='conatainer m-12'>
    <h1 className='text-center'>Powering next-gen companies</h1>
  <div className='flex flex-wrap items-center justify-evenly gap-3 py-6 md:px-3'> 
    <img src={Brand1} alt="" />
    <img src={Brand2} alt="" />
    <img src={Brand3} alt="" />
    <img src={Brand4 } alt="" />
    <img src={Brand5} alt="" />
  </div>
    </div>
    </>
  )
}

export default Brand