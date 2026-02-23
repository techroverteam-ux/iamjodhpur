"use client";

export default function CourseCategories() {
  return (
    <>
      <style jsx>{`
        .tabsWrapper_top {
          position: relative;
          margin-bottom: 30px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .tabsWrapper {
          overflow: visible;
          margin: 0 40px 0 80px;
          display: flex;
          align-items: center;
          padding: 5px 0;
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
          padding: 10px 28px;
          margin-bottom: 0;
          cursor: pointer;
          background: #e9ecef;
          font-weight: 600;
          border-radius: 10px;
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
          border-radius: 5px;
        }
        .course_btn_nav.previous {
          left: 0;
        }
        .course_btn_nav.next {
          right: 0;
        }
        .course_btn_nav i {
          color: #000 !important;
          font-size: 20px;
        }
        a:hover .hover-title {
          color: #1977f3 !important;
        }
        a:hover .hover-icon {
          color: #1977f3 !important;
        }
      `}</style>
      <section className="py-12 bg-light" style={{background: '#f8f9fa'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'#1977f3'}}>Course Categories</h3>
            <p className="mb-0">Become lifelong learners with India's best teachers, engaging video lessons and personalised learning journeys</p>
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{marginTop: '40px'}}>
            <a href="/courses" className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition" style={{borderBottom:'2px solid #1977f3', textDecoration: 'none', cursor: 'pointer'}}>
              <div className="flex items-center">
                <img src="https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/course_type_master/icon/62728579130_online-course.png" className="w-12 h-12 mr-4" alt="icon" />
                <h5 className="text-lg font-semibold text-gray-800 m-0 hover-title">All Courses</h5>
              </div>
              <i className="fa fa-angle-right text-2xl text-gray-600 hover-icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
