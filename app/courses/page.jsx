'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CoursesPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '' })
  const [courses, setCourses] = useState([
    { id: 42147, title: 'Pre Foundation Course', validity: '354 Days', description: 'Foundation course for early preparation', image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png' },
    { id: 42161, title: 'NEET Preparation', validity: '365 Days', description: 'Complete NEET preparation course', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42286, title: 'JEE (Mains+Advance)', validity: '365 Days', description: 'JEE Mains and Advanced preparation', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42385, title: 'All India Test Series (AITS)', validity: '365 Days', description: 'All India Test Series for practice', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
  ])
  const [visible, setVisible] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const registration = { ...formData, date: new Date().toLocaleDateString(), id: Date.now() }
      const existing = JSON.parse(localStorage.getItem('courseRegistrations') || '[]')
      existing.push(registration)
      localStorage.setItem('courseRegistrations', JSON.stringify(existing))
      alert('Registration successful!')
      setShowRegisterModal(false)
      setFormData({ name: '', email: '', phone: '', course: '' })
    } catch (error) {
      alert('Registration failed!')
    }
  }

  useEffect(() => {
    setVisible(true)
    if (typeof window !== 'undefined') {
      const savedCourses = localStorage.getItem('courses')
      if (savedCourses) {
        setCourses(JSON.parse(savedCourses))
      }
    }
  }, [])

  return (
    <>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.5s ease;
        }
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
        .course-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #0B4F8A, #FF6B35);
          transition: left 0.4s;
        }
        .course-card:hover::before {
          left: 0;
        }
        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 16px 32px rgba(0, 102, 255, 0.2);
        }
        .btn-explore {
          transition: all 0.3s;
        }
        .btn-explore:hover {
          background: #0052CC !important;
          transform: scale(1.05);
        }
        .btn-enroll {
          transition: all 0.3s;
        }
        .btn-enroll:hover {
          background: #0B4F8A !important;
          color: white !important;
        }
        @media (max-width: 768px) {
          .page-title {
            font-size: 24px !important;
          }
          .page-subtitle {
            font-size: 13px !important;
          }
          .course-card {
            font-size: 12px;
          }
          .course-card h3 {
            font-size: 13px !important;
            min-height: 36px !important;
            line-height: 1.3 !important;
          }
          .course-card > a > div:last-child {
            padding: 12px !important;
          }
          .btn-explore, .btn-enroll {
            padding: 8px !important;
            font-size: 11px !important;
          }
        }
      `}</style>

      <Navbar />
      
      <section style={{background: 'linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%)', padding: '40px 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 8px'}}>
          <div style={{marginBottom: '40px', textAlign: 'center'}}>
            <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6B7280', marginBottom: '20px', background: 'white', padding: '8px 16px', borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
              <a href="/" style={{color: '#6B7280', textDecoration: 'none'}}>Home</a>
              <span>›</span>
              <span style={{color: '#0B4F8A', fontWeight: '600'}}>All Courses</span>
            </div>
            <h1 className="page-title" style={{fontSize: '42px', fontWeight: '700', color: '#0B4F8A', marginBottom: '12px'}}>Explore Our Courses</h1>
            <p className="page-subtitle" style={{color: '#6B7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>Choose the perfect program to achieve your academic goals</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {courses.map((item, index) => (
              <div 
                key={item.id} 
                className={`course-card fade-in ${visible ? 'show' : ''}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E8EEF5'
                }}
              >
                <a href={`/course-details?id=${item.id}`} style={{textDecoration: 'none'}}>
                  <div style={{height: '140px', background: 'linear-gradient(135deg, #F8FAFC, #E8EEF5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', position: 'relative'}}>
                    <img src={item.image} alt={item.title} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                  </div>
                  <div style={{padding: '16px'}}>
                    <h3 style={{fontSize: '17px', fontWeight: '600', color: '#222222', marginBottom: '12px', minHeight: '48px', lineHeight: '1.4'}}>{item.title}</h3>
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', padding: '6px 10px', background: '#F8FAFC', borderRadius: '8px'}}>
                      <i className="fa fa-calendar" style={{color: '#0B4F8A', fontSize: '14px'}}></i>
                      <span style={{fontSize: '13px', color: '#6B7280', fontWeight: '500'}}>{item.validity}</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <button className="btn-explore" style={{width: '100%', padding: '12px', background: '#0B4F8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>
                        Explore Course
                      </button>
                      <button onClick={(e) => { e.preventDefault(); setShowRegisterModal(true); }} className="btn-enroll" style={{width: '100%', padding: '12px', background: 'transparent', color: '#0B4F8A', border: '2px solid #0B4F8A', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>
                        Register Now
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={() => setShowRegisterModal(false)} style={{background: 'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-lg w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowRegisterModal(false)} className="absolute top-2 right-2 text-4xl text-gray-400 hover:text-gray-600 leading-none">&times;</button>
            <div className="text-center py-8 px-10">
              <div className="mb-4">
                <img src="/images/new_logo.png" alt="IMA Jodhpur" className="mx-auto" style={{height: 'auto', width: '100px'}} />
              </div>
              <p className="my-6 font-bold text-lg">Student Registration</p>
              <form onSubmit={handleRegister} className="space-y-4">
                <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded outline-none" required />
                <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded outline-none" required />
                <div className="flex">
                  <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l bg-gray-50">+91</span>
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} maxLength="10" className="w-full p-3 border border-gray-300 rounded-r outline-none" required />
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

      <Footer />
    </>
  )
}
