'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { EmailIcon, LockIcon } from '../../../lib/icons'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'admin@imajodhpur.com' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true')
      router.push('/admin/dashboard')
    } else {
      toast.error('Invalid credentials! Please check your email and password.')
    }
  }

  return (
    <>
      <style jsx global>{`
        .admin-login-page {
          padding-top: 140px !important;
          min-height: 100vh !important;
        }
      `}</style>
      <Navbar />
      <div className="admin-login-page min-h-screen flex items-center justify-center p-4" style={{background: '#f5f5f5'}}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="text-center mb-6">
          <Image src="/images/new_logo.png" width={120} height={50} alt="IMA Jodhpur" className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold" style={{color: '#1B5A96'}}>Admin Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-sm">Email</label>
            <div className="flex" style={{border: '1px solid #cfcccc', borderRadius: '4px'}}>
              <span style={{background: '#f8f9fa', borderRight: '1px solid #cfcccc', padding: '10px 12px'}}>
                <EmailIcon style={{color: '#666'}} size={16} />
              </span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 outline-none" style={{padding: '10px 12px', fontSize: '14px'}} required />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-sm">Password</label>
            <div className="flex" style={{border: '1px solid #cfcccc', borderRadius: '4px'}}>
              <span style={{background: '#f8f9fa', borderRight: '1px solid #cfcccc', padding: '10px 12px'}}>
                <LockIcon style={{color: '#666'}} size={16} />
              </span>
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                className="flex-1 outline-none" 
                style={{padding: '10px 12px', fontSize: '14px'}} 
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="px-3 text-gray-500 hover:text-gray-700"
                style={{background: 'transparent', border: 'none', cursor: 'pointer'}}
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button type="submit" className="w-full text-white font-semibold" style={{background: '#1B5A96', padding: '12px', borderRadius: '4px', fontSize: '16px', border: 'none', cursor: 'pointer'}}>Login</button>
        </form>
      </div>
    </div>
    </>
  )
}
