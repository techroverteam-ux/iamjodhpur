'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CourseDetail() {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const courseId = urlParams.get('id');
      const savedCourses = localStorage.getItem('courses');
      
      if (savedCourses && courseId) {
        const courses = JSON.parse(savedCourses);
        const foundCourse = courses.find(c => c.id == courseId);
        setCourse(foundCourse);
      }
    }
  }, []);

  if (!course) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Loading course...</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Navbar />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .breadcrumb-section {
          background: #F8FAFC;
          padding: 12px 0;
          border-bottom: 1px solid #E8EEF5;
        }
        .breadcrumb-text {
          color: #666;
          font-size: 15px;
        }
        .breadcrumb-text a {
          color: #0B4F8A;
          text-decoration: none;
          transition: color 0.3s;
        }
        .breadcrumb-text a:hover {
          color: #0052CC;
        }
        .course-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 15px;
        }
        .course-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }
        .course-content {
          animation: fadeInUp 0.6s ease-out;
        }
        .course-content h2 {
          color: #0B4F8A;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 12px;
        }
        .course-content h2::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 60px;
          height: 3px;
          background: #FF6B35;
        }
        .course-content h3 {
          color: #333;
          font-size: 22px;
          font-weight: 600;
          margin-top: 25px;
          margin-bottom: 12px;
          padding-left: 12px;
          border-left: 3px solid #0B4F8A;
        }
        .course-content p {
          color: #555;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 15px;
          text-align: justify;
        }
        .course-content ul {
          margin: 15px 0;
          padding-left: 0;
          list-style: none;
        }
        .course-content li {
          color: #555;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 10px;
          padding-left: 25px;
          position: relative;
        }
        .course-content li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #0B4F8A;
          font-weight: bold;
        }
        .course-card {
          border: 1px solid #E8EEF5;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,102,255,0.08);
          position: sticky;
          top: 100px;
          height: fit-content;
          animation: slideInRight 0.6s ease-out;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,102,255,0.15);
        }
        .course-card-image {
          width: 100%;
          height: 200px;
          object-fit: contain;
          background: #F8FAFC;
        }
        .course-card-body {
          padding: 20px;
        }
        .course-card-title {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
        }
        .course-price {
          font-size: 28px;
          font-weight: 700;
          color: #0B4F8A;
          margin-bottom: 10px;
        }
        .validity-text {
          display: flex;
          align-items: center;
          font-size: 15px;
          color: #666;
          margin-bottom: 20px;
          padding: 10px;
          background: #F8FAFC;
          border-radius: 6px;
        }
        .validity-text i {
          margin-right: 8px;
          color: #0B4F8A;
        }
        .enroll-btn {
          width: 100%;
          padding: 14px;
          background: #0B4F8A;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .enroll-btn:hover {
          background: #0052CC;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,102,255,0.3);
        }
        @media (max-width: 768px) {
          .course-grid {
            grid-template-columns: 1fr;
          }
          .course-card {
            position: relative;
            top: 0;
          }
        }
      `}</style>

      <div className="breadcrumb-section">
        <div className="course-container">
          <div className="breadcrumb-text">
            <a href="/">Home</a> &gt; <a href="/courses">Our Courses</a> &gt; {course.title}
          </div>
        </div>
      </div>

      <div className="course-container">
        <div className="course-grid">
          <div className="course-content">
            <h2>{course.title}</h2>
            
            {course.description && <p>{course.description}</p>}

            {course.content && Array.isArray(course.content) && course.content.length > 0 ? (
              course.content.map((item, index) => (
                <div key={index}>
                  {item.type === 'heading' && <h3>{item.value}</h3>}
                  {item.type === 'description' && <p>{item.value}</p>}
                  {item.type === 'bullet' && (
                    <ul>
                      <li>{item.value}</li>
                    </ul>
                  )}
                </div>
              ))
            ) : course.sections && course.sections.length > 0 ? (
              course.sections.map((section, index) => (
                <div key={index}>
                  {section.heading && <h3>{section.heading}</h3>}
                  {section.description && <p>{section.description}</p>}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul>
                      {section.bullets.map((bullet, bIndex) => (
                        bullet && <li key={bIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : null}
          </div>

          <div>
            <div className="course-card">
              <img src={course.image} alt={course.title} className="course-card-image" />
              <div className="course-card-body">
                <h3 className="course-card-title">{course.title}</h3>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px'}}>
                  <div className="course-price">{course.discountedPrice || course.price}</div>
                  {course.discountedPrice && <div style={{fontSize: '18px', color: '#999', textDecoration: 'line-through'}}>{course.price}</div>}
                </div>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '10px'}}>GST Included</p>
                <div className="validity-text">
                  <i className="fa fa-calendar"></i> Validity {course.validity}
                </div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
