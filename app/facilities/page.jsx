'use client'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Facilities() {
  const [bannerImage, setBannerImage] = useState('')
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
    
    if (typeof window !== 'undefined') {
      const savedBanners = localStorage.getItem('banners')
      if (savedBanners) {
        const banners = JSON.parse(savedBanners)
        if (banners.facilities && banners.facilities !== '') {
          setBannerImage(banners.facilities)
        }
      }
    }
    
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
          background: linear-gradient(135deg, #1B5A96, #1B5A96, #ff6b9d, #1B5A96);
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
        @media (max-width: 768px) {
          .facility-card {
            padding: 12px;
            border-radius: 12px;
          }
          .facility-icon-wrapper {
            width: 60px;
            height: 60px;
          }
          .facility-icon {
            font-size: 30px;
          }
          .facility-card h3 {
            font-size: 14px;
            margin-bottom: 8px;
          }
          .facility-card p {
            font-size: 12px;
            line-height: 1.5;
          }
        }
      `}</style>
      
      <Navbar />
      
      {bannerImage ? (
        <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
          <img src={bannerImage} alt="Facilities" style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(27, 90, 150, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Our Facilities</h1>
          </div>
        </div>
      ) : (
        <div style={{background: 'linear-gradient(135deg, #1B5A96 0%, #1B5A96 100%)', padding: '80px 20px', textAlign: 'center'}}>
          <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Our Facilities</h1>
        </div>
      )}
      
      {/* IMA Achievement Results 2025 Section */}
      <section style={{padding: '60px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
              IMA Achievement Results 2025
            </h2>
            <p style={{fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>
              Celebrating our students' outstanding performance in JEE and NEET examinations
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <img src="/JEE Result2024_25.png" alt="JEE Results 2024-25" style={{width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
            </div>
            <div style={{textAlign: 'center'}}>
              <img src="/Neet Result2024.png" alt="NEET Results 2024" style={{width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
            </div>
            <div style={{textAlign: 'center'}}>
              <img src="/Neet Result2025.png" alt="NEET Results 2025" style={{width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
            </div>
          </div>
        </div>
      </section>
      
      <section style={{padding: '20px 0', background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)'}}>
        <div className="container mx-auto px-2 md:px-4" style={{maxWidth: '1140px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
              Our Facilities
            </h2>
          </div>
          <div className="space-y-2 md:space-y-3">
            
            <div className="facility-card animate-zoom">
              <div className="flex items-center">
                <div style={{marginRight: '20px'}}>
                  <img src="/Transport Facility.png" alt="Transport Facility" style={{width: '120px', height: '120px', objectFit: 'cover', borderRadius: '15px'}} />
                </div>
                <div style={{flex: 1}}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{color: 'var(--primary-medium)'}}>
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{color: 'var(--primary-medium)'}}>
                    <span style={{fontSize: '18px', marginRight: '6px'}}>✦</span>
                    Hostel Facility
                  </h3>
                  <p className="text-gray-700" style={{lineHeight: '1.8', fontSize: '16px', textAlign: 'justify'}}>
                    IMA offers a well-managed hostel facility designed for students who want a fully focused preparation environment. We provide separate hostel facilities for both boys and girls, ensuring comfort, safety, and a disciplined academic routine. Students can choose AC or Non-AC rooms as per their preference. Hostel life helps students stay connected to a fixed study schedule, improves self-discipline, and removes daily travel distractions. A structured environment supports better time management, regular self-study, and consistent improvement throughout NEET/JEE preparation.
                  </p>
                </div>
                <div className="facility-icon-wrapper" style={{background: 'linear-gradient(135deg, #1B5A96, #1B5A96)'}}>
                  <i className="fa fa-building facility-icon"></i>
                </div>
              </div>
            </div>

            <div className="facility-card animate-zoom">
              <div className="flex items-center">
                <div className="facility-icon-wrapper" style={{background: 'linear-gradient(135deg, #10b981, #1B5A96)'}}>
                  <i className="fa fa-cutlery facility-icon"></i>
                </div>
                <div style={{marginLeft: '20px', flex: 1}}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{color: 'var(--primary-medium)'}}>
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
