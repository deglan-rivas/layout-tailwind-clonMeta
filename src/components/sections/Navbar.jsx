import Bag from "../../icons/Bag"
import ChevronDown from "../../icons/ChevronDown"
import User from "../../icons/User"

import Navbar_meta from '../../../public/navbar_meta.svg'

const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <img src={Navbar_meta} alt="navbar_meta" 
        className="w-16"
      />

      <a href="#" className="flex items-center gap-1 group">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Meta Quest
        </p>
        <ChevronDown/>
      </a>

      <a href="#" className="flex items-center gap-1 group">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Ray-Ban | Meta
        </p>
        <ChevronDown/>
      </a>

      <a href="#" className="flex items-center gap-1 group">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Apps and games
        </p>
        <ChevronDown/>
      </a>
    </div>
  )
}

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="#" className="group">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          About Meta
        </p>
      </a>

      <a href="#" className="flex items-center gap-1 group">
        <p className="group-hover:underline group-hover:decoration-blue-500  group-hover:underline-offset-4">
          Support
        </p>
        <ChevronDown/>
      </a>

      <div className="w-50 cursor-pointer px-5 py-3 flex justify-center items-center gap-2 border rounded-md border-gray-300">
        <svg viewBox="0 0 24 24" fill="currentColor" className=" w-5 h-5" role="img" aria-label="Search">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675zM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z">
          </path>
        </svg>
        <p className="text-sm text-gray-400">
          Seach Meta Store
        </p>
      </div>

      <Bag/>

      <User/>
    </div>
  )
}

const Navbar = () => {
  return (
    <section className="bg-white text-sm sticky top-0">
      <nav className="max-w-[1380px] mx-auto w-full px-8 flex justify-between items-center py-5">
        <NavbarLeft/>

        <NavbarRight/>
      </nav>
    </section>
  )
}

export default Navbar