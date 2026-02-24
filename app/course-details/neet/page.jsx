import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'NEET Preparation - IMA Jodhpur',
  description: 'NEET Preparation Course',
};

export default function NEETCourseDetail() {
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
          .course-content p, .course-content ul {
            color: #555;
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 15px;
            text-align: justify;
          }
          .course-content ul {
            list-style: disc;
            padding-left: 30px;
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
            <a href="/">Home</a> &gt; <a href="/courses">Our Courses</a> &gt; NEET Preparation
          </div>
        </div>
      </div>

      <div className="course-container">
        <div className="course-grid">
          <div className="course-content">
            <h2>NEET Preparation</h2>
            
            <h3>Features</h3>
            <p>At IIT Medical Academy (IMA), NEET preparation is designed with a complete academic system that builds strong concepts from the beginning and gradually upgrades students to the actual NEET level. Our offline classroom coaching ensures discipline, consistency, and personal attention for every student.</p>

            <h3>NEET Batches at IMA</h3>
            <ul>
              <li>Foundation Batch for Class 11th students</li>
              <li>Fresher Batch for Class 12th students</li>
              <li>Target Batch for Gap Year students after Class 12th</li>
            </ul>

            <h3>Concept Building with NCERT Focus</h3>
            <p>We start from the basic concepts and cover NCERT thoroughly, as it forms the core of NEET preparation. After building a strong foundation, we gradually increase the level and train students with NEET-pattern questions.</p>

            <h3>Subject-wise Institute Modules</h3>
            <p>IMA provides its own subject-wise modules separately for:</p>
            <ul>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
            </ul>
            <p>These modules include detailed topic coverage along with a wide range of questions for practice and revision.</p>

            <h3>Daily Practice Papers</h3>
            <p>Students receive Daily Practice Papers for regular topic-wise practice. This improves speed, accuracy, confidence, and strengthens retention through continuous daily revision.</p>

            <h3>Daily Doubt Solving and Extra Classes</h3>
            <p>Doubt solving sessions happen every day to ensure no student remains stuck.</p>
            <p>We also conduct extra classes for difficult topics whenever students need additional support and revision.</p>

            <h3>Weekly Tests and Performance Tracking</h3>
            <p>We conduct topic-wise tests every Sunday to evaluate progress regularly. Student performance is tracked properly, and guidance is provided to improve weak areas step by step.</p>

            <h3>All India Test Series After Syllabus Completion</h3>
            <p>After completing the syllabus, we start the All India Test Series to give students real exam-level practice and help them check where they stand before the final exam.</p>

            <h3>Personal Mentorship and Student Counselling</h3>
            <p>In our offline classrooms, teachers aim to provide personal attention to each student. Our management also provides personal student counselling, step-by-step guidance, and motivation from time to time to keep students focused and consistent.</p>

            <h3>Board Exam Preparation Support for Class 12th</h3>
            <p>For Class 12th Fresher Batch students, we also provide complete board exam preparation support alongside NEET preparation, ensuring strong performance in both NEET and school board exams.</p>

            <h3>Career Counselling and Form Guidance</h3>
            <p>At the final stage, we guide students through career counselling, including support for form filling and choosing the right college preferences during admission counselling.</p>
          </div>

          <div>
            <div className="course-card">
              <img src="/images/3520795826_both.png" alt="NEET Preparation" className="course-card-image" />
              <div className="course-card-body">
                <h3 className="course-card-title">NEET Preparation</h3>
                <p className="course-card-author">By IMA Jodhpur</p>
                <div className="course-price">
                  <span className="current-price">₹10,000/-</span>
                  <span className="original-price">₹20,000/-</span>
                </div>
                <p className="gst-text">(GST Included)</p>
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
