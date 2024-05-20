import Hero_poster from '../../../public/Hero_poster.webp';
import Hero_mp4 from '../../../public/Hero_video.mp4';
import Hero_webm from '../../../public/Hero_video.webm';

import ChevronRight from "../../icons/ChevronRight";

import Pause from '@/icons/Pause';
import Play from '@/icons/Play';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  })

  return (
    <section className="min-h-80
    lg:min-h-[540px] lg:bg-[url('')] lg:relative">
      <div className="max-w-[1500px] mx-auto w-full px-4 py-9
      lg:px-8 lg:py-20 lg:z-10 lg:absolute lg:h-[540px] lg:inset-x-0">
        <div className="w-full
        md:max-w-lg
        lg:max-w-lg lg:text-white">
          <p className="text-xs font-normal text-violet-600 rounded-md px-2 py-0.5 bg-pink-50 inline-block mb-4">
            Special offer
          </p>
          <h3 className="text-4xl mb-4 text-black font-medium max-w-md
          md:text-5xl
          lg:text-6xl lg:mb-8 lg:text-white">
            Expand your world with Meta Quest 3
          </h3>
          <p className="mb-6 text-lg tracking-wide text-gray-600 text-center
          lg:text-white lg:mb-10 lg:text-left">
            Mixed reality starting at $499.99 USD
          </p>

          <div className="flex gap-4">
            <a href="#"
              className="border-2 border-transparent px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full inline-flex justify-center items-center"
            >
              Add to bag
            </a>
            <a href="#"
              className="py-2 flex items-center gap-2 group"
            >
              <div className="bg-white border border-gray-400 rounded-full">
                <ChevronRight className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-blue-600/80 border-b border-b-transparent group-hover:border-b-blue-600 transition-colors duration-500">
                Learn more
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* usar un children para meter los source y media queries de calidad, luego dibujar el pause y play, y finalmente vincular controles con el .pause y .play ez https://react.dev/learn/synchronizing-with-effects
descargar el poster
preguntar a chatgpt si se puede usar el object cover fit con videos o solo con imagenes  y darle w:h - 2:1
escribirlo en notion
*/}
      <div className="relative w-full lg:z-0 lg:absolute">
        {/* agrega controls para mostrar los controles como dice w3schools */}
        <video ref={ref} className="w-full object-cover object-center max-h-[540px]" data-automation="VideoPlayer" playsInline loop={"loop"} muted autoPlay poster={Hero_poster} preload="auto" aria-label="video-player" controlsList="nodownload">
          <source src={Hero_webm} type="video/webm" />
          <source src={Hero_mp4} type="video/mp4" />

        </video>

        <button className="hover:brightness-150 hover:ring-inset hover:ring-1 absolute right-12 bottom-12 translate-x-1/2 translate-y-1/2 w-8 h-8 flex justify-center items-center bg-gray-500/20 text-white border border-white rounded-full
        md:right-8 md:bottom-8"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying
            ? <Pause />
            : <Play />
          }
        </button>
      </div>

      <div className='hidden lg:block text-white lg:bg-black/85 lg:z-15 lg:absolute lg:w-full lg:h-[540px]'>

      </div>

      <button className="hidden z-20 hover:brightness-150 hover:ring-inset hover:ring-1 absolute right-8 bottom-8 translate-x-1/2 translate-y-1/2 w-8 h-8 lg:flex justify-center items-center bg-gray-500/20 text-white border border-white rounded-full"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying
          ? <Pause />
          : <Play />
        }
      </button>

    </section>
  )
}

export default Hero