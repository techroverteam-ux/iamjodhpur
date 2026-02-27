'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      <section className="top_heads top_heads_header top-head" style={{background:'#0B4F8A'}}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5">
            <a href="tel:9828019432" className="text-white text-sm">
              <i className="fa fa-phone mr-1"></i> +91 - 9828019432
            </a>
            <a href="mailto:ceo.imajodhpur@gmail.com" className="text-white text-sm">
              <i className="fa fa-envelope-o mr-1"></i> ceo.imajodhpur@gmail.com
            </a>
          </div>
        </div>
      </section>

      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center">
              <Image src="/images/3520795826_both.png" width={280} height={110} alt="IMA Jodhpur" className="h-24 w-auto" />
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              <span className="text-2xl text-gray-700">☰</span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-[#0B4F8A] font-medium text-sm uppercase tracking-wide transition-colors duration-200">Home</Link>
              <Link href="/about-us" className="text-gray-800 hover:text-[#0B4F8A] font-medium text-sm uppercase tracking-wide transition-colors duration-200">About Us</Link>
              <Link href="/courses" className="text-gray-800 hover:text-[#0B4F8A] font-medium text-sm uppercase tracking-wide transition-colors duration-200">Courses</Link>
              <Link href="/facilities" className="text-gray-800 hover:text-[#0B4F8A] font-medium text-sm uppercase tracking-wide transition-colors duration-200">Facilities</Link>
              <Link href="/blog" className="text-gray-800 hover:text-[#0B4F8A] font-medium text-sm uppercase tracking-wide transition-colors duration-200">Blogs</Link>
              <Link href="/why-ima" className="text-gray-800 hover:text-[#0B4F8A] font-medium text-sm uppercase tracking-wide transition-colors duration-200">WHY IMA ?</Link>
              <Link href="/contact-us" className="text-gray-800 hover:text-[#0B4F8A] font-medium text-sm uppercase tracking-wide transition-colors duration-200">Contact Us</Link>
              <button onClick={() => setShowLoginModal(true)} className="px-6 py-2.5 rounded-md text-white font-medium text-sm uppercase tracking-wide transition-all duration-200 hover:shadow-lg" style={{background:'#1677C8'}}>
                Login
              </button>
            </div>
          </nav>

          {isOpen && (
            <div className="md:hidden pb-6 border-t">
              <div className="pt-4 space-y-3">
                <Link href="/" className="block py-2 text-gray-800 font-medium text-sm uppercase tracking-wide">Home</Link>
                <Link href="/about-us" className="block py-2 text-gray-800 font-medium text-sm uppercase tracking-wide">About Us</Link>
                <Link href="/courses" className="block py-2 text-gray-800 font-medium text-sm uppercase tracking-wide">Courses</Link>
                <Link href="/facilities" className="block py-2 text-gray-800 font-medium text-sm uppercase tracking-wide">Facilities</Link>
                <Link href="/blog" className="block py-2 text-gray-800 font-medium text-sm uppercase tracking-wide">Blogs</Link>
                <Link href="/why-ima" className="block py-2 text-gray-800 font-medium text-sm uppercase tracking-wide">WHY IMA ?</Link>
                <Link href="/contact-us" className="block py-2 text-gray-800 font-medium text-sm uppercase tracking-wide">Contact Us</Link>
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
                <Image src="/images/3520795826_both.png" width={100} height={40} alt="IMA Jodhpur" className="mx-auto" style={{height: 'auto', width: '100px'}} />
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
