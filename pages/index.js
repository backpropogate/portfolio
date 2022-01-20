import Head from 'next/head'
import Contact from '../components/Contact'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto ">
      <Head>
        <title>Wil Full stack developer</title>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Nav/>
      <main className='overflow-hidden text-center flex justify-between   '>
        <hero className='flex justify-between py-20 sm:py-28 mx-auto  '>
          <div className='left'>
            <h1 className=' text-3xl sm:text-6xl  anim '>Hello I'm <span className='text-blue-500 font-bold whitespace-nowrap'>Wil</span>,</h1>
            <h1 className=' text-3xl sm:text-6xl'>Full stack developer</h1>
            <p className='text-slate-400 italic mt-4 sm:text-2xl'>&lt;p&gt;React Fullstack Developer   &lt;/p&gt; </p>
            <div className="mt-10 flex  justify-center gap-4">
              <Link href="/#contact">
            <a  className=" whitespace-nowrap border-solid border-white border-2  py-2 px-4 rounded flex justify-center">Contact me</a>
            </Link>
            <Link  href="/#portfolio">
            <a className="whitespace-nowrap bg-blue-500 text-white   py-2 px-4 rounded flex justify-center">Portfolio  &#8594;</a>
            </Link>
            

            </div>
            <div className=' rotate-90 mt-48 whitespace-nowrap   '> <span className='rotate-90 '><div className='animate-bounces'>scroll down &#8594;</div> </span></div>
          </div>
          
        </hero>
      </main>
      <Skills/>
      
      <Portfolio/>
      
      <Contact />
      

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href="/">
        <a
          className="flex items-center justify-center"
          
          target="_blank"
          rel="noopener noreferrer"
        >
         
           <Image src='/logo.png' width='68px' height='40.42px'/>
        </a>
        </Link>
      </footer>
    </div>
  )
}
