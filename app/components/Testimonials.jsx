'use client'
import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [visible, setVisible] = useState(false)
  
  const testimonials = [
    {
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/2667795421_ima%20logo.png",
      title: "✦ Mess Facility",
      text: "IMA provides mess facility to support students' daily routine and health during NEET/JEE preparation. We maintain proper hygiene and cleanliness, ensuring students get a comfortable and healthy food environment. Regular meals help students stay energetic and maintain a stable schedule without interruptions. A well-managed mess system saves time and allows students to remain fully focused on studies, revision, and test preparation."
    },
    {
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/1798503420_ima%20logo.png",
      title: "✦ Hostel Facility",
      text: "IMA offers a well-managed hostel facility designed for students who want a fully focused preparation environment. We provide separate hostel facilities for both boys and girls, ensuring comfort, safety, and a disciplined academic routine. Students can choose AC or Non-AC rooms as per their preference. Hostel life helps students stay connected to a fixed study schedule, improves self-discipline, and consistent improvement throughout NEET/JEE preparation."
    },
    {
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/5931184419_ima%20logo.png",
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
      `}</style>
      <section className="testimonials-section py-12" style={{background: '#F8FAFC'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1200px'}}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2" style={{color: '#0066FF'}}>What students say</h3>
            <div className="w-20 h-1 mx-auto rounded-full" style={{background: '#0066FF'}}></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className={`card-hover bg-white rounded-lg overflow-hidden border border-gray-200 ${
                  visible ? 'slide-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  borderTop: '4px solid #0066FF'
                }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mr-3" style={{background: '#E8EEF5'}}>
                      <img src={item.image} alt="icon" className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-lg" style={{color: '#0066FF'}}>{item.title}</h4>
                  </div>
                  <div className="border-l-3 pl-4" style={{borderLeft: '3px solid #0066FF'}}>
                    <i className="fa fa-quote-left text-sm mb-2 block" style={{color: '#4D94FF'}}></i>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
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