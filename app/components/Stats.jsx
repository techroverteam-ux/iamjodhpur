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
            let start = 3
            const end = stat.count
            const duration = 2500
            const increment = (end - start) / (duration / 16)
            
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
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 shadow-lg" style={{borderRadius:'0 50px 0 50px', boxShadow:'0px 0px 6px #1977f3'}}>
              <div className="mx-auto mb-4 flex items-center justify-center">
                <i className={`fa ${stat.icon}`} style={{color:'#1977f3', fontSize:'50px'}}></i>
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{color:'#1977f3'}}>{counts[index].toLocaleString()}+</h3>
              <h6 className="text-gray-700">{stat.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
