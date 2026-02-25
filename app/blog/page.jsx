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
      content: '<p>Complete guide to NEET counseling and admission process.</p>'
    },
    {
      id: 2,
      title: 'IMA Jodhpur classroom Advantages',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/9442091304_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:48:27',
      description: ' ',
      slug: 'ima-jodhpur-classroom-advantages',
      content: '<p>IMA Jodhpur offers world-class coaching facilities with experienced faculty, comprehensive study materials, and personalized attention to help students achieve their goals in competitive exams.</p><h3>Key Advantages</h3><p>Our classrooms are equipped with modern teaching aids and technology to enhance the learning experience. We provide regular mock tests, doubt clearing sessions, and performance analysis to track student progress.</p>'
    },
    {
      id: 3,
      title: 'Counselling and Admission Process for JEE',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/70304721302_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:40:04',
      description: ' ',
      slug: 'counselling-and-admission-process-for-jee',
      content: '<p>After JEE results, the counselling process begins for admission to engineering colleges. JoSAA conducts counselling for IITs, NITs, and other centrally funded technical institutions.</p><h3>Counselling Rounds</h3><p>The process includes registration, choice filling, seat allotment, and document verification. Students must complete each step within the given deadlines to secure their admission.</p>'
    },
    {
      id: 4,
      title: 'What is JEE (Main+ Advanced)?',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/21229551300_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:24:53',
      description: 'What is JEE (Main+ Advanced)? Official Overview, Eligibility, Timeline an',
      slug: 'what-is-jee-mains-advanced',
      content: '<p>JEE (Joint Entrance Examination) is conducted in two stages - JEE Main and JEE Advanced. JEE Main is for admission to NITs, IIITs, and other engineering colleges, while JEE Advanced is the gateway to IITs.</p><h3>Eligibility Criteria</h3><p>Students who have passed Class 12 or equivalent examination can appear for JEE Main. Top 2.5 lakh JEE Main qualifiers are eligible for JEE Advanced.</p>'
    },
    {
      id: 5,
      title: 'What is NEET?',
      image: 'https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/73517151299_WhatsApp%20Image%202026-01-14%20at%2012.03.12%20PM.jpeg',
      date: 'Tue-01-2026 11:10:24',
      description: 'What is NEET UG NEET UG is the nation',
      slug: 'what-is-neet',
      content: '<p>NEET UG is the national level entrance examination for admission to MBBS, BDS, and other medical courses in India. It is conducted by the National Testing Agency (NTA).</p><h3>Exam Pattern</h3><p>The exam consists of 180 multiple choice questions from Physics, Chemistry, and Biology. Students must qualify NEET to get admission in government and private medical colleges across India.</p>'
    }
  ])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedBlogs = localStorage.getItem('blogs')
      if (savedBlogs) {
        setBlogs(JSON.parse(savedBlogs))
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      <style dangerouslySetInnerHTML={{__html: `
        .blog_section .blog_content {
          padding: 20px;
          border-radius: 20px;
          box-shadow: -2px 3px 14px 0px #ccc;
          margin-top: 20px;
        }
        .blog_title {
          font-weight: 600;
        }
        .blog_img {
          margin: 15px 0;
        }
        .blog_times span {
          color: #aba0a0;
        }
        .blog_descriptions {
          margin: 13px 0 7px 0;
          text-align: justify;
          min-height: 0px;
        }
        .read_more_btn {
          padding: 9px 20px;
          background-color: #1977f3;
          border-radius: 20px;
          color: #fff;
          border: 1px solid #ccc;
          transition: all 0.3s linear;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
        }
        .read_more_btn:hover {
          background-color: #fff;
          color: #000;
        }
        .catgry {
          color: #1977f3;
          position: relative;
          left: 26px;
          font-weight: 900;
        }
        .catgry::after {
          content: "";
          position: absolute;
          width: 111px;
          top: 13px;
          left: 73px;
          border: 1px solid #acb3c2;
        }
        .blog-menu-list {
          max-width: 100%;
        }
        .munu_lists {
          padding: 20px;
          margin: 0 0 0 25px;
          border-radius: 20px;
          list-style: none;
        }
        .munu_lists li {
          margin: 10px;
          list-style: none;
        }
        .munu_lists li a {
          color: #706c6c;
          font-weight: 500;
          padding: 5px 20px;
          transition: 0.3s linear;
          border-radius: 20px;
          text-decoration: none;
          display: block;
        }
        .munu_lists li a:hover {
          background-color: #1977f3;
          color: #fff;
        }
        .dis-img-box img {
          width: 100% !important;
          max-width: 400px !important;
          height: auto !important;
        }
        .strongSetup strong {
          display: contents;
        }
      `}} />

      <section id="main-content" style={{paddingTop: '3px'}}>
        <section className="blog_section py-5 strongSetup">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                {blogs.map((blog) => (
                  <div key={blog.id} className="blog_content">
                    <h4 className="blog_title">{blog.title}</h4>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="blog_img">
                          <img src={blog.image} alt="blog-img" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-md-8 dis-img-box">
                        <div className="blog_times">
                          <span><i className="fa fa-clock-o" aria-hidden="true"></i> {blog.date}</span>
                          <span></span>
                        </div>
                        <p className="blog_descriptions">{blog.description}</p>
                        <div className="text-right">
                          <a href={`/blog-details?id=${blog.id}`} className="read_more_btn" style={{background: '#1977f3'}}>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4 col-md-12 blog-menu-list">
                <ul className="munu_lists">
                  <p className="catgry">Category</p>
                  {blogs.map((blog) => (
                    <li key={blog.id}>
                      <a href={`/blog-details?id=${blog.id}`}>{blog.title}<span className="counts"></span></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  )
}
