import Image from 'next/image'
import myImg1 from '/public/images/mad.webp'

export default function Belownav() {
    return (
        
        <div className="container mx-auto">

{/* <Component2 /> */}
<div className='sm:flex bg-slate-400  pl-[30px] mb-[10px] mx-auto pt-[30px] pb-[30px]'>
{/* <Component2-1 /> */}
<div className='sm:w-1/2 pr-[20px] mx-auto'>
<div className='flex  sm:pt-[35px] md:pt-[50px] lg:pt-[120px] '>
<div className=' pr-[16px] text-[18px] lg:text-[18px]'><span>Sloutions</span></div>
<div  className='pl-[10px] sm:pl-[16px] pr-[16px] lg:text-[18px]'><span>/</span></div>
<div  className='pl-[10px]  sm:pl-[16px]pr-[16px] lg:text-[18px]'><span>Operational Excellence</span></div>
<div  className='pl-[10px]  sm:pl-[16px]pr-[16px] lg:text-[18px]'><span>/</span></div>
</div>
{/* <Component/> */}
<div className=''>
<span className='lg:text-[48px] font-bold lg:pb-[32px] lg:pt-[40px]  md:pb-[32px] md:pt-[40px] sm:pb-[32px] sm:pt-[40px]'>Drive effeciencies with global  buisness services</span>
</div>

{/* <Component/> */}
<div className='lg:pb-[46px] md:pt-[22px] sm:pt-[15px]'><span className="lg:text-[24px]">Build a strong digital foundation of process standardization and
automation while  stream opreations</span>
</div>
{/* <Component/> */}
<div className='pt-[20px]'>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[15px] px-[40px] border border-blue-500 hover:border-transparent rounded">
Read White Paper
</button></div>
</div>

 

{/* <Component2-2 /> */}
<div className='sm:w-1/2'>
<Image 
src={myImg1}
className=''/></div>
</div>

 {/* <Component3 nav-2 /> */}
 <nav className='flex flex-wrap sm:flex-nowrap content-around space-x-2 sm:space-x-4 sm:space-x-6 md:space-x-8 font-bold'>
 <span>Sloutions</span>
       <span>Products</span>
       <span>Platform</span>
       <span>Customers</span>
 </nav>
    
    </div>
   
    )}
