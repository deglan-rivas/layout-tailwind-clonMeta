import meta_quest from '../../../public/products_1.webp'
import accessories from '../../../public/products_2.webp'
import mixed_reality from '../../../public/products_3.webp'
import ray_ban from '../../../public/products_4.webp'

const Product = ({image, title}) =>{
  return (
    <div className="basis-[49%] flex flex-col justify-between items-center h-60
    md:h-80
    lg:basis-1/4 lg:h-64">
      <img src={image} alt="products_meta_quest" 
        className='w-4/5 mb-2
        md:mb-2 md:w-3/5
        lg:w-3/5'
      />
      <p className="text-lg mb-6 w-36 text-center font-medium
      md:mb-6">
        {title}
      </p>
      <a href="#"
        className='text-sm py-3 px-7 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
      >
        Shop now
      </a>
    </div>
  )
}

const Products = () => {
  return (
    <section>
      <div className="max-w-[1500px] mx-auto w-full px-4 flex flex-col items-center mb-14
      md:mb-24
      lg:px-8 lg:mb-32">
        <h2 className="text-3xl mb-4 font-medium
        md:text-4xl
        lg:text-5xl">
          Shop Meta products
        </h2>
        <p className="w-3/4 text-center mb-8 text-gray-600
        md:w-full md:mb-12
        lg:mb-20">
          The future of virtual reality, mixed reality and smart glasses is here.
        </p>
        <div className="flex flex-wrap gap-x-1 gap-y-12
        md:gap-y-24
        lg:gap-x-0 lg:flex-nowrap">
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