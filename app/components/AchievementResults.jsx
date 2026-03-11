'use client'
import { useState, useEffect } from 'react'

export default function AchievementResults() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const results = [
    {
      image: "/JEE Result2024_25.png",
      title: "JEE Results 2024-25",
      description: "Outstanding performance in JEE Main and Advanced"
    },
    {
      image: "/Neet Result2024.png", 
      title: "NEET Results 2024",
      description: "Exceptional achievements in NEET examination"
    },
    {
      image: "/Neet Result2025.png",
      title: "NEET Results 2025", 
      description: "Continued excellence in medical entrance exams"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % results.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length)
  }

  return (
    <>
      <style jsx>{`
        .carousel-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 500px;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          transform: translateX(-${currentSlide * 100}%);
          height: 100%;
        }
        
        .carousel-slide {
          min-width: 100%;
          position: relative;
          height: 100%;
        }
        
        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #f9f9f9;
        }
        
        .carousel-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          color: white;
          padding: 30px;
          text-align: center;
        }
        
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #1B5A96;
          transition: all 0.3s ease;
          z-index: 2;
        }
        
        .carousel-nav:hover {
          background: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          transform: translateY(-50%) scale(1.1);
        }
        
        .carousel-nav.prev {
          left: 20px;
        }
        
        .carousel-nav.next {
          right: 20px;
        }
        
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }
        
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .carousel-dot.active {
          background: #1B5A96;
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .carousel-container {
            height: 300px;
          }
          .carousel-overlay {
            padding: 15px;
          }
          .carousel-nav {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
        }
      `}</style>
      
      <section style={{padding: '60px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
        <div style={{textAlign: 'center', marginBottom: '50px', padding: '0 20px'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
            IMA Achievement Results 2025
          </h2>
          <p style={{fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>
            Celebrating our students' outstanding performance in JEE and NEET examinations
          </p>
        </div>
        
        <div style={{width: '100%'}}>
          <div className="carousel-container">
            <div className="carousel-track">
              {results.map((result, index) => (
                <div key={index} className="carousel-slide">
                  <img src={result.image} alt={result.title} />
                  <div className="carousel-overlay">
                    <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px'}}>
                      {result.title}
                    </h3>
                    <p style={{fontSize: '1rem', opacity: '0.9'}}>
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-nav prev" onClick={prevSlide}>
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="carousel-nav next" onClick={nextSlide}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="carousel-dots">
            {results.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}