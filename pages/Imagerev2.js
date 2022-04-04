import Image from 'next/image'
import myImg4 from  '/public/images/img33.webp'

export default function Imagerev2() {
    return (
      <div className="container mx-auto">
      {/* <Component12 image ulta /> */}
  <div className='lg:flex justify-between'>
  <div className='lg:w-5/12 pt-[100px] '>
  <div className='py-[80px] px-[20px] flex flex-col'>
  <span className='font-bold text-[36px]'>Aim for continual improvement</span>
  <span className='text-[20px] my-[20px]'>Create a consistent experience for employees throughout the enterprise.Provide browsing and search capabilities that reach across distributed knowledge bases and catalogs.</span>
  <div className='mt-[24px] flex'> <button class="bg-transparent hover:bg-blue-500 text-[18px] text-blue-700 font-semibold hover:text-white py-[15px] px-[40px] border border-blue-500 hover:border-transparent rounded">
  Watch video
</button>  
<div className='flex font-bold text-[18px]'><div className='flex'><span className='pl-[10px] pt-[15px] lg:pl-[20px]'> Get Gartner Report</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-7 h-7 ml-[10px] hover:translate-x-1 mt-[15px] '><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></div></div>
  
  </div>
  </div>
  


</div>

  {/* <Component12-2 image ulta /> */}
  <div className='xl:w-5/12 lg:w-6/12'>
   <div className='lg:w-[600px] lg:h-[600px] '>
   <Image className='w-max'
           src={myImg4}
         />
         </div>
         </div>
  </div>
</div>
    )}  