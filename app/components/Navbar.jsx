'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '' })

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const registration = { ...formData, date: new Date().toLocaleDateString(), id: Date.now() }
      
      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem('registrations') || '[]')
      existing.push(registration)
      localStorage.setItem('registrations', JSON.stringify(existing))
      
      alert('Submitted Successfully\n\nFor more information call on\n+91 - 9571037333')
      setShowRegisterModal(false)
      setFormData({ name: '', email: '', phone: '', course: '' })
    } catch (error) {
      alert('Registration failed!')
    }
  }

  return (
    <div className="sticky top-0 z-50">
      <style jsx>{`
        @media (max-width: 768px) {
          .top_heads {
            font-size: 11px !important;
            padding: 0.25rem 0 !important;
          }
          .top_heads a {
            font-size: 11px !important;
          }
          .navbar-container {
            padding: 0 0.5rem !important;
          }
          .logo-container img {
            width: 140px !important;
            height: auto !important;
          }
        }
        .nav-link {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: inline-block;
          border: 2px solid #1B5A96;
          border-radius: 6px;
        }
        
        .nav-link:hover {
          box-shadow: 0 8px 25px rgba(27, 90, 150, 0.6);
          transform: translateY(-2px);
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1B5A96, #1B5A96, #1B5A96);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(-50%);
        }
        
        .nav-link:hover::before {
          width: 100%;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(75, 179, 232, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .nav-link:hover::after {
          left: 100%;
        }
        

        
        .logo-container {
          transition: all 0.3s ease;
        }
        
        .logo-container:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 4px 12px rgba(27, 90, 150, 0.3));
        }
        
        .login-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .login-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .login-btn:hover::before {
          left: 100%;
        }
        
        .login-btn:hover {
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 8px 25px rgba(22, 119, 200, 0.4);
        }
        
        .mobile-nav-link {
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        
        .mobile-nav-link:hover {
          border-left-color: #1B5A96;
          background: rgba(22, 119, 200, 0.05);
          transform: translateX(8px);
        }
        
        .menu-item {
          position: relative;
          padding: 12px 16px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(27, 90, 150, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .menu-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #1B5A96, #4A90E2, #1B5A96);
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 2px;
        }
        
        .menu-item:hover {
          color: #1B5A96 !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(27, 90, 150, 0.2);
          background: rgba(27, 90, 150, 0.05);
        }
        
        .menu-item:hover::before {
          left: 100%;
        }
        
        .menu-item:hover::after {
          width: 100%;
        }
        
        .dropdown {
          position: relative;
        }
        
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 2px solid var(--primary-medium);
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(27, 90, 150, 0.2);
          min-width: 220px;
          z-index: 1000;
          margin-top: 5px;
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown:hover .dropdown-menu {
          display: block;
        }
        
        .dropdown-menu a {
          display: block;
          padding: 12px 20px;
          color: var(--primary-medium);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s;
          border-left: 3px solid transparent;
        }
        
        .dropdown-menu a:hover {
          background: linear-gradient(90deg, #f0f9ff, white);
          border-left-color: var(--primary-medium);
          padding-left: 25px;
        }
      `}</style>
      
      <section className="top_heads top_heads_header top-head" style={{background:'#1B5A96'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-2.5 gap-1">
            <a href="tel:9571037333" className="text-white text-sm">
              <i className="fa fa-phone mr-1"></i> +91 - 9571037333
            </a>
            <a href="mailto:ceo.iitacademy@gmail.com" className="text-white text-sm">
              <i className="fa fa-envelope-o mr-1"></i> ceo.iitacademy@gmail.com
            </a>
          </div>
        </div>
      </section>

      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto navbar-container">
          <nav className="flex items-center h-20">
            <Link href="/" className="flex items-center logo-container">
              <Image src="/images/new_logo.png" width={220} height={85} alt="IMA Jodhpur" className="h-20 w-auto" />
            </Link>

            <div className="hidden md:flex items-center justify-end flex-1 ml-16">
              <div className="flex items-center space-x-6 whitespace-nowrap">
                <Link href="/" className="menu-item font-bold text-sm uppercase tracking-wide" style={{color: '#1B5A96'}}>Home</Link>
                <div className="dropdown">
                  <Link href="/about-us" className="menu-item font-bold text-sm uppercase tracking-wide" style={{color: '#1B5A96'}}>About Us</Link>
                  <div className="dropdown-menu">
                    <a href="/about-us#about-ima">About IMA</a>
                    <a href="/about-us#vision-mission">Vision & Mission</a>
                    <a href="/about-us#director-message">Director's Message</a>
                  </div>
                </div>
                <Link href="/courses" className="menu-item font-bold text-sm uppercase tracking-wide" style={{color: '#1B5A96'}}>Courses</Link>
                <Link href="/facilities" className="menu-item font-bold text-sm uppercase tracking-wide" style={{color: '#1B5A96'}}>Facilities</Link>
                <Link href="/blog" className="menu-item font-bold text-sm uppercase tracking-wide" style={{color: '#1B5A96'}}>Blogs</Link>
                <Link href="/why-ima" className="menu-item font-bold text-sm uppercase tracking-wide" style={{color: '#1B5A96'}}>WHY IMA ?</Link>
                <Link href="/contact-us" className="menu-item font-bold text-sm uppercase tracking-wide" style={{color: '#1B5A96'}}>Contact Us</Link>
                <button onClick={() => setShowRegisterModal(true)} className="login-btn px-3 py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wide whitespace-nowrap ml-8" style={{background:'linear-gradient(135deg, #dc3545, #c82333)', boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'}}>
                  <div style={{fontSize: '18px'}}>STHE</div>
                  <div style={{fontSize: '15px', fontWeight: 'normal', textTransform: 'none', marginTop: '2px', opacity: '0.95'}}>Get Scholarship Upto 100%</div>
                </button>
              </div>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              <span className="text-2xl text-gray-700">☰</span>
            </button>
          </nav>

          {isOpen && (
            <div className="md:hidden pb-6 border-t">
              <div className="pt-4 space-y-3">
                <Link href="/" className="mobile-nav-link block py-3 px-4 text-gray-800 font-medium text-sm uppercase tracking-wide">Home</Link>
                <Link href="/about-us" className="mobile-nav-link block py-3 px-4 text-gray-800 font-medium text-sm uppercase tracking-wide">About Us</Link>
                <Link href="/courses" className="mobile-nav-link block py-3 px-4 text-gray-800 font-medium text-sm uppercase tracking-wide">Courses</Link>
                <Link href="/facilities" className="mobile-nav-link block py-3 px-4 text-gray-800 font-medium text-sm uppercase tracking-wide">Facilities</Link>
                <Link href="/blog" className="mobile-nav-link block py-3 px-4 text-gray-800 font-medium text-sm uppercase tracking-wide">Blogs</Link>
                <Link href="/why-ima" className="mobile-nav-link block py-3 px-4 text-gray-800 font-medium text-sm uppercase tracking-wide">WHY IMA ?</Link>
                <Link href="/contact-us" className="mobile-nav-link block py-3 px-4 text-gray-800 font-medium text-sm uppercase tracking-wide">Contact Us</Link>
                <button onClick={() => setShowRegisterModal(true)} className="w-full mt-4 px-6 py-2.5 rounded-md text-white font-medium text-sm uppercase tracking-wide" style={{background:'#dc3545'}}>STHE</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={() => setShowRegisterModal(false)} style={{background: 'rgba(0,0,0,0.5)', paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="bg-white rounded-lg w-full max-w-md relative" onClick={(e) => e.stopPropagation()} style={{maxHeight: 'calc(100vh - 120px)', overflowY: 'auto'}}>
            <button onClick={() => setShowRegisterModal(false)} className="absolute top-2 right-2 text-4xl text-gray-400 hover:text-gray-600 leading-none">&times;</button>
            <div className="text-center py-6 px-8">
              <div className="mb-3">
                <Image src="/images/new_logo.png" width={80} height={32} alt="IMA Jodhpur" className="mx-auto" style={{height: 'auto', width: '80px'}} />
              </div>
              <p className="my-4 font-bold text-base" style={{color: '#1B5A96'}}>Get Scholarship Upto 100%</p>
              <div className="mb-4 text-left">
                <h3 className="font-bold mb-2" style={{color: '#1B5A96', fontSize: '15px'}}>Science Talent Hunt Examination</h3>
                <ul style={{listStyle: 'none', padding: 0, color: '#1B5A96', fontSize: '13px', lineHeight: '1.8'}}>
                  <li><strong>📅 Every Sunday</strong></li>
                  <li><strong>⏱️ 2 Hours Question Paper</strong></li>
                  <li><strong>📝 75 Questions</strong></li>
                </ul>
              </div>
              <form onSubmit={handleRegister} className="space-y-3">
                <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded outline-none" required />
                <div className="flex">
                  <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l bg-gray-50">+91</span>
                  <input type="tel" placeholder="WhatsApp Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} maxLength="10" className="w-full p-3 border border-gray-300 rounded-r outline-none" required />
                </div>
                <select value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="w-full p-3 border border-gray-300 rounded outline-none" required>
                  <option value="">Select Course</option>
                  <option value="NEET">NEET</option>
                  <option value="JEE">JEE</option>
                  <option value="Pre-Foundation">Pre-Foundation 9th & 10th</option>
                </select>
                <button type="submit" className="w-full text-white font-semibold py-3 rounded" style={{background:'#dc3545'}}>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
