import Bag from "../../icons/Bag"
import ChevronDown from "../../icons/ChevronDown"
import User from "../../icons/User"
import BurgerMenu from '../../icons/BurgerMenu'
import Search from '../../icons/Search'
import Close from "@/icons/Close"

import Navbar_meta from '../../../public/navbar_meta.svg'
import Bag_1 from '../../../public/bag_1.webp'
import Bag_3 from '../../../public/bag_3.webp'
import Bag_4 from '../../../public/bag_4.webp'
import Bag_5 from '../../../public/bag_5.webp'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import ChevronRight from "@/icons/ChevronRight"
import Glasses from "@/icons/Glasses"
import Headphones from "@/icons/Headphones"

const linksMetaQuest = {
  title: 'Meta Quest',
  anchors: [
    'Meta Quest overview',
    'Meta Quest 3',
    'Meta Quest 2',
    'Meta Quest Pro',
    'Compare devices',
    'Accesories',
    'Meta Qarranty Plus',
    'Gift cards',
  ]
}

const linksRayBan = {
  title: 'Ray-Ban | Meta',
  anchors: [
    'Ray-Ban | Meta overview',
    'Shop all',
    'Wayfarer',
    'Headliner',
  ]
}

const linksAppsGames = {
  title: 'Apps and games',
  anchors: [
    'Shop all',
    'Social',
    'Gaming',
    'Fitness',
    'Entertainment',
    'Productivity',
    'Mixed reality',
    'Meta Quest+',
  ]
}

const DrawerBurgerMenu = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button className="bg-white hover:bg-gray-100 p-2 group lg:hidden">
          <BurgerMenu className="w-6 h-6 text-black group-hover:text-blue-500"/>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="lg:hidden left-0 right-5 inset-y-0 mt-0 overflow-hidden">
        <div className="mx-auto w-full bg-transparent border-b border-b-gray-300">
          <div className="flex justify-between py-5">
            <div className="basis-full flex justify-center">
              <img src={Navbar_meta} alt="navbar_meta" 
                className="w-16"
              />
            </div>
            <DrawerClose asChild className="basis-auto">
              <Button className="bg-transparent text-black hover:bg-transparent hover:text-blue-500 p-0 px-4 h-auto">
                <Close className={"w-6 h-6"}/>
              </Button>
            </DrawerClose>
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible defaultValue="item-0" className="col-span-3 px-4
          ">
            {
              [
              linksMetaQuest,
              linksRayBan,
              linksAppsGames
              ].map((links, index) => {
                return (
                  <AccordionItem key={`item-${index}`} value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="hover:no-underline text-lg font-normal">
                      {links.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light pb-4 pt-0 space-y-4">
                      {
                        links.anchors.map((anchor, index) => {
                          return (
                            <a href="#"
                              className="block px-4"
                              key={index}
                              >
                              {anchor}
                            </a>
                          )
                        })
                      }
                    </AccordionContent>
                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const DrawerUser = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button className="bg-white hover:bg-gray-100 p-2 group">
          <User className={"w-6 h-6 text-black group-hover:text-blue-500"}/>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="left-0 right-5 inset-y-0 mt-0 overflow-hidden
      lg:w-[670px]">
        <div className="mx-auto w-full bg-transparent border-b border-b-gray-300
        lg:border-b-0">
          <div className="flex justify-between py-5
          lg:px-12 lg:py-14">
            <div className="basis-full flex justify-center
            lg:justify-between">
              <img src={Navbar_meta} alt="navbar_meta" 
                className="w-16 
                lg:hidden"
              />
              <h3 className="hidden text-2xl
              lg:block">
                Meta account
              </h3>
            </div>
            <DrawerClose asChild className="basis-auto">
              <Button className="bg-transparent text-black hover:bg-transparent hover:text-blue-500 p-0 px-4 h-auto">
                <Close className={"w-6 h-6"}/>
              </Button>
            </DrawerClose>
          </div>
        </div>

        <div className="border-b border-b-gray-300 px-4 py-6 space-y-4 mb-3 w-full
        lg:w-[450px] lg:mx-auto lg:border-b-0 lg:space-y-6">
          <img src={Navbar_meta} alt="navbar_meta" 
            className="w-32 mx-auto hidden
            lg:block"
          />
          <h3 className="text-lg
          lg:text-2xl lg:text-center lg:py-4">
            Log into your Meta account
          </h3>
          <p className="text-gray-600">
            With a Meta account, you can
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Bag className={"w-7 h-7"}/>
            Manage orders and returns
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Glasses className={"w-7 h-7"}/>
            Explore recommended products, apps & games
          </p>
          <p className="flex items-center gap-2 text-gray-600 pb-4">
            <Headphones className={"w-7 h-7"}/>
            Get personalized customer support
          </p>
          <button className="w-full bg-blue-600 text-white rounded-full px-4 py-4 text-center text-sm font-medium">
            Sign up or log into Meta account
          </button>
          <a href="#"
            className="text-blue-600 hover:text-blue-500 block text-center text-sm"
          >
            Learn more about Meta accounts
          </a>
        </div>

        <div className="px-4 py-3 text-lg flex justify-between items-center
        lg:hidden">
          <a href="#">About Meta</a>
          <ChevronRight className={"w-6 h-6"}/>
        </div>

        <div className="px-4 py-3 text-lg flex justify-between items-center
        lg:hidden">
          Support
          <ChevronRight className={"w-6 h-6"}/>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const BagCard = ({children, image, addedInfo, isShown}) => {
  return (
    <div className="min-w-44 p-2 border-x border-gray-300">
      <p className={`text-xs py-1 px-2 rounded-md inline-block text-violet-600 bg-pink-100 mb-0 ${isShown ? 'visible' : 'invisible'}`}>
        {isShown ? addedInfo : "no added info"}
      </p>
      <div className="h-72 flex flex-col justify-between
      md:h-80">
        <img src={image} alt="bag_image"  className="w-4/5 mx-auto
        md:w-full"/>
        <div className="text-sm mb-6">
          {children}
        </div>
        <button className="font-medium px-4 py-3 mx-2 text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-full">
          Add to bag
        </button>
      </div>
    </div>
  )
}

const DrawerBag = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="bg-white hover:bg-gray-100 p-2 group">
          <Bag className={"w-6 h-6 text-black group-hover:text-blue-500"}/>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="left-5 inset-y-0 mt-0 overflow-hidden
      md:left-40
      lg:w-[670px] lg:left-auto">
        <div className="px-4
        md:px-8">
          <div className="flex justify-between pt-5 pb-3
          md:pt-10
          lg:py-12">
            <div className="basis-full">
              <p className="text-xl text-gray-600
              md:text-2xl">
                Your bag is empty
              </p>
            </div>
            <DrawerClose asChild className="basis-auto">
              <Button className="bg-transparent text-black hover:bg-transparent hover:text-blue-500 p-0 px-4 h-auto">
                <Close className={"w-6 h-6"}/>
              </Button>
            </DrawerClose>
          </div>

          <p className="text-sm text-gray-600 mb-6
          md:mb-8
          lg:mb-10">
            Country/region: 
            <a href="#"
              className="text-blue-600 underline pl-2"
            >
              United States
            </a>
          </p>

          <p className="text-xl mb-4
          md:mb-6 md:text-2xl
          lg:mb-8">
            People also bought
          </p>

          <div className="border-y border-gray-300 rounded-md flex overflow-x-scroll gap-2">
            <BagCard isShown={true} addedInfo={"Recommended"} image={Bag_1}>
              <p>Meta Quest 3 512GB</p>
              <p className="font-medium">$649.99</p>
            </BagCard>

            <BagCard isShown={false} addedInfo={""} image={Bag_1}>
              <p>Meta Quest 3 128GB</p>
              <p className="font-medium">$649.99</p>
            </BagCard>

            <BagCard isShown={true} addedInfo={"New low price"} image={Bag_3}>
              <p>Meta Quest 2 128GB</p>
              <p className="font-medium">$199.99</p>
              <p className="line-through text-gray-500">$249.99</p>
            </BagCard>

            <BagCard isShown={false} addedInfo={""} image={Bag_4}>
              <p>Ray-Ban Meta Wayfarer, Shiny Black / G15 Green, Standard</p>
              <p className="font-medium">$299.99</p>
            </BagCard>

            <BagCard isShown={false} addedInfo={""} image={Bag_5}>
              <p>Meta Quest Pro</p>
              <p className="font-medium">$999.99</p>
            </BagCard>

            <BagCard isShown={false} addedInfo={""} image={Bag_4}>
              <p>Ray-Ban Meta Headliner, Shiny Black / G15 Green Polarized, Standard</p>
              <p className="font-medium">$329.99</p>
            </BagCard>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

// const DrawerMetaQuest = () => {
//   return (
//     <Drawer direction="top">
//       <DrawerTrigger asChild>
//         <Button className="bg-white hover:bg-gray-100 p-2 group data-[state=open]:bg-gray-200 [&>svg]:data-[state=open]:text-blue-400">
//           <Bag className={"w-6 h-6 text-black group-hover:text-blue-500"}/>
//         </Button>
//       </DrawerTrigger>
//       <DrawerContent className="inset-x-0 h-auto top-[90px] bottom-20 mt-0 after:content-none rounded-md
//       " overlayClass={"inset-x-0 top-40 bottom-10"}>
//         <div className="px-4
//         md:px-8">
//           <div className="flex justify-between pt-5 pb-3
//           md:pt-10
//           lg:py-12">
//             <div className="basis-full">
//               <p className="text-xl text-gray-600
//               md:text-2xl">
//                 Your bag is empty
//               </p>
//             </div>
//             <DrawerClose asChild className="basis-auto">
//               <Button className="bg-transparent text-black hover:bg-transparent hover:text-blue-500 p-0 px-4 h-auto">
//                 <Close className={"w-6 h-6"}/>
//               </Button>
//             </DrawerClose>
//           </div>

//           <p className="text-sm text-gray-600 mb-6
//           md:mb-8
//           lg:mb-10">
//             Country/region: 
//             <a href="#"
//               className="text-blue-600 underline pl-2"
//             >
//               United States
//             </a>
//           </p>

//           <p className="text-xl mb-4
//           md:mb-6 md:text-2xl
//           lg:mb-8">
//             People also bought
//           </p>

//           <div className="border-y border-gray-300 rounded-md flex overflow-x-scroll gap-2">
//             <BagCard isShown={true} addedInfo={"Recommended"} image={Bag_1}>
//               <p>Meta Quest 3 512GB</p>
//               <p className="font-medium">$649.99</p>
//             </BagCard>

//             <BagCard isShown={false} addedInfo={""} image={Bag_1}>
//               <p>Meta Quest 3 128GB</p>
//               <p className="font-medium">$649.99</p>
//             </BagCard>

//             <BagCard isShown={true} addedInfo={"New low price"} image={Bag_3}>
//               <p>Meta Quest 2 128GB</p>
//               <p className="font-medium">$199.99</p>
//               <p className="line-through text-gray-500">$249.99</p>
//             </BagCard>

//             <BagCard isShown={false} addedInfo={""} image={Bag_4}>
//               <p>Ray-Ban Meta Wayfarer, Shiny Black / G15 Green, Standard</p>
//               <p className="font-medium">$299.99</p>
//             </BagCard>

//             <BagCard isShown={false} addedInfo={""} image={Bag_5}>
//               <p>Meta Quest Pro</p>
//               <p className="font-medium">$999.99</p>
//             </BagCard>

//             <BagCard isShown={false} addedInfo={""} image={Bag_4}>
//               <p>Ray-Ban Meta Headliner, Shiny Black / G15 Green Polarized, Standard</p>
//               <p className="font-medium">$329.99</p>
//             </BagCard>
//           </div>
//         </div>
//       </DrawerContent>
//     </Drawer> 
//   )
// }

const DropdownMetaQuest = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="group">
          <a href="#" className="items-center gap-0 hidden lg:flex">
            <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap group-data-[state=open]:underline group-data-[state=open]:decoration-blue-500  group-data-[state=open]:underline-offset-4">
              {linksMetaQuest.title}
            </p>
            <ChevronDown className={"w-6 h-6 group-data-[state=open]:-rotate-180 group-hover:rotate-0"}/>
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen translate-y-6 bg-black/70 h-screen p-0 border-0 border-t border-gray-300 rounded-none">
          <div className="py-16 bg-white">
            <div className="ml-28 mr-auto w-[500px] grid grid-cols-2">
              {
                linksMetaQuest.anchors.map((link, index) => (
                  <DropdownMenuItem key={index} className="bg-white rounded-none text-xl mb-2 underline-offset-4 focus:bg-transparent hover:underline">
                    {link}
                  </DropdownMenuItem>
                ))
              }
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

const DropdownRayBan = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="group">
          <a href="#" className="items-center gap-0 hidden lg:flex">
            <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap group-data-[state=open]:underline group-data-[state=open]:decoration-blue-500  group-data-[state=open]:underline-offset-4">
              {linksRayBan.title}
            </p>
            <ChevronDown className={"w-6 h-6 group-data-[state=open]:-rotate-180 group-hover:rotate-0"}/>
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen translate-y-6 bg-black/70 h-screen p-0 border-0 border-t border-gray-300 rounded-none">
          <div className="py-16 bg-white">
            <div className="ml-28 mr-auto w-[500px] grid grid-cols-1">
              {
                linksRayBan.anchors.map((link, index) => (
                  <DropdownMenuItem key={index} className="bg-white rounded-none text-xl mb-2 underline-offset-4 focus:bg-transparent hover:underline">
                    {link}
                  </DropdownMenuItem>
                ))
              }
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

const DropdownAppsGames = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="group">
          <a href="#" className="items-center gap-0 hidden lg:flex">
            <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap group-data-[state=open]:underline group-data-[state=open]:decoration-blue-500  group-data-[state=open]:underline-offset-4">
              {linksAppsGames.title}
            </p>
            <ChevronDown className={"w-6 h-6 group-data-[state=open]:-rotate-180 group-hover:rotate-0"}/>
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen translate-y-6 bg-black/70 h-screen p-0 border-0 border-t border-gray-300 rounded-none">
          <div className="py-16 bg-white">
            <div className="ml-28 mr-auto w-[500px] grid grid-cols-2">
              {
                linksAppsGames.anchors.map((link, index) => (
                  <DropdownMenuItem key={index} className="bg-white rounded-none text-xl mb-2 underline-offset-4 focus:bg-transparent hover:underline">
                    {link}
                  </DropdownMenuItem>
                ))
              }
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-3
    lg:gap-6">
      {/* <BurgerMenu className="w-6 h-6 lg:hidden hover:text-blue-500"/> */}
      <DrawerBurgerMenu/>
      <img src={Navbar_meta} alt="navbar_meta" 
        className="w-16 "
      />

      {/* <a href="#" className="items-center gap-0 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap">
          Meta Quest
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a> */}
      <DropdownMetaQuest/>

      {/* <a href="#" className="items-center gap-0 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap">
          Ray-Ban | Meta
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a> */}
      <DropdownRayBan/>

      {/* <a href="#" className="items-center gap-0 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap">
          Apps and games
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a> */}
      <DropdownAppsGames/>
    </div>
  )
}

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-6">
      <a href="#" className="group hidden lg:block">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap">
          About Meta
        </p>
      </a>

      <a href="#" className="items-center gap-1 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Support
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a>

      <div className="w-50 cursor-pointer px-5 py-3 justify-center items-center gap-2 border rounded-md border-gray-300 hidden lg:flex">
        <Search className={"w-6 h-6"}/>
        <p className="text-sm text-gray-400">
          Seach Meta Store
        </p>
      </div>

      <Search className={"w-6 h-6 lg:hidden"}/>
      <DrawerBag/>
      <DrawerUser/>
    </div>
  )
}

const Navbar = () => {
  return (
    <section className="bg-white text-sm sticky z-10 top-0 border-b border-b-gray-300">
      <nav className="max-w-[1500px] mx-auto w-full pl-2 pr-4 flex justify-between items-center py-4
      lg:px-8">
        <NavbarLeft/>

        <NavbarRight/>
      </nav>
    </section>
  )
}

export default Navbar