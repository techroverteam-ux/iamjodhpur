'use client'
import { useEffect } from 'react'

export default function CourseCategories() {
  const facilities = [
    { name: 'Mess Facility', icon: 'fa-cutlery', color: '#E74C3C' },
    { name: 'Hostel Facility', icon: 'fa-bed', color: '#3498DB' },
    { name: 'Transport Facility', icon: 'fa-bus', color: '#27AE60' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector('.category-title')?.classList.add('animate-title')
            const cards = entry.target.querySelectorAll('.facility-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-card')
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.facilities-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .category-title {
          opacity: 0;
          transform: translateY(-50px);
        }
        .category-title.animate-title {
          animation: waveIn 1s ease-out forwards;
        }
        @keyframes waveIn {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .facility-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .facility-card.animate-card {
          opacity: 1;
          transform: translateY(0);
        }
        .facility-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          border-color: var(--facility-color);
        }
        .facility-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
        }
        .facility-card:hover .facility-icon {
          transform: scale(1.2) rotate(10deg);
        }
        .facility-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
      `}</style>
      <section className="course__categories facilities-section">
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="text-center section-hedding">
            <h3 className="categories-title category-title">
              Facilities
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <a 
                key={index}
                href="/facilities"
                className="facility-card"
                style={{'--facility-color': facility.color, textDecoration: 'none'}}
              >
                <div 
                  className="facility-icon"
                  style={{background: `linear-gradient(135deg, ${facility.color}20, ${facility.color}10)`}}
                >
                  <i className={`fa ${facility.icon}`} style={{color: facility.color, fontSize: '24px'}}></i>
                </div>
                <h4 className="facility-name">{facility.name}</h4>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
