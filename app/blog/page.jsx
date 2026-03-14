'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchData } from '../../lib/clientDataUtils'
import { ChevronDownIcon, ClockIcon } from '../../lib/icons'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [visible, setVisible] = useState(false)
  const [bannerImage, setBannerImage] = useState('')

  useEffect(() => {
    setVisible(true)
    loadData()
  }, [])

  const loadData = async () => {
    const data = await fetchData()
    
    if (data && data.blogs && data.blogs.length > 0) {
      // Use blogs from database
      setBlogs(data.blogs)
    } else {
      // Only use defaults if database is empty or no data
      const defaultBlogs = [
        {
          id: '1773367661318',
          title: 'NEET 2025: Complete Preparation Strategy',
          date: '2024-01-15',
          description: 'Master NEET 2025 with our comprehensive preparation guide and expert tips.',
          image: '/images/3520795826_both.png'
        },
        {
          id: '1773367661319',
          title: 'JEE Main 2025: Tips for Success',
          date: '2024-01-10',
          description: 'Crack JEE Main 2025 with proven strategies and preparation techniques.',
          image: '/images/3520795826_both.png'
        },
        {
          id: '1773367661320',
          title: 'Foundation Course: Building Strong Basics',
          date: '2024-01-05',
          description: 'Build a strong foundation for competitive exams with our comprehensive course.',
          image: '/images/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png'
        },
        {
          id: '1773367661321',
          title: 'Study Tips for Competitive Exams',
          date: '2024-01-01',
          description: 'Effective study techniques and time management strategies for exam success.',
          image: '/images/3520795826_both.png'
        }
      ]
      setBlogs(defaultBlogs)
    }
    
    // Fetch banner from new API
    try {
      const response = await fetch('/api/banners')
      const bannerData = await response.json()
      if (bannerData.banners?.blog) {
        setBannerImage(bannerData.banners.blog)
      }
    } catch (error) {
      console.error('Error fetching banner:', error)
    }
  }

  return (
    <>
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        .blog-card {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .blog-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: #1B5A96;
          transition: height 0.4s;
        }
        .blog-card:hover::before {
          height: 100%;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0, 102, 255, 0.15);
        }
        .blog-img {
          transition: transform 0.4s;
        }
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .blog-title {
            font-size: 24px !important;
          }
          .blog-subtitle {
            font-size: 13px !important;
            margin-bottom: 15px !important;
          }
          .sidebar {
            display: none;
          }
          .blog-section {
            padding: 25px 0 !important;
          }
          .container {
            padding: 0 12px !important;
          }
          .header-section {
            margin-bottom: 30px !important;
          }
          .category-select {
            padding: 10px 35px 10px 15px !important;
            font-size: 14px !important;
            min-width: auto !important;
            width: 90% !important;
            max-width: 280px !important;
          }
          .category-dropdown {
            display: none !important;
          }
          .blog-card h3 {
            font-size: 13px !important;
            min-height: 36px !important;
            line-height: 1.3 !important;
            margin-bottom: 8px !important;
          }
          .blog-card p {
            font-size: 11px !important;
            margin-bottom: 10px !important;
          }
          .blog-card > div:last-child {
            padding: 10px !important;
          }
          .blog-card img {
            height: 120px !important;
          }
          .category-badge {
            padding: 4px 10px !important;
            font-size: 10px !important;
            top: 10px !important;
            right: 10px !important;
          }
          .date-section {
            gap: 6px !important;
            margin-bottom: 10px !important;
          }
          .date-section i {
            font-size: 12px !important;
          }
          .date-section span {
            font-size: 11px !important;
          }
          .read-more {
            font-size: 12px !important;
          }
        }
        
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(240,248,255,0.85) 0%, rgba(230,245,255,0.9) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        
        .banner-logo {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(27,90,150,0.15);
        }
        
        .hero-section {
          background: linear-gradient(135deg, rgba(240,248,255,0.9) 0%, rgba(230,245,255,0.95) 100%);
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: #1B5A96;
          text-shadow: 0 2px 10px rgba(27,90,150,0.2);
          position: relative;
          z-index: 1;
          letter-spacing: -1px;
        }
        
        @media (max-width: 768px) {
          .banner-logo {
            width: 60px !important;
            height: 60px !important;
            margin-bottom: 15px !important;
          }
          .hero-title {
            font-size: 1.75rem !important;
          }
      `}</style>

      <Navbar />
      
      {bannerImage ? (
        <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
          <img src={bannerImage} alt="Blogs" style={{width: '100%', height: '400px', objectFit: 'cover', display: 'block'}} />
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{color: '#1B5A96', fontSize: '2.8rem', fontWeight: '900', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>Our Blogs</h1>
          </div>
        </div>
      ) : (
        <div style={{background: 'linear-gradient(135deg, #1B5A96 0%, #1B5A96 100%)', padding: '80px 20px', textAlign: 'center'}}>
          <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Our Blogs</h1>
        </div>
      )}
      
      <section className="blog-section" style={{background: '#FFFFFF', padding: '40px 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 8px'}}>
          <div className="header-section" style={{textAlign: 'center', marginBottom: '50px'}}>
            <h1 className="blog-title" style={{fontSize: '48px', fontWeight: '700', color: '#1B5A96', marginBottom: '12px'}}>Latest Insights</h1>
            <p className="blog-subtitle" style={{color: '#6B7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto 20px'}}>Stay updated with exam tips, admission guides, and success stories</p>
            <div className="category-dropdown" style={{display: 'none'}}>
              <select className="category-select" style={{padding: '12px 40px 12px 20px', fontSize: '16px', fontWeight: '600', color: '#1B5A96', background: 'white', border: '2px solid #1B5A96', borderRadius: '12px', cursor: 'pointer', appearance: 'none', minWidth: '250px'}} onChange={(e) => e.target.value && (window.location.href = `/blog-details?id=${e.target.value}`)}>
                <option value="">Select Category</option>
                {blogs.map((blog) => (
                  <option key={blog.id} value={blog.id}>{blog.title}</option>
                ))}
              </select>
              <ChevronDownIcon style={{position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#1B5A96', pointerEvents: 'none'}} size={16} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {blogs.map((blog, index) => (
              <a 
                key={blog.id}
                href={`/blog-details?id=${blog.id}`}
                className={`blog-card fade-up ${visible ? 'show' : ''}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E8EEF5',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                <div style={{position: 'relative', overflow: 'hidden'}}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="blog-img"
                    style={{
                      width: '100%',
                      height: '160px',
                      objectFit: 'contain',
                      background: '#F8FAFC'
                    }} 
                  />
                  <div className="category-badge" style={{display: 'none'}}>
                    {blog.category || 'General'}
                  </div>
                </div>
                <div style={{padding: '12px'}}>
                  <h3 style={{fontSize: '18px', fontWeight: '600', color: '#222222', marginBottom: '12px', minHeight: '48px', lineHeight: '1.4'}}>{blog.title}</h3>
                  <div className="date-section" style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
                    <ClockIcon style={{color: '#1B5A96', fontSize: '14px'}} size={14} />
                    <span style={{fontSize: '13px', color: '#6B7280'}}>{blog.date}</span>
                  </div>
                  {blog.description && blog.description.trim() && (
                    <p style={{color: '#6B7280', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6'}}>{blog.description}</p>
                  )}
                  <div className="read-more" style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#1B5A96', fontWeight: '600', fontSize: '14px'}}>
                    Read More
                    <span style={{transition: 'transform 0.3s'}}>→</span>
                  </div>
                </div>
              </a>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

