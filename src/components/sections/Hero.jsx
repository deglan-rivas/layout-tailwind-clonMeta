import ChevronRight from "../../icons/ChevronRight"

const Hero = () => {
  return (
    <section className="h-[600px] bg-gray-500">
      <div className="max-w-[1230px] mx-auto w-full px-8 pt-20">
        <div className="max-w-lg text-white">
          <p className="text-xs font-normal text-violet-600 rounded-md px-2 py-0.5 bg-white inline-block mb-2">
            Special offer
          </p>
          <h3 className="text-7xl mb-8">
            Expand your world with Meta Quest 3
          </h3>
          <p className="mb-10 text-lg tracking-wide">
            Mixed reality starting at $499.99 USD
          </p>

          <div className="flex gap-4">
            <a href="#"
              className="border-2 border-transparent px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full inline-flex justify-center items-center"
            >
              Add to bag
            </a>
            <a href="#"
              className="py-2 flex items-center gap-2 group"
            >
              <div className="bg-white border border-gray-400 rounded-full">
                <ChevronRight className="w-7 h-7"/>
              </div>
              <p className="text-sm font-semibold text-blue-600/80 border-b border-b-transparent group-hover:border-b-blue-600 transition-colors duration-500">
                Learn more
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero