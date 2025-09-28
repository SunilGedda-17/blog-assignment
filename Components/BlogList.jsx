import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {
  const [menu, setMenu] = useState("All")
  const [blogs, setBlogs] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs || [])
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const filteredByCategory = blogs.filter(item => menu === "All" ? true : item.category === menu)

  const filteredBlogs = searchTerm.trim() === ""
    ? filteredByCategory
    : filteredByCategory.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
    <div>
      {/* Category Buttons */}
      <div className='flex justify-center gap-6 my-10'>
        {["All", "Technology", "Startup", "Lifestyle"].map(cat => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={menu === cat ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className='flex justify-center mb-10'>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='pl-4 py-3 border border-black shadow-inner shadow-black/30 rounded-md w-[300px] sm:w-[400px] outline-none'
        />
      </div>

      {/* Blog Items */}
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item, index) => (
            <BlogItem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              date={item.date} 
            />
          ))
        ) : (
          <p className='text-center w-full text-lg font-semibold text-gray-700'>
            No blogs found for this search
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogList
