import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const Contact = () => {
  const {ref, inView} = useInView({
    threshold: 0.25
  });
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView)
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.5,
        }
      })
    }
    if(!inView){
      animation.start({
        x: '-400px',
      })
    }

  },[inView])
    return (
        <div id='contact' className='overflow-hidden' ref={ref} >
              <motion.div    animate={animation} 
       className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets Connect</h2>
            <div className="text-gray-700 mt-8">
             Don't feel like using the form? Send me an email: wsaintlouis1@gmail.com. <br/>
              Call/text me: (908) 845-3190
            </div>
          </div>
          <div className="mt-8 text-center">
          <svg width="393" height="261" viewBox="0 0 393 261" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_116_52)">
<ellipse cx="264.396" cy="129.641" rx="35.9451" ry="38.6349" fill="#3C83F7"/>
<path d="M356.655 83.7375C373.43 103.313 373.43 133.763 356.655 154.425L365.974 165.3C389.272 140.288 389.272 98.9625 365.974 72.8625L356.655 83.7375ZM346.404 95.7L337.085 106.575C341.745 114.188 341.745 123.975 337.085 131.588L346.404 142.463C357.587 129.413 357.587 109.838 346.404 95.7ZM309.128 0H215.937C210.994 0 206.253 2.29151 202.758 6.37043C199.262 10.4493 197.299 15.9815 197.299 21.75V217.5C197.299 223.268 199.262 228.801 202.758 232.88C206.253 236.959 210.994 239.25 215.937 239.25H309.128C314.071 239.25 318.812 236.959 322.307 232.88C325.802 228.801 327.766 223.268 327.766 217.5V21.75C327.766 15.9815 325.802 10.4493 322.307 6.37043C318.812 2.29151 314.071 0 309.128 0ZM309.128 206.625H215.937V32.625H309.128V206.625Z" fill="#000205"/>
<path d="M284.366 113.329H246.024C245.177 113.329 244.364 113.691 243.765 114.335C243.166 114.979 242.829 115.852 242.829 116.763V144.237C242.829 145.148 243.166 146.021 243.765 146.665C244.364 147.309 245.177 147.671 246.024 147.671H284.366C285.213 147.671 286.026 147.309 286.625 146.665C287.224 146.021 287.561 145.148 287.561 144.237V116.763C287.561 115.852 287.224 114.979 286.625 114.335C286.026 113.691 285.213 113.329 284.366 113.329V113.329ZM280.851 116.763L265.195 128.405L249.539 116.763H280.851ZM246.024 144.237V118.326L264.284 131.908C264.552 132.107 264.869 132.214 265.195 132.214C265.52 132.214 265.838 132.107 266.106 131.908L284.366 118.326V144.237H246.024Z" fill="#FFE3E3"/>
</g>
<g clip-path="url(#clip0_116_52)">
<path d="M108.634 231.094H6.12402V211.891H65.0674C61.3605 198.625 53.9448 186.526 43.5842 176.838C33.2236 167.151 20.2928 160.226 6.12402 156.777C12.6847 155.241 19.5529 154.281 26.6261 154.281C71.9356 154.281 108.634 188.655 108.634 231.094ZM211.144 156.777C204.584 155.241 197.716 154.281 190.642 154.281C160.607 154.281 134.467 169.451 120.115 192.015C126.035 204.295 129.076 217.62 129.034 231.094H211.042V211.891H152.099C155.842 198.627 163.283 186.533 173.658 176.849C184.034 167.165 196.971 160.238 211.144 156.777V156.777ZM145.948 144.871C153.889 124.976 168.629 108.097 187.875 96.8633C143.898 98.2075 108.634 131.909 108.634 173.484V173.676C118.373 161.482 131.186 151.592 145.948 144.871ZM102.689 124.036C98.4437 113.592 91.961 104.072 83.6398 96.0633C75.3185 88.0546 65.3349 81.7262 54.3038 77.468C69.0653 95.327 77.8812 117.603 77.8812 141.895C77.8812 143.911 77.5736 145.831 77.4711 147.752C81.8791 150.056 85.9795 152.745 89.9774 155.625C92.1704 144.47 96.4752 133.772 102.689 124.036V124.036Z" fill="black" fill-opacity="0.1"/>
<path d="M155.283 171.392C153.382 168.107 155.81 164.771 159.948 160.627C166.514 154.057 173.671 138.838 167.025 123.378C167.073 123.292 165.715 120.695 165.763 120.592L163.031 120.455C162.152 120.334 132.102 120.283 102.036 120.283C71.97 120.283 41.9199 120.334 41.0412 120.455C41.0412 120.455 36.9994 123.275 37.0314 123.361C30.3855 138.821 37.5426 154.04 44.1085 160.609C48.2462 164.737 50.6745 168.09 48.7734 171.375C46.9203 174.573 41.4246 175.038 41.4246 175.038C41.4246 175.038 42.7027 178.305 45.754 180.059C48.5817 181.693 52.0484 182.071 54.4607 182.123C54.4607 182.123 63.8544 194.436 88.377 194.436H115.695C140.234 194.436 149.611 182.123 149.611 182.123C152.008 182.071 155.49 181.693 158.318 180.059C161.37 178.305 162.648 175.038 162.648 175.038C162.648 175.038 157.12 174.573 155.283 171.392V171.392Z" fill="#3C2C23"/>
<path d="M102.004 194.436V180.781L145.602 177.514L149.564 182.14C149.564 182.14 140.17 194.453 115.647 194.453L102.004 194.436V194.436Z" fill="url(#paint0_radial_116_52)"/>
<path d="M149.484 176.173C142.95 166.766 157.44 163.275 157.44 163.275C157.44 163.275 157.455 163.275 157.455 163.292C154.931 166.25 153.797 168.847 155.267 171.409C157.12 174.608 162.616 175.072 162.616 175.072C162.616 175.072 155.123 181.349 149.484 176.173Z" fill="url(#paint1_radial_116_52)"/>
<path d="M167.057 123.378C173.543 138.356 166.721 153.765 160.331 160.265C159.452 161.16 155.73 164.616 154.883 167.385C154.883 167.385 140.33 148.142 135.968 136.826C135.09 134.539 134.291 132.2 134.179 129.758C134.099 127.935 134.403 125.768 135.505 124.221C136.863 122.329 166.274 121.761 166.274 121.761L167.057 123.378V123.378Z" fill="url(#paint2_radial_116_52)"/>
<path d="M37.0155 123.378C30.5294 138.356 37.351 153.765 43.7412 160.265C44.6199 161.16 48.3422 164.616 49.1889 167.385C49.1889 167.385 63.7427 148.142 68.104 136.826C68.9827 134.539 69.7814 132.2 69.8933 129.758C69.9731 127.935 69.6696 125.768 68.5673 124.221C67.2094 122.329 65.6278 122.828 63.3273 122.828C58.934 122.828 39.6994 121.761 38.1977 121.761C38.1817 121.796 37.0155 123.378 37.0155 123.378V123.378Z" fill="url(#paint3_radial_116_52)"/>
<path d="M102.068 194.436V180.781L58.4707 177.514L54.5088 182.14C54.5088 182.14 63.9024 194.453 88.425 194.453L102.068 194.436V194.436Z" fill="url(#paint4_radial_116_52)"/>
<path d="M54.6046 176.173C61.1386 166.766 46.6488 163.275 46.6488 163.275C46.6488 163.275 46.6328 163.275 46.6328 163.292C49.1569 166.25 50.2912 168.847 48.8214 171.409C46.9683 174.608 41.4727 175.072 41.4727 175.072C41.4727 175.072 48.9652 181.349 54.6046 176.173Z" fill="url(#paint5_radial_116_52)"/>
<path d="M144.052 127.522H60.4357C51.4254 127.522 44.0447 135.209 44.0447 144.616C44.0447 154.023 51.4254 161.71 60.4357 161.71H144.036C153.046 161.71 160.427 154.023 160.427 144.616C160.427 135.209 153.062 127.522 144.052 127.522Z" fill="#7A4C32"/>
<path d="M180.604 181.572C158.207 156.671 109.96 154.848 103.043 154.728V154.711H102.18V154.728C95.2626 154.866 47.0003 156.671 24.6185 181.59C8.3074 199.75 11.822 217.359 15.2248 222.535C21.6311 232.303 38.7889 236.723 38.7889 236.723H166.434C166.434 236.723 183.592 232.303 189.998 222.535C193.385 217.342 196.915 199.732 180.604 181.572V181.572Z" fill="url(#paint6_linear_116_52)"/>
<path opacity="0.2" d="M102.244 182.965C58.6944 182.965 44.4282 201.985 44.4282 201.985L62.0333 212.596C63.2794 213.507 63.7427 215.244 63.1197 216.706L62.241 218.821L86.3322 236.792H118.156L142.247 218.821L141.368 216.706C140.745 215.244 141.208 213.507 142.455 212.596L159.708 201.762C159.708 201.762 145.793 182.965 102.244 182.965Z" fill="url(#paint7_radial_116_52)"/>
<path d="M102.244 173.283H87.738V190.446C87.738 198.202 94.5916 204.496 102.244 204.496C109.896 204.496 116.75 198.202 116.75 190.446V173.283H102.244Z" fill="#7A4C32"/>
<path d="M62.2409 218.838L67.5289 219.182C69.4779 219.182 71.395 219.492 73.2481 220.094C78.9993 221.985 91.684 226.749 98.5695 228.64C100.263 229.105 101.429 230.738 101.429 232.63C101.429 233.765 100.998 234.797 100.311 235.536C99.6079 236.293 98.6493 236.757 97.595 236.757H55.2117L62.2409 218.838V218.838Z" fill="url(#paint8_linear_116_52)"/>
<path d="M142.247 218.838L136.959 219.182C135.01 219.182 133.093 219.492 131.24 220.094C125.488 221.985 112.82 226.749 105.934 228.64C104.225 229.105 103.059 230.738 103.059 232.63C103.059 233.765 103.49 234.797 104.177 235.536C104.88 236.293 105.838 236.757 106.893 236.757H149.164L142.247 218.838V218.838Z" fill="url(#paint9_linear_116_52)"/>
<path d="M102.244 67.0581C75.6125 67.0581 50.9622 94.9343 50.9622 135.055C50.9622 174.952 76.3634 194.676 102.244 194.676C128.124 194.676 153.526 174.952 153.526 135.055C153.526 94.9343 128.859 67.0581 102.244 67.0581V67.0581Z" fill="#A56C43"/>
<path d="M108.139 167.574C107.979 167.505 107.803 167.471 107.644 167.454H96.8282C96.6685 167.471 96.4927 167.505 96.333 167.574C95.3585 167.97 94.8153 168.967 95.2786 170.016C95.7419 171.065 97.8986 174.057 102.244 174.057C106.589 174.057 108.746 171.082 109.209 170.016C109.673 168.967 109.129 167.97 108.139 167.574Z" fill="#875334"/>
<path d="M75.98 159.062C80.3298 159.062 83.856 155.982 83.856 152.183C83.856 148.384 80.3298 145.304 75.98 145.304C71.6302 145.304 68.104 148.384 68.104 152.183C68.104 155.982 71.6302 159.062 75.98 159.062Z" fill="#42312C"/>
<path d="M128.508 159.062C132.858 159.062 136.384 155.982 136.384 152.183C136.384 148.384 132.858 145.304 128.508 145.304C124.158 145.304 120.632 148.384 120.632 152.183C120.632 155.982 124.158 159.062 128.508 159.062Z" fill="#42312C"/>
<path d="M87.8499 136.723C86.3642 134.608 82.9454 131.547 76.2996 131.547C69.6537 131.547 66.2189 134.625 64.7492 136.723C64.0942 137.652 64.2539 138.735 64.7172 139.388C65.1326 139.99 66.3787 140.558 67.7526 140.059C69.1265 139.56 71.8104 138.064 76.2996 138.03C80.7887 138.064 83.4726 139.56 84.8465 140.059C86.2204 140.558 87.4665 139.99 87.8819 139.388C88.3292 138.735 88.489 137.652 87.8499 136.723V136.723Z" fill="#42312C"/>
<path d="M139.755 136.723C138.269 134.608 134.85 131.547 128.204 131.547C121.558 131.547 118.124 134.625 116.654 136.723C115.999 137.652 116.159 138.735 116.622 139.388C117.037 139.99 118.283 140.558 119.657 140.059C121.031 139.56 123.715 138.064 128.204 138.03C132.694 138.064 135.377 139.56 136.751 140.059C138.125 140.558 139.371 139.99 139.787 139.388C140.25 138.735 140.41 137.652 139.755 136.723Z" fill="#42312C"/>
<path d="M83.9677 51.0306L79.6543 33.679" stroke="#B0BEC5" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M59.0458 62.3806L48.406 51.1166" stroke="#B0BEC5" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M144.276 63.8251L156.082 51.1166" stroke="#B0BEC5" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M120.52 51.0306L124.833 33.679" stroke="#B0BEC5" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M168.287 99.9902C162.791 81.0392 146.049 81.0048 146.049 81.0048C143.381 74.0745 132.038 49.9644 99.0008 60.9876C91.4283 63.5156 85.4215 63.6532 82.0826 60.8329C76.9225 56.4648 77.4177 50.4459 77.4177 50.4459C77.4177 50.4459 64.3816 53.8853 66.3626 67.2301C62.3208 67.4881 55.4513 69.2937 50.1314 77.6858C45.77 84.5646 45.6742 91.7357 45.9937 95.3815C42.1276 97.084 36.7758 101.538 35.961 110.652C35.7533 112.888 35.977 114.969 36.4083 116.86C37.5266 121.658 40.3863 125.768 44.1405 128.623L49.061 132.355C49.061 132.355 48.8693 145.373 52.9591 153.524C52.9591 153.524 58.0713 138.339 60.8191 131.701C73.0564 132.888 87.9776 128.589 100.023 119.13C103.746 116.207 112.963 111.994 117.485 111.529C128.827 110.377 132.438 121.951 132.438 121.951C132.438 121.951 140.825 120.988 144.403 127.97C146.736 132.51 150.714 154.075 150.714 154.075C150.714 154.075 153.781 145.407 155.011 135.915C162.28 133.129 167.6 126.387 169.006 118.236C169.932 112.819 170.14 106.422 168.287 99.9902V99.9902Z" fill="#3C2C23"/>
<path d="M155.027 135.897C157.615 134.694 171.626 129.81 169.597 107.419C167.265 81.4692 146.624 81.0909 146.049 81.0221C146.049 81.0221 145.602 84.0831 144.084 86.3531C142.119 89.2766 136.911 90.36 136.911 90.36C154.133 108.417 153.302 120.85 155.027 135.897V135.897Z" fill="url(#paint10_radial_116_52)"/>
<path d="M101.174 60.317C99.4322 60.8329 87.9457 65.6996 82.0986 60.8329C77.0983 56.6713 77.4018 50.7039 77.4338 50.4976C75.2771 52.5096 67.3691 68.1932 83.4725 71.9421C90.4219 73.5586 95.582 68.2104 98.873 63.5156C100.055 61.7959 100.678 60.9705 101.174 60.317Z" fill="url(#paint11_radial_116_52)"/>
<path d="M125.824 59.9214C137.071 63.3608 143.413 74.4528 146.065 81.0048C146.943 83.1716 140.905 103.189 102.611 78.1501C88.3609 68.8294 93.4092 63.0168 95.3263 62.3462C102.771 59.7838 112.308 55.7941 125.824 59.9214Z" fill="url(#paint12_radial_116_52)"/>
<path d="M77.3858 50.4803C77.3699 50.4803 77.3379 50.4975 77.29 50.4975H77.274C76.6669 50.7727 64.4935 54.1089 66.3627 67.2129L77.8651 71.0134C69.0306 59.01 77.4338 50.4459 77.4338 50.4459C77.4338 50.4459 77.4018 50.4803 77.3858 50.4803Z" fill="url(#paint13_radial_116_52)"/>
<path d="M73.5835 68.8638C73.5835 68.8638 63.8863 62.6901 52.5756 74.384C44.1085 83.1545 45.9936 95.3815 45.9936 95.3815C45.9936 95.3815 49.668 93.1631 58.6144 94.0917L73.5835 68.8638Z" fill="url(#paint14_radial_116_52)"/>
<path d="M36.2965 116.259C38.2135 126.731 48.5977 131.598 49.5562 131.787L58.6304 94.0917C39.6993 91.6153 34.3954 105.872 36.2965 116.259V116.259Z" fill="url(#paint15_radial_116_52)"/>
</g>
<defs>
<filter id="filter0_d_116_52" x="165.341" y="0" width="231.659" height="269" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_116_52"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_116_52" result="shape"/>
</filter>
<radialGradient id="paint0_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(124.277 174.71) scale(35.7398 16.6357)">
<stop offset="0.728" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint1_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(159.481 169.676) rotate(156.088) scale(10.4649 7.49384)">
<stop offset="0.663" stop-color="#554138"/>
<stop offset="1" stop-color="#554138" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132.101 141.373) rotate(-94.517) scale(43.974 38.6514)">
<stop offset="0.725" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint3_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71.9766 141.373) rotate(-85.483) scale(43.974 38.6514)">
<stop offset="0.725" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint4_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.7987 174.71) rotate(180) scale(35.7398 16.6357)">
<stop offset="0.728" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint5_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.5959 169.676) rotate(23.9125) scale(10.4649 7.49384)">
<stop offset="0.663" stop-color="#554138"/>
<stop offset="1" stop-color="#554138" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint6_linear_116_52" x1="102.607" y1="153.38" x2="102.607" y2="240.807" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="0.482" stop-color="#3B82F6"/>
<stop offset="1" stop-color="#3168C4"/>
</linearGradient>
<radialGradient id="paint7_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(102.065 209.874) scale(61.7489 27.5317)">
<stop offset="0.771"/>
<stop offset="1" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint8_linear_116_52" x1="98.742" y1="227.793" x2="64.6101" y2="227.793" gradientUnits="userSpaceOnUse">
<stop offset="0.5" stop-color="#A56C43"/>
<stop offset="1" stop-color="#8D5738"/>
</linearGradient>
<linearGradient id="paint9_linear_116_52" x1="108.327" y1="227.793" x2="141.1" y2="227.793" gradientUnits="userSpaceOnUse">
<stop offset="0.5" stop-color="#A56C43"/>
<stop offset="1" stop-color="#8D5738"/>
</linearGradient>
<radialGradient id="paint10_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(125.916 116.334) rotate(74.5144) scale(54.6329 43.9724)">
<stop offset="0.699" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint11_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(88.1277 51.5011) rotate(36.8439) scale(14.0702 16.2574)">
<stop offset="0.58" stop-color="#554138"/>
<stop offset="1" stop-color="#554138" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint12_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105.889 87.7222) rotate(-155.774) scale(47.3307 29.5563)">
<stop offset="0.699" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint13_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81.2063 63.2884) rotate(9.2526) scale(12.9782 15.6527)">
<stop offset="0.702" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint14_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.9305 83.3279) rotate(-167.968) scale(27.7202 25.7837)">
<stop offset="0.66" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<radialGradient id="paint15_radial_116_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63.8144 117.64) rotate(21.028) scale(25.9245 42.3141)">
<stop offset="0.598" stop-color="#554138" stop-opacity="0"/>
<stop offset="1" stop-color="#554138"/>
</radialGradient>
<clipPath id="clip0_116_52">
<rect width="204.488" height="220.12" fill="white" transform="translate(0 23.5844)"/>
</clipPath>
</defs>
</svg>




          </div>
        </div>
        <form name="contact" action="https://formsubmit.co/wsaintlouis1@gmail.com" method='POST'>
        <div className="">
          <div>
         
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"  id="name" name="name" required placeholder=""/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
             type="email" id="email" name="email" required/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea type="text" name="question" id="question"
             className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button type="submit" id="submit-button"
             className="uppercase text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
            
          </div>
          
        </div>
        </form>
        
      </motion.div> 
        </div>
    )
}

export default Contact
