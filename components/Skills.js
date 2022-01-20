import React from 'react'
import Image from 'next/image'
const Skills = () => {
    return (
        <div id="skills">
            <h1 className=' flex justify-center text-2xl sm:text-3xl mb-4 sm:mb-8'><span className='puesdo'>Skills</span></h1>
            <div  className='grid gap-3 justify-center  place-items-center grid-cols-3 p-4'>
            <div className='skills1' ><Image src='/skill1.svg' width='88px' height='24px' /></div>
            <div className='skills2'><Image src='/skill2.svg' width='88px' height='24px'/></div>
            <div className='skills3'><Image src='/skill3.svg' width='88px' height='24px'/></div>
            <div className='skills4'><Image src='/skill4.svg' width='88px' height='24px'/></div>
            <div className='skills5'><Image src='/skill5.svg' width='88px' height='24px'/></div>
            <div className='skills6'><Image src='/skill6.svg' width='88px' height='24px'/></div>
            <div className='skills7'><Image src='/skill7.svg' width='88px' height='24px'/></div>
            <div className='skills8'><Image src='/skill8.svg' width='88px' height='24px'/></div>
            <div className='skills9'><Image src='/skill9.svg' width='88px' height='24px'/></div>
            </div>
            
        </div>
    )
}

export default Skills
