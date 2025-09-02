import { useAuth, useUser } from '@clerk/clerk-react'
import { Heart, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()
  const [loading, setLoading] = useState(true)
  const { getToken } = useAuth()
  const [selectedImage, setSelectedImage] = useState(null)

  const fetchCreations = async () => {
    try {
      const { data } = await axios.get('/api/user/get-published-creations', {
        headers: { Authorization: `Bearer ${await getToken()}` },
      })
      if (data.success) {
        setCreations(data.creations)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      
    }
    setLoading(false)
  }

  const imageLikeToggle = async (id) => {
    try {
      const { data } = await axios.post(
        '/api/user/get-like-creations',
        { id },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      )

      if (data.success) {
        toast.success(data.message)
        await fetchCreations()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(selectedImage, { mode: 'cors' })
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `image-${Date.now()}.jpg`
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      toast.error('Download failed.')
    }
  }

  useEffect(() => {
    if (user) {
      fetchCreations()
    }
  }, [user])

  return !loading ? (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h2 className='text-xl font-semibold'>Creations</h2>
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
        {creations.map((creation, index) => (
          <div
            key={index}
            className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/3 cursor-pointer'
            onClick={() => setSelectedImage(creation.content)}
          >
            <img
              src={creation.content}
              alt=''
              className='w-full h-full object-cover rounded-lg'
            />
            <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
              <p className='text-sm hidden group-hover:block'>
                {creation.prompt}
              </p>
              <div>
                <p>{creation.likes.length}</p>
                <Heart
                  onClick={(e) => {
                    e.stopPropagation()
                    imageLikeToggle(creation.id)
                  }}
                  className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                    creation.likes.includes(user.id)
                      ? 'fill-red-500 text-red-600'
                      : 'text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal Popup */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'>
          <div className='relative bg-white rounded-lg p-4 w-[90%] sm:w-[80%] max-h-[90vh] overflow-auto shadow-lg'>

            {/* Close (X) button */}
            <button
              className='absolute top-3 right-3 text-black bg-gray-200 p-1 rounded-full hover:bg-gray-300'
              onClick={() => setSelectedImage(null)}
            >
              <X className='w-5 h-5' />
            </button>

            {/* Responsive Image */}
            <div className='flex items-center justify-center'>
              <img
                src={selectedImage}
                alt='Full Preview'
                className='rounded-lg object-contain max-w-full max-h-[70vh]'
              />
            </div>

            {/* Buttons below image */}
            <div className='flex justify-between items-center mt-4'>
              <button
                className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-300'
                onClick={() => setSelectedImage(null)}
              >
                Go Back
              </button>
              <button
                onClick={handleDownload}
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className='flex justify-center items-center h-full'>
      <span className='w-10 h-10 my-1 rounded-full border-3 border-primary border-t-transparent animate-spin'></span>
    </div>
  )
}

export default Community
