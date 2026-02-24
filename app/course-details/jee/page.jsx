import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'JEE (Mains+Advance) - IMA Jodhpur',
  description: 'JEE Mains and Advanced preparation course',
};

export default function JEECourseDetail() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Navbar />
      
      <div dangerouslySetInnerHTML={{__html: `
        <style>
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
          .course-card-author {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
          }
          .course-price {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
          }
          .current-price {
            font-size: 28px;
            font-weight: bold;
            color: #1977f3;
          }
          .original-price {
            font-size: 18px;
            color: #999;
            text-decoration: line-through;
          }
          .gst-text {
            font-size: 12px;
            color: #666;
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
        </style>
      `}} />

      <div className="breadcrumb-section">
        <div className="course-container">
          <div className="breadcrumb-text">
            <a href="/">Home</a> &gt; <a href="/courses">Our Courses</a> &gt; JEE (Mains+Advance)
          </div>
        </div>
      </div>

      <div className="course-container">
        <div className="course-grid">
          <div className="course-content">
            <h2>JEE (Mains+Advance)</h2>
            
            <h3>Features</h3>
            <p>At IIT Medical Academy (IMA), our JEE program is designed to build strong academic fundamentals and develop the competitive skills required for JEE Main and JEE Advanced.</p>
          </div>

          <div>
            <div className="course-card">
              <img src="/images/3520795826_both.png" alt="JEE Course" className="course-card-image" />
              <div className="course-card-body">
                <h3 className="course-card-title">JEE (Mains+Advance)</h3>
                <p className="course-card-author">By IMA Jodhpur</p>
                <div className="course-price">
                  <span className="current-price">Free</span>
                </div>
                <div className="validity-text">
                  <i className="fa fa-calendar"></i> Validity 365 Days
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
