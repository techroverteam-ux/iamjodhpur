'use client'
import { useEffect } from 'react'

export default function CourseCategories() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector('.category-title')?.classList.add('animate-title')
            entry.target.querySelector('.category-desc')?.classList.add('animate-desc')
            entry.target.querySelector('.card_courses')?.classList.add('animate-card')
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.course-categories-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .category-title {
          opacity: 0;
          transform: translateY(-50px);
        }
        .category-title.animate-title {
          animation: waveIn 1s ease-out forwards;
        }
        .category-desc {
          opacity: 0;
          transform: translateY(-30px);
        }
        .category-desc.animate-desc {
          animation: waveIn 1.2s ease-out 0.3s forwards;
        }
        @keyframes waveIn {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card_courses {
          opacity: 0;
          transform: translateX(100px) rotate(5deg);
          transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
          border: 3px solid transparent;
          background-clip: padding-box;
          position: relative;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(25, 119, 243, 0.1);
        }
        .card_courses::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 3px;
          background: linear-gradient(135deg, #1977f3, #00d4ff, #ff6b9d, #1977f3);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderRotate 3s linear infinite;
        }
        @keyframes borderRotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .card_courses.animate-card {
          opacity: 1;
          transform: translateX(0) rotate(0deg);
        }
        .card_courses:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 50px rgba(25, 119, 243, 0.3);
        }
        .courses_icon_img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(25, 119, 243, 0.3));
          transition: all 0.3s;
        }
        .card_courses:hover .courses_icon_img {
          transform: rotate(360deg) scale(1.2);
        }
        .card-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          background: linear-gradient(135deg, #1977f3, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card_icon_right {
          font-size: 28px;
          color: #1977f3;
          transition: all 0.3s;
        }
        .card_courses:hover .card_icon_right {
          transform: translateX(10px);
          color: #00d4ff;
        }
      `}</style>
      <section className="course-categories-section py-12" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f4ff 100%)', padding: '60px 0'}}>
        <div className="container" style={{maxWidth: '1140px', margin: '0 auto', padding: '0 15px'}}>
          <div className="text-center" style={{marginBottom: '60px'}}>
            <h3 className="category-title text-4xl font-bold mb-4" style={{color: '#1977f3'}}>
              Course Categories
            </h3>
            <p className="category-desc text-lg" style={{color: '#666', maxWidth: '800px', margin: '0 auto'}}>
              Become lifelong learners with India's best teachers, engaging video lessons and personalised learning journeys
            </p>
          </div>
          
          <div style={{maxWidth: '500px', margin: '0 auto'}}>
            <a href="/courses" className="card_courses block" style={{textDecoration: 'none'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                  <img 
                    src="https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/course_type_master/icon/62728579130_online-course.png" 
                    className="courses_icon_img" 
                    alt="icon" 
                  />
                  <h5 className="card-title">All Courses</h5>
                </div>
                <i className="card_icon_right fa fa-angle-right"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
