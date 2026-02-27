'use client'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <>
      <style jsx>{`
        .nav-btn {
          background: rgba(22, 119, 200, 0.8);
          transition: all 0.3s;
        }
        .nav-btn:hover {
          background: rgba(11, 79, 138, 1);
          transform: scale(1.1);
        }
        .dot {
          transition: all 0.3s;
        }
        .dot.active {
          background: #1677C8;
          width: 40px;
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section {
            height: 250px !important;
          }
          .nav-btn {
            width: 32px !important;
            height: 32px !important;
            bottom: 10px !important;
          }
          .nav-btn i {
            font-size: 16px !important;
          }
          .nav-btn.left {
            left: 10px !important;
          }
          .nav-btn.right {
            right: 10px !important;
          }
          .dot {
            width: 6px !important;
            height: 6px !important;
          }
          .dot.active {
            width: 20px !important;
          }
        }
      `}</style>
      <section className="hero-section relative w-full overflow-hidden" style={{height: window.innerWidth < 768 ? '250px' : '500px'}}>
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="nav-btn left absolute text-white rounded-full flex items-center justify-center z-10"
          style={{
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: window.innerWidth < 768 ? '32px' : '48px',
            height: window.innerWidth < 768 ? '32px' : '48px',
            background: 'rgba(22, 119, 200, 0.8)'
          }}
        >
          <i className="fa fa-angle-left" style={{fontSize: window.innerWidth < 768 ? '16px' : '24px'}}></i>
        </button>

        <button
          onClick={nextSlide}
          className="nav-btn right absolute text-white rounded-full flex items-center justify-center z-10"
          style={{
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: window.innerWidth < 768 ? '32px' : '48px',
            height: window.innerWidth < 768 ? '32px' : '48px',
            background: 'rgba(22, 119, 200, 0.8)'
          }}
        >
          <i className="fa fa-angle-right text-2xl"></i>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot h-2 rounded-full transition-all ${
                index === currentSlide ? 'active w-10' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
