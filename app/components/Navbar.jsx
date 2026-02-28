'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      <style jsx>{`
        .nav-link {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1B5A96, #2E6BA8, #4FB3E8);
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
        
        .nav-link:hover {
          color: #1B5A96 !important;
          transform: translateY(-2px);
          text-shadow: 0 2px 8px rgba(27, 90, 150, 0.3);
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
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(22, 119, 200, 0.4);
        }
        
        .mobile-nav-link {
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        
        .mobile-nav-link:hover {
          border-left-color: #1677C8;
          background: rgba(22, 119, 200, 0.05);
          transform: translateX(8px);
        }
      `}</style>
      
      <section className="top_heads top_heads_header top-head" style={{background:'#0B4F8A'}}>
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

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="nav-link text-gray-800 font-medium text-sm uppercase tracking-wide px-2 py-1">Home</Link>
              <Link href="/about-us" className="nav-link text-gray-800 font-medium text-sm uppercase tracking-wide px-2 py-1">About Us</Link>
              <Link href="/courses" className="nav-link text-gray-800 font-medium text-sm uppercase tracking-wide px-2 py-1">Courses</Link>
              <Link href="/facilities" className="nav-link text-gray-800 font-medium text-sm uppercase tracking-wide px-2 py-1">Facilities</Link>
              <Link href="/blog" className="nav-link text-gray-800 font-medium text-sm uppercase tracking-wide px-2 py-1">Blogs</Link>
              <Link href="/why-ima" className="nav-link text-gray-800 font-medium text-sm uppercase tracking-wide px-2 py-1">WHY IMA ?</Link>
              <Link href="/contact-us" className="nav-link text-gray-800 font-medium text-sm uppercase tracking-wide px-2 py-1">Contact Us</Link>
              <button onClick={() => setShowLoginModal(true)} className="login-btn px-6 py-2.5 rounded-md text-white font-medium text-sm uppercase tracking-wide" style={{background:'#1677C8'}}>
                Login
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
                <button onClick={() => setShowLoginModal(true)} className="w-full mt-4 px-6 py-2.5 rounded-md text-white font-medium text-sm uppercase tracking-wide" style={{background:'#1677C8'}}>Login</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={() => setShowLoginModal(false)} style={{background: 'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-lg w-full max-w-md relative" onClick={(e) => e.stopPropagation()} style={{maxWidth: '400px'}}>
            <button onClick={() => setShowLoginModal(false)} className="absolute top-2 right-2 text-4xl text-gray-400 hover:text-gray-600 leading-none" style={{fontSize: '40px'}}>&times;</button>
            <div className="text-center py-8 px-10">
              <div className="mb-4">
                <Image src="/images/new_logo.png" width={100} height={40} alt="IMA Jodhpur" className="mx-auto" style={{height: 'auto', width: '100px'}} />
              </div>
              <p className="my-6 font-bold" style={{fontSize: '16px'}}>Enter your details to continue</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Login functionality coming soon!'); }} className="mb-3">
                <div className="form-group mb-4">
                  <div className="input-group flex" style={{border: '1px solid #cfcccc', borderRadius: '4px'}}>
                    <div className="input-group-prepend" style={{background: '#f8f9fa', borderRight: '1px solid #cfcccc', padding: '10px 12px'}}>
                      <span style={{fontSize: '14px'}}>+91</span>
                    </div>
                    <input type="tel" maxLength="10" placeholder="Mobile Number" className="flex-1 outline-none" style={{padding: '10px 12px', fontSize: '14px', border: 'none'}} required />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="input-group flex" style={{border: '1px solid #cfcccc', borderRadius: '4px'}}>
                    <div className="input-group-prepend" style={{background: '#f8f9fa', borderRight: '1px solid #cfcccc', padding: '10px 12px'}}>
                      <i className="fa fa-lock" style={{fontSize: '14px', color: '#666'}}></i>
                    </div>
                    <input type="password" placeholder="Password" className="flex-1 outline-none" style={{padding: '10px 12px', fontSize: '14px', border: 'none'}} required />
                    <div className="input-group-prepend cursor-pointer" style={{background: '#f8f9fa', borderLeft: '1px solid #cfcccc', padding: '10px 12px'}}>
                      <i className="fa fa-eye" style={{fontSize: '14px', color: '#666'}}></i>
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full text-white font-semibold" style={{background:'#1677C8', padding: '10px 40px', borderRadius: '4px', fontSize: '16px', border: 'none', cursor: 'pointer'}}>Login</button>
              </form>
              <p className="mb-4" style={{fontSize: '14px'}}>Don't have an account yet? <a href="#" onClick={(e) => {e.preventDefault(); alert('SignUp coming soon!');}} className="font-bold" style={{color:'#1677C8', textDecoration: 'none'}}>SignUp</a></p>
              <a href="#" onClick={(e) => {e.preventDefault(); alert('Forgot Password coming soon!');}} className="font-bold" style={{color:'#1677C8', fontSize: '14px', textDecoration: 'none'}}>Forgot Password?</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
