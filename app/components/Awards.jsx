'use client'
import { useState, useEffect } from 'react'

export default function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const awards = [
    { image: "/Awards.jpeg", title: "Excellence in Education", year: "2024", description: "Recognized for outstanding contribution to quality education" },
    { image: "/Awards1.jpeg", title: "Outstanding Achievement", year: "2024", description: "Awarded for exceptional student performance and results" },
    { image: "/Awards2.jpeg", title: "Academic Excellence", year: "2023", description: "Honored for maintaining high academic standards" },
    { image: "/Awards3.jpeg", title: "Best Coaching Institute", year: "2023", description: "Recognized as the leading coaching institute in the region" },
    { image: "/Awards4.jpeg", title: "Student Success Award", year: "2022", description: "Celebrated for remarkable student success rates" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('.awards-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length)
  }

  return (
    <>
      <style jsx>{`
        .awards-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 500px;
        }
        
        .awards-content {
          padding: 40px;
        }
        
        .award-number {
          font-size: 1rem;
          color: #1B5A96;
          font-weight: 600;
          margin-bottom: 10px;
          opacity: 0.8;
        }
        
        .award-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1B5A96;
          margin-bottom: 15px;
          line-height: 1.2;
        }
        
        .award-year {
          display: inline-block;
          background: linear-gradient(135deg, #1B5A96, #2563eb);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .award-description {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .awards-image-container {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .award-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .awards-image-container:hover .award-image {
          transform: scale(1.05);
        }
        
        .awards-navigation {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        
        .nav-button {
          width: 50px;
          height: 50px;
          border: 2px solid #1B5A96;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #1B5A96;
          font-size: 18px;
        }
        
        .nav-button:hover {
          background: #1B5A96;
          color: white;
          transform: scale(1.1);
        }
        
        .awards-dots {
          display: flex;
          gap: 10px;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: #1B5A96;
          transform: scale(1.3);
        }
        
        .awards-stats {
          display: flex;
          gap: 30px;
          margin-top: 20px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #1B5A96;
          display: block;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 768px) {
          .awards-container {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 20px;
          }
          
          .awards-content {
            padding: 20px;
            text-align: center;
          }
          
          .award-title {
            font-size: 2rem;
          }
          
          .awards-image-container {
            height: 300px;
          }
          
          .awards-stats {
            justify-content: center;
          }
        }
      `}</style>
      
      <section className="awards-section" style={{padding: '80px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)'}}>
        <div style={{textAlign: 'center', marginBottom: '60px', padding: '0 20px'}}>
          <h2 style={{fontSize: '3rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
            Our Awards & Recognition
          </h2>
          <div style={{width: '100px', height: '4px', background: '#1B5A96', margin: '0 auto 20px', borderRadius: '2px'}}></div>
          <p style={{fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>
            Celebrating excellence in education and student achievement
          </p>
        </div>
        
        <div className="awards-container">
          <div className="awards-content">
            <div className="award-number">
              {String(currentSlide + 1).padStart(2, '0')} / {String(awards.length).padStart(2, '0')}
            </div>
            <h3 className="award-title">{awards[currentSlide].title}</h3>
            <div className="award-year">{awards[currentSlide].year}</div>
            <p className="award-description">{awards[currentSlide].description}</p>
            
            <div className="awards-navigation">
              <button className="nav-button" onClick={prevSlide}>
                <i className="fa fa-chevron-left"></i>
              </button>
              <div className="awards-dots">
                {awards.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button className="nav-button" onClick={nextSlide}>
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="awards-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Awards</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Excellence</span>
              </div>
            </div>
          </div>
          
          <div className="awards-image-container">
            <img src={awards[currentSlide].image} alt={awards[currentSlide].title} className="award-image" />
          </div>
        </div>
      </section>
    </>
  )
}