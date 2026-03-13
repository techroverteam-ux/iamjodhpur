'use client'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchData } from '../../lib/clientDataUtils'

export default function CoursesPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', course: '' })
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)
  const [bannerImage, setBannerImage] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/registration', {
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
        setFormData({ name: '', phone: '', course: '' })
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
    }
  }

  useEffect(() => {
    loadCourses()
    setVisible(true)
  }, [])

  const loadCourses = async () => {
    try {
      const data = await fetchData()
      
      if (data && data.courses && data.courses.length > 0) {
        // Filter only actual course content (not registrations)
        const actualCourses = data.courses.filter(course => 
          course.title && course.image && !course.phone && !course.name && course.type !== 'registration'
        )
        
        if (actualCourses.length > 0) {
          setCourses(actualCourses)
        } else {
          // Only use defaults if no actual courses in database
          const defaultCourses = [
            {
              id: '42147',
              title: 'Pre Foundation Course',
              description: 'Foundation course for Class 9th & 10th students',
              image: '/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png'
            },
            {
              id: '42161',
              title: 'NEET Preparation',
              description: 'Complete NEET preparation course',
              image: '/images/3520795826_both.png'
            },
            {
              id: '42286',
              title: 'JEE (Mains+Advanced)',
              description: 'JEE Mains and Advanced preparation',
              image: '/images/3520795826_both.png'
            },
            {
              id: '42385',
              title: 'All India Test Series (AITS)',
              description: 'Comprehensive test series for practice',
              image: '/images/3520795826_both.png'
            }
          ]
          setCourses(defaultCourses)
        }
      } else {
        // Only use defaults if database is empty
        const defaultCourses = [
          {
            id: '42147',
            title: 'Pre Foundation Course',
            description: 'Foundation course for Class 9th & 10th students',
            image: '/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png'
          },
          {
            id: '42161',
            title: 'NEET Preparation',
            description: 'Complete NEET preparation course',
            image: '/images/3520795826_both.png'
          },
          {
            id: '42286',
            title: 'JEE (Mains+Advanced)',
            description: 'JEE Mains and Advanced preparation',
            image: '/images/3520795826_both.png'
          },
          {
            id: '42385',
            title: 'All India Test Series (AITS)',
            description: 'Comprehensive test series for practice',
            image: '/images/3520795826_both.png'
          }
        ]
        setCourses(defaultCourses)
      }
      
      // Load banner image
      if (data && data.banners && data.banners.courses) {
        setBannerImage(data.banners.courses)
      }
    } catch (error) {
      console.error('Error loading courses:', error)
      // Fallback to default courses on error
      const defaultCourses = [
        {
          id: '42147',
          title: 'Pre Foundation Course',
          description: 'Foundation course for Class 9th & 10th students',
          image: '/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png'
        },
        {
          id: '42161',
          title: 'NEET Preparation',
          description: 'Complete NEET preparation course',
          image: '/images/3520795826_both.png'
        },
        {
          id: '42286',
          title: 'JEE (Mains+Advanced)',
          description: 'JEE Mains and Advanced preparation',
          image: '/images/3520795826_both.png'
        },
        {
          id: '42385',
          title: 'All India Test Series (AITS)',
          description: 'Comprehensive test series for practice',
          image: '/images/3520795826_both.png'
        }
      ]
      setCourses(defaultCourses)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{padding: '100px 20px', textAlign: 'center'}}>
          <h2>Loading courses...</h2>
        </div>
        <Footer />
      </>
    )
  }

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
          background: linear-gradient(90deg, #1B5A96, #FF6B35);
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
          background: #1B5A96 !important;
          transform: scale(1.05);
        }
        .btn-enroll {
          transition: all 0.3s;
        }
        .btn-enroll:hover {
          background: #1B5A96 !important;
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
      
      {bannerImage ? (
        <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
          <img src={bannerImage} alt="Courses" style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(27, 90, 150, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Our Courses</h1>
          </div>
        </div>
      ) : (
        <div style={{background: 'linear-gradient(135deg, #1B5A96 0%, #1B5A96 100%)', padding: '80px 20px', textAlign: 'center'}}>
          <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Our Courses</h1>
        </div>
      )}
      
      <section style={{background: 'linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%)', padding: '40px 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 8px'}}>
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
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <button className="btn-explore" style={{width: '100%', padding: '12px', background: '#1B5A96', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>
                        Explore Course
                      </button>
                      <button onClick={(e) => { e.preventDefault(); setShowRegisterModal(true); }} className="btn-enroll" style={{width: '100%', padding: '12px', background: 'transparent', color: '#1B5A96', border: '2px solid #1B5A96', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>
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
        <div 
          className="fixed inset-0 flex items-center justify-center p-4" 
          onClick={() => setShowRegisterModal(false)} 
          style={{
            background: 'rgba(0,0,0,0.8)', 
            zIndex: 99999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <div 
            className="bg-white w-full max-w-md relative" 
            onClick={(e) => e.stopPropagation()} 
            style={{
              color: '#000',
              borderRadius: '16px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <button 
              onClick={() => setShowRegisterModal(false)} 
              className="absolute top-4 right-4 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              style={{
                color: '#666',
                fontSize: '24px',
                fontWeight: 'bold',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <img 
                  src="/images/new_logo.png" 
                  alt="IMA Jodhpur" 
                  className="mx-auto mb-4" 
                  style={{height: 'auto', width: '100px'}} 
                />
                <h3 className="text-2xl font-bold mb-2" style={{color: '#1B5A96'}}>
                  Course Registration
                </h3>
                <p style={{color: '#666', fontSize: '14px'}}>Join IMA Jodhpur for excellence</p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  required 
                />
                
                <div style={{display: 'flex'}}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRight: 'none',
                    borderRadius: '8px 0 0 8px',
                    background: '#f9fafb',
                    color: '#374151',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    +91
                  </span>
                  <input 
                    type="tel" 
                    placeholder="WhatsApp Number" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} 
                    maxLength="10" 
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0 8px 8px 0',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                    required 
                  />
                </div>
                
                <select 
                  value={formData.course} 
                  onChange={(e) => setFormData({...formData, course: e.target.value})} 
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none',
                    background: 'white'
                  }}
                  required
                >
                  <option value="">Select Course</option>
                  <option value="Pre Foundation Course">Pre Foundation Course</option>
                  <option value="NEET Preparation">NEET Preparation</option>
                  <option value="JEE (Mains+Advanced)">JEE (Mains+Advanced)</option>
                  <option value="All India Test Series (AITS)">All India Test Series (AITS)</option>
                </select>
                
                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
