import ChevronDown from "../../icons/ChevronDown"

const VRCard_1 = {
  title: 'Get into VR for less with Meta Quest 2',
  content: 'Start experiencing the thrill of VR. Now $199.99 USD'
}

const VRCard_2 = {
  title: 'Do more in style with Ray-Ban | Meta',
  content: 'Next-generation smart glasses that blend an iconic look with cutting-edge technology.'
}

const VRCard = ({title, content}) => {
  return (
    <>
      <h3 className="text-[28px] text-center mb-2 font-medium tracking-normal
      md:text-left md:w-[290px] md:text-[32px]
      lg:text-4xl lg:w-[270px]">
        {title}
      </h3>
      <p className="mb-4 text-base text-center text-gray-600
      md:text-left md:mb-6 md:w-[302px]
      lg:w-[270px]">
        {content}
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        <a href="#"
          className="px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full flex justify-center items-center
          lg:px-6  lg:gap-3 lg:col-span-2
          xl:col-span-1 xl:px-4"
        >
          Add to bag
        </a>
        <a href="#"
          className="py-2 flex items-center gap-2 group
          lg:col-span-2
          xl:col-span-1"
        >
          <div className="bg-white border border-gray-400 rounded-full">
            <ChevronDown className="w-6 h-6"/>
          </div>
          <p className="text-sm font-semibold text-blue-600/80 border-b border-b-transparent group-hover:border-b-blue-600 transition-colors duration-500">
            Learn more
          </p>
        </a>
      </div>
    </>
  )
}

const VRBanner = () => {
  return (
    <section className="">
      <div className="max-w-[1500px] mx-auto w-full px-4 grid grid-cols-2 gap-4 py-8 mb-7
      lg:px-8 lg:gap-8 lg:mb-20">
        <div className="col-span-2 w-full bg-[url(/public/vrbanner_1_sm.webp)]  bg-cover bg-right rounded-2xl overflow-hidden pb-10
        md:bg-[url(/public/vrbanner_1_md.webp)]
        lg:bg-[url(/public/vrbanner_1_lg.webp)] lg:col-span-1">
          {/* style={{ backgroundImage: 'url(/public/vrbanner_1_lg.webp)' }} */}
          <div className="w-full p-8 h-[560px] flex flex-col justify-start items-center
          md:w-1/2 md:h-auto md:items-start md:p-6]
          ">
            <p className="text-xs rounded-md px-2 py-0.5 bg-white text-violet-700 inline-block mb-2">
              New low price
            </p>
            <VRCard {...VRCard_1}/>
          </div>
        </div>

        <div className="col-span-2 bg-[url(/public/vrbanner_2_sm.webp)] w-full bg-cover bg-right rounded-2xl overflow-hidden pb-10
        md:bg-[url(/public/vrbanner_2_md.webp)]
        lg:bg-[url(/public/vrbanner_2_lg.webp)] lg:col-span-1">
          <div className="w-full p-8 h-[560px] flex flex-col justify-start items-center
          md:w-1/2 md:h-auto md:items-start md:p-6]
          ">
            <VRCard {...VRCard_2}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VRBanner