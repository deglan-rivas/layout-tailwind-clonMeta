import fb from '../../../public/footer_logo_fb.svg'
import threads from '../../../public/footer_logo_threads.svg'
import insta from '../../../public/footer_logo_insta.svg'
import x from '../../../public/footer_logo_x.svg'
import youtube from '../../../public/footer_logo_yt.svg'

import navbar_meta from '../../../public/navbar_meta.svg'

const links_site_terms = {
  title: 'Site terms and policies',
  anchors: [
    'Community standards',
    'Privacy policy',
    'Terms',
    'Cookie policy',
  ]
}

const links_virtual_reality = {
  title: 'Virtual reality',
  anchors: [
    'Shop Meta Quest',
    'Refurbished Meta Quest 2',
    'Meta Warranty Plus',
    'VR for Good',
    'Forums',
    'Referrals',
    'Blog',
    'Creators',
    'Download SDKs',
    'Developers',
    'Made for Meta partner program',
    'Safety information for parents & pre-teens',
    'Meta Quest health & safety information',
    'Meta Quest safety center',
    'Meta for Work',
    'Meta Avatars'
  ]
};

const links_smart_glasses = {
  title: 'Smart glasses',
  anchors: [
    'Shop Ray-Ban Meta smart glasses',
    'Ray-Ban Stories',
    'Privacy information',
    'Supported countries'
  ]
};

const links_support_legal = {
  title: 'Support and legal',
  anchors: [
    'Meta Help Center',
    'Order status',
    'Returns',
    'Find a product demo',
    'Legal',
    'Terms of sale'
  ]
};

const links_our_actions = {
  title: 'Our actions',
  anchors: [
    'Data and privacy',
    'Safety and expression',
    'Responsible business practices',
    'Elections',
    'COVID-19 response',
    'Regulations'
  ]
};

const links_about_us = {
  title: 'About us',
  anchors: [
    'About Meta',
    'Media gallery',
    'Brand resources',
    'For investors'
  ]
};

const links_our_community = {
  title: 'Our community',
  anchors: [
    'Support SMB',
    'Giving together',
    'Social impact'
  ]
};

const links_app_support = {
  title: 'App support',
  anchors: [
    'Facebook Help Center',
    'Messenger Help Center',
    'Instagram Help Center',
    'WhatsApp Help Center',
    'Workplace Help Center',
    'Meta Verified'
  ]
};

const Group_links = ({title, anchors}) => {
  return (
    <>
      <h4 className="font-medium text-gray-600">
        {title}
      </h4>
      {
        anchors.map((anchor, index) => {
          return (
            <a href="#"
              className="hover:underline"
              key={index}
            >
              {anchor}
            </a>
          )
        })
      }
    </>
  )
}

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-300'>
    <div className="max-w-[1500px] mx-auto text-sm text-gray-600">
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
        <div className="col-span-3 grid-cols-3 gap-8 hidden
        sm:grid sm:col-span-2">
          <div className="col-span-1">
            <div className='flex flex-col space-y-1 mb-8'>
              <Group_links {...links_site_terms}/>
            </div>

            <div className='flex flex-col space-y-1'>
              <Group_links title={links_virtual_reality.title} anchors={links_virtual_reality.anchors}/>
            </div>
          </div>

          <div className="col-span-1">
            <div className="space-y-1 flex flex-col mb-8">
              <Group_links title={links_smart_glasses.title} anchors={links_smart_glasses.anchors}/>
            </div>

            <div className="space-y-1 flex flex-col mb-8">
              <Group_links title={links_support_legal.title} anchors={links_support_legal.anchors}/>
            </div>

            <div className="space-y-1 flex flex-col">
              <Group_links title={links_our_actions.title} anchors={links_our_actions.anchors}/>
            </div>
          </div>

          <div className="col-span-1">
            <div className='space-y-1 flex flex-col mb-8'>
              <Group_links title={links_about_us.title} anchors={links_about_us.anchors}/>
            </div>

            <div className="space-y-1 flex flex-col mb-8">
              <Group_links title={links_our_community.title} anchors={links_our_community.anchors}/>
            </div>

            <div className="space-y-1 flex flex-col">
              <Group_links title={links_app_support.title} anchors={links_app_support.anchors}/>
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