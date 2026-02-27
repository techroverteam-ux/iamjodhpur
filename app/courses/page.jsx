'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CoursesPage() {
  const [courses, setCourses] = useState([
    { id: 42147, title: 'Pre Foundation Course', price: 'Free', validity: '354 Days', description: 'Foundation course for early preparation', image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png' },
    { id: 42161, title: 'NEET Preparation', price: 'Free', validity: '365 Days', description: 'Complete NEET preparation course', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42286, title: 'JEE (Mains+Advance)', price: 'Free', validity: '365 Days', description: 'JEE Mains and Advanced preparation', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
    { id: 42385, title: 'All India Test Series (AITS)', price: 'Free', validity: '365 Days', description: 'All India Test Series for practice', image: 'https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png' },
  ])
  const [visible, setVisible] = useState(false)

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
          background: linear-gradient(90deg, #0066FF, #FF6B35);
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
          background: #0066FF !important;
          color: white !important;
        }
      `}</style>

      <Navbar />
      
      <section style={{background: 'linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%)', padding: '60px 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <div style={{marginBottom: '40px', textAlign: 'center'}}>
            <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6B7280', marginBottom: '20px', background: 'white', padding: '8px 16px', borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
              <a href="/" style={{color: '#6B7280', textDecoration: 'none'}}>Home</a>
              <span>›</span>
              <span style={{color: '#0066FF', fontWeight: '600'}}>All Courses</span>
            </div>
            <h1 style={{fontSize: '42px', fontWeight: '700', color: '#0066FF', marginBottom: '12px'}}>Explore Our Courses</h1>
            <p style={{color: '#6B7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>Choose the perfect program to achieve your academic goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div style={{height: '180px', background: 'linear-gradient(135deg, #F8FAFC, #E8EEF5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative'}}>
                    <div style={{position: 'absolute', top: '12px', right: '12px', background: '#FF6B35', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600'}}>
                      {item.price}
                    </div>
                    <img src={item.image} alt={item.title} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                  </div>
                  <div style={{padding: '20px'}}>
                    <h3 style={{fontSize: '17px', fontWeight: '600', color: '#222222', marginBottom: '12px', minHeight: '48px', lineHeight: '1.4'}}>{item.title}</h3>
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px', padding: '8px 12px', background: '#F8FAFC', borderRadius: '8px'}}>
                      <i className="fa fa-calendar" style={{color: '#0066FF', fontSize: '14px'}}></i>
                      <span style={{fontSize: '13px', color: '#6B7280', fontWeight: '500'}}>{item.validity}</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <button className="btn-explore" style={{width: '100%', padding: '12px', background: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>
                        Explore Course
                      </button>
                      <button className="btn-enroll" style={{width: '100%', padding: '12px', background: 'transparent', color: '#0066FF', border: '2px solid #0066FF', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'}}>
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
