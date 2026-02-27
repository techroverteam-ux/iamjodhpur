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
          padding: 15px 10px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(25, 119, 243, 0.1);
        }
        .card_courses::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 3px;
          background: linear-gradient(135deg, #0066FF, #4D94FF, #ff6b9d, #0066FF);
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
          background: linear-gradient(135deg, #0066FF, #4D94FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card_icon_right {
          font-size: 28px;
          color: #0066FF;
          transition: all 0.3s;
        }
        .card_courses:hover .card_icon_right {
          transform: translateX(10px);
          color: #4D94FF;
        }
      `}</style>
      <section className="course__categories course-categories-section">
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="text-center section-hedding">
            <h3 className="categories-title category-title">
              Course Categories
            </h3>
            <p className="categories-subtitle category-desc">
              Become lifelong learners with India's best teachers, engaging video lessons and personalised learning journeys
            </p>
          </div>
          
          <div style={{maxWidth: '250px', margin: '0 auto'}}>
            <a href="/courses" className="card_courses block" style={{textDecoration: 'none'}}>
              <div className="card__flex">
                <svg width="40" height="40" viewBox="0 0 50 50" className="courses_icon_img">
                  <rect width="50" height="50" rx="10" fill="url(#courseGrad)"/>
                  <rect x="10" y="15" width="30" height="3" rx="1.5" fill="white"/>
                  <rect x="10" y="20" width="25" height="2" rx="1" fill="white" opacity="0.8"/>
                  <rect x="10" y="24" width="22" height="2" rx="1" fill="white" opacity="0.6"/>
                  <rect x="10" y="28" width="20" height="2" rx="1" fill="white" opacity="0.4"/>
                  <circle cx="38" cy="12" r="4" fill="#F4C20D"/>
                  <text x="38" y="15" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">✓</text>
                  <defs>
                    <linearGradient id="courseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1677C8"/>
                      <stop offset="100%" stopColor="#1E8EDC"/>
                    </linearGradient>
                  </defs>
                </svg>
                <h5 className="card-title">All Courses</h5>
              </div>
              <div className="icon__angle-right">
                <i className="fa fa-angle-right"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
