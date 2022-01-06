import React from 'react'
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

(function buttonControlInit() {
    const navOpen = document.querySelector('#nav_open');
    const navClose = document.querySelector('#nav_close');
    const navContent = document.querySelector('#nav_content');
  
    // Toggles menu depending on id of event target ("nav_open" or "nav_close")
    function toggleNav(e) {
      if (e.target.id === 'nav_open') {
        navContent.classList.add('right-0');
        navContent.classList.remove('right-full');
      } else {
        navContent.classList.remove('right-0');
        navContent.classList.add('right-full');
      }
    }
  
    [navOpen, navClose].map((button) =>
      button.addEventListener('click', toggleNav)
    );
  })();
  
const Nav = () => {
    const [isopen, setisopen] = useState(false)
    return (
      <>
        <nav role="navigation"
        className="sticky flex justify-between items-center top-0 px-4  z-40 border-b border-gray-5 border-opacity-5 shadow-sm md:hidden py-3">

   
    <div><a href="/">
        <svg className="w-24" width="83" height="29" viewBox="0 0 83 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>FTM Logo</title>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M29.3235 16.8328C29.1582 19.1573 29.0137 22.0352 27.0771 23.3267C25.0095 24.7056 22.1351 22.5016 19.7555 23.2137C17.7533 23.8129 16.9586 27.0745 14.8716 26.9794C12.8414 26.8869 12.0663 24.178 10.5749 22.7954C9.24317 21.561 7.70495 20.6661 6.54936 19.2648C5.04642 17.4423 3.09917 15.7305 2.81316 13.3833C2.51302 10.9201 3.36085 8.2717 4.98102 6.39379C6.57907 4.54153 9.21741 4.19227 11.4989 3.31587C13.7168 2.46388 13.4649 2.04997 15.661 2.9545C18.0017 3.91857 19.5183 6.88348 22.5528 7.12233C24.164 8.60452 26.6463 8.59899 28.0023 10.3186C29.3969 12.087 29.4834 14.584 29.3235 16.8328Z"
            fill="black" fill-opacity="0.42" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M27.1993 15.5102C27.034 17.8347 26.8895 20.7127 24.9529 22.0042C22.8853 23.3831 20.0109 21.179 17.6313 21.8911C15.6291 22.4903 14.8345 25.7519 12.7474 25.6568C10.7172 25.5643 9.94209 22.8554 8.45067 21.4729C7.11898 20.2384 5.58075 19.3436 4.42517 17.9422C2.92223 16.1197 2.15777 13.3114 1.87177 10.9642C1.57162 8.50096 2.805 7.67767 4.42517 5.79976C6.02321 3.94749 7.09322 2.86969 9.37468 1.99329C11.5926 1.14131 13.9364 1.08875 16.1326 1.99329C18.4733 2.95735 18.5646 4.08493 20.4286 5.79975C22.0398 7.28194 24.5221 7.27642 25.8781 8.99599C27.2727 10.7644 27.3592 13.2614 27.1993 15.5102Z"
            fill="#0CFAB7" />
          <path
            d="M45.0293 16.3359H39.502V22H36.0742V7.78125H45.5859V10.4277H39.502V13.6992H45.0293V16.3359ZM61.3691 10.4277H57.1016V22H53.6738V10.4277H49.4844V7.78125H61.3691V10.4277ZM70.3262 7.78125L73.5 17.6738L76.6641 7.78125H81.1758V22H77.7383V18.6797L78.0703 11.8828L74.6328 22H72.3672L68.9199 11.873L69.252 18.6797V22H65.8242V7.78125H70.3262Z"
            fill="#777676" />
        </svg>

      </a></div>

    
    <button className="p-2" id="nav_open">
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
      className={`absolute top-0 h-screen w-full right-full transition-all duration-500 overflow-hidden bg-white { }`}>


      <div className="absolute grid grid-cols-3 w-full place-items-center pt-4">
       
        <div className=" col-start-2 col-end-3">
          <a href="/" className="inline-block">
            <svg className="w-24" width="83" height="29" viewBox="0 0 83 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>FTM Logo</title>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M29.3235 16.8328C29.1582 19.1573 29.0137 22.0352 27.0771 23.3267C25.0095 24.7056 22.1351 22.5016 19.7555 23.2137C17.7533 23.8129 16.9586 27.0745 14.8716 26.9794C12.8414 26.8869 12.0663 24.178 10.5749 22.7954C9.24317 21.561 7.70495 20.6661 6.54936 19.2648C5.04642 17.4423 3.09917 15.7305 2.81316 13.3833C2.51302 10.9201 3.36085 8.2717 4.98102 6.39379C6.57907 4.54153 9.21741 4.19227 11.4989 3.31587C13.7168 2.46388 13.4649 2.04997 15.661 2.9545C18.0017 3.91857 19.5183 6.88348 22.5528 7.12233C24.164 8.60452 26.6463 8.59899 28.0023 10.3186C29.3969 12.087 29.4834 14.584 29.3235 16.8328Z"
                fill="black" fill-opacity="0.42" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M27.1993 15.5102C27.034 17.8347 26.8895 20.7127 24.9529 22.0042C22.8853 23.3831 20.0109 21.179 17.6313 21.8911C15.6291 22.4903 14.8345 25.7519 12.7474 25.6568C10.7172 25.5643 9.94209 22.8554 8.45067 21.4729C7.11898 20.2384 5.58075 19.3436 4.42517 17.9422C2.92223 16.1197 2.15777 13.3114 1.87177 10.9642C1.57162 8.50096 2.805 7.67767 4.42517 5.79976C6.02321 3.94749 7.09322 2.86969 9.37468 1.99329C11.5926 1.14131 13.9364 1.08875 16.1326 1.99329C18.4733 2.95735 18.5646 4.08493 20.4286 5.79975C22.0398 7.28194 24.5221 7.27642 25.8781 8.99599C27.2727 10.7644 27.3592 13.2614 27.1993 15.5102Z"
                fill="#0CFAB7" />
              <path
                d="M45.0293 16.3359H39.502V22H36.0742V7.78125H45.5859V10.4277H39.502V13.6992H45.0293V16.3359ZM61.3691 10.4277H57.1016V22H53.6738V10.4277H49.4844V7.78125H61.3691V10.4277ZM70.3262 7.78125L73.5 17.6738L76.6641 7.78125H81.1758V22H77.7383V18.6797L78.0703 11.8828L74.6328 22H72.3672L68.9199 11.873L69.252 18.6797V22H65.8242V7.78125H70.3262Z"
                fill="#777676" />
            </svg>
          </a>
        </div>

        
        <button className="col-start-3 col-end-4 opacity-50 ml-8 p-2 border border-accent2 rounded-md" id="nav_close"><svg
            className="pointer-events-none" 
            width=" 12" height="12" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15L1 1M1 15L15 1L1 15Z" stroke="#e0082d" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      
      <div className="text-4xl font-thin text-center h-full">
        <div className="flex flex-col items-center justify-center gap-y-12 mt-40">
          
          <div className="inline-block relative">
            <li className="relative z-10 text-4xl font-light"><a href="services.html"
                className="inline-block h-full w-full">Services</a>
            </li>
            <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
          </div>

         
          <div className="inline-block relative">
            <li className="relative z-10 text-4xl font-light"><a href="contact.html"
                className="inline-block h-full w-full">Contact</a>
            </li>
            <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
          </div>
        </div>


        
        <div className="relative mt-24">

        
          <div className="relative opacity-75 pt-8 z-10">

           
          <a href="#" className="p-2 mx-2 inline-block"><svg className="w-6" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Facebook</title>
                    <path
                      d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
                      fill="black" />
                  </svg></a>

             
              <a href="#" className="p-2 mx-2 inline-block"><svg className="w-6" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Facebook</title>
                    <path
                      d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
                      fill="black" />
                  </svg></a>

               
                <a href="#" className="p-2 mx-2 inline-block"><svg className="w-6" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Facebook</title>
                    <path
                      d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
                      fill="black" />
                  </svg></a>
          </div>

          
          <img className="absolute transform scale-150 top-20 z-0" src="images/accent_bubble-contact.png"
            alt="Green decorative background" />

        </div>
      </div>

    </ul>

  </nav>

  

    
    <nav role="navigation"
      className="hidden px-8 md:flex md:justify-center md:gap-x-32 md:mt-4 xl:max-w-screen-2xl xl:mx-auto">

     
      <div>
        <a href="index.html">
        <svg width="92" height="20" viewBox="0 0 92 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M85.969 6.6507C82.4106 2.76159 77.6745 0.428382 72.652 0.090183C67.6299 -0.248017 62.6676 1.43211 58.6994 4.81437C55.0759 1.73676 50.6179 0.0656538 46.0291 0.0646818C41.4403 0.0637098 36.982 1.73293 33.3572 4.809C29.2233 1.26293 24.0072 -0.424555 18.7737 0.0910688C13.5403 0.60669 8.68424 3.28654 5.19691 7.58349C1.70958 11.8805 -0.146 17.4705 0.00898179 23.2123C0.163964 28.9542 2.31782 34.415 6.03085 38.4796L18.7113 52.3438C18.7211 52.3542 18.7309 52.3643 18.742 52.375C18.753 52.3857 18.7561 52.3908 18.7632 52.3985C18.7764 52.4129 18.7905 52.426 18.8037 52.4404C19.0052 52.6585 19.2098 52.8709 19.4175 53.0779C19.5243 53.1849 19.6324 53.2886 19.741 53.393C19.8292 53.4769 19.9178 53.5601 20.0068 53.6423C23.6215 56.9905 28.1801 58.8771 32.9168 58.9845C37.6538 59.0922 42.28 57.4146 46.019 54.2331C49.9871 57.6152 54.9494 59.2955 59.9716 58.9573C64.994 58.6191 69.7301 56.2859 73.2886 52.3968L85.9693 38.5346C89.8313 34.3033 92 28.5699 92 22.5926C92 16.6152 89.831 10.882 85.969 6.6507ZM46.0251 5.9367C49.04 5.93459 51.9876 6.91033 54.4949 8.74038C57.0024 10.5704 58.9566 13.1725 60.1106 16.2173C61.2646 19.2622 61.5663 22.6128 60.9777 25.8452C60.389 29.0775 58.9363 32.0463 56.8035 34.3758L46.0251 46.1584L35.2463 34.3758C33.1135 32.0463 31.6609 29.0775 31.0722 25.8451C30.4835 22.6127 30.7852 19.262 31.9393 16.2172C33.0933 13.1724 35.0478 10.5703 37.555 8.74024C40.0625 6.91022 43.0102 5.93452 46.0251 5.9367ZM18.1008 36.4554C18.0953 34.2661 18.4871 32.0975 19.2535 30.0749C20.0199 28.0524 21.1457 26.2161 22.5656 24.6724L25.4344 21.5362C25.2955 24.671 25.7582 27.8028 26.7929 30.7304C27.8276 33.6577 29.4113 36.3161 31.4421 38.5346L42.0001 50.0766C39.7228 51.8204 37.0513 52.8474 34.2768 53.0454C31.5025 53.2433 28.7314 52.6052 26.266 51.2C23.8006 49.7945 21.7354 47.6766 20.2955 45.0763C18.8556 42.4763 18.0962 39.4939 18.1002 36.4543L18.1008 36.4554ZM9.83452 34.3204C7.13653 31.3717 5.54824 27.424 5.3834 23.2573C5.21855 19.0906 6.48911 15.0078 8.94411 11.8154C11.3991 8.62304 14.86 6.55326 18.6432 6.01491C22.4263 5.47656 26.2566 6.50884 29.3774 8.90777L18.7613 20.5132C16.8403 22.6019 15.3173 25.0864 14.2805 27.8229C13.2437 30.5593 12.7137 33.4934 12.7211 36.4554C12.7211 36.805 12.7286 37.1532 12.7435 37.5005L9.83452 34.3204ZM58.7065 53.1185C55.5921 53.1266 52.5515 52.0838 49.9994 50.1323L60.6094 38.5346C62.6403 36.3161 64.2237 33.6577 65.2583 30.7303C66.2929 27.8028 66.7558 24.671 66.617 21.5362L69.4858 24.6724C71.6177 27.0029 73.0691 29.9721 73.6572 33.2046C74.2456 36.4369 73.9435 39.7874 72.7895 42.8323C71.6358 45.8772 69.6819 48.4795 67.1753 50.3105C64.6684 52.1415 61.7213 53.1185 58.7065 53.1185ZM82.1653 34.3758L79.307 37.5005C79.3214 37.1536 79.3288 36.8053 79.3294 36.4554C79.3367 33.4934 78.8067 30.5593 77.7699 27.8228C76.7331 25.0864 75.2099 22.6019 73.2889 20.5132L62.6802 8.91549C65.8064 6.53722 69.6341 5.52468 73.4092 6.07718C77.1843 6.62966 80.6335 8.70719 83.0775 11.9007C85.5215 15.0942 86.7833 19.1722 86.6145 23.3319C86.4457 27.4916 84.8586 31.4314 82.1653 34.3758Z" fill="white"/>
</svg>

        </a>
      </div>

    
      <div
        className="list-none flex justify-center items-center gap-x-8 text-xs opacity-60 font-medium xl:text-sm xl:gap-x-12 xl:pl-10">

        
        <div className="inline-block relative">
          <li className="relative"><a href="services.html" className="inline-block h-full w-full">Services</a></li>
        </div>

       
        <div className="inline-block relative">
          <li className="relative"><a href="#testimonials" className="inline-block h-full w-full">Testimonials</a></li>
        </div>

       
        <div className="inline-block relative">
          <li className="relative"><a href="#experience" className="inline-block h-full w-full">Experience</a></li>
        </div>

        
        <div className="inline-block relative">
          <li className="relative"><a href="contact.html" className="inline-block h-full w-full">Contact</a></li>
        </div>
      </div>

      
      <div className="flex gap-x-4 opacity-75">
        
        <a href="#" className="p-2"><svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <title>Email</title>
            <path
              d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
              fill="black" />
          </svg></a>

        
        <a href="#" className="p-2"><svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <title>Twitter</title>
            <path
              d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
              fill="black" />
          </svg></a>

        
        <a href="#" className="p-2"><svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <title>Facebook</title>
            <path
              d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
              fill="black" />
          </svg></a>
      </div>



    </nav>
    </>
    )
}

export default Nav
