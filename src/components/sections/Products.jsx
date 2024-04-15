import meta_quest from '../../../public/products_1.webp'
import accessories from '../../../public/products_2.webp'
import mixed_reality from '../../../public/products_3.webp'
import ray_ban from '../../../public/products_4.webp'

const Product = ({image, title}) =>{
  return (
    <div className="basis-1/2 flex flex-col justify-between items-center h-60 
    sm:basis-1/4 sm:h-80">
      <img src={image} alt="products_meta_quest" 
        className='w-48 mb-2
        sm:w-64 sm:mb-2'
      />
      <p className="text-lg mb-6 w-36 text-center font-medium
      sm:mb-6">
        {title}
      </p>
      <a href="#"
        className='text-xs py-3 px-7 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
      >
        Shop now
      </a>
    </div>
  )
}

const Products = () => {
  return (
    <section>
      <div className="max-w-[1380px] mx-auto w-full px-8 flex flex-col items-center mb-14
      sm:mb-32">
        <h2 className="text-4xl mb-4
        sm:text-5xl">
          Shop Meta products
        </h2>
        <p className="w-3/4 text-center mb-12 text-gray-600
        sm:w-full">
          The future of virtual reality, mixed reality and smart glasses is here.
        </p>
        <div className="flex flex-wrap
        sm:flex-nowrap">
          <Product
            image={meta_quest}
            title="Meta Quest"
          />

          <Product
            image={accessories}
            title="Meta Quest accesories"
          />

          <Product
            image={mixed_reality}
            title="Meta Quest mixed reality"
          />

          <Product
            image={ray_ban}
            title="Ray-Ban | Meta smart glasses"
          />

        </div>
      </div>
    </section>
  )
}

export default Products