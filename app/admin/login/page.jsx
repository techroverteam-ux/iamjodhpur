'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
      alert('Invalid credentials! Use admin@imajodhpur.com / admin123')
    }
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="min-h-screen flex items-center justify-center" style={{background: '#f5f5f5'}}>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <div className="text-center mb-6">
            <Image src="https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png" width={120} height={50} alt="IMA Jodhpur" className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold" style={{color: '#1977f3'}}>Admin Login</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-sm">Email</label>
              <div className="flex" style={{border: '1px solid #cfcccc', borderRadius: '4px'}}>
                <span style={{background: '#f8f9fa', borderRight: '1px solid #cfcccc', padding: '10px 12px'}}>
                  <i className="fa fa-envelope" style={{color: '#666'}}></i>
                </span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@imajodhpur.com" className="flex-1 outline-none" style={{padding: '10px 12px', fontSize: '14px'}} required />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-sm">Password</label>
              <div className="flex" style={{border: '1px solid #cfcccc', borderRadius: '4px'}}>
                <span style={{background: '#f8f9fa', borderRight: '1px solid #cfcccc', padding: '10px 12px'}}>
                  <i className="fa fa-lock" style={{color: '#666'}}></i>
                </span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="flex-1 outline-none" style={{padding: '10px 12px', fontSize: '14px'}} required />
              </div>
            </div>
            <button type="submit" className="w-full text-white font-semibold" style={{background: '#1977f3', padding: '12px', borderRadius: '4px', fontSize: '16px', border: 'none', cursor: 'pointer'}}>Login</button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-600">Demo: admin@imajodhpur.com / admin123</p>
        </div>
      </div>
    </>
  )
}
