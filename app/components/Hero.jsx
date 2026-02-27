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
            height: 300px !important;
          }
          .nav-btn {
            width: 36px !important;
            height: 36px !important;
          }
          .nav-btn i {
            font-size: 18px !important;
          }
        }
      `}</style>
      <section className="hero-section relative w-full overflow-hidden" style={{height: '500px'}}>
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
          className="nav-btn absolute left-4 top-1/2 -translate-y-1/2 text-white w-12 h-12 rounded-full flex items-center justify-center z-10"
        >
          <i className="fa fa-angle-left text-2xl"></i>
        </button>

        <button
          onClick={nextSlide}
          className="nav-btn absolute right-4 top-1/2 -translate-y-1/2 text-white w-12 h-12 rounded-full flex items-center justify-center z-10"
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
