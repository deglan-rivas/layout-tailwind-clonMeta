import Coin from '../../icons/Coin.jsx'
import Truck from '../../icons/Truck.jsx'
import Warranty from '../../icons/Warranty.jsx'

const Topbar = () => {
  return (
    <section className="bg-[#304755]">
      <div className="max-w-[1380px] mx-auto flex gap-6 justify-center text-[#f2ebe9] text-xs py-2 font-medium">
        <div className="flex items-center gap-1">
          <Truck/>
          <p>Free delivery</p>
        </div>

        <div className="flex items-center gap-1">
          <Coin/>
          <p>Worry-free trial</p>
        </div>

        <div className="flex items-center gap-1">
          <Warranty/>
          <p>Warranty</p>
        </div>
      </div>
    </section>
  )
}

export default Topbar