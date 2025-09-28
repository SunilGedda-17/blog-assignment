import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/Assets/assets'

const BlogItem = ({ title, description, category, image, id, date }) => {
  // Safely convert date
  const publishDate = date ? new Date(date) : null

  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-gray-900'>
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt='' width={400} height={400} className='border-b border-black object-cover' />
      </Link>

      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>{category}</p>

      <div className="p-5">
        <h5 className='mb-1 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>

        {publishDate && (
          <p className='text-xs text-gray-500 mb-2'>
            Published on: {publishDate.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        )}

        <p className='mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{ "__html": description.slice(0, 120) }}></p>

        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
          Read more <Image src={assets.arrow} className='ml-2' alt='' width={12} />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
