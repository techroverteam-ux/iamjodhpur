'use client'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-slide').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide {
          opacity: 0;
        }
        .animate-slide.slide-in.left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide.slide-in.right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide.slide-in.up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .contact-card {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1977f3, #00d4ff) border-box;
          border: 3px solid transparent;
          border-radius: 15px;
          padding: 30px;
          transition: all 0.4s;
        }
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(25, 119, 243, 0.3);
        }
        .advantage-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 15px;
          border-left: 4px solid #1977f3;
          background: linear-gradient(90deg, rgba(25, 119, 243, 0.05) 0%, transparent 100%);
          border-radius: 8px;
          transition: all 0.3s;
        }
        .advantage-item:hover {
          background: linear-gradient(90deg, rgba(25, 119, 243, 0.1) 0%, transparent 100%);
          transform: translateX(10px);
        }
      `}</style>
      
      <Navbar />
      
      <section style={{background: 'linear-gradient(135deg, #0a1628 0%, #1977f3 100%)', padding: '60px 0', color: 'white'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="text-center animate-slide up">
            <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
            <p className="text-lg">We're here to help you succeed</p>
          </div>
        </div>
      </section>

      <section style={{padding: '60px 0', background: '#f8f9fa'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="contact-card animate-slide left">
              <div className="text-center">
                <div className="mb-4" style={{fontSize: '50px', color: '#1977f3'}}>
                  <i className="fa fa-map-marker"></i>
                </div>
                <h4 className="font-bold mb-3" style={{color: '#1977f3'}}>Address</h4>
                <p className="text-gray-700">Near Barktullah Khan Stadium, Main Pal Road, Jodhpur, 342003</p>
              </div>
            </div>
            
            <div className="contact-card animate-slide up" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <div className="mb-4" style={{fontSize: '50px', color: '#1977f3'}}>
                  <i className="fa fa-phone"></i>
                </div>
                <h4 className="font-bold mb-3" style={{color: '#1977f3'}}>Phone Number</h4>
                <p className="text-gray-700">+91 9571037333</p>
              </div>
            </div>
            
            <div className="contact-card animate-slide right" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="mb-4" style={{fontSize: '50px', color: '#1977f3'}}>
                  <i className="fa fa-envelope"></i>
                </div>
                <h4 className="font-bold mb-3" style={{color: '#1977f3'}}>Email Address</h4>
                <p className="text-gray-700">ceo.iitacademy@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide left">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#1977f3'}}>IMA Jodhpur Classroom Advantages</h3>
              <p className="text-gray-700 mb-6" style={{lineHeight: '1.8'}}>
                IMA Jodhpur Classroom Classes offer a disciplined and focused learning environment where students prepare with consistency and clarity. Offline teaching ensures direct interaction between teachers and students, allowing better concept understanding, quicker doubt resolution, and stronger academic control. With a structured routine, regular practice, and continuous guidance, classroom learning at IMA helps students stay motivated, improve performance steadily, and build the exam-ready mindset required for NEET and JEE.
              </p>
            </div>

            <div className="animate-slide right">
              <div className="space-y-4">
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1977f3', minWidth: '30px'}}>✦</div>
                  <div>
                    <h5 className="font-bold mb-1">Personal Attention in Every Class</h5>
                    <p className="text-sm text-gray-600">Individual focus and one-to-one guidance for every student.</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1977f3', minWidth: '30px'}}>✦</div>
                  <div>
                    <h5 className="font-bold mb-1">Better Concept Clarity</h5>
                    <p className="text-sm text-gray-600">Strong fundamentals through detailed teaching and real-time explanation.</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1977f3', minWidth: '30px'}}>✦</div>
                  <div>
                    <h5 className="font-bold mb-1">Daily Doubt Support</h5>
                    <p className="text-sm text-gray-600">Immediate doubt clearing and extra help for difficult topics.</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1977f3', minWidth: '30px'}}>✦</div>
                  <div>
                    <h5 className="font-bold mb-1">Discipline and Consistent Routine</h5>
                    <p className="text-sm text-gray-600">Fixed schedule, regular practice, and serious study culture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
