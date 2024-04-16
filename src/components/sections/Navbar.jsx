import Bag from "../../icons/Bag"
import ChevronDown from "../../icons/ChevronDown"
import User from "../../icons/User"
import BurgerMenu from '../../icons/BurgerMenu'
import Search from '../../icons/Search'
import Close from "@/icons/Close"

import Navbar_meta from '../../../public/navbar_meta.svg'

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
              linksMetaQuest
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
    
    // <Drawer direction="left">
    //   <DrawerTrigger asChild>
    //     <Button className="bg-white hover:bg-gray-100 p-2 group lg:hidden">
    //       <BurgerMenu className="w-6 h-6 text-black group-hover:text-blue-500"/>
    //     </Button>
    //   </DrawerTrigger>
    //   <DrawerContent className="lg:hidden left-0 right-5 inset-y-0 mt-0">
    //     <div className="mx-auto w-full max-w-sm">
    //       <DrawerHeader>
    //         <DrawerTitle>Move Goal</DrawerTitle>
    //         <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    //       </DrawerHeader>
    //       <div className="p-4 pb-0">
    //         <div className="flex items-center justify-center space-x-2">
    //           <div>ga1</div>
    //         </div>
    //         <div className="mt-3 h-[120px]">
    //           <div>ga2</div>
    //         </div>
    //       </div>
    //       <DrawerFooter>
    //         <Button>Submit</Button>
    //         <DrawerClose asChild>
    //           <Button variant="outline">Cancel</Button>
    //         </DrawerClose>
    //       </DrawerFooter>
    //     </div>
    //   </DrawerContent>
    // </Drawer>
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

      <a href="#" className="items-center gap-1 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Meta Quest
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a>

      <a href="#" className="items-center gap-1 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Ray-Ban | Meta
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a>

      <a href="#" className="items-center gap-1 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Apps and games
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a>
    </div>
  )
}

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-6">
      <a href="#" className="group hidden lg:block">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
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
      <Bag className={"w-6 h-6"}/>
      <User className={"w-6 h-6"}/>
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