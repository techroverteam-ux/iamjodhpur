'use client'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Facilities() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-zoom').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-150px) rotateY(-90deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(150px) rotateY(90deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(10deg);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(25, 119, 243, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(25, 119, 243, 0.6);
          }
        }
        .animate-zoom {
          opacity: 0;
        }
        .animate-zoom.zoom-in:nth-child(odd) {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-zoom.zoom-in:nth-child(even) {
          animation: slideInRight 1s ease-out forwards;
        }
        .facility-card {
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
          border-radius: 20px;
          padding: 25px;
          transition: all 0.5s;
          position: relative;
          overflow: hidden;
        }
        .facility-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #1977f3, #00d4ff, #ff6b9d, #1977f3);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .facility-card:hover::before {
          opacity: 1;
        }
        .facility-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(25, 119, 243, 0.15) 0%, transparent 70%);
          transform: scale(0);
          transition: transform 0.6s;
        }
        .facility-card:hover::after {
          transform: scale(1);
        }
        .facility-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(25, 119, 243, 0.3);
        }
        .facility-icon-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          animation: float 4s ease-in-out infinite;
        }
        .facility-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          background: inherit;
          opacity: 0.2;
          animation: glow 2s ease-in-out infinite;
        }
        .facility-icon {
          font-size: 50px;
          color: white;
          z-index: 1;
        }
        .facility-card:hover .facility-icon-wrapper {
          animation: none;
          transform: rotate(360deg) scale(1.15);
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
      
      <Navbar />
      
      <section style={{background: 'linear-gradient(135deg, #0a1628 0%, #1977f3 100%)', padding: '30px 0', color: 'white', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05}}>
          {[...Array(15)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: 'white',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}></div>
          ))}
        </div>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px', position: 'relative', zIndex: 1}}>
          <div className="text-center">
            <h1 className="text-3xl font-bold" style={{textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>Our Facilities</h1>
          </div>
        </div>
      </section>

      <section style={{padding: '35px 0', background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="space-y-3">
            
            <div className="facility-card animate-zoom">
              <div className="flex items-center">
                <div className="facility-icon-wrapper" style={{background: 'linear-gradient(135deg, #1977f3, #00d4ff)'}}>
                  <i className="fa fa-bus facility-icon"></i>
                </div>
                <div style={{marginLeft: '20px', flex: 1}}>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#1977f3'}}>
                    <span style={{fontSize: '18px', marginRight: '6px'}}>✦</span>
                    Transport Facility
                  </h3>
                  <p className="text-gray-700" style={{lineHeight: '1.8', fontSize: '16px', textAlign: 'justify'}}>
                    IMA provides a dedicated transport facility for Jodhpur-based students to make daily travel comfortable and stress-free. It helps students reach the institute on time, maintain regular attendance, and follow a disciplined routine throughout the academic session. With a smooth pickup-drop schedule, students save time and energy, which supports better consistency and academic performance. Parents also feel assured knowing the student's daily commute is properly managed.
                  </p>
                </div>
              </div>
            </div>

            <div className="facility-card animate-zoom">
              <div className="flex items-center">
                <div style={{flex: 1, marginRight: '20px'}}>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#00d4ff'}}>
                    <span style={{fontSize: '18px', marginRight: '6px'}}>✦</span>
                    Hostel Facility
                  </h3>
                  <p className="text-gray-700" style={{lineHeight: '1.8', fontSize: '16px', textAlign: 'justify'}}>
                    IMA offers a well-managed hostel facility designed for students who want a fully focused preparation environment. We provide separate hostel facilities for both boys and girls, ensuring comfort, safety, and a disciplined academic routine. Students can choose AC or Non-AC rooms as per their preference. Hostel life helps students stay connected to a fixed study schedule, improves self-discipline, and removes daily travel distractions. A structured environment supports better time management, regular self-study, and consistent improvement throughout NEET/JEE preparation.
                  </p>
                </div>
                <div className="facility-icon-wrapper" style={{background: 'linear-gradient(135deg, #00d4ff, #1977f3)'}}>
                  <i className="fa fa-building facility-icon"></i>
                </div>
              </div>
            </div>

            <div className="facility-card animate-zoom">
              <div className="flex items-center">
                <div className="facility-icon-wrapper" style={{background: 'linear-gradient(135deg, #10b981, #00d4ff)'}}>
                  <i className="fa fa-cutlery facility-icon"></i>
                </div>
                <div style={{marginLeft: '20px', flex: 1}}>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#10b981'}}>
                    <span style={{fontSize: '18px', marginRight: '6px'}}>✦</span>
                    Mess Facility
                  </h3>
                  <p className="text-gray-700" style={{lineHeight: '1.8', fontSize: '16px', textAlign: 'justify'}}>
                    IMA provides mess facility to support students' daily routine and health during NEET/JEE preparation. We maintain proper hygiene and cleanliness, ensuring students get a comfortable and healthy food environment. Regular meals help students stay energetic and maintain a stable schedule without interruptions. A well-managed mess system saves time and allows students to remain fully focused on studies, revision, and test preparation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
