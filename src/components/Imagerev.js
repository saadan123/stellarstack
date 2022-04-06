import Image from 'next/image'
import myImg3 from  '/public/images/im222.webp'
export default function Imagerev() {
    return (
      <div className="container mx-auto">
{/* <Component9 image ulta /> */}
<div className='lg:flex justify-between'>
<div className='lg:w-5/12 pt-[120px]'>
<div className='py-[80px] px-[20px] flex flex-col'>
<span className='font-bold text-[36px]'>Unify the service experience</span>
<span className='text-[20px] my-[20px]'>Create a consistent experience for employees throughout the enterprise.Provide browsing and search capabilities that reach across distributed knowledge bases and catalogs.</span>
<div className='mt-[24px]'> <button class="bg-transparent hover:bg-blue-500 text-[18px] text-blue-700 font-semibold hover:text-white py-[15px] px-[40px] border border-blue-500 hover:border-transparent rounded">
Watch video
</button></div>

</div>
</div>



{/* <Component9-2 image ulta /> */}
<div className='xl:w-5/12 lg:w-6/12'>
 <div className='lg:w-[600px] lg:h-[600px] '>
 <Image className='w-max'
         src={myImg3}
       />
       </div>
       </div>

</div>
     </div>
    )}  