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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCourses = localStorage.getItem('courses')
      if (savedCourses) {
        setCourses(JSON.parse(savedCourses))
      } else {
        localStorage.setItem('courses', JSON.stringify(courses))
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      
      <style dangerouslySetInnerHTML={{__html: `
        .lighty-inner-page {
          background-color: #f6fcff!important;
          padding: 30px 0px;
        }
        .product_card {
          box-shadow: 0px 5px 7px rgb(0 0 0 / 20%);
          background-color: #fff;
          border: 0;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid #fbfbfb;
          margin-bottom: 22px;
        }
        .product_card:hover {
          border-bottom: 2px solid #1977f3!important;
        }
        .breadcrumbs {
          display: flex;
          padding: 10px;
          list-style: none;
          margin: 0;
        }
        .breadcrumbs li+li:before {
          padding: 0 5px;
          content: ">";
          color: #1977f3!important;
          background-color: transparent;
          font-weight: bold;
        }
        .breadcrumbs li:last-child a {
          font-weight: bold;
          color:#1977f3!important;
        }
        .breadcrumbs a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s;
        }
        .breadcrumbs a:hover {
          color: #1977f3;
        }
        .nav.nav-tabs.tabs-new-left-1 {
          display: block;
          border-bottom: none;
          border-top: 1px solid #c5c5c5;
          box-shadow: 0px 5px 8px rgba(0,0,0,0.2);
          border: 1px solid #dfd7d7;
        }
        .tab-brd-2 {
          border-bottom: 1px solid #dfd5d5;
          padding: 10px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .tab-brd-2:hover {
          background-image: linear-gradient(to right, #1977f3, #1977f3) !important;
          color: #fff;
        }
        .tab-brd-active {
          background-image: linear-gradient(to right, #1977f3, #1977f3) !important;
          color: #fff;
        }
        .inner-mid-image {
          height: 130px;
          width: 100%;
        }
        .inner-mid-image img {
          width: 100%;
          overflow: hidden;
          height: 130px;
          object-fit: contain;
        }
        .h6_title {
          font-size: 16px;
          font-weight: 600;
          min-height: 48px;
          margin-bottom: 10px;
        }
        .book-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1977f3;
          margin-bottom: 10px;
        }
        .book-price span {
          color: #1977f3;
        }
        .book-price small {
          color: #999;
          font-size: 0.9rem;
        }
        .book_validity {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 10px;
        }
        .vality_div {
          margin-top: 10px;
        }
        .view_bts {
          padding: 8px 20px;
          background: #1977f3!important;
          color: #FFF;
          border-radius: 5px;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
          font-weight: 600;
        }
        .view_bts:hover {
          background: #0d5bbf!important;
          color: #fff;
          transform: translateY(-2px);
        }
      `}} />

      <section className="bg-light lighty-inner-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className='breadcrumbs'>
                <li><a href="/">Home</a></li> 
                <li><a href="#"><span>All Courses</span></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 product__filter nabTab-filter">
              <div className="nav nav-tabs tabs-new-left-1" role="tablist">
                <div className="tab-brd-2 tab-brd-active" style={{pointerEvents: 'auto'}}>
                  All Courses
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content active">
                <div className="tab-pane active">
                  <div className="row product_data1">
                    {courses.map((item) => (
                      <div key={item.id} className="col-lg-4 col-md-4 course_list mb-10">
                        <div className="card product_card">
                          <a className="text-center" href={`/course-details?id=${item.id}`}>
                            <div className="inner-mid-image">
                              <img className="card-img-top" src={item.image} alt={item.title} />
                            </div>
                          </a>
                          <div className="card-body">
                            <a href={`/course-details?id=${item.id}`}>
                              <h6 className="h6_title">{item.title}</h6>
                              <div className="justify-content-between pt-1">
                                <h6 className="book-price">
                                  {item.discountedPrice ? (
                                    <>
                                      <span>₹ {item.discountedPrice} /-</span>
                                      <small className="strick book-price"> ₹ <strike>{item.price}</strike> /-</small>
                                    </>
                                  ) : (
                                    <span>{item.price}</span>
                                  )}
                                </h6>
                              </div>
                            </a>
                            <div className="footer_ content-center vality_div">
                              <span className="book_validity d-inline-block">
                                <i className="fa fa-calendar" aria-hidden="true"></i> Validity {item.validity}
                              </span>
                            </div>
                            <div className="footer_ content-center vality_div" style={{display:'flex'}}>
                              <a href={`/course-details?id=${item.id}`} className="view_bts">Explore</a>
                              <a href={`/course-details?id=${item.id}`} className="view_bts" style={{marginLeft:'10px'}}>Enroll Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
