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


const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-3
    lg:gap-6">
      {/* <BurgerMenu className="w-6 h-6 lg:hidden hover:text-blue-500"/> */}
      <DrawerBurgerMenu/>
      <img src={Navbar_meta} alt="navbar_meta" 
        className="w-16 "
      />

      <a href="#" className="items-center gap-0 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap">
          Meta Quest
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a>

      <a href="#" className="items-center gap-0 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap">
          Ray-Ban | Meta
        </p>
        <ChevronDown className={"w-6 h-6"}/>
      </a>

      <a href="#" className="items-center gap-0 group hidden lg:flex">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4 text-nowrap">
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
      <Bag className={"w-6 h-6"}/>
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