import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { elastic as Menu } from 'react-burger-menu'

// Nav Toggle Button Control (Mobile)
// Purpose: Hide and show mobile navigation menu
//
// 1. Assign the navigation toggle button to "navToggle" variable
// 2. Assign the navigation content div to "navContent" variable
// 3. "toggle" function to hide/show the navigation content
// 4. Add click listener to navToggle to call toggle() on navContent when navToggle is clicked





const Nav = () => {
    const toggle = () => {
        setisopen(!isopen)
    }
    const [isopen, setisopen] = useState(false)
    console.log(isopen)
    return (
      <>
        <nav role="navigation"
        className="sticky flex justify-between items-center top-0 px-4  z-40 border-b border-gray-5 border-opacity-5 shadow-sm md:hidden py-3 bggraynother">

   
    <div>
      <Link href="/"><a >
    <Image src='/logo.png' width='68px' height='40.42px'/>







      </a>
      </Link></div>

    
    <button className="p-2" id="nav_open" onClick={toggle}>
      <svg className="pointer-events-none" width="19" height="15" viewBox="0 0 19 15" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <title>Open Menu</title>
        <path d="M1.97498 1.97498H17.975" stroke="white" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M1.97498 7.97498H17.975" stroke="white" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M1.97498 13.975H17.975" stroke="white" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>

   
    <ul id="nav_content"
      className={`text-white absolute top-0 h-screen w-full  transition-all duration-500 overflow-hidden bggraynother ${!isopen ? "right-full" : "right-0" }`}>


      <div className="absolute grid grid-cols-3 w-full place-items-center pt-4">
       
        <div className=" col-start-2 col-end-3">
          <Link href="/">
          <a  className="inline-block">
          <Image src='/logo.png' width='68px' height='40.42px'/>






          </a>
          </Link>
        </div>

        
        <button className="col-start-3 col-end-4 opacity-50 ml-8 p-2 border border-accent2 rounded-md" id="nav_close"  onClick={toggle}><svg
            className="pointer-events-none" 
            width=" 12" height="12" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15L1 1M1 15L15 1L1 15Z" stroke="#e0082d" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      
      <div className="text-4xl font-thin text-center h-full">
        <div className="flex flex-col items-center justify-center gap-y-12 mt-40">
          
          <div className="inline-block relative">
            <li className="relative z-10 text-4xl font-light"><Link href="/"><a onClick={toggle}
                className="inline-block h-full w-full">Home</a></Link>
            </li>
            <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
          </div>

         
          <div className="inline-block relative">
            <li className="relative z-10 text-4xl font-light"><Link href="/#portfolio"><a onClick={toggle}
                className="inline-block h-full w-full">Portfolio</a></Link>
            </li>
            <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
          </div>
          <div className="inline-block relative">
            <li className="relative z-10 text-4xl font-light"><Link href="/#skills"><a  onClick={toggle}
                className="inline-block h-full w-full">Skills</a></Link>
            </li>
            <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
          </div>
          
        </div>


        
        <div className="relative mt-24">

        
          <div className="relative opacity-75 pt-8 z-10">

           <Link href="https://www.linkedin.com/in/wil-st-louis-a2343413a/">
          <a  className="p-2 mx-2 inline-block"><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2857 0.5H1.70893C0.766071 0.5 0 1.30915 0 2.30246V23.6975C0 24.6908 0.766071 25.5 1.70893 25.5H22.2857C23.2286 25.5 24 24.6908 24 23.6975V2.30246C24 1.30915 23.2286 0.5 22.2857 0.5ZM7.25357 21.9286H3.69643V9.99777H7.25893V21.9286H7.25357ZM5.475 8.3683C4.33393 8.3683 3.4125 7.4029 3.4125 6.21987C3.4125 5.03683 4.33393 4.07143 5.475 4.07143C6.61071 4.07143 7.5375 5.03683 7.5375 6.21987C7.5375 7.40848 6.61607 8.3683 5.475 8.3683V8.3683ZM20.5875 21.9286H17.0304V16.125C17.0304 14.7411 17.0036 12.9609 15.1821 12.9609C13.3286 12.9609 13.0446 14.4676 13.0446 16.0246V21.9286H9.4875V9.99777H12.9V11.6272H12.9482C13.425 10.6897 14.5875 9.70201 16.3179 9.70201C19.9179 9.70201 20.5875 12.1741 20.5875 15.3884V21.9286V21.9286Z" fill="black"/>
</svg>
</a>
</Link>

             <Link href='https://www.youtube.com/channel/UCs3pKrxjH_m-ZTzDBX9Oriw'>
              <a className="p-2 mx-2 inline-block"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_23_4)">
<path d="M23.8425 6.97453C23.8425 4.86516 22.291 3.16828 20.3738 3.16828C17.7769 3.04687 15.1285 3 12.4219 3H11.5782C8.87816 3 6.22504 3.04687 3.62816 3.16875C1.71567 3.16875 0.164103 4.875 0.164103 6.98437C0.0469159 8.65266 -0.00277159 10.3214 4.09099e-05 11.9902C-0.00464659 13.6589 0.0484784 15.3292 0.159416 17.0011C0.159416 19.1105 1.71098 20.8214 3.62348 20.8214C6.3516 20.948 9.15004 21.0042 11.9953 20.9995C14.8453 21.0089 17.636 20.9495 20.3672 20.8214C22.2844 20.8214 23.836 19.1105 23.836 17.0011C23.9485 15.3277 24 13.6589 23.9953 11.9855C24.006 10.3167 23.955 8.64641 23.8425 6.97453ZM9.70316 16.5886V7.37766L16.5 11.9808L9.70316 16.5886Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_23_4">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
</a>
</Link>

               
               
          </div>

          
          <img className="absolute transform scale-150 top-20 z-0" src="/accent_bubble-contact.png"
            alt="Green decorative background" />

        </div>
      </div>

    </ul>

  </nav>

  

    
    <nav role="navigation"
      className=" md:sticky hidden px-8 md:flex md:justify-center md:gap-x-32 md:mt-4 xl:max-w-screen-2xl xl:mx-auto bggraynother">

     
      <div>
        <Link  href="/">
        <a className='inline-block'>
        <Image src='/logo.png' width='68px' height='40.42px'/>




        </a>
        </Link>
      </div>

    
      <div
        className="list-none flex justify-center items-center gap-x-8 text-xs opacity-60 font-medium xl:text-sm xl:gap-x-12 xl:pl-10">

        
        <div className="inline-block relative">
          <li className="relative">
            <Link href="/">
            <a  className="  under inline-block h-full w-full">Home</a>
            </Link></li>
        </div>

       
        <div className="inline-block relative">
          <li className="relative">
            <Link  href="/#portfolio"><a className=" under inline-block h-full w-full">Portfolio</a>
            </Link></li>
        </div>

       
        <div className="inline-block relative">
          <li className="relative"><Link href="/#skills" ><a className="  under inline-block h-full w-full">Skills</a></Link></li>
        </div>

        
       
        <div className="inline-block relative">
          <li className="relative"><Link href="/#contact"><a  className="  under inline-block h-full w-full">Contact</a></Link></li>
        </div>
      </div>

      
      <div className="flex gap-x-4 opacity-75">
        <Link href="mailto: wsaintlouis1@gmail.com">
        
        <a  className="p-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5V4.5ZM19.35 6L12 11.085L4.65 6H19.35ZM3 18V6.6825L11.5725 12.615C11.698 12.7021 11.8472 12.7488 12 12.7488C12.1528 12.7488 12.302 12.7021 12.4275 12.615L21 6.6825V18H3Z" fill="white"/>
</svg>
</a>
</Link>

        <Link href="https://www.linkedin.com/in/wil-st-louis-a2343413a/" >
        <a className="p-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2857 0.5H1.70893C0.766071 0.5 0 1.30915 0 2.30246V23.6975C0 24.6908 0.766071 25.5 1.70893 25.5H22.2857C23.2286 25.5 24 24.6908 24 23.6975V2.30246C24 1.30915 23.2286 0.5 22.2857 0.5ZM7.25357 21.9286H3.69643V9.99777H7.25893V21.9286H7.25357ZM5.475 8.3683C4.33393 8.3683 3.4125 7.4029 3.4125 6.21987C3.4125 5.03683 4.33393 4.07143 5.475 4.07143C6.61071 4.07143 7.5375 5.03683 7.5375 6.21987C7.5375 7.40848 6.61607 8.3683 5.475 8.3683V8.3683ZM20.5875 21.9286H17.0304V16.125C17.0304 14.7411 17.0036 12.9609 15.1821 12.9609C13.3286 12.9609 13.0446 14.4676 13.0446 16.0246V21.9286H9.4875V9.99777H12.9V11.6272H12.9482C13.425 10.6897 14.5875 9.70201 16.3179 9.70201C19.9179 9.70201 20.5875 12.1741 20.5875 15.3884V21.9286V21.9286Z" fill="white"/>
</svg></a>
</Link>

        <Link href="https://www.youtube.com/channel/UCs3pKrxjH_m-ZTzDBX9Oriw">
        <a  className="p-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_23_4)">
<path d="M23.8425 6.97453C23.8425 4.86516 22.291 3.16828 20.3738 3.16828C17.7769 3.04687 15.1285 3 12.4219 3H11.5782C8.87816 3 6.22504 3.04687 3.62816 3.16875C1.71567 3.16875 0.164103 4.875 0.164103 6.98437C0.0469159 8.65266 -0.00277159 10.3214 4.09099e-05 11.9902C-0.00464659 13.6589 0.0484784 15.3292 0.159416 17.0011C0.159416 19.1105 1.71098 20.8214 3.62348 20.8214C6.3516 20.948 9.15004 21.0042 11.9953 20.9995C14.8453 21.0089 17.636 20.9495 20.3672 20.8214C22.2844 20.8214 23.836 19.1105 23.836 17.0011C23.9485 15.3277 24 13.6589 23.9953 11.9855C24.006 10.3167 23.955 8.64641 23.8425 6.97453ZM9.70316 16.5886V7.37766L16.5 11.9808L9.70316 16.5886Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_23_4">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg></a>
</Link>
      </div>



    </nav>
    </>
    )
}

export default Nav
