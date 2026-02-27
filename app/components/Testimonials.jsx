'use client'
import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [visible, setVisible] = useState(false)
  
  const testimonials = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3655/3655682.png",
      title: "✦ Mess Facility",
      text: "IMA provides mess facility to support students' daily routine and health during NEET/JEE preparation. We maintain proper hygiene and cleanliness, ensuring students get a comfortable and healthy food environment. Regular meals help students stay energetic and maintain a stable schedule without interruptions. A well-managed mess system saves time and allows students to remain fully focused on studies, revision, and test preparation."
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176376.png",
      title: "✦ Hostel Facility",
      text: "IMA offers a well-managed hostel facility designed for students who want a fully focused preparation environment. We provide separate hostel facilities for both boys and girls, ensuring comfort, safety, and a disciplined academic routine. Students can choose AC or Non-AC rooms as per their preference. Hostel life helps students stay connected to a fixed study schedule, improves self-discipline, and consistent improvement throughout NEET/JEE preparation."
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3097/3097136.png",
      title: "✦ Transport Facility",
      text: "IMA provides a dedicated transport facility for Jodhpur-based students to make daily travel comfortable and stress-free. It helps students reach the institute on time, maintain regular attendance, and follow a disciplined routine throughout the academic session. With a smooth pickup-drop schedule, students save time and energy, which supports better consistency and academic performance. Parents also feel assured knowing the student's daily commute is properly managed."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.testimonials-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .card-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        .card-hover:hover::before {
          left: 100%;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.2);
        }
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .testimonial-title {
            font-size: 20px !important;
          }
          .testimonial-card-title {
            font-size: 12px !important;
          }
          .testimonial-text {
            font-size: 11px !important;
            line-height: 1.4 !important;
          }
          .card-hover {
            padding: 8px !important;
          }
          .card-hover .p-4 {
            padding: 12px !important;
          }
        }
      `}</style>
      <section className="testimonials-section py-8 md:py-12" style={{background: '#F8FAFC'}}>
        <div className="container mx-auto px-2 md:px-4" style={{maxWidth: '1200px'}}>
          <div className="text-center mb-10">
            <h3 className="testimonial-title text-3xl font-bold mb-2" style={{color: '#0B4F8A'}}>What students say</h3>
            <div className="w-20 h-1 mx-auto rounded-full" style={{background: '#0B4F8A'}}></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className={`card-hover bg-white rounded-lg overflow-hidden border border-gray-200 ${
                  visible ? 'slide-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  borderTop: '4px solid #0B4F8A'
                }}
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-2 md:mr-3" style={{background: '#E8EEF5'}}>
                      <img src={item.image} alt="icon" className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h4 className="testimonial-card-title font-bold text-lg" style={{color: '#0B4F8A'}}>{item.title}</h4>
                  </div>
                  <div className="border-l-3 pl-3 md:pl-4" style={{borderLeft: '3px solid #0B4F8A'}}>
                    <i className="fa fa-quote-left text-sm mb-2 block" style={{color: '#4D94FF'}}></i>
                    <p className="testimonial-text text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
