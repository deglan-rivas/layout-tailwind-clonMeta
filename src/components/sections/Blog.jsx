import reality_headset from '../../../public/blog_1.webp'
import glasses_collection from '../../../public/blog_2.webp'
import keynote_recap from '../../../public/blog_3.webp'

const BlogCard = ({ image, title }) => {
  return (
    <div className='w-1/3'>
      <img src={image} alt="blog_reality_headset" 
        className='w-full object-cover mb-6'
      />
      <h4 className='text-2xl font-medium'>
        {title}
      </h4>
    </div>
  )
}

const Blog = () => {
  return (
    <section>
      <div className='max-w-[1380px] mx-auto w-full px-8 mb-52'>
        <div className="flex mb-6 gap-4">
        <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true" className="w-6 h-6" role="img">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3z"></path>
        </svg>
          <h3 className='text-lg'>
            Latest news
          </h3>
        </div>

        <div className="flex gap-8">
          <BlogCard image={reality_headset} title="Meta Quest 3: The First Mass-Market Mixed Reality Headset"/>
          <BlogCard image={glasses_collection} title="Introducing the Next-Generation Ray-Ban | Meta Smart Glasses Collection "/>
          <BlogCard image={keynote_recap} title="Meta Connect 2023 Keynote Recap"/>
        </div>
      </div>
    </section>
  )
}

export default Blog