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
        .breadcrumb-section {
          background: #f8f9fa;
          padding: 15px 0;
          border-bottom: 1px solid #ddd;
        }
        .breadcrumb-text {
          color: #666;
          font-size: 14px;
        }
        .breadcrumb-text a {
          color: #1977f3;
          text-decoration: none;
        }
        .course-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 15px;
        }
        .course-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }
        .course-content h2 {
          color: #1977f3;
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .course-content h3 {
          color: #333;
          font-size: 24px;
          font-weight: bold;
          margin-top: 30px;
          margin-bottom: 15px;
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
          padding-left: 20px;
        }
        .course-content li {
          color: #555;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 10px;
        }
        .course-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          position: sticky;
          top: 100px;
          height: fit-content;
        }
        .course-card-image {
          width: 100%;
          height: 200px;
          object-fit: contain;
          background: #f9f9f9;
        }
        .course-card-body {
          padding: 20px;
        }
        .course-card-title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }
        .course-price {
          font-size: 28px;
          font-weight: bold;
          color: #1977f3;
          margin-bottom: 10px;
        }
        .validity-text {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
        }
        .validity-text i {
          margin-right: 8px;
        }
        .enroll-btn {
          width: 100%;
          padding: 12px;
          background: #1977f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
        .enroll-btn:hover {
          background: #0d5bbf;
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
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                  <div className="course-price">{course.discountedPrice || course.price}</div>
                  {course.discountedPrice && <div style={{fontSize: '18px', color: '#999', textDecoration: 'line-through'}}>{course.price}</div>}
                </div>
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
