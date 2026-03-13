'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchData } from '../../lib/clientDataUtils';

export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');
        
        if (blogId) {
          try {
            // Fetch data from MongoDB
            const data = await fetchData();
            
            // Default blogs if none exist in database
            const defaultBlogs = [
              {
                id: '1773367661318',
                title: 'NEET 2025: Complete Preparation Strategy',
                date: '2024-01-15',
                image: '/images/3520795826_both.png',
                content: [
                  { type: 'heading', value: 'Introduction to NEET 2025' },
                  { type: 'description', value: 'The National Eligibility cum Entrance Test (NEET) is the gateway to medical colleges in India. With proper preparation and strategy, you can crack NEET 2025 and secure admission in your dream medical college.' },
                  { type: 'heading', value: 'Key Preparation Tips' },
                  { type: 'bullet', value: 'Start with NCERT books for strong foundation' },
                  { type: 'bullet', value: 'Practice previous year question papers regularly' },
                  { type: 'bullet', value: 'Take mock tests to improve time management' },
                  { type: 'bullet', value: 'Focus on weak areas and revise regularly' },
                  { type: 'heading', value: 'Subject-wise Strategy' },
                  { type: 'description', value: 'Physics: Focus on numerical problems and conceptual clarity. Chemistry: Balance theory and numerical problems. Biology: Memorize diagrams and important facts.' },
                  { type: 'heading', value: 'Time Management' },
                  { type: 'description', value: 'Create a study schedule and stick to it. Allocate time for each subject based on your strengths and weaknesses. Regular breaks and revision are essential for effective preparation.' }
                ]
              },
              {
                id: '1773367661319',
                title: 'JEE Main 2025: Tips for Success',
                date: '2024-01-10',
                image: '/images/3520795826_both.png',
                content: [
                  { type: 'heading', value: 'JEE Main Overview' },
                  { type: 'description', value: 'JEE Main is the first step towards engineering admissions in India. It tests your knowledge in Physics, Chemistry, and Mathematics with emphasis on problem-solving skills.' },
                  { type: 'heading', value: 'Preparation Strategy' },
                  { type: 'bullet', value: 'Master the fundamentals before attempting advanced problems' },
                  { type: 'bullet', value: 'Solve JEE Main previous year papers' },
                  { type: 'bullet', value: 'Practice numerical problems daily' },
                  { type: 'bullet', value: 'Focus on speed and accuracy' },
                  { type: 'heading', value: 'Important Topics' },
                  { type: 'description', value: 'Mathematics: Calculus, Coordinate Geometry, Algebra. Physics: Mechanics, Electromagnetism, Modern Physics. Chemistry: Organic Chemistry, Physical Chemistry, Inorganic Chemistry.' },
                  { type: 'heading', value: 'Exam Day Tips' },
                  { type: 'description', value: 'Stay calm and confident. Read questions carefully. Manage time effectively. Attempt easier questions first to build confidence.' }
                ]
              },
              {
                id: '1773367661320',
                title: 'Foundation Course: Building Strong Basics',
                date: '2024-01-05',
                image: '/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png',
                content: [
                  { type: 'heading', value: 'Why Foundation Course?' },
                  { type: 'description', value: 'A strong foundation in Class 9th and 10th is crucial for success in competitive exams like JEE and NEET. Our foundation course ensures students develop conceptual clarity from the beginning.' },
                  { type: 'heading', value: 'Course Benefits' },
                  { type: 'bullet', value: 'Early exposure to competitive exam patterns' },
                  { type: 'bullet', value: 'Strong conceptual foundation in all subjects' },
                  { type: 'bullet', value: 'Regular assessments and feedback' },
                  { type: 'bullet', value: 'Personalized attention and doubt clearing' },
                  { type: 'heading', value: 'Curriculum Highlights' },
                  { type: 'description', value: 'Our curriculum covers NCERT syllabus comprehensively while introducing students to competitive exam concepts gradually. Special focus on Mathematics and Science subjects.' },
                  { type: 'heading', value: 'Success Stories' },
                  { type: 'description', value: 'Many of our foundation course students have successfully cracked JEE and NEET in their first attempt. Early preparation gives them a significant advantage over their peers.' }
                ]
              }
            ];
            
            let foundBlog = null;
            
            // First try to find in database
            if (data && data.blogs && data.blogs.length > 0) {
              foundBlog = data.blogs.find(b => b.id === blogId || b.id == blogId);
            }
            
            // If not found in database, use default blogs
            if (!foundBlog) {
              foundBlog = defaultBlogs.find(b => b.id === blogId || b.id == blogId);
            }
            
            // If still not found, show first default blog
            if (!foundBlog) {
              foundBlog = defaultBlogs[0];
            }
            
            setBlog(foundBlog);
          } catch (error) {
            console.error('Error fetching blog:', error);
            // Fallback to default blog
            setBlog({
              id: blogId,
              title: 'Blog Post',
              date: new Date().toISOString().split('T')[0],
              image: '/images/3520795826_both.png',
              content: [
                { type: 'heading', value: 'Welcome to IMA Jodhpur Blog' },
                { type: 'description', value: 'Stay tuned for more educational content and exam preparation tips.' }
              ]
            });
          }
        }
        setLoading(false);
      }
    };

    loadBlog();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Loading blog...</h2>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Blog not found</h2>
          <a href="/blog" style={{color: '#1B5A96', textDecoration: 'underline'}}>← Back to Blogs</a>
        </div>
        <Footer />
      </>
    );
  }

  // All blogs use the same clean design
  return (
    <>
      <style jsx>{`
        .blog-hero {
          background: linear-gradient(135deg, #1B5A96 0%, #2563eb 50%, #1B5A96 100%);
          position: relative;
          overflow: hidden;
        }
        .blog-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px);
          background-size: 60px 60px;
          animation: float 25s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 30px) rotate(180deg); }
        }
        .blog-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(27, 90, 150, 0.15);
          overflow: hidden;
          position: relative;
        }
        .blog-header {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          padding: 20px;
          text-align: center;
          border-bottom: 3px solid #1B5A96;
          position: relative;
        }
        .blog-title {
          color: #1B5A96;
          font-size: 2rem;
          font-weight: 800;
          margin: 10px 0;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(27, 90, 150, 0.1);
        }
        .blog-date {
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 500;
          background: #f1f5f9;
          padding: 6px 16px;
          border-radius: 25px;
          display: inline-block;
        }
        .blog-content {
          padding: 25px;
          line-height: 1.6;
        }
        .blog-content h3 {
          color: #1B5A96;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 20px 0 10px 0;
          padding-left: 20px;
          border-left: 4px solid #1B5A96;
          position: relative;
        }
        .blog-content h3::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          background: #1B5A96;
          border-radius: 50%;
        }
        .blog-content p {
          color: #374151;
          font-size: 1rem;
          margin-bottom: 15px;
          text-align: justify;
        }
        .blog-content ul {
          margin: 15px 0;
          padding-left: 0;
        }
        .blog-content li {
          color: #374151;
          font-size: 1rem;
          margin-bottom: 8px;
          padding-left: 30px;
          position: relative;
          list-style: none;
        }
        .blog-content li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #1B5A96;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .back-button {
          background: linear-gradient(135deg, #1B5A96, #2563eb);
          color: white;
          padding: 12px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(27, 90, 150, 0.3);
          margin: 20px 0 0 0;
          font-size: 0.9rem;
        }
        .back-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(27, 90, 150, 0.4);
          color: white;
        }
        @media (max-width: 768px) {
          .blog-hero {
            padding: 30px 15px !important;
          }
          .blog-title {
            font-size: 1.5rem !important;
          }
          .blog-content {
            padding: 20px !important;
          }
          .blog-content h3 {
            font-size: 1.3rem !important;
            margin: 15px 0 8px 0 !important;
          }
          .blog-content p, .blog-content li {
            font-size: 0.95rem !important;
            margin-bottom: 12px !important;
          }
          .blog-header {
            padding: 15px !important;
          }
        }
      `}</style>
      
      <Navbar />
      
      <div className="blog-hero" style={{padding: '40px 20px'}}>
        <div className="blog-container">
          {/* Header Section */}
          <div className="blog-header">
            {/* Blog Image at Top */}
            <div style={{margin: '15px 0'}}>
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
                style={{maxHeight: '250px', width: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(27, 90, 150, 0.2)'}}
              />
            </div>
            
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-date">
              📅 {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          {/* Blog Content */}
          <div className="blog-content">
            {Array.isArray(blog.content) && blog.content.length > 0 ? (
              blog.content.map((item, index) => (
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
            ) : (
              <p>No content available for this blog.</p>
            )}

            <a href="/blog" className="back-button">
              ← Back to Blogs
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
