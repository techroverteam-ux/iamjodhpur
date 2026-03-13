'use client'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchData } from '../../lib/clientDataUtils'
import { LocationIcon, PhoneIcon, EmailIcon } from '../../lib/icons'

export default function ContactUs() {
  const [bannerImage, setBannerImage] = useState('')
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
    
    loadData()
    
    return () => observer.disconnect()
  }, [])

  const loadData = async () => {
    const data = await fetchData()
    if (data && data.banners && data.banners.contactUs) {
      setBannerImage(data.banners.contactUs)
    }
  }

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
          background: white;
          border-radius: 16px;
          padding: 25px;
          transition: all 0.4s;
          box-shadow: 0 4px 15px rgba(25, 119, 243, 0.1);
          position: relative;
          overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1B5A96, #1B5A96);
        }
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(25, 119, 243, 0.25);
        }
        .icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1B5A96, #1B5A96);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          box-shadow: 0 8px 20px rgba(25, 119, 243, 0.3);
        }
        .advantage-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px;
          background: white;
          border-radius: 10px;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          border-left: 4px solid #1B5A96;
        }
        .advantage-item:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 15px rgba(25, 119, 243, 0.2);
        }
      `}</style>
      
      <Navbar />
      
      {bannerImage ? (
        <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
          <img src={bannerImage} alt="Contact Us" style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(27, 90, 150, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Contact Us</h1>
          </div>
        </div>
      ) : (
        <div style={{background: 'linear-gradient(135deg, #1B5A96 0%, #1B5A96 100%)', padding: '80px 20px', textAlign: 'center'}}>
          <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Contact Us</h1>
        </div>
      )}
      
      <section style={{padding: '40px 0', background: '#f8f9fa'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="contact-card animate-slide left">
              <div className="text-center">
                <div className="icon-circle">
                  <LocationIcon style={{fontSize: '30px', color: 'white'}} size={30} />
                </div>
                <h4 className="font-bold mb-2 text-base" style={{color: '#1B5A96'}}>Address</h4>
                <p className="text-gray-700 text-sm">Main Pal Road, near Barkatullah Khan Stadium, Shastri Nagar, Jodhpur, Rajasthan 342003</p>
              </div>
            </div>
            
            <div className="contact-card animate-slide up" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <div className="icon-circle">
                  <PhoneIcon style={{fontSize: '30px', color: 'white', transform: 'scaleX(-1)'}} size={30} />
                </div>
                <h4 className="font-bold mb-2 text-base" style={{color: '#1B5A96'}}>Phone Number</h4>
                <p className="text-gray-700 text-sm">+91 9571037333</p>
              </div>
            </div>
            
            <div className="contact-card animate-slide right" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="icon-circle">
                  <EmailIcon style={{fontSize: '30px', color: 'white'}} size={30} />
                </div>
                <h4 className="font-bold mb-2 text-base" style={{color: '#1B5A96'}}>Email Address</h4>
                <p className="text-gray-700 text-sm">ceo.iitacademy@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="animate-slide left" style={{background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
              <h3 className="text-2xl font-bold mb-3" style={{color: '#1B5A96', borderBottom: '3px solid #1B5A96', paddingBottom: '10px', display: 'inline-block'}}>IMA Jodhpur Classroom Advantages</h3>
              <p className="text-gray-700 mb-4 text-sm" style={{lineHeight: '1.6', marginTop: '20px'}}>
                IMA Jodhpur Classroom Classes offer a disciplined and focused learning environment where students prepare with consistency and clarity. Offline teaching ensures direct interaction, better concept understanding, quicker doubt resolution, and stronger academic control.
              </p>
            </div>

            <div className="animate-slide right">
              <div className="space-y-3">
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1B5A96', minWidth: '30px', fontWeight: 'bold'}}>✓</div>
                  <div>
                    <h5 className="font-bold mb-1 text-sm" style={{color: '#333'}}>Personal Attention in Every Class</h5>
                    <p className="text-xs text-gray-600">Individual focus and one-to-one guidance for every student.</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1B5A96', minWidth: '30px', fontWeight: 'bold'}}>✓</div>
                  <div>
                    <h5 className="font-bold mb-1 text-sm" style={{color: '#333'}}>Better Concept Clarity</h5>
                    <p className="text-xs text-gray-600">Strong fundamentals through detailed teaching and real-time explanation.</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1B5A96', minWidth: '30px', fontWeight: 'bold'}}>✓</div>
                  <div>
                    <h5 className="font-bold mb-1 text-sm" style={{color: '#333'}}>Daily Doubt Support</h5>
                    <p className="text-xs text-gray-600">Immediate doubt clearing and extra help for difficult topics.</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div style={{fontSize: '24px', color: '#1B5A96', minWidth: '30px', fontWeight: 'bold'}}>✓</div>
                  <div>
                    <h5 className="font-bold mb-1 text-sm" style={{color: '#333'}}>Discipline and Consistent Routine</h5>
                    <p className="text-xs text-gray-600">Fixed schedule, regular practice, and serious study culture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide up">
            <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#1B5A96'}}>Find Us Here</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6927696133885!2d72.99534307509018!3d26.271632877035064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c2641985b1d%3A0x2f69dbb671a8ff62!2s!5e0!3m2!1sen!2sin!4v1772957474139!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
