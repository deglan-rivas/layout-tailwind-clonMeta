import Bag from "../../icons/Bag"
import ChevronDown from "../../icons/ChevronDown"
import User from "../../icons/User"
import BurgerMenu from '../../icons/BurgerMenu'
import Search from '../../icons/Search'

import Navbar_meta from '../../../public/navbar_meta.svg'

const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <BurgerMenu className="w-6 h-6 lg:hidden"/>
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
    <div className="flex items-center gap-4">
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
    <section className="bg-white text-sm sticky top-0 border-b border-b-gray-300">
      <nav className="max-w-[1380px] mx-auto w-full px-8 flex justify-between items-center py-5">
        <NavbarLeft/>

        <NavbarRight/>
      </nav>
    </section>
  )
}

export default Navbar