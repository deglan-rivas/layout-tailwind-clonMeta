import reality_headset from '../../../public/blog_1.webp'
import glasses_collection from '../../../public/blog_2.webp'
import keynote_recap from '../../../public/blog_3.webp'

import ChevronDown from '../../icons/ChevronDown.jsx'

const BlogCard = ({ image, title }) => {
  return (
    <div className='w-1/3 min-w-72'>
      <img src={image} alt="blog_reality_headset" 
        className='w-full object-cover mb-6'
      />
      <h4 className='text-xl 
      md:text-2xl
      lg:text-[28px]'>
        {title}
      </h4>
    </div>
  )
}

const Blog = () => {
  return (
    <section>
      <div className='max-w-[1380px] mx-auto w-full px-4 mb-36
      md:mb-44
      lg:px-8 lg:mb52'>
        <div className="flex mb-6 gap-4">
        <ChevronDown className="w-6 h-6"/>
          <h3 className='text-lg'>
            Latest news
          </h3>
        </div>

        <div className="flex gap-8 justify-between overflow-x-auto">
          <BlogCard image={reality_headset} title="Meta Quest 3: The First Mass-Market Mixed Reality Headset"/>
          <BlogCard image={glasses_collection} title="Introducing the Next-Generation Ray-Ban | Meta Smart Glasses Collection "/>
          <BlogCard image={keynote_recap} title="Meta Connect 2023 Keynote Recap"/>
        </div>
      </div>
    </section>
  )
}

export default Blog