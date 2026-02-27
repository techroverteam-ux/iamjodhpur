'use client'
import { useEffect, useState, useRef } from 'react'

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { icon: "fa-user-circle-o", count: 30000, label: "Students Enrolled" },
    { icon: "fa-play-circle", count: 30, label: "Course Available" },
    { icon: "fa-edit", count: 10000, label: "Test Attempted" },
    { icon: "fa-video-camera", count: 1000000, label: "Video Views" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.count
            const duration = 2000
            const increment = end / (duration / 16)
            
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = end
                  return newCounts
                })
                clearInterval(timer)
              } else {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.floor(start)
                  return newCounts
                })
              }
            }, 16)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-8 md:py-16" style={{background: '#F8FAFC'}}>
      <div className="container mx-auto px-2 md:px-4" style={{maxWidth: '1200px'}}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" style={{padding: window.innerWidth < 768 ? '8px' : '0'}}>
              <div className="mb-2 md:mb-3">
                <i className={`fa ${stat.icon}`} style={{color:'#0B4F8A', fontSize: window.innerWidth < 768 ? '24px' : '40px'}}></i>
              </div>
              <h3 className="font-bold mb-1 md:mb-2" style={{color:'#0B4F8A', fontSize: window.innerWidth < 768 ? '20px' : '36px'}}>
                {counts[index].toLocaleString()}+
              </h3>
              <p className="text-gray-600 font-medium" style={{fontSize: window.innerWidth < 768 ? '10px' : '14px'}}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}