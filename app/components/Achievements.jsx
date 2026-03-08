'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Achievements({ index }) {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    const savedAchievements = localStorage.getItem('achievements')
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements))
    }
  }, [])

  const achievement = achievements[index]
  if (!achievement) return null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#1B5A96'}}>{achievement.heading}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        {achievement.image && (
          <div className="w-full relative border-4 rounded-lg p-4" style={{borderColor: '#1B5A96'}}>
            <Image
              src={achievement.image}
              alt={achievement.heading}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  )
}