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
      <h3 className="text-4xl mb-2">
        {title}
      </h3>
      <p className="mb-6 text-sm">
        {content}
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        <a href="#"
          className="px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full flex justify-center items-center"
        >
          Add to bag
        </a>
        <a href="#"
          className="py-2 flex items-center gap-2 group"
        >
          <div className="bg-white border border-gray-400 rounded-full">
            <ChevronDown w={6}/>
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
    <section className="bg-gray-100">
      <div className="max-w-[1380px] mx-auto w-full px-8 grid grid-cols-2 gap-6 py-8 mb-20">
        <div className="col-span-2 w-full bg-[url(/public/vrbanner_1_sm.webp)] md:bg-[url(/public/vrbanner_1_md.webp)] lg:bg-[url(/public/vrbanner_1_lg.webp)] bg-cover bg-right rounded-2xl overflow-hidden pb-10
        md:col-span-1">
          {/* style={{ backgroundImage: 'url(/public/vrbanner_1_lg.webp)' }} */}
          <div className="w-1/2 p-8">

            <p className="text-xs rounded-md px-2 py-0.5 bg-white inline-block mb-2">
              New low price
            </p>
            <VRCard {...VRCard_1}/>
          </div>
        </div>

        <div className="col-span-2 bg-[url(/public/vrbanner_2_lg.webp)] w-full bg-cover bg-right rounded-2xl overflow-hidden pb-10
        md:col-span-1">
          <div className="w-1/2 p-8">
            <VRCard {...VRCard_2}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VRBanner