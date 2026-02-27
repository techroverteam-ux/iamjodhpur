'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Courses() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [courses, setCourses] = useState([
    {
      id: 42147,
      title: "Pre Foundation Course",
      image: "/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png",
      price: "₹15,000",
      discountedPrice: "₹12,000",
      validity: "354 Days"
    },
    {
      id: 42161,
      title: "NEET Preparation",
      image: "/images/3520795826_both.png",
      price: "₹25,000",
      discountedPrice: "₹20,000",
      validity: "365 Days"
    },
    {
      id: 42286,
      title: "JEE (Mains+Advance)",
      image: "/images/3520795826_both.png",
      price: "₹25,000",
      discountedPrice: "₹20,000",
      validity: "365 Days"
    },
    {
      id: 42385,
      title: "All India Test Series (AITS)",
      image: "/images/3520795826_both.png",
      price: "₹10,000",
      discountedPrice: "₹8,000",
      validity: "365 Days"
    }
  ])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCourses = localStorage.getItem('courses')
      if (savedCourses) {
        setCourses(JSON.parse(savedCourses))
      }
    }

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
          height: 380px;
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
    <section className="courses-section py-6" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)'}}>
      <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
        <div className="text-center mb-4">
          <h3 className="text-3xl font-bold" style={{color:'var(--primary-medium)'}}>Our Popular Courses</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="flip-card">
                <div className="flip-card-front">
                  <img src={course.image} alt={course.title} className="w-full h-56 object-contain p-2" />
                  <div className="p-3">
                    <h6 className="course-title text-base mb-2">{course.title}</h6>
                    <div className="flex items-center gap-2 mb-1">
                      <h6 className="text-lg font-bold" style={{color: 'var(--primary-medium)'}}>{course.discountedPrice}</h6>
                      <span className="text-sm text-gray-400 line-through">{course.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">GST Included</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fa fa-calendar mr-2"></i> Validity {course.validity}
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4 className="text-xl font-bold mb-4">{course.title}</h4>
                  <p className="text-sm mb-6 text-center">Comprehensive preparation with expert guidance</p>
                  <div className="flex flex-col gap-3 w-full">
                    <a href={course.id === 42147 ? "/course-details/pre-foundation" : course.id === 42161 ? "/course-details/neet" : course.id === 42286 ? "/course-details/jee" : "/course-details/aits"} className="py-2 px-4 rounded text-white font-semibold text-center" style={{background:'rgba(255,255,255,0.2)', border: '2px solid white'}}>Explore Course</a>
                    <button onClick={() => setShowLoginModal(true)} className="py-2 px-4 rounded font-semibold" style={{background:'white', color:'var(--primary-medium)'}}>Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                <button type="submit" className="w-full text-white font-semibold" style={{background:'var(--primary-medium)', padding: '10px 40px', borderRadius: '4px', fontSize: '16px', border: 'none', cursor: 'pointer'}}>Login</button>
              </form>
              <p className="mb-4" style={{fontSize: '14px'}}>Don't have an account yet? <a href="#" onClick={(e) => {e.preventDefault(); alert('SignUp coming soon!');}} className="font-bold" style={{color:'var(--primary-medium)', textDecoration: 'none'}}>SignUp</a></p>
              <a href="#" onClick={(e) => {e.preventDefault(); alert('Forgot Password coming soon!');}} className="font-bold" style={{color:'var(--primary-medium)', fontSize: '14px', textDecoration: 'none'}}>Forgot Password?</a>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  )
}
