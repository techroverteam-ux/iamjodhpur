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
      `}</style>
      
      <section className="top_heads top_heads_header top-head" style={{background:'#1B5A96'}}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5">
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
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center logo-container">
              <Image src="/images/new_logo.png" width={220} height={85} alt="IMA Jodhpur" className="h-20 w-auto" />
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              <span className="text-2xl text-gray-700">☰</span>
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <Link href="/" className="font-medium text-xs uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-300" style={{color: '#1B5A96', border: 'none'}} onMouseEnter={(e) => {e.target.style.border = '3px solid #1B5A96'; e.target.style.boxShadow = '0 8px 25px rgba(27, 90, 150, 0.6)'}} onMouseLeave={(e) => {e.target.style.border = 'none'; e.target.style.boxShadow = 'none'}}>Home</Link>
              <Link href="/about-us" className="font-medium text-xs uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-300" style={{color: '#1B5A96', border: 'none'}} onMouseEnter={(e) => {e.target.style.border = '3px solid #1B5A96'; e.target.style.boxShadow = '0 8px 25px rgba(27, 90, 150, 0.6)'}} onMouseLeave={(e) => {e.target.style.border = 'none'; e.target.style.boxShadow = 'none'}}>About Us</Link>
              <Link href="/courses" className="font-medium text-xs uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-300" style={{color: '#1B5A96', border: 'none'}} onMouseEnter={(e) => {e.target.style.border = '3px solid #1B5A96'; e.target.style.boxShadow = '0 8px 25px rgba(27, 90, 150, 0.6)'}} onMouseLeave={(e) => {e.target.style.border = 'none'; e.target.style.boxShadow = 'none'}}>Courses</Link>
              <Link href="/facilities" className="font-medium text-xs uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-300" style={{color: '#1B5A96', border: 'none'}} onMouseEnter={(e) => {e.target.style.border = '3px solid #1B5A96'; e.target.style.boxShadow = '0 8px 25px rgba(27, 90, 150, 0.6)'}} onMouseLeave={(e) => {e.target.style.border = 'none'; e.target.style.boxShadow = 'none'}}>Facilities</Link>
              <Link href="/blog" className="font-medium text-xs uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-300" style={{color: '#1B5A96', border: 'none'}} onMouseEnter={(e) => {e.target.style.border = '3px solid #1B5A96'; e.target.style.boxShadow = '0 8px 25px rgba(27, 90, 150, 0.6)'}} onMouseLeave={(e) => {e.target.style.border = 'none'; e.target.style.boxShadow = 'none'}}>Blogs</Link>
              <Link href="/why-ima" className="font-medium text-xs uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-300" style={{color: '#1B5A96', border: 'none'}} onMouseEnter={(e) => {e.target.style.border = '3px solid #1B5A96'; e.target.style.boxShadow = '0 8px 25px rgba(27, 90, 150, 0.6)'}} onMouseLeave={(e) => {e.target.style.border = 'none'; e.target.style.boxShadow = 'none'}}>WHY IMA ?</Link>
              <Link href="/contact-us" className="font-medium text-xs uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-300" style={{color: '#1B5A96', border: 'none'}} onMouseEnter={(e) => {e.target.style.border = '3px solid #1B5A96'; e.target.style.boxShadow = '0 8px 25px rgba(27, 90, 150, 0.6)'}} onMouseLeave={(e) => {e.target.style.border = 'none'; e.target.style.boxShadow = 'none'}}>Contact Us</Link>
              <button onClick={() => setShowRegisterModal(true)} className="login-btn px-6 py-2.5 rounded-md text-white font-medium text-sm uppercase tracking-wide" style={{background:'#dc3545'}}>
                STHE
              </button>
            </div>
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
                  <option value="Pre-Foundation">Pre-Foundation</option>
                  <option value="AITS">AITS</option>
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
