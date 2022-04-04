import Image from 'next/image'


import myImg2 from '/public/images/12334.webp'
export default function ImageComp() {
    return (
      <div className="container mx-auto">

{/* <Component5 iamge/> */}
<div className='lg:flex '>
<div className='lg:w-3/5'>
<div className='lg:w-[600px] lg:h-[600px]'>
<Image className=''
        src={myImg2}
      />
      </div>
      </div>
<div className='lg:Lw-2/5 pt-[150px] pb-[50px] h-auto text-center  sm:text-justify '>
<div>
 <span className='font-bold text-[36px]'>Connect processes</span>
 </div>
 <div className='mt-[20px] mb-[20px] text-[20px] leading-8'>
 <span >Support end-to-end process automation with<br/> cross-departmental workflows. Streamline integrations to <br/>back-end systems of record across the technology ecosystem.</span>
 </div>
 <div className='flex sm:w-7/12 lg:w-full justify-center'>
 <button class="bg-transparent hover:bg-blue-500 flex-nowrap w-max text-[18px] text-blue-700 font-semibold hover:text-white py-[15px] px-[40px] border border-blue-500 hover:border-transparent rounded">
Watch video
</button>
<a href='#' className='text-[18px] p-[15px] ml-[20px] font-bold'>Get Ebook</a>

 </div>

</div>
</div>
</div>
    )}