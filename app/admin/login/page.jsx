'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { EmailIcon, LockIcon } from '../../../lib/icons'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: '#f5f5f5'}}>
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
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="flex-1 outline-none" style={{padding: '10px 12px', fontSize: '14px'}} required />
            </div>
          </div>
          <button type="submit" className="w-full text-white font-semibold" style={{background: '#1B5A96', padding: '12px', borderRadius: '4px', fontSize: '16px', border: 'none', cursor: 'pointer'}}>Login</button>
        </form>
      </div>
    </div>
  )
}
