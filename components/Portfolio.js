import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Portfolio = () => {
    return (
        <section id="portfolio" className=" text-black px-10 pt-20 pb-24 bggraynother md:px-20 lg:px-40 lg:pt-48">

      
      <div className="relative rounded-3xl py-8 shadow-lg overflow-hidden bg-white md:py-16 xl:max-w-screen-xl xl:mx-auto">

        
        <div className="relative text-center px-2">
          <h2 className="relative text-2xl font-bold z-10 md:text-3xl lg:text-4xl text-black">
            Past Projects</h2>
          

          
          <img className="absolute w-32 top-0 left-2/3 lg:transform lg:scale-175" src="/accent_bubble-3.png
          "
            alt="A green decorative bubble."/>
        </div>

        
        <div className="px-6 py-4 md:mx-8 lg:mx-16">

          
          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:mt-24 lg:mb-32">

           
            <div className="lg:relative lg:pb-2/3">
              <img className="shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute"
                src="/project-1.png" alt="Example page from project"/>
            </div>

           
            <div className="lg:h-full lg:flex lg:items-center">
              <div className="lg:grid lg:auto-rows-min">

               
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">DJ Duson</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

               
                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">DJ Duson needed 
                a clean, simple, but eyecatching website in order to sell the beats that he produces. The embeded player is from soundgee which has a pretty straightforward user interface to manage his beats.</p>

                
                <span className="inline-block italic opacity-80 text-sm mb-8">Built using Html5, CSS3, & Vanilla Javascript</span>
                <br className="lg:hidden"/>

                <Link href="https://www.djduson.com/">
                <a 
                  className=" inline-block uppercase font-medium bg-accent px-4 py-2 text-white bg-blue-500 rounded shadow-md ml-auto lg:ml-0 lg:w-max"><span
                    className="text-sm opacity-75">Visit Project</span></a></Link>
              </div>
            </div>
          </div>

          
          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">

            
            <div className="lg:relative lg:pb-2/3 lg:col-start-2">
              <img className="shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute z-10"
                src="/project-2.png" alt="Example page from project"/>
              
            </div>

            
            <div className="lg:h-full lg:flex lg:items-center lg:row-start-1">
              <div className="lg:grid lg:auto-rows-min">

                
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">Keanda Designs</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                
                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">Keanda is a digital artist and wanted to revamp her old website and move away from wix, after a few consultations we settled on using Sanity.io as the CMS due to its ease of use, and nextjs on the frontend due to its performance, and SEO benefits. </p>

               
                <span className="inline-block italic opacity-80 text-sm mb-8">Built using Nextjs(React Js Framework), Sanity.io(groq), & Tailwind CSS</span>
                <br className="lg:hidden"/>

                <Link  href="https://designsbykeanda.com/">
                <a
                  className=" inline-block uppercase font-medium bg-accent px-4 py-2 text-white bg-blue-500 rounded shadow-md ml-auto lg:ml-0 lg:w-max"><span
                    className="text-sm opacity-75">Visit Project</span></a></Link>
              </div>
            </div>
          </div>

          
          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">

           
            <div className="lg:relative lg:pb-2/3">
              <img className="shadow-lg md:w-full lg:h-full lg:object-cover  lg:absolute"
                src="/project-3.png" alt="Example page from project"/>
            </div>

            
            <div className="lg:h-full lg:flex lg:items-center">
              <div className="lg:grid lg:auto-rows-min">

               
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">Translate IO</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                
                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">Translate Io is a SPA(single page application) built using Nextjs that can translate over 20 different languages.  I decided to use Axios over plain fetch for this project because of its ease of use and abstractions. </p>

                
                <span className="inline-block italic opacity-80 text-sm mb-8">Built using NextJs(ReactJs Framework), Axios(Http client), libretranslate api, & CSS3</span>
                <br className="lg:hidden"/>

                <Link  href="https://www.translateio.com/">
                <a
                  className="animate-wiggle inline-block uppercase font-medium bg-accent px-4 py-2 text-white bg-blue-500 rounded shadow-md ml-auto lg:ml-0 lg:w-max"><span
                    className="text-sm opacity-75">Visit Project</span></a></Link>
              </div>
            </div>
          </div>
          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">

           
            <div className="lg:relative lg:pb-2/3">
              <img className="shadow-lg md:w-full lg:h-full lg:object-cover  lg:absolute"
                src="/project-4.png" alt="Example page from project"/>
            </div>

            
            <div className="lg:h-full lg:flex lg:items-center">
              <div className="lg:grid lg:auto-rows-min">

               
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">Simple Skin (Headless Eccomerce)</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                
                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">Simple skin is a headless ecommerce store that uses NextJs on the frontend and shopify on the backend in order to manage products. </p>

                
                <span className="inline-block italic opacity-80 text-sm mb-8">Built using NextJs(ReactJs Framework), Shopify Api,  & TailwindCSS</span>
                <br className="lg:hidden"/>

                <Link href="https://simpleskin.vercel.app/">
                <a 
                  className="animate-wiggle inline-block uppercase font-medium bg-accent px-4 py-2 text-white bg-blue-500 rounded shadow-md ml-auto lg:ml-0 lg:w-max"><span
                    className="text-sm opacity-75">Visit Project</span></a></Link>
              </div>
            </div>
          </div>

        </div>

 

      </div>


    </section>
            
       
    )
}

export default Portfolio
