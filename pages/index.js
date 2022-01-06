import Head from 'next/head'
import Contact from '../components/Contact'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <div className="mx-auto ">
      <Head>
        <title>Wil Full stack developer</title>
        <link rel="icon" href="/stand.ico" />
      </Head>
      <Nav/>
      <main className='overflow-hidden text-center flex justify-between   '>
        <hero className='flex justify-between py-20 mx-auto  '>
          <div className='left'>
            <h1 className=' text-3xl sm:text-4xl  anim '>Hello I'm <span className='text-blue-500 font-bold whitespace-nowrap'>Wil</span>,</h1>
            <h1 className=' text-3xl sm:text-4xl'>Full stack developer</h1>
            <p className='text-slate-400 italic mt-4'>&lt;p&gt;React Fullstack Developer   &lt;/p&gt; </p>
            <div className="mt-10 flex  justify-center gap-2">
            <a href="" className=" whitespace-nowrap border-solid border-white border-2  py-2 px-4 rounded flex justify-center">Contact me</a>
            <a href="/#experience" className="whitespace-nowrap bg-blue-500 text-white   py-2 px-4 rounded flex justify-center">Portfolio  &#8594;</a>
            

            </div>
            <div className=' rotate-90 mt-48 whitespace-nowrap   '> <span className='rotate-90 '><div className='animate-bounces'>scroll down &#8594;</div> </span></div>
          </div>
          
        </hero>
      </main>
      <Portfolio/>
      <Contact />
      

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
