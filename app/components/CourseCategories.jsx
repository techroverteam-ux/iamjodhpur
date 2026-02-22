"use client";

export default function CourseCategories() {
  return (
    <>
      <style jsx>{`
        .course__categories {
          padding: 50px 0;
        }
        .bg-light {
          background-color: #f8f9fa;
        }
        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .section-hedding {
          text-align: center;
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1977f3 !important;
        }
        .mb-0 {
          margin-bottom: 0;
        }
        .contentWrapper {
          position: relative;
        }
        .tabsWrapper_top {
          position: relative;
          margin-bottom: 30px;
        }
        .tabsWrapper {
          overflow: hidden;
          margin: 0 60px;
          
          display: flex;
  align-items: center;
        }
        .course__tabs {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          justify-content: flex-start;
          height: 100%;
  align-items: center; 
        }
        .course__tabs li {
          display: flex;
  align-items: center;       
  justify-content: center;
  height: 40px;             
  padding: 0 28px;           
  margin: 0 5px;
  cursor: pointer;
  background: #e9ecef;
  font-weight: 600;
        }
        .course__tabs li.active {
          background: #1977f3 !important;
          color: #fff !important;
        }
        .course_btn_nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #1977f3 !important;
        }
        .course_btn_nav.previous {
          left: 0;
        }
        .course_btn_nav.next {
          right: 0;
        }
        .course_btn_nav i {
          color: #000000 !important;
          font-size: 20px;
        }
        .tabContent {
          margin-top: 30px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }
        .col-lg-4 {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
          padding: 0 15px;
        }
        .card_courses {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background: #fff;
          border: 1px solid #e9ecef;
          border-bottom: 2px solid #1977f3 !important;
          text-decoration: none;
          transition: all 0.3s;
        }
        .card_courses:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .card__flex {
          display: flex;
          align-items: center;
        }
        .courses_icon_img {
          width: 50px;
          height: 50px;
          margin-right: 15px;
        }
        .card-title {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }
        .card_courses:hover .card-title {
          color: #1977f3;
        }
        .icon__angle-right {
          font-size: 24px;
        }
        .card_icon_right {
          color: #666;
        }
        .card_courses:hover .card_icon_right {
          color: #1977f3;
        }
        @media (max-width: 991px) {
          .col-lg-4 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        @media (max-width: 767px) {
          .col-lg-4 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
      <section className="course__categories bg-light">
        <div className="container">
          <div className="section-hedding">
            <h3 className="section-title">
              <b> Course Categories</b>
            </h3>
            <p className="mb-0"> Become lifelong learners with India&#39;s best teachers, engaging video lessons and personalised learning journeys</p>
          </div>
          <div className="contentWrapper questions-listing">
            <div className="tabsWrapper_top">
              <div className="tabsWrapper">
                <ul className="course__tabs">
                  <li className="course__li active" id="content4578" data-id="content4578">
                    All category
                  </li>
                </ul>
              </div>
              <span className="course_btn_nav previous course_btn_nav_arrow">
                <i className="fa fa-angle-left"></i>
              </span>
              <span className="course_btn_nav next course_btn_nav_arrow">
                <i className="fa fa-angle-right"></i>
              </span>
            </div>
            <div className="tabContent">
              <div className="content4578 course__content">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <a href="/courses" className="card_courses content-center">
                      <div className="card__flex">
                        <img src="https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/course_type_master/icon/62728579130_online-course.png" className="courses_icon_img" alt="icon" />
                        <h5 className="card-title">All Courses</h5>
                      </div>
                      <div className="icon__angle-right">
                        <i className="card_icon_right fa fa-angle-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
