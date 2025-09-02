import { Image, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const Generateimage = () => {

  const imagestyle =['Realastic', 'Ghibli style', 'Anime style', 'Cartoon style' , 'Fantasy style', '3D Style', 'Portrait style']
    
      const [selectedstyle , setSelectedstyle] = useState('Realastic')
      const [input , setInput] = useState('')
      const [publish , setpublish] = useState(false)
      const [loading , setLoading] = useState(false)
      const [content , setContent] = useState('')
      const {getToken} = useAuth()


      const onSubmitHandler = async(e)=>{
        e.preventDefault();

        try {
          setLoading(true)
          const prompt = `Generate an Image  of ${input} in the style ${selectedstyle}`

          const {data}  = await axios.post('/api/ai/generate-image', {prompt , publish}, {headers: {Authorization: `Bearer ${await getToken()}`}})
        
        if(data.success){
          setContent(data.content)
        }else{
          toast.error(data.message)
        }
      } catch (error) {

            toast.error(error.message)
        }
        setLoading(false)
      }

  return (
     <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
    {/* left col */}
    <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200' >
      <div className=' flex items-center gap-3'>
        <Sparkles className=' w-6 text-[#02ad30]' />
          <h1 className=' text-xl font-semibold'> AI image generator</h1>
      </div>
      <p className=' mt-6 text-sm font-medium'>Describe your image</p>

      <textarea onChange={(e)=>setInput(e.target.value)} value={input} rows={4} type="text" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder=' Describe what you want to see in the image' required />

      <p className=' mt-4 text-sm font-medium'> Style</p>
      
      <div className=' mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
       {imagestyle.map((item)=>(
        <span onClick={()=> setSelectedstyle(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedstyle === item? 'bg-green-50 text-green-700': 'text-gray-500 border-gray-300' }`} key={item}>{item}</span>
       ))}
       </div >
        
       <div className='my-6 items-center gap-2'>

        <label className=' relative cursor-pointer'>
          <input type="checkbox" onChange={(e)=>setpublish(e.target.checked)} checked = {publish} className='sr-only peer' />

          <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'>

          </div>
          <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
           </label>
          <p className='text-sm'>make  this image public</p>
       </div>
      <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#5aed43] to-[#0d9103] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          {loading ?<span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>:
             <Image className='w-5' /> 
          }
      
        Generate Image
      </button>
     
    </form>

    {/* right */}

    <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 '>

      <div className='flex items-center gap-3'>
        <Image className='w-5 h-5 text-[#059b05]' />
        <h1 className='text-xl font-semibold'>Generated Image</h1>
      </div>

     {
      !content ? (
        
      <div className=' flex-1 flex justify-center items-center'>
        <div className=' text-sm flex flex-col items-center gap-5 text-gray-400'>
          <Image className='w-9 h-9' />
          <p>Enter the topic and  click "Generate image" to get started </p>

        </div>

      </div>
      ):(

        <div>
          <img src={content} alt="image" className='w-full h-full' />
        </div>
      )
     }

     
    </div>

    </div>
  )
}

export default Generateimage
