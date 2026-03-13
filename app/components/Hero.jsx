'use client'
import { useState, useEffect } from 'react'
import { AngleLeftIcon, AngleRightIcon } from '../../lib/icons'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const slides = [
    {
      image: "/images/1.png"
    },
    {
      image: "/images/2.png"
    },
    {
      image: "/images/4.png"
    },
    {
      image: "/images/5.png"
    }
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className={`relative overflow-hidden ${isMobile ? 'h-auto' : 'h-[600px]'}`}>
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-carousel {
            width: 100vw;
            height: 60vw;
            max-height: 400px;
            min-height: 250px;
          }
          
          .mobile-slide {
            width: 100%;
            height: 100%;
            background-size: cover !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
          }
        }
        
        @media (min-width: 769px) {
          .desktop-carousel {
            height: 600px;
          }
          
          .desktop-slide {
            background-size: contain !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
            background-color: #f8f9fa !important;
          }
        }
      `}</style>
      
      {isMobile ? (
        <div className="mobile-carousel relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 mobile-slide transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            />
          ))}
        </div>
      ) : (
        <div className="desktop-carousel relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 desktop-slide transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            />
          ))}
        </div>
      )}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm shadow-lg"
      >
        <AngleLeftIcon size={isMobile ? 16 : 24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm shadow-lg"
      >
        <AngleRightIcon size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors shadow-sm ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}