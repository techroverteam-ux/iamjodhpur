'use client'
import { useState, useEffect } from 'react'
import { fetchData } from '../../lib/clientDataUtils'
import { FacebookIcon, InstagramIcon, YoutubeIcon, PhoneIcon, EmailIcon } from '../../lib/icons'

export default function ExampleUsage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const result = await fetchData()
    if (result) {
      setData(result)
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">JSON Storage & React Icons Example</h2>
      
      {/* React Icons Example */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Social Media Icons</h3>
        <div className="flex gap-4">
          <FacebookIcon size={32} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
          <InstagramIcon size={32} className="text-pink-600 hover:text-pink-800 cursor-pointer" />
          <YoutubeIcon size={32} className="text-red-600 hover:text-red-800 cursor-pointer" />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Contact Icons</h3>
        <div className="flex gap-4">
          <PhoneIcon size={24} className="text-green-600" />
          <EmailIcon size={24} className="text-blue-600" />
        </div>
      </div>

      {/* JSON Data Example */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">JSON Storage Data</h3>
        {data ? (
          <div className="bg-gray-100 p-4 rounded">
            <p>Blogs: {data.blogs.length}</p>
            <p>Courses: {data.courses.length}</p>
            <p>Achievements: {data.achievements.length}</p>
            <p>Users: {data.users.length}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  )
}