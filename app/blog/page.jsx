'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Counseling and Admission Process for NEET',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/11886941558_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Thu-01-2026 15:14:58',
      description: ' ',
      slug: 'counseling-and-admission-process-for-neet',
      content: '<p>Complete guide to NEET counseling and admission process.</p>',
      category: 'NEET'
    },
    {
      id: 2,
      title: 'IMA Jodhpur classroom Advantages',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/9442091304_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:48:27',
      description: ' ',
      slug: 'ima-jodhpur-classroom-advantages',
      content: '<p>IMA Jodhpur offers world-class coaching facilities with experienced faculty, comprehensive study materials, and personalized attention to help students achieve their goals in competitive exams.</p><h3>Key Advantages</h3><p>Our classrooms are equipped with modern teaching aids and technology to enhance the learning experience. We provide regular mock tests, doubt clearing sessions, and performance analysis to track student progress.</p>',
      category: 'General'
    },
    {
      id: 3,
      title: 'Counselling and Admission Process for JEE',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/70304721302_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:40:04',
      description: ' ',
      slug: 'counselling-and-admission-process-for-jee',
      content: '<p>After JEE results, the counselling process begins for admission to engineering colleges. JoSAA conducts counselling for IITs, NITs, and other centrally funded technical institutions.</p><h3>Counselling Rounds</h3><p>The process includes registration, choice filling, seat allotment, and document verification. Students must complete each step within the given deadlines to secure their admission.</p>',
      category: 'JEE'
    },
    {
      id: 4,
      title: 'What is JEE (Main+ Advanced)?',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/21229551300_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:24:53',
      description: 'What is JEE (Main+ Advanced)? Official Overview, Eligibility, Timeline an',
      slug: 'what-is-jee-mains-advanced',
      content: '<p>JEE (Joint Entrance Examination) is conducted in two stages - JEE Main and JEE Advanced. JEE Main is for admission to NITs, IIITs, and other engineering colleges, while JEE Advanced is the gateway to IITs.</p><h3>Eligibility Criteria</h3><p>Students who have passed Class 12 or equivalent examination can appear for JEE Main. Top 2.5 lakh JEE Main qualifiers are eligible for JEE Advanced.</p>',
      category: 'JEE'
    },
    {
      id: 5,
      title: 'What is NEET?',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/73517151299_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:10:24',
      description: 'What is NEET UG NEET UG is the nation',
      slug: 'what-is-neet',
      content: '<p>NEET UG is the national level entrance examination for admission to MBBS, BDS, and other medical courses in India. It is conducted by the National Testing Agency (NTA).</p><h3>Exam Pattern</h3><p>The exam consists of 180 multiple choice questions from Physics, Chemistry, and Biology. Students must qualify NEET to get admission in government and private medical colleges across India.</p>',
      category: 'NEET'
    }
  ])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    if (typeof window !== 'undefined') {
      const savedBlogs = localStorage.getItem('blogs')
      if (savedBlogs) {
        setBlogs(JSON.parse(savedBlogs))
      } else {
        localStorage.setItem('blogs', JSON.stringify(blogs))
      }
    }
  }, [])

  return (
    <>
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        .blog-card {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .blog-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: #0066FF;
          transition: height 0.4s;
        }
        .blog-card:hover::before {
          height: 100%;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0, 102, 255, 0.15);
        }
        .blog-img {
          transition: transform 0.4s;
        }
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }
      `}</style>

      <Navbar />
      
      <section style={{background: '#FFFFFF', padding: '60px 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h1 style={{fontSize: '48px', fontWeight: '700', color: '#0066FF', marginBottom: '12px'}}>Latest Insights</h1>
            <p style={{color: '#6B7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>Stay updated with exam tips, admission guides, and success stories</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
              <a 
                key={blog.id}
                href={`/blog-details?id=${blog.id}`}
                className={`blog-card fade-up ${visible ? 'show' : ''}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E8EEF5',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                <div style={{position: 'relative', overflow: 'hidden'}}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="blog-img"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'contain',
                      background: '#F8FAFC'
                    }} 
                  />
                  <div style={{position: 'absolute', top: '16px', right: '16px', background: '#0066FF', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600'}}>
                    {blog.category}
                  </div>
                </div>
                <div style={{padding: '24px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: '600', color: '#222222', marginBottom: '12px', minHeight: '48px', lineHeight: '1.4'}}>{blog.title}</h3>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
                    <i className="fa fa-clock-o" style={{color: '#0066FF', fontSize: '14px'}}></i>
                    <span style={{fontSize: '13px', color: '#6B7280'}}>{blog.date}</span>
                  </div>
                  {blog.description && blog.description.trim() && (
                    <p style={{color: '#6B7280', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6'}}>{blog.description}</p>
                  )}
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#0066FF', fontWeight: '600', fontSize: '14px'}}>
                    Read More
                    <span style={{transition: 'transform 0.3s'}}>→</span>
                  </div>
                </div>
              </a>
            ))}
              </div>
            </div>

            <div>
              <div style={{background: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E8EEF5', position: 'sticky', top: '100px'}}>
                <h3 style={{fontSize: '20px', fontWeight: '700', color: '#0066FF', marginBottom: '20px'}}>Category</h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  {blogs.map((blog) => (
                    <li key={blog.id} style={{marginBottom: '12px'}}>
                      <a 
                        href={`/blog-details?id=${blog.id}`} 
                        style={{
                          display: 'block',
                          padding: '12px 16px',
                          background: '#F8FAFC',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          color: '#222222',
                          fontWeight: '500',
                          fontSize: '14px',
                          borderLeft: '3px solid #0066FF',
                          transition: 'all 0.3s'
                        }}
                      >
                        {blog.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
