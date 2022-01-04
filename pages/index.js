import Head from 'next/head'
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
      <main className='overflow-hidden flex justify-between'>
        <hero className='flex justify-between mx-auto py-20 sm:py-28 px-10 '>
          <div className='left'>
            <h1 className='text-4xl whitespace-nowrap w-1/2 anim '>Hello I'm <span className='text-blue-500 font-bold whitespace-nowrap'>Wil</span>,</h1>
            <h1 className='text-4xl'>Full stack developer</h1>
            <div className="mt-5 flex gap-3">
            <a href="" className=" whitespace-nowrap border-solid border-white border-2  py-2 px-4 rounded flex justify-center">Contact me</a>
            <a href="" className="whitespace-nowrap bg-blue-500 text-white   py-2 px-4 rounded flex justify-center">Portfolio</a>
            </div>
          </div>
          <div className='right rotate-90 whitespace-nowrap  '> <span className='rotate-90 '><div className='animate-bounces'>scroll down &#8594;</div> </span></div>
        </hero>
      </main>
      <Portfolio/>
      

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
