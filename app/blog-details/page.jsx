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
        @media (max-width: 768px) {
          .blog-detail-title {
            font-size: 24px !important;
          }
          .blog-detail-content h3 {
            font-size: 18px !important;
          }
          .blog-detail-content p {
            font-size: 14px !important;
          }
        }
      `}</style>
      <Navbar />
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
              <h1 className="blog-detail-title text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {blog.title}
              </h1>
              
              <div className="mb-8">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-lg"
                  style={{maxHeight: '250px', objectFit: 'contain'}}
                />
              </div>

              <div className="blog-detail-content prose prose-lg max-w-none">
                {Array.isArray(blog.content) && blog.content.length > 0 ? (
                  blog.content.map((item, index) => (
                    <div key={index}>
                      {item.type === 'heading' && <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">{item.value}</h3>}
                      {item.type === 'description' && <p className="mb-4 text-gray-700 leading-relaxed">{item.value}</p>}
                      {item.type === 'bullet' && (
                        <ul className="list-disc ml-6 mb-4">
                          <li className="text-gray-700">{item.value}</li>
                        </ul>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700">No content available for this blog.</p>
                )}
              </div>

              <a href="/blog" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                ← Back to Blogs
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
