'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { fetchData, addData } from '../../lib/clientDataUtils'

export default function Courses() {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '' })
  const [courses, setCourses] = useState([
    {
      id: 42147,
      title: "Pre Foundation Course",
      image: "/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png",
      validity: "354 Days"
    },
    {
      id: 42161,
      title: "NEET Preparation",
      image: "/images/3520795826_both.png",
      validity: "365 Days"
    },
    {
      id: 42286,
      title: "JEE (Mains+Advance)",
      image: "/images/3520795826_both.png",
      validity: "365 Days"
    },
    {
      id: 42385,
      title: "All India Test Series (AITS)",
      image: "/images/3520795826_both.png",
      validity: "365 Days"
    }
  ])
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    
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

  useEffect(() => {
    loadCourses()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.course-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('morph-in')
              }, index * 250)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.courses-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const loadCourses = async () => {
    const data = await fetchData()
    
    if (data && data.course_content && data.course_content.length > 0) {
      // Use course_content collection for actual courses
      setCourses(data.course_content)
    } else {
      // Only use defaults if no courses in database
      const defaultCourses = [
        {
          id: '42147',
          title: "Pre Foundation Course",
          image: "/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png",
          validity: "354 Days"
        },
        {
          id: '42161',
          title: "NEET Preparation",
          image: "/images/3520795826_both.png",
          validity: "365 Days"
        },
        {
          id: '42286',
          title: "JEE (Mains+Advanced)",
          image: "/images/3520795826_both.png",
          validity: "365 Days"
        },
        {
          id: '42385',
          title: "All India Test Series (AITS)",
          image: "/images/3520795826_both.png",
          validity: "365 Days"
        }
      ]
      setCourses(defaultCourses)
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes flipIn {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(90deg) translateX(50px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateX(0);
          }
        }
        .course-card {
          opacity: 0;
          transform: perspective(1000px) rotateY(90deg) translateX(50px);
        }
        .course-card.morph-in {
          animation: flipIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .flip-card {
          position: relative;
          width: 100%;
          height: 300px;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, var(--primary-medium), var(--primary-light)) border-box;
          border: 3px solid transparent;
          border-radius: 20px;
        }
        .course-card:hover .flip-card {
          transform: rotateY(180deg);
          box-shadow: 0 20px 40px rgba(25, 119, 243, 0.3);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
        }
        .flip-card-front {
          background: white;
        }
        .flip-card-back {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-medium) 100%);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          color: white;
        }
      `}</style>
    <section className="courses-section py-2" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)'}}>
      <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
        <div className="text-center mb-2">
          <h3 className="text-3xl md:text-4xl font-bold" style={{color:'var(--primary-medium)'}}>Our Popular Courses</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="flip-card">
                <div className="flip-card-front">
                  <img src={course.image} alt={course.title} className="w-full h-56 object-contain" />
                  <div className="p-0">
                    <h6 className="course-title text-sm mb-2 text-center font-bold">{course.title}</h6>
                   
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4 className="text-lg font-bold mb-3">{course.title}</h4>
                  <p className="text-xs mb-4 text-center">Comprehensive preparation with expert guidance</p>
                  <div className="flex flex-col gap-2 w-full">
                    <a href={`/course-details?id=${course.id}`} className="py-2 px-4 rounded text-white font-semibold text-center text-sm" style={{background:'rgba(255,255,255,0.2)', border: '2px solid white'}}>Explore Course</a>
                    <button 
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setFormData({...formData, course: course.title})
                        setShowRegisterModal(true)
                      }} 
                      className="py-2 px-4 rounded font-semibold text-sm hover:shadow-lg transition-all" 
                      style={{background:'white', color:'var(--primary-medium)'}}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                <Image 
                  src="/images/new_logo.png" 
                  width={100} 
                  height={40} 
                  alt="IMA Jodhpur" 
                  className="mx-auto mb-4" 
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
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1B5A96'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
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
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1B5A96'
                      e.target.previousElementSibling.style.borderColor = '#1B5A96'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb'
                      e.target.previousElementSibling.style.borderColor = '#e5e7eb'
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
                    background: 'white',
                    cursor: 'pointer'
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
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: loading ? '#ef4444aa' : '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.target.style.background = '#dc2626'
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) e.target.style.background = '#ef4444'
                  }}
                >
                  {loading ? 'Registering...' : 'Register Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  )
}
