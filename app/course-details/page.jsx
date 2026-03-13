'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchData } from '../../lib/clientDataUtils';

export default function CourseDetail() {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, course: course.title}),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Registration successful! We will contact you soon. For more information call +91 - 9571037333', {
          duration: 6000,
          position: 'bottom-center',
        });
        setShowRegisterModal(false);
        setFormData({ name: '', email: '', phone: '', course: '' });
      } else {
        toast.error(result.error || 'Registration failed. Please try again.', {
          duration: 4000,
          position: 'bottom-center',
        });
      }
    } catch (error) {
      toast.error('Network error. Please try again.', {
        duration: 4000,
        position: 'bottom-center',
      });
    }
  };

  useEffect(() => {
    const loadCourse = async () => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id');
        
        if (courseId) {
          try {
            // Use the SAME data loading logic as courses page
            const data = await fetchData();
            
            let foundCourse = null;
            let coursesData = [];
            
            // First try to load from database (same as courses page)
            if (data && data.course_content && data.course_content.length > 0) {
              coursesData = data.course_content;
            } else {
              // Use same default courses as courses page
              coursesData = [
                {
                  id: '42147',
                  title: 'Pre Foundation Course',
                  description: 'Foundation course for Class 9th & 10th students',
                  image: '/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png',
                  content: [
                    { type: 'heading', value: 'Course Overview' },
                    { type: 'description', value: 'Our Pre Foundation Course is designed to build strong academic fundamentals for students in Class 9th & 10th, preparing them for competitive exams like JEE and NEET.' },
                    { type: 'heading', value: 'Key Features' },
                    { type: 'bullet', value: 'Comprehensive coverage of NCERT syllabus' },
                    { type: 'bullet', value: 'Regular tests and assessments' },
                    { type: 'bullet', value: 'Doubt clearing sessions' },
                    { type: 'bullet', value: 'Study material and notes' },
                    { type: 'heading', value: 'Duration' },
                    { type: 'description', value: 'Complete academic year coverage with flexible batch timings' }
                  ]
                },
                {
                  id: '42161',
                  title: 'NEET Preparation',
                  description: 'Complete NEET preparation course',
                  image: '/images/3520795826_both.png',
                  content: [
                    { type: 'heading', value: 'NEET Course Overview' },
                    { type: 'description', value: 'Comprehensive NEET preparation program designed to help students crack the National Eligibility cum Entrance Test for medical admissions.' },
                    { type: 'heading', value: 'Subjects Covered' },
                    { type: 'bullet', value: 'Physics - Complete syllabus with problem solving' },
                    { type: 'bullet', value: 'Chemistry - Organic, Inorganic & Physical Chemistry' },
                    { type: 'bullet', value: 'Biology - Botany and Zoology with diagrams' },
                    { type: 'heading', value: 'Special Features' },
                    { type: 'bullet', value: 'Regular mock tests and practice papers' },
                    { type: 'bullet', value: 'Previous year question analysis' },
                    { type: 'bullet', value: 'Personal mentorship and guidance' }
                  ]
                },
                {
                  id: '42286',
                  title: 'JEE (Mains+Advanced)',
                  description: 'JEE Mains and Advanced preparation',
                  image: '/images/3520795826_both.png',
                  content: [
                    { type: 'heading', value: 'JEE Course Overview' },
                    { type: 'description', value: 'Comprehensive JEE preparation covering both JEE Mains and JEE Advanced with focus on IIT admissions.' },
                    { type: 'heading', value: 'Subjects Covered' },
                    { type: 'bullet', value: 'Mathematics - Algebra, Calculus, Coordinate Geometry' },
                    { type: 'bullet', value: 'Physics - Mechanics, Thermodynamics, Optics, Modern Physics' },
                    { type: 'bullet', value: 'Chemistry - Physical, Organic, Inorganic Chemistry' },
                    { type: 'heading', value: 'Course Benefits' },
                    { type: 'bullet', value: 'IIT level problem solving techniques' },
                    { type: 'bullet', value: 'Regular JEE Mains and Advanced mock tests' },
                    { type: 'bullet', value: 'Rank improvement strategies' }
                  ]
                },
                {
                  id: '42385',
                  title: 'All India Test Series (AITS)',
                  description: 'Comprehensive test series for practice',
                  image: '/images/3520795826_both.png',
                  content: [
                    { type: 'heading', value: 'Test Series Overview' },
                    { type: 'description', value: 'All India Test Series designed to provide competitive environment and performance analysis for JEE and NEET aspirants.' },
                    { type: 'heading', value: 'Test Features' },
                    { type: 'bullet', value: 'Weekly tests covering complete syllabus' },
                    { type: 'bullet', value: 'All India ranking and performance analysis' },
                    { type: 'bullet', value: 'Detailed solutions and explanations' },
                    { type: 'bullet', value: 'Subject-wise and topic-wise analysis' },
                    { type: 'heading', value: 'Benefits' },
                    { type: 'bullet', value: 'Time management skills development' },
                    { type: 'bullet', value: 'Exam pattern familiarity' },
                    { type: 'bullet', value: 'Weakness identification and improvement' }
                  ]
                }
              ];
            }
            
            // Find the specific course by ID
            foundCourse = coursesData.find(c => c.id === courseId || c.id == courseId);
            
            // If course not found, use first course as fallback
            if (!foundCourse && coursesData.length > 0) {
              foundCourse = coursesData[0];
            }
            
            if (foundCourse) {
              setCourse(foundCourse);
              // Pre-select the course in the form
              setFormData(prev => ({ ...prev, course: foundCourse.title }));
            }
            
          } catch (error) {
            console.error('Error fetching course:', error);
            // Fallback course with same structure as courses page
            const fallbackCourse = {
              id: courseId,
              title: 'Course Details',
              description: 'Course information will be available soon.',
              content: [
                { type: 'heading', value: 'Course Information' },
                { type: 'description', value: 'Please contact us for more details about this course.' }
              ],
              image: '/images/3520795826_both.png'
            };
            setCourse(fallbackCourse);
            setFormData(prev => ({ ...prev, course: fallbackCourse.title }));
          }
        }
        setLoading(false);
      }
    };

    loadCourse();
  }, []);

  if (loading) {
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
          color: #1B5A96;
          text-decoration: none;
          transition: color 0.3s;
        }
        .breadcrumb-text a:hover {
          color: #1B5A96;
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
          color: #1B5A96;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          padding: 20px 30px;
          background: linear-gradient(135deg, #F8FAFC, #E8EEF5);
          border-radius: 12px;
          border-left: 5px solid #1B5A96;
          box-shadow: 0 4px 12px rgba(11, 79, 138, 0.1);
        }
        .course-content h3 {
          color: #333;
          font-size: 22px;
          font-weight: 600;
          margin-top: 25px;
          margin-bottom: 12px;
          padding-left: 12px;
          border-left: 3px solid #1B5A96;
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
          color: #1B5A96;
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
          color: #1B5A96;
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
          color: #1B5A96;
        }
        .enroll-btn {
          width: 100%;
          padding: 14px;
          background: #1B5A96;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .enroll-btn:hover {
          background: #1B5A96;
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
          .course-content h2 {
            font-size: 24px !important;
          }
          .course-content h3 {
            font-size: 18px !important;
          }
          .course-content p, .course-content li {
            font-size: 14px !important;
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
                <button onClick={() => setShowRegisterModal(true)} className="enroll-btn">Register Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <div className="flex">
                  <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l bg-gray-50">+91</span>
                  <input type="tel" placeholder="WhatsApp Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} maxLength="10" className="w-full p-3 border border-gray-300 rounded-r outline-none" required />
                </div>
                <select value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="w-full p-3 border border-gray-300 rounded outline-none" required>
                  <option value="">Select Course</option>
                  <option value="Pre Foundation Course">Pre Foundation Course</option>
                  <option value="NEET Preparation">NEET Preparation</option>
                  <option value="JEE (Mains+Advanced)">JEE (Mains+Advanced)</option>
                  <option value="All India Test Series (AITS)">All India Test Series (AITS)</option>
                </select>
                <button type="submit" className="w-full text-white font-semibold py-3 rounded" style={{background:'#dc3545'}}>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
