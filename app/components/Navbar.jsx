'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      <section className="top_heads top_heads_header top-head" style={{background:'#1977f3'}}>
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

      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image src="https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png" width={120} height={50} alt="IMA Jodhpur" className="h-12 w-auto" />
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <span className="text-2xl">☰</span>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition">Home</Link>
              <Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-semibold transition">About Us</Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-semibold transition">Courses</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-semibold transition">Blogs</Link>
              <Link href="/why-iam" className="text-gray-700 hover:text-blue-600 font-semibold transition">WHY IMA ?</Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-semibold transition">Contact Us</Link>
              <button onClick={() => setShowLoginModal(true)} className="px-6 py-2 rounded-full text-white font-semibold transition hover:opacity-90" style={{background:'#1977f3'}}>
                Login <i className="fa fa-chevron-right ml-1"></i>
              </button>
            </div>
          </nav>

          {isOpen && (
            <div className="md:hidden pb-4">
              <Link href="/" className="block py-2 text-gray-700">Home</Link>
              <Link href="/about-us" className="block py-2 text-gray-700">About Us</Link>
              <Link href="/courses" className="block py-2 text-gray-700">Courses</Link>
              <Link href="/blog" className="block py-2 text-gray-700">Blogs</Link>
              <Link href="/why-iam" className="block py-2 text-gray-700">WHY IMA ?</Link>
              <Link href="/contact-us" className="block py-2 text-gray-700">Contact Us</Link>
              <button onClick={() => setShowLoginModal(true)} className="w-full mt-2 px-6 py-2 rounded-full text-white font-semibold" style={{background:'#1977f3'}}>Login</button>
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
                <Image src="https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png" width={100} height={40} alt="IMA Jodhpur" className="mx-auto" style={{height: 'auto', width: '100px'}} />
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
                <button type="submit" className="w-full text-white font-semibold" style={{background:'#1977f3', padding: '10px 40px', borderRadius: '4px', fontSize: '16px', border: 'none', cursor: 'pointer'}}>Login</button>
              </form>
              <p className="mb-4" style={{fontSize: '14px'}}>Don't have an account yet? <a href="#" onClick={(e) => {e.preventDefault(); alert('SignUp coming soon!');}} className="font-bold" style={{color:'#1977f3', textDecoration: 'none'}}>SignUp</a></p>
              <a href="#" onClick={(e) => {e.preventDefault(); alert('Forgot Password coming soon!');}} className="font-bold" style={{color:'#1977f3', fontSize: '14px', textDecoration: 'none'}}>Forgot Password?</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
