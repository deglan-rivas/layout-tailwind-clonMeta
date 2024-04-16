const Newsletter = () => {
  return (
    <section>
      <div className="max-w-[1500px] mx-auto px-4 mb-28 text-sm text-gray-600
      md:mb-32
      lg:px-8 lg:mb-36">
        <div className="grid grid-cols-6">
          <div className="uppercase col-span-6 mb-4
          md:col-span-3
          lg:col-span-2">
            Keep your experience up to date
          </div>
          <div className="col-span-6
          md:col-span-3
          lg:col-span-4">
            <form className="flex justify-between items-center gap-3 mb-4 flex-wrap">
              <input 
                type="text"
                placeholder="Get news and updates from Meta"
                className="basis-full px-4 py-6 border border-gray-300 rounded-md text-ellipsis
                placeholder:text-lg placeholder:text-gray-600
                focus:outline-blue-400 focus:rounded-none
                sm:flex-1"
              />
              <button
                className="basis-full px-7 py-3 font-medium rounded-full border-2 border-gray-300 cursor-not-allowed
                sm:basis-auto"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <p className="text-xs mb-2">
              By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Meta about Meta’s existing and future products and services.  
            </p>

            <p className="text-xs mb-2">
              You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages. 
            </p>

            <p className="text-xs mb-2">
              Your subscription is subject to the <a href="#" className="underline text-blue-600 hover:text-blue-500">Terms</a> and <a href="#" className="underline text-blue-600 hover:text-blue-500">Privacy Policy</a>. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter