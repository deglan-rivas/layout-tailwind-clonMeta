const VRBanner = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-[1380px] mx-auto w-full px-8 grid grid-cols-2 gap-6 py-8 mb-20">
        <div className="col-span-1 bg-[url(https://scontent.flim25-1.fna.fbcdn.net/v/t39.8562-6/409969140_949616809866658_2000750513508446204_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f537c7&_nc_ohc=3E5_DKLfkKsAb5bJCH1&_nc_ht=scontent.flim25-1.fna&oh=00_AfDNid75jGprXgyCi2AddJSVjg_A_IXeTkhQOg0hKJDLnQ&oe=661F9A33)] w-full bg-cover bg-right rounded-2xl overflow-hidden pb-10">
          <div className="w-1/2 p-8">

            <p className="text-xs rounded-md px-2 py-0.5 bg-white inline-block mb-2">
              New low price
            </p>
            <h3 className="text-4xl mb-2">
              Get into VR for less with Meta Quest 2
            </h3>
            <p className="mb-6 text-sm">
              Start experiencing the thrill of VR. Now $199.99 USD
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
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-blue-600 group-hover:text-blue-500/80 transition-colors duration-500" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M14.207 11.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.086 12 9.793 9.707a1 1 0 0 1 1.414-1.414l3 3z"></path></svg>
                </div>
                <p className="text-sm font-semibold text-blue-600/80 border-b border-b-transparent group-hover:border-b-blue-600 transition-colors duration-500">
                  Learn more
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-[url(https://scontent.flim15-1.fna.fbcdn.net/v/t39.8562-6/409928241_859710259179463_2105968938206980908_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f537c7&_nc_ohc=O_fvkiY8jz4Ab7DZpHG&_nc_oc=AdjObLjZPjYAOohzKaj87goLHk1M9rLXjdZ8fsGPLcRwPImkMg3xdzMQnyLz1adID2_sE5PfFl-CR0YDJNYFIV8A&_nc_ht=scontent.flim15-1.fna&oh=00_AfDD0JFnIUGdeOyf1HOylx8qJv6wQNPr-BqCpLh-uXFa6A&oe=661FA8EE)] w-full bg-cover bg-right rounded-2xl overflow-hidden pb-10">
          <div className="w-1/2 p-8">
            <h3 className="text-4xl mb-2 pt-7">
              Do more in style with Ray-Ban | Meta
            </h3>
            <p className="mb-6 text-sm">
              Next-generation smart glasses that blend an iconic look with cutting-edge technology.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <a href="#"
                className="px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full flex justify-center items-center"
              >
                Shop all styles
              </a>
              <a href="#"
                className="py-2 flex items-center gap-2 group"
              >
                <div className="bg-white border border-gray-400 rounded-full">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-blue-600 group-hover:text-blue-500/80 transition-colors duration-500" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M14.207 11.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.086 12 9.793 9.707a1 1 0 0 1 1.414-1.414l3 3z"></path></svg>
                </div>
                <p className="text-sm font-semibold text-blue-600/80 border-b border-b-transparent group-hover:border-b-blue-600 transition-colors duration-500">
                  Learn more
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VRBanner