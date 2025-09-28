import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {

  const [email,setEmail] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email',formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28 font-sans'>
      {/* Header Logo */}
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='' className='w-[110px] sm:w-auto'/>
      </div>

      {/* Text Section */}
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-bold tracking-wide'>NandSun Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-sm sm:text-base leading-relaxed'>
         Blogs is a space to explore ideas, share knowledge, and stay updated with the latest trends.
        Whether you’re a student, professional, or someone curious to learn,
         blogs aim to simplify complex topics and present them in a way that’s easy to understand.
        </p>

        
        
      </div>
    </div>
  )
}

export default Header
