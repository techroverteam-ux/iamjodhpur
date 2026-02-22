import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Courses - IMA Jodhpur',
  description: 'Explore our popular courses',
};

export default function CoursesPage() {
  const courses = [
    {
      id: 42147,
      title: "Pre Foundation Course",
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png",
      price: "Free",
      validity: "354 Days"
    },
    {
      id: 42161,
      title: "NEET Preparation",
      image: "https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png",
      price: "Free",
      validity: "365 Days"
    },
    {
      id: 42286,
      title: "JEE (Mains+Advance)",
      image: "https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png",
      price: "Free",
      validity: "365 Days"
    },
    {
      id: 42385,
      title: "All India Test Series (AITS)",
      image: "https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png",
      price: "Free",
      validity: "365 Days"
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Navbar />
      
      <div dangerouslySetInnerHTML={{__html: `
        <style>
          .courses-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }
          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-top: 40px;
          }
          .course-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.3s;
            border-bottom: 2px solid #1977f3;
          }
          .course-card:hover {
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            transform: translateY(-8px);
          }
          .course-image {
            width: 100%;
            height: 160px;
            object-fit: contain;
            background: #f9f9f9;
          }
          .course-content {
            padding: 16px;
          }
          .course-title {
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
            font-size: 16px;
          }
          .course-price {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #1977f3;
          }
          .course-validity {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #666;
            margin-bottom: 16px;
          }
          .course-validity i {
            margin-right: 8px;
          }
          .course-buttons {
            display: flex;
            gap: 8px;
          }
          .course-btn {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background: #1977f3;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
            text-decoration: none;
            display: block;
            text-align: center;
          }
          .course-btn:hover {
            background: #0d5bbf;
          }
          .page-header {
            padding: 40px 0;
            text-align: center;
          }
          .page-header h2 {
            color: #1977f3;
            font-size: 36px;
            font-weight: bold;
            margin: 0;
          }
          @media (max-width: 768px) {
            .courses-grid {
              grid-template-columns: 1fr;
            }
          }
        </style>
      `}} />

      <section className="page-header">
        <h2>Our Popular Courses</h2>
      </section>

      <section style={{paddingBottom: '60px'}}>
        <div className="courses-container">
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-content">
                  <h6 className="course-title">{course.title}</h6>
                  <h6 className="course-price">{course.price}</h6>
                  <div className="course-validity">
                    <i className="fa fa-calendar"></i> Validity {course.validity}
                  </div>
                  <div className="course-buttons">
                    <a href="/course-details" className="course-btn">Explore</a>
                    <button className="course-btn">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
