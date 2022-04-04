import Image from 'next/image'
import myImg22 from '/public/images/servicenow-header-logo.svg'
export default function Footer() {
    return (
      <div className="container mx-auto">
        <div  className='md:flex justify-between pl-[20px] sm:pl-[0px]'>
        <div className="mt-[18px] lg:w-3/4">
        <span className="font-bold text-[18px]">Request info or schedule demo</span>
        <div className="flex">
        <div className="flex pt-[8px] pb-[10px]">
        <span className="text-[18px] font-bold">Contact</span>
        </div>
        <div className="mt-[12px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-7 h-5 ml-[8px] mt-[15px]hover:translate-x-2  '><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg>
        </div>
        </div>
        </div>
        <div className="lg:w-1/4">
    
        <div class="md:p-4 pb-[10px] md:pb-[0px]">
    <div class="group relative">
        <button class="bg-gray-800 text-white px-6 h-10 rounded">Select language
        </button>
        <nav tabindex="0" class="border border-2 bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul class="py-1">
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                        English
                    </a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                        Pushto
                    </a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                        Arabic
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>


        </div>
        </div>



  
        <div className="lg:flex  border-y-2 border-black-700 mb-[10px] pl-[20px] sm:pl-[0px]">
          

        <div className="flex lg:w-1/2 ">
         <div className="w-1/2 flex flex-col mb-[25px] pt-[40px] ">
         <span className='text-[16px] font-bold mb-[24px]'>Company</span>
            <span className='text-[14px] pt-[20px]'>Abput</span>
            <span className='text-[14px] pt-[20px]'>Careers</span>
            <span className='text-[14px] pt-[20px]'>Locations</span>
            <span className='text-[14px] pt-[20px]'>Partner</span>
            <span className='text-[14px] pt-[20px]'>Supplier</span>
            <span className='text-[14px] pt-[20px]'>Investors</span>
            <span className='text-[14px] pt-[20px] '>Newsroom</span>
            <span className='text-[14px] pt-[20px]'>Newsroom</span>
            <span className='text-[14px] pt-[20px]'>Newsroom</span>
            <span className='text-[14px] pt-[20px]'>Newsroom</span>
            <span className='text-[14px] pt-[20px]'>Blog</span>
            <span className='text-[14px] pt-[20px]'>Workflows magazine:insights and research</span>
         </div>
       
         <div className="w-1/2 flex flex-col mb-[15px] pt-[40px] ">
         <span className='text-[16px] font-bold mb-[24px] flex-nowrap'>Service and Support</span>
            <span className='text-[14px] pt-[20px]'>Services</span>
            <span className='text-[14px] pt-[20px]'>Now Support portal</span>
         </div>
      
        </div>

       <div className="flex lg:w-1/2 ">
         <div className="w-1/2 flex flex-col mb-[15px] pt-[40px]">
         <span className='text-[16px] font-bold mb-[24px]'>Resource</span>
            <span className='text-[14px] pt-[20px]'>Customer Stories</span>
            <span className='text-[14px] pt-[20px]'>Customer Success Center</span>
            <span className='text-[14px] pt-[20px]'>Now on Now</span>
            <span className='text-[14px] pt-[20px]'>Trading and certification</span>
            <span className='text-[14px] pt-[20px]'>User community</span>
            <span className='text-[14px] pt-[20px]'>Developer portal</span>
            <span className='text-[14px] pt-[20px]'>Product documentation</span>
            <span className='text-[14px] pt-[20px]'>Product accessibility</span>
            <span className='text-[14px] pt-[20px]'>Resource library</span>
         </div>

         <div className="w-1/2 flex flex-col mb-[15px] pt-[40px]  ">
         <span className='text-[16px] font-bold mb-[24px] '>My account</span>
            <span className='text-[14px] pt-[20px]'>Sign in</span>
            <span className='text-[14px] pt-[20px]'>Register</span>
         </div>
         </div>
         </div>

        <div className="lg:flex justify-between pl-[20px] sm:pl-[0px]">
        <div className="lg:w-5/12 ">
        <span className="font-bold">Get the latest ServiceNow updates</span>
        <div className="flex ">
        <label class="block mb-6 md:w-9/12">
        <input
          name="email"
          type="email"
          class="
            block
            mt-[13px]
            p-[12px]
            border-black-700
            w-full
          "
          placeholder="Enter@example.com"
        />
      </label> <button class="sm:w-3/12 mt-[13px] mb-[23px] ml-[15px] bg-transparent hover:bg-black-500 text-blue-700 font-semibold hover:text-black  px-4 border border-black-500  rounded">
      Subscribe
    </button>
    </div>
    </div>
        <div className="lg:w-5/12">
        <span className="font-bold">Connect with us</span>
        <div className="flex justify-between lg:w-7/12  mt-[15px]">


        <svg
  class="w-9 h-9 text-blue-600 hover:fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  />
</svg>

<svg
  class="w-9 h-9  text-blue-400 hover:fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
  />
</svg>

<svg
  class="w-9 h-9  text-green-400 hover:fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  ></path>
</svg>

<svg
  class="w-9 h-9  text-blue-500 hover:fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  ></path>
</svg>

<svg
  class="w-9 h-9 text-red-500 hover:fill-current"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
  />
</svg>


        </div>
        </div>
        </div>


        <div className="flex pl-[20px] sm:pl-[0px]">
        <div className="flex lg:w-[175px] lg:h-[80px] shrink-0">
        <Image
        src={myImg22} />
          </div>
          
        <span className="font-bold lg:pt-[30px] ml-[20px] sm:pt-[10px] sm:pb-[10px] md:pb-[0px]">The world works with ServiceNow</span>
        </div>
         <div className='flex flex-wrap justify-between lg:w-5/6 pl-[20px] sm:pl-[0px]'>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>Terms and condition</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>GDPR</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>Privacy statement</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>Cookie policy</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>Cookie preferences</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>Sitemap</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>Buisness continuity</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>Website feedback</span>
         <span className='pb-[5px] mt-[6px] mb-[6px] mr-[24px] text-[12px]'>2022 ServiceNow.All right reserved</span>
         </div>
        </div>
       
    )

}