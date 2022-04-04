import Image from 'next/image'
import myImg from '/public/images/servicenow-header-logo.svg'

export default function Headnav() {
    return (
        <div className="container mx-auto">
        <div className='flex sm:justify-between dark:bg-gray-800'>

        <div className="flex ">
          <div className=" flex lg:w-[175px] lg:h-[80px] shrink-0">
            <Image
              src={myImg}
            />
          </div>
          <nav className="flex flex-wrap  ml-[12px] md:ml-[10px] lg:ml-[0px] md:flex-nowrap space-x-4 sm:space-x-6 md:space-x-7 lg:pt-[25px]">
            <span className='sm:text-[18px] ml-[16px]'>Sloutions</span>
            <span className='sm:text-[18px]'>Products</span>
            <span className='sm:text-[18px]'>Platform</span>
            <span className='sm:text-[18px]'>Customers</span>
            <span className='sm:text-[18px]'>Events</span>
            <span className='sm:text-[18px]'>About</span>
          </nav>
        </div>

        <div className='flex bg-black-500 lg:pt-[25px] '>
          <svg class="w-7 h-7 dark:text-white mr-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
           <svg class="w-7 h-7 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><></><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
        </div>
      </div>
      </div>
    )

}