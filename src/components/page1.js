import Image from 'next/image'
import myImg7 from  '/public/images/img42.png'
import myImg8 from   '/public/images/mobile.png'


export default function Home() {
  return (
    <div className="container mx-auto">


{/* <Component19/ > */}

<div>
<div className='pl-[20px] sm:pl-[0px]'>
<div className='mb-[20px] pb-[5px]'>
<span className='font-bold text-[22px] "underline underline-offset-8'>WHY </span><span className='font-bold text-[22px]'>SERVICENOW?</span>
</div>
<div className='mt-[20px] mb-[24px]'><span className='text-[36px] font-bold'>The power of the <br/>Now Platform</span></div>
<div><span className='text-[18px]'>Streamline opreations with a strong digital foundation built on the now platform</span></div>
<div className='mt-[10px]'><button class="bg-transparent hover:bg-black-500 text-[18px] text-blue-700 font-semibold hover:text-black py-[15px] px-[40px] border border-black-700 hover:border-green rounded">
Explore platform
</button></div>
</div>


<div className='lg:flex mt-[40px] justify-between pb-[150px] pl-[20px] sm:pl-[0px]'>
<div className='lg:w-1/4 flex flex-col mt-[10px] md:mt-[9px]'>
<div>
<Image
              src={myImg7}
            />
            </div>
            <div className=' flex flex-col lg:w-3/4'>
<span className='text-[18px] font-bold pb-[6px] pt-[10px]'>Virtual Agent</span>
<span className='text-[18px] pt-[10px]'>Intersept and resolve  issues faster with an intelligent chatbot that understands simple,human language.</span>
</div>
</div>

<div className='lg:w-1/4 flex flex-col mt-[10px] md:mt-[9px]'>
<div>
<Image
              src={myImg8}
            />
            </div>
            <div className='lg:w-3/4 flex flex-col'>
<span className='text-[18px] font-bold pb-[6px] pt-[10px]'>Now Mobile</span>
<span className='text-[18px] pt-[10px]'>Find answers,get help,and make requests across departments from a single,native movbile app.</span>
</div>
</div>

<div className='lg:w-1/4 flex flex-col mt-[10px] md:mt-[9px]'>
<div>
<Image
              src={myImg7}
            />
            </div>
            <div className='lg:w-3/4 flex flex-col'>
<span className='text-[18px] font-bold pb-[6px] pt-[10px] '>Virtual Agent</span>
<span className='text-[18px] pt-[10px]'>Intersept and resolve  issues faster with an intelligent chatbot that understands simple,human language.</span>
</div>
</div>

<div className='lg:w-1/4 flex flex-col mt-[10px] md:mt-[9px]'>
<div>
<Image
              src={myImg7}
            />
            </div>
            <div className=' flex flex-col lg:w-3/4'>
<span className='text-[18px] font-bold pb-[6px] pt-[10px]'>Virtual Agent</span>
<span className='text-[18px] pt-[10px]'>Intersept and resolve  issues faster with an intelligent chatbot that understands simple,human language.</span>
</div>
</div>

</div>
</div>
</div>
  )
}
