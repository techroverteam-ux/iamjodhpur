'use client'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BannerText from './components/BannerText'
import Programs from './components/Programs'
import Courses from './components/Courses'
import Advantages from './components/Advantages'
import CourseCategories from './components/CourseCategories'
import Offerings from './components/Offerings'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            
            const cards = entry.target.querySelectorAll('.card, .border, .quiz_post, .card_courses, .single-tutor, .counter_div')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateX(0) scale(1) rotate(0deg)'
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-section {
          opacity: 0;
        }
        .animate-section.animate-in {
          animation: fadeDown 1.2s ease-out forwards;
        }
        .animate-section .card,
        .animate-section .border,
        .animate-section .quiz_post,
        .animate-section .card_courses,
        .animate-section .single-tutor,
        .animate-section .counter_div {
          opacity: 0;
          transform: translateX(80px) scale(0.9) rotate(3deg);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1977f3, #00d4ff, #1977f3) border-box;
          border: 3px solid transparent;
          border-radius: 12px;
        }
        .animate-section .card:hover,
        .animate-section .border:hover,
        .animate-section .quiz_post:hover,
        .animate-section .card_courses:hover,
        .animate-section .single-tutor:hover,
        .animate-section .counter_div:hover {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #00d4ff, #1977f3, #ff6b9d) border-box;
          box-shadow: 0 12px 30px rgba(25, 119, 243, 0.4);
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Navbar />
      <Hero />
      <div className="animate-section"><BannerText /></div>
      <div className="animate-section"><Programs /></div>
      <div className="animate-section"><Courses /></div>
      <div className="animate-section"><Advantages /></div>
      <div className="animate-section"><CourseCategories /></div>
      <div className="animate-section"><Offerings /></div>
      <div className="animate-section"><Testimonials /></div>
      <div className="animate-section"><Stats /></div>
      <Footer />
    </>
  )
}
