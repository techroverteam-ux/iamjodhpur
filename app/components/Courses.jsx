'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
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
    try {
      const registration = { ...formData, date: new Date().toLocaleDateString() }
      const result = await addData('courses', registration)
      if (result.success) {
        alert('Registration successful!')
        setShowRegisterModal(false)
        setFormData({ name: '', email: '', phone: '', course: '' })
      } else {
        alert('Registration failed!')
      }
    } catch (error) {
      alert('Registration failed!')
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
    if (data && data.courses && data.courses.length > 0) {
      setCourses(data.courses)
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
                    <button onClick={() => setShowRegisterModal(true)} className="py-2 px-4 rounded font-semibold text-sm" style={{background:'white', color:'var(--primary-medium)'}}>Register Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4" onClick={() => setShowRegisterModal(false)} style={{background: 'rgba(0,0,0,0.5)', zIndex: 9999}}>
          <div className="bg-white rounded-lg w-full max-w-md relative" onClick={(e) => e.stopPropagation()} style={{color: '#000'}}>
            <button onClick={() => setShowRegisterModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 leading-none" style={{fontSize: '40px', color: '#999'}}>&times;</button>
            <div className="text-center py-8 px-10">
              <div className="mb-4">
                <Image src="/images/new_logo.png" width={100} height={40} alt="IMA Jodhpur" className="mx-auto" style={{height: 'auto', width: '100px'}} />
              </div>
              <p className="my-6 font-bold" style={{fontSize: '18px', color: '#000'}}>Student Registration</p>
              <form onSubmit={handleRegister}>
                <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '16px', fontSize: '14px', color: '#000'}} required />
                <div style={{display: 'flex', marginBottom: '16px'}}>
                  <span style={{display: 'flex', alignItems: 'center', padding: '12px', border: '1px solid #ddd', borderRight: 'none', borderRadius: '4px 0 0 4px', background: '#f5f5f5', color: '#000'}}>+91</span>
                  <input type="tel" placeholder="WhatsApp Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} maxLength="10" style={{flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '0 4px 4px 0', fontSize: '14px', color: '#000'}} required />
                </div>
                <select value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '16px', fontSize: '14px', color: '#000'}} required>
                  <option value="">Select Course</option>
                  <option value="NEET">NEET</option>
                  <option value="JEE">JEE</option>
                </select>
                <button type="submit" style={{width: '100%', padding: '12px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: '600', cursor: 'pointer'}}>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  )
}
