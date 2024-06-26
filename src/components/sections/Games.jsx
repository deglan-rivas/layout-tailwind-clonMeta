import roblox from '../../../public/games_1.webp'
import asgard from '../../../public/games_2.webp'
import peacock from '../../../public/games_3.webp'
import supernatural from '../../../public/games_4.webp'
import meta_quest from '../../../public/games_5.webp'

const Game  = ({image, title}) => {
  return (
    <a href='#' className='w-1/5 min-w-72 p-4'>
      <img src={image} alt="game_roblox" 
        className='w-full object-cover mb-4'
      />
      <p className='mb-6 text-2xl'>
        {title}
      </p>
    </a>
  )
}

const Games = () => {
  return (
    <section>
      <div className="max-w-[1500px] mx-auto w-full px-4 flex flex-col items-center mb-16
      md:mb-24
      lg:mb-32">
        <h3 className="text-3xl text-center mb-12 w-60 font-medium
        md:text-4xl md:w-[600px]
        lg:text-5xl lg:w-[730px]">
          Explore games and experiences on Meta Quest
        </h3>
        <a href="#"
          className='text-sm py-3 px-7 mb-12 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
        >
          Browse apps & games
        </a>
        
        <div className='border border-gray-300 divide-x w-full flex overflow-x-auto'>
          <Game image={roblox} title="Roblox"/>
          <Game image={asgard} title="Asgard's Wrath 2"/>
          <Game image={peacock} title="Peacock"/>
          <Game image={supernatural} title="Supernatural"/>
          <Game image={meta_quest} title="Meta Quest +"/>
        </div>
      </div>
    </section>
  )
}

export default Games