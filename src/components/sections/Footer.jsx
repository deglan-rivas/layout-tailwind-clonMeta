import fb from '../../../public/footer_logo_fb.svg'
import threads from '../../../public/footer_logo_threads.svg'
import insta from '../../../public/footer_logo_insta.svg'
import x from '../../../public/footer_logo_x.svg'
import youtube from '../../../public/footer_logo_yt.svg'

import navbar_meta from '../../../public/navbar_meta.svg'

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-300'>
    <div className="max-w-[1380px] mx-auto text-sm text-gray-600">
      <div className="px-4 py-12 grid grid-cols-3 mb-24
      sm:px-8">
        <div className="col-span-3 sm:col-span-1">
          <img src={navbar_meta} alt="footer_meta" 
          className="w-24 mb-8
          sm:mb-12"
          />
          <div className="flex gap-8 mb-12">
            <a href="#">
              <img src={fb} alt="footer_logo_fb" className='hover:saturate-[10]'/>
            </a>

            <a href="#">
              <img src={threads} alt="footer_logo_threads" className='hover:saturate-[10]'/>
            </a>

            <a href="#">
              <img src={insta} alt="footer_logo_insta" className='hover:saturate-[10]'/>
            </a>

            <a href="#">
              <img src={x} alt="footer_logo_x" className='hover:saturate-[10]'/>
            </a>

            <a href="#">
              <img src={youtube} alt="footer_logo_youtube" className='hover:saturate-[10]'/>
            </a>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2 grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className='flex flex-col space-y-1 mb-8'>
              <h4 className="font-medium text-gray-600">
                Site terms and policies
              </h4>
              <a href="#"
                className="hover:underline"
              >
                Community standards
              </a>
              <a href="#"
                className="hover:underline"
              >
                Privacy policy
              </a>
              <a href="#"
                className="hover:underline"
              >
                Terms
              </a>
              <a href="#"
                className="hover:underline"
              >
                Cookie policy
              </a>
            </div>

            <div className='flex flex-col space-y-1'>
              <h4 className="font-medium text-gray-600">
                Virtual reality
              </h4>
              <a href="#"
                className="hover:underline"
              >
                Shop Meta Quest
              </a>
              <a href="#"
                className="hover:underline"
              >
                Refurbished Meta Quest 2
              </a>
              <a href="#"
                className="hover:underline"
              >
                Meta Warranty Plus
              </a>
              <a href="#"
                className="hover:underline"
              >
                VR for Good
              </a>
              <a href="#"
                className="hover:underline"
              >
                Forums
              </a>
              <a href="#"
                className="hover:underline"
              >
                Referrals
              </a>
              <a href="#"
                className="hover:underline"
              >
                Blog
              </a>
              <a href="#"
                className="hover:underline"
              >
                Creators
              </a>
              <a href="#"
                className="hover:underline"
              >
                Download SDKs
              </a>
              <a href="#"
                className="hover:underline"
              >
                Developers
              </a>
              <a href="#"
                className="hover:underline"
              >
                Made for Meta partner program
              </a>
              <a href="#"
                className="hover:underline"
              >
                Safety information for parents & pre-teens
              </a>
              <a href="#"
                className="hover:underline"
              >
                Meta Quest health & safety information
              </a>
              <a href="#"
                className="hover:underline"
              >
                Meta Quest safety center
              </a>
              <a href="#"
                className="hover:underline"
              >
                Meta for Work
              </a>
              <a href="#"
                className="hover:underline"
              >
                Meta Avatars
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <div className="space-y-1 flex flex-col mb-8">
              <h4 className="font-medium text-gray-600">
                Smart glasses
              </h4>
              <a href="#"
                className="hover:underline"
              >
                Shop Ray-Ban Meta smart glasses
              </a>
              <a href="#"
                className="hover:underline"
              >
                Ray-Ban Stories
              </a>
              <a href="#"
                className="hover:underline"
              >
                Privacy information
              </a>
              <a href="#"
                className="hover:underline"
              >
                Supported countries
              </a>
            </div>

            <div className="space-y-1 flex flex-col mb-8">
              <h4 className="font-medium text-gray-600">
                Support and legal
              </h4>
              <a href="#"
                className="hover:underline"
              >
                Meta Help Center
              </a>
              <a href="#"
                className="hover:underline"
              >
                Order status
              </a>
              <a href="#"
                className="hover:underline"
              >
                Returns
              </a>
              <a href="#"
                className="hover:underline"
              >
                Find a product demo
              </a>
              <a href="#"
                className="hover:underline"
              >
                Legal
              </a>
              <a href="#"
                className="hover:underline"
              >
                Terms of sale
              </a>
            </div>

            <div className="space-y-1 flex flex-col">
              <h4 className="font-medium text-gray-600">
                Our actions
              </h4>
              <a href="#"
                className="hover:underline"
              >
                Data and privacy
              </a>
              <a href="#"
                className="hover:underline"
              >
                Safety and expression
              </a>
              <a href="#"
                className="hover:underline"
              >
                Responsible business practices
              </a>
              <a href="#"
                className="hover:underline"
              >
                Elections
              </a>
              <a href="#"
                className="hover:underline"
              >
                COVID-19 response
              </a>
              <a href="#"
                className="hover:underline"
              >
                Regulations
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <div className='space-y-1 flex flex-col mb-8'>
              <h4 className="font-medium text-gray-600">
                About us
              </h4>
              <a href="#"
                className="hover:underline"
              >
                About Meta
              </a>
              <a href="#"
                className="hover:underline"
              >
                Media gallery
              </a>
              <a href="#"
                className="hover:underline"
              >
                Brand resources
              </a>
              <a href="#"
                className="hover:underline"
              >
                For investors
              </a>
            </div>

            <div className="space-y-1 flex flex-col mb-8">
              <h4 className="font-medium text-gray-600">
                Our community
              </h4>
              <a href="#"
                className="hover:underline"
              >
                Support SMB
              </a>
              <a href="#"
                className="hover:underline"
              >
                Giving together
              </a>
              <a href="#"
                className="hover:underline"
              >
                Social impact
              </a>
            </div>

            <div className="space-y-1 flex flex-col">
              <h4 className="font-medium text-gray-600">
                App support
              </h4>
              <a href="#"
                className="hover:underline"
              >
                Facebook Help Center
              </a>
              <a href="#"
                className="hover:underline"
              >
                Messenger Help Center
              </a>
              <a href="#"
                className="hover:underline"
              >
                Instagram Help Center
              </a>
              <a href="#"
                className="hover:underline"
              >
                WhatsApp Help Center
              </a>
              <a href="#"
                className="hover:underline"
              >
                Workplace Help Center
              </a>
              <a href="#"
                className="hover:underline"
              >
                Meta Verified
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='px-4 py-20 
      sm:px-8'>
        <div className='grid grid-cols-3'>
          <div className='col-span-3 mb-12 
          sm:col-span-1'>
            <a href='#' className='underline'>
              United States (English)
            </a>
          </div>

          <div className='col-span-3 space-y-3 text-xs pt-3
          sm:col-span-2'>
            <p className='uppercase'>
              Meta quest
            </p>
            <p>
              Meta Quest: *Parents:* Important guidance & safety warnings for children’s use here. Meta accounts for ages 10+ on Meta Quest 2 and 3; all other Meta Quest headsets for ages 13+. Certain apps, games and experiences may be suitable for a more mature audience. META QUEST FEATURES, FUNCTIONALITY, AND CONTENT NOTICE: Features, functionality and content are subject to change or withdrawal at any time, may not be available in all areas or languages or may be restricted; may require enabled software or service activation, and additional terms, conditions and/or charges may apply.
            </p>

            <p>
              Certain apps and experiences will be available by winter 2023.
            </p>

            <p className=''>
              META QUEST IMPORTANT SAFETY NOTICE 
              <a href="#" className='text-blue-600 hover:text-blue-500 pl-1 underline'>
                https://www.meta.com/quest/quest-2-facial-interface-recall/.
              </a>
            </p>

            <p className=''>
              Financing Options. You may be offered financing options for your Meta purchases. Learn more
              <a href="#" className='text-blue-600 hover:text-blue-500 pl-1 underline'>
                here.
              </a>
            </p>

            <p>
              *Based on the graphic performance of the Qualcomm Snapdragon XR2 Gen 2 vs XR2 Gen 1 on Meta Quest 2
            </p>

            <p>
              RAY-BAN | META SMART GLASSES
            </p>

            <p>
              Ray-Ban Meta smart glasses require a mobile phone with Android (location services enabled) or iOS operating system, wireless internet access, and account registration. Not compatible with all smartphones. Ray-Ban Meta smart glasses only available in select countries. Features, functionality and content are subject to change or withdrawal at any time. Please visit https://www.meta.com/smart-glasses/#faq for the most up-to-date information. For ages 13 and up only. This product may interfere with personal medical devices. Requires updates to be installed from time to time, including prior to first use. While using Ray-Ban Meta smart glasses, it is always the user's responsibility to comply with any local laws and regulations, especially those relating to privacy and the use of recording devices. Additional account registration, terms and fees may apply.
            </p>

            <p>
              ©2024 Meta.
            </p>
          </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer