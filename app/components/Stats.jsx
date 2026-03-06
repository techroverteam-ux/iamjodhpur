'use client'
import { useEffect, useState, useRef } from 'react'

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { icon: "fa-shield", count: 5, label: "Selection", title: "AFMC", color: "#8B0000" },
    { icon: "fa-rocket", count: 2, label: "Selection", title: "ISRO", color: "#FF4500" },
    { icon: "fa-heartbeat", count: 255, label: "Selection", title: "AIIMS", color: "#DC143C" },
    { icon: "fa-cogs", count: 500, label: "Selection", title: "IIT", color: "#1E3A8A" },
    { icon: "fa-university", count: 1800, label: "Selection", title: "NIT/GEC", color: "#059669" },
    { icon: "fa-user-md", count: 10000, label: "Selection", title: "GMC", color: "#7C3AED" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.count
            const duration = 2500
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
    <>
      <style jsx>{`
        .success-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }
        
        .success-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--card-color), transparent, var(--card-color));
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        
        .success-card:hover::before {
          transform: scaleX(1);
        }
        
        .success-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--card-color);
        }
        

        .success-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--card-color);
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .success-card:hover .success-number {
          transform: scale(1.1);
          text-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .success-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 768px) {
          .success-card {
            padding: 1.5rem;
          }
          .success-number {
            font-size: 2rem;
          }
          .success-icon {
            width: 50px;
            height: 50px;
          }
          .success-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
      
      <section ref={sectionRef} className="py-8 md:py-12" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1200px'}}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{color:'#1B5A96', fontFamily: 'Playfair Display, serif'}}>
              SUCCESS HISTORY
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Pre-Medical & IIT-JEE
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="success-card"
                  style={{'--card-color': '#1B5A96'}}
                >
                  <h3 className="text-2.2rem font-bold mb-2" style={{color: '#1B5A96'}}>
                    {stat.title}
                  </h3>
                  <div className="success-number" style={{color: '#1B5A96'}}>
                    {counts[index] >= 1000 ? `${(counts[index]/1000).toFixed(1)}K` : counts[index]}
                  </div>
                  <div className="success-label" style={{color: '#1B5A96'}}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-base" style={{color: '#1B5A96', fontStyle: 'italic'}}>
              "Excellence in education, proven by results"
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
