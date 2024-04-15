const Newsletter = () => {
  return (
    <section>
      <div className="max-w-[1380px] mx-auto px-4 mb-32 text-sm text-gray-600
      sm:px-8">
        <div className="grid grid-cols-3">
          <div className="uppercase col-span-3 mb-4
          sm:col-span-1">
            Keep your experience up to date
          </div>
          <div className="col-span-3 
          sm:col-span-2">
            <form className="flex justify-between items-center gap-3 mb-4 flex-wrap">
              <input 
                type="text"
                placeholder="Get news and updates from Meta"
                className="basis-full px-4 py-6 border border-gray-300 rounded-md
                placeholder:text-lg placeholder:text-gray-600
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