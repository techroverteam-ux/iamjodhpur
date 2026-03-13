'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { addData } from '../../lib/clientDataUtils'
import { PhoneIcon, EmailIcon, HomeIcon, InfoIcon, BookIcon, BuildingIcon, NewsIcon, QuestionIcon, GraduationIcon, MenuIcon } from '../../lib/icons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '' })
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Registration successful! We will contact you soon. For more information call +91 - 9571037333', {
          duration: 6000,
          position: 'bottom-center',
        })
        setShowRegisterModal(false)
        setFormData({ name: '', email: '', phone: '', course: '' })
      } else {
        toast.error(result.error || 'Registration failed. Please try again.', {
          duration: 4000,
          position: 'bottom-center',
        })
      }
    } catch (error) {
      toast.error('Network error. Please try again.', {
        duration: 4000,
        position: 'bottom-center',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <style jsx>{`
        /* Mobile Hamburger Menu Positioning */
        @media (max-width: 768px) {
          .top_heads {
            font-size: 11px !important;
            padding: 0.25rem 0 !important;
          }
          .top_heads a {
            font-size: 11px !important;
          }
          .navbar-container {
            padding: 0 1rem !important;
            position: relative;
          }
          .logo-container img {
            width: 120px !important;
            height: auto !important;
          }
          .hamburger-btn {
            position: absolute !important;
            right: 1rem !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 10 !important;
            padding: 0.75rem !important;
            background: linear-gradient(135deg, #1B5A96, #2563eb) !important;
            border: none !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 15px rgba(27, 90, 150, 0.3) !important;
            transition: all 0.3s ease !important;
          }
          .hamburger-btn:hover {
            background: linear-gradient(135deg, #2563eb, #1B5A96) !important;
            transform: translateY(-50%) scale(1.05) !important;
            box-shadow: 0 6px 20px rgba(27, 90, 150, 0.4) !important;
          }
          .hamburger-icon {
            color: white !important;
            transition: all 0.3s ease !important;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2)) !important;
          }
          .hamburger-btn:hover .hamburger-icon {
            transform: rotate(180deg) !important;
          }
          .mobile-menu {
            position: absolute !important;
            top: 100% !important;
            left: 0 !important;
            right: 0 !important;
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
            border: none !important;
            box-shadow: 0 20px 40px rgba(27, 90, 150, 0.15) !important;
            z-index: 50 !important;
            border-radius: 0 0 20px 20px !important;
            backdrop-filter: blur(10px) !important;
            animation: slideDown 0.4s ease-out !important;
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .mobile-nav-link {
            transition: all 0.3s ease !important;
            border-left: 4px solid transparent !important;
            border-radius: 12px !important;
            margin: 0.5rem !important;
            background: rgba(255, 255, 255, 0.7) !important;
            backdrop-filter: blur(5px) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .mobile-nav-link::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(90deg, transparent, rgba(27, 90, 150, 0.1), transparent) !important;
            transition: left 0.5s ease !important;
          }
          .mobile-nav-link:hover::before {
            left: 100% !important;
          }
          .mobile-nav-link:hover {
            border-left-color: #1B5A96 !important;
            background: rgba(27, 90, 150, 0.1) !important;
            transform: translateX(8px) scale(1.02) !important;
            color: #1B5A96 !important;
            box-shadow: 0 4px 12px rgba(27, 90, 150, 0.2) !important;
          }
          .mobile-nav-link svg {
            color: #1B5A96 !important;
            transition: all 0.3s ease !important;
          }
          .mobile-nav-link:hover svg {
            transform: scale(1.2) rotate(5deg) !important;
            color: #1B5A96 !important;
          }
          .mobile-register-btn {
            background: linear-gradient(135deg, #dc3545, #c82333) !important;
            border: none !important;
            border-radius: 12px !important;
            padding: 1rem !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            transition: all 0.3s ease !important;
            margin: 0.5rem !important;
            box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .mobile-register-btn::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent) !important;
            transition: left 0.5s ease !important;
          }
          .mobile-register-btn:hover::before {
            left: 100% !important;
          }
          .mobile-register-btn:hover {
            transform: translateY(-3px) scale(1.05) !important;
            box-shadow: 0 8px 25px rgba(220, 53, 69, 0.4) !important;
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
        
        .nav-menu-item:hover {
          color: #0066cc !important;
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
            <a href="tel:9571037333" className="text-white text-sm flex items-center">
              <PhoneIcon className="mr-1" size={12} /> 📞 +91 - 9571037333
            </a>
            <a href="mailto:ceo.iitacademy@gmail.com" className="text-white text-sm flex items-center">
              <EmailIcon className="mr-1" size={12} /> ceo.iitacademy@gmail.com
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
                <Link href="/" className="font-bold text-sm uppercase tracking-wide text-black hover:scale-110 transition-transform duration-200" style={{color: 'black'}} onMouseEnter={(e) => e.target.style.color = '#1B5A96'} onMouseLeave={(e) => e.target.style.color = 'black'}>Home</Link>
                <div className="dropdown">
                  <Link href="/about-us" className="font-bold text-sm uppercase tracking-wide text-black hover:scale-110 transition-transform duration-200" style={{color: 'black'}} onMouseEnter={(e) => e.target.style.color = '#1B5A96'} onMouseLeave={(e) => e.target.style.color = 'black'}>About Us</Link>
                  <div className="dropdown-menu">
                    <a href="/about-us#about-ima">About IMA</a>
                    <a href="/about-us#vision-mission">Vision & Mission</a>
                    <a href="/about-us#director-message">Director's Message</a>
                  </div>
                </div>
                <Link href="/courses" className="font-bold text-sm uppercase tracking-wide text-black hover:scale-110 transition-transform duration-200" style={{color: 'black'}} onMouseEnter={(e) => e.target.style.color = '#1B5A96'} onMouseLeave={(e) => e.target.style.color = 'black'}>Courses</Link>
                <Link href="/facilities" className="font-bold text-sm uppercase tracking-wide text-black hover:scale-110 transition-transform duration-200" style={{color: 'black'}} onMouseEnter={(e) => e.target.style.color = '#1B5A96'} onMouseLeave={(e) => e.target.style.color = 'black'}>Facilities</Link>
                <Link href="/blog" className="font-bold text-sm uppercase tracking-wide text-black hover:scale-110 transition-transform duration-200" style={{color: 'black'}} onMouseEnter={(e) => e.target.style.color = '#1B5A96'} onMouseLeave={(e) => e.target.style.color = 'black'}>Blogs</Link>
                <Link href="/why-ima" className="font-bold text-sm uppercase tracking-wide text-black hover:scale-110 transition-transform duration-200" style={{color: 'black'}} onMouseEnter={(e) => e.target.style.color = '#1B5A96'} onMouseLeave={(e) => e.target.style.color = 'black'}>WHY IMA ?</Link>
                <Link href="/contact-us" className="font-bold text-sm uppercase tracking-wide text-black hover:scale-110 transition-transform duration-200" style={{color: 'black'}} onMouseEnter={(e) => e.target.style.color = '#1B5A96'} onMouseLeave={(e) => e.target.style.color = 'black'}>Contact Us</Link>
                <button onClick={() => setShowRegisterModal(true)} className="login-btn px-3 py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wide whitespace-nowrap ml-8" style={{background:'linear-gradient(135deg, #dc3545, #c82333)', boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'}}>
                  <div style={{fontSize: '18px'}}>STHE</div>
                  <div style={{fontSize: '15px', fontWeight: 'normal', textTransform: 'none', marginTop: '2px', opacity: '0.95'}}>Get Scholarship Upto 100%</div>
                </button>
              </div>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden hamburger-btn">
              <MenuIcon className="hamburger-icon" size={24} />
            </button>
          </nav>

          {isOpen && (
            <div className="md:hidden mobile-menu">
              <div className="py-6 px-4 space-y-2">
                <Link href="/" className="mobile-nav-link block py-3 px-4 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center" onClick={() => setIsOpen(false)}>
                  <HomeIcon className="mr-3" size={16} style={{color: '#1B5A96'}} />Home
                </Link>
                <Link href="/about-us" className="mobile-nav-link block py-3 px-4 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center" onClick={() => setIsOpen(false)}>
                  <InfoIcon className="mr-3" size={16} style={{color: '#1B5A96'}} />About Us
                </Link>
                <Link href="/courses" className="mobile-nav-link block py-3 px-4 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center" onClick={() => setIsOpen(false)}>
                  <BookIcon className="mr-3" size={16} style={{color: '#1B5A96'}} />Courses
                </Link>
                <Link href="/facilities" className="mobile-nav-link block py-3 px-4 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center" onClick={() => setIsOpen(false)}>
                  <BuildingIcon className="mr-3" size={16} style={{color: '#1B5A96'}} />Facilities
                </Link>
                <Link href="/blog" className="mobile-nav-link block py-3 px-4 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center" onClick={() => setIsOpen(false)}>
                  <NewsIcon className="mr-3" size={16} style={{color: '#1B5A96'}} />Blogs
                </Link>
                <Link href="/why-ima" className="mobile-nav-link block py-3 px-4 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center" onClick={() => setIsOpen(false)}>
                  <QuestionIcon className="mr-3" size={16} style={{color: '#1B5A96'}} />Why IMA ?
                </Link>
                <Link href="/contact-us" className="mobile-nav-link block py-3 px-4 text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center" onClick={() => setIsOpen(false)}>
                  <PhoneIcon className="mr-3" size={16} style={{color: '#1B5A96'}} />Contact Us
                </Link>
                <div className="pt-3 pb-2">
                  <button onClick={() => { setShowRegisterModal(true); setIsOpen(false); }} className="mobile-register-btn w-full text-white font-semibold text-sm flex items-center justify-center">
                    <GraduationIcon className="mr-2" size={16} style={{color: 'white'}} />STHE - Get Scholarship
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={() => setShowRegisterModal(false)} style={{background: 'rgba(0,0,0,0.8)'}}>
          <div className="bg-white rounded-xl w-full max-w-md relative shadow-2xl" onClick={(e) => e.stopPropagation()} style={{maxHeight: '90vh', overflowY: 'auto'}}>
            <button onClick={() => setShowRegisterModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors">&times;</button>
            
            <div className="text-center py-6 px-6">
              <div className="mb-4">
                <Image src="/images/new_logo.png" width={120} height={48} alt="IMA Jodhpur" className="mx-auto" style={{height: 'auto', width: '120px'}} />
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-red-600 mb-3">Get Scholarship Upto 100%</h3>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-4">
                <h4 className="text-base font-bold mb-3" style={{color: '#1B5A96'}}>Science Talent Hunt Examination</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Every Sunday</span>
                  </div>
                  <div className="flex items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">2 Hours Question Paper</span>
                  </div>
                  <div className="flex items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h6a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">75 Questions</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleRegister} className="space-y-3">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700" 
                    required 
                  />
                </div>
                
                <div className="flex">
                  <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-700 font-semibold">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    placeholder="WhatsApp Number" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} 
                    maxLength="10" 
                    className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700" 
                    required 
                  />
                </div>
                
                <div>
                  <select 
                    value={formData.course} 
                    onChange={(e) => setFormData({...formData, course: e.target.value})} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700" 
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="NEET">NEET</option>
                    <option value="JEE">JEE</option>
                    <option value="Pre-Foundation">Pre-Foundation 9th & 10th</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 rounded-lg transition-colors shadow-lg"
                >
                  {loading ? 'Registering...' : 'Register for Scholarship Test'}
                </button>
              </form>
              
              <div className="mt-3 text-xs text-gray-600">
                <p>For more info: <a href="tel:9571037333" className="text-blue-600 font-semibold">+91 - 9571037333</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
