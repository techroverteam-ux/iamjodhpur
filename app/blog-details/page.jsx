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
              },
              {
                id: '1773367661321',
                title: 'Study Tips for Competitive Exams',
                date: '2024-01-01',
                image: '/images/3520795826_both.png',
                content: [
                  { type: 'heading', value: 'Effective Study Techniques' },
                  { type: 'description', value: 'Success in competitive exams requires more than just hard work. Smart study techniques and proper time management are essential for achieving your goals.' },
                  { type: 'heading', value: 'Daily Study Routine' },
                  { type: 'bullet', value: 'Wake up early and maintain consistent sleep schedule' },
                  { type: 'bullet', value: 'Create a balanced timetable covering all subjects' },
                  { type: 'bullet', value: 'Take regular breaks to avoid burnout' },
                  { type: 'bullet', value: 'Review and revise previous topics daily' },
                  { type: 'heading', value: 'Memory Techniques' },
                  { type: 'description', value: 'Use mnemonics, flashcards, and visual aids to remember complex concepts. Practice active recall and spaced repetition for better retention.' },
                  { type: 'heading', value: 'Exam Strategy' },
                  { type: 'description', value: 'Develop a systematic approach to solving questions. Practice time management and learn to identify easy, medium, and difficult questions quickly.' }
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

  return (
    <>
      <style jsx>{`
        .blog-page {
          background: #f8fafc;
          min-height: 100vh;
          padding: 20px;
          padding-top: 80px;
        }
        
        .blog-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        
        .blog-header {
          background: white;
          padding: 30px;
          border-bottom: 1px solid #e2e8f0;
          text-align: center;
        }
        
        .blog-image {
          width: auto;
          max-width: 300px;
          height: auto;
          max-height: 200px;
          object-fit: contain;
          border-radius: 12px;
          margin: 0 auto 20px;
          display: block;
          box-shadow: 0 4px 12px rgba(27, 90, 150, 0.15);
          border: 2px solid #f1f5f9;
        }
        
        .blog-title {
          color: #1B5A96;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }
        
        .blog-date {
          color: #64748b;
          font-size: 0.9rem;
          background: #f1f5f9;
          padding: 6px 16px;
          border-radius: 20px;
          display: inline-block;
        }
        
        .blog-content {
          padding: 30px;
        }
        
        .blog-content h3 {
          color: #1B5A96;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 25px 0 12px 0;
          padding-bottom: 8px;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .blog-content p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 16px;
          text-align: justify;
        }
        
        .blog-content ul {
          margin: 16px 0;
          padding: 0;
        }
        
        .blog-content li {
          color: #475569;
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 8px;
          padding-left: 24px;
          position: relative;
          list-style: none;
        }
        
        .blog-content li::before {
          content: '•';
          position: absolute;
          left: 8px;
          color: #1B5A96;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .back-button {
          background: #1B5A96;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          font-size: 0.9rem;
          margin-top: 20px;
        }
        
        .back-button:hover {
          background: #164e87;
          color: white;
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .blog-page {
            padding: 10px;
            padding-top: 90px;
          }
          
          .blog-container {
            margin: 0 5px;
            border-radius: 8px;
            max-width: 100%;
            overflow-x: hidden;
          }
          
          .blog-header {
            padding: 20px 15px;
            position: relative;
            z-index: 1;
          }
          
          .blog-image {
            width: auto;
            max-width: calc(100vw - 60px);
            height: auto;
            max-height: 150px;
            object-fit: contain;
            margin-bottom: 15px;
            border-radius: 8px;
          }
          
          .blog-title {
            font-size: 1.4rem;
            line-height: 1.2;
            word-wrap: break-word;
            hyphens: auto;
          }
          
          .blog-date {
            font-size: 0.8rem;
            padding: 4px 12px;
          }
          
          .blog-content {
            padding: 20px 15px;
            overflow-x: hidden;
          }
          
          .blog-content h3 {
            font-size: 1.1rem;
            margin: 18px 0 8px 0;
            padding-bottom: 6px;
            word-wrap: break-word;
          }
          
          .blog-content p, .blog-content li {
            font-size: 0.9rem;
            line-height: 1.5;
            word-wrap: break-word;
          }
          
          .blog-content p {
            margin-bottom: 12px;
          }
          
          .blog-content li {
            padding-left: 20px;
            margin-bottom: 6px;
          }
          
          .blog-content li::before {
            left: 6px;
            font-size: 1rem;
          }
          
          .back-button {
            padding: 8px 16px;
            font-size: 0.85rem;
            margin-top: 15px;
          }
        }
      `}</style>
      
      <Navbar />
      
      <div className="blog-page">
        <div className="blog-container">
          {/* Header Section */}
          <div className="blog-header">
            {/* Small Blog Image - Like Logo */}
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />
            
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