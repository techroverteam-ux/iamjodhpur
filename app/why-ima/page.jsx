'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Awards from '../components/Awards'
import { useEffect, useState } from 'react'

export default function WhyIAM() {
  const [bannerImage, setBannerImage] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.feature-card').forEach(el => observer.observe(el))
    
    if (typeof window !== 'undefined') {
      const savedBanners = localStorage.getItem('banners')
      if (savedBanners) {
        const banners = JSON.parse(savedBanners)
        if (banners.whyIma && banners.whyIma !== '') {
          setBannerImage(banners.whyIma)
        }
      }
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .feature-card {
          opacity: 0;
          transition: all 0.6s ease;
        }
        
        .feature-card.animate-in {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .feature-icon {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #1977f3, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .feature-title {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1977f3, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }
        
        .feature-content {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 300px;
          border: 2px solid transparent;
          position: relative;
          overflow: visible;
        }
        
        .feature-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1977f3, #00d4ff, #1977f3);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .feature-content:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 60px rgba(25,119,243,0.25);
          border-color: #1977f3;
        }
        
        .feature-text {
          line-height: 1.9;
          color: #444;
          font-size: 1.05rem;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #0a1628 0%, #1977f3 50%, #00d4ff 100%);
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px);
          background-size: 60px 60px;
          animation: float 25s linear infinite;
        }
        
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to top, #f8f9fa, transparent);
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 30px) rotate(180deg); }
        }
        
        .hero-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: white;
          text-shadow: 0 5px 40px rgba(0,0,0,0.4);
          position: relative;
          z-index: 1;
          letter-spacing: -1px;
          animation: fadeInUp 1s ease;
        }
        
        .breadcrumb {
          color: rgba(255,255,255,0.95);
          position: relative;
          z-index: 1;
          font-size: 1.1rem;
          animation: fadeInUp 1s ease 0.2s backwards;
        }
        
        .breadcrumb a {
          color: white;
          text-decoration: none;
          transition: all 0.3s;
          font-weight: 600;
        }
        
        .breadcrumb a:hover {
          color: #00d4ff;
          text-shadow: 0 0 20px rgba(0,212,255,0.5);
        }
        
        .section-bg {
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 30px 15px !important;
          }
          .hero-title {
            font-size: 1.75rem !important;
          }
          .section-bg {
            padding: 20px 0 !important;
          }
          .container {
            padding: 0 12px !important;
          }
          .space-y-3 {
            gap: 12px !important;
          }
          .feature-content {
            padding: 1.5rem !important;
            gap: 1.5rem !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .feature-content[style*="row-reverse"] {
            flex-direction: column !important;
          }
          .feature-content > div[style*="flex: 0 0 40%"] {
            flex: none !important;
            width: 100% !important;
            max-width: 350px !important;
          }
          .feature-content > div[style*="flex: 0 0 60%"] {
            flex: none !important;
            width: 100% !important;
          }
          .feature-content img {
            height: 200px !important;
          }
          .feature-title {
            font-size: 1.3rem !important;
            margin-bottom: 12px !important;
          }
          .feature-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            text-align: justify !important;
          }
        }
      `}} />

      <Navbar />
      
      {bannerImage ? (
        <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
          <img src={bannerImage} alt="Why IMA" style={{width: '100%', height: 'auto', display: 'block'}} />
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(27, 90, 150, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Why Choose IMA</h1>
          </div>
        </div>
      ) : (
        <div style={{background: 'linear-gradient(135deg, #1B5A96 0%, #1B5A96 100%)', padding: '80px 20px', textAlign: 'center'}}>
          <h1 style={{color: 'white', fontSize: '2.5rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Why Choose IMA</h1>
        </div>
      )}

      <section className="py-4 section-bg">
        <div className="container" style={{maxWidth: '100%', padding: '0 20px'}}>
          <div className="space-y-3" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div className="feature-card">
              <div className="feature-content" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px', border: 'none', marginBottom: '2rem'}}>
                <div style={{flex: '0 0 35%', minWidth: '300px'}}>
                  <img src="/Class Room2.jpeg" alt="Academic Environment" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}} />
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <h2 className="feature-title" style={{marginBottom: '15px'}}>Academic Environment</h2>
                  <p className="text-justify feature-text" style={{lineHeight: '1.7', fontSize: '1rem'}}>
                    At IMA, students learn in a focused and disciplined environment where preparation becomes a daily habit. Our classrooms are designed for long study hours so students can stay comfortable and attentive during lectures. We maintain a serious academic atmosphere that encourages consistency and regular learning. A strong classroom culture automatically reduces distractions and improves concentration. Students feel motivated when they study in a competitive yet positive setting. The learning flow remains structured so students don't feel confused or lost. We ensure students stay connected with their routine and preparation goals throughout the year.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-content" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px', border: 'none', flexDirection: 'row-reverse', marginBottom: '2rem'}}>
                <div style={{flex: '0 0 35%', minWidth: '300px'}}>
                  <img src="/Daut Class.png" alt="Teaching Excellence" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}} />
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <h2 className="feature-title" style={{marginBottom: '15px'}}>Teaching Excellence</h2>
                  <p className="text-justify feature-text" style={{lineHeight: '1.7', fontSize: '1rem'}}>
                    IMA has a dedicated team of experienced faculty for Physics, Chemistry, Biology and Mathematics. Our teaching approach focuses on concept clarity first, and then builds question-solving ability step-by-step. Each topic is explained with proper logic, examples and exam-oriented practice. Teachers guide students on how to think in NEET/JEE pattern questions instead of learning by memorising. We focus on building accuracy because marks improve only when mistakes reduce. Along with accuracy, we also help students improve their speed through regular practice and smart methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-content" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px', border: 'none', marginBottom: '2rem'}}>
                <div style={{flex: '0 0 35%', minWidth: '300px'}}>
                  <img src="/Counselling.png" alt="Student Counselling" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}} />
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <h2 className="feature-title" style={{marginBottom: '15px'}}>Student Counselling</h2>
                  <p className="text-justify feature-text" style={{lineHeight: '1.7', fontSize: '1rem'}}>
                    At IMA, management provides regular student counselling to ensure every student stays on the right track throughout the session. This counselling includes complete guidance related to marks, attendance, test performance and overall improvement. Many students work hard but still don't know what exactly to improve first, and counselling helps solve that. We guide students on weak topics, subject priorities and daily improvement planning. Attendance is monitored because consistency is a major factor in selection.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-content" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px', border: 'none', flexDirection: 'row-reverse', marginBottom: '2rem'}}>
                <div style={{flex: '0 0 35%', minWidth: '300px'}}>
                  <img src="/Test Paper.png" alt="Modules & Resources" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}} />
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <h2 className="feature-title" style={{marginBottom: '15px'}}>Modules & Resources</h2>
                  <p className="text-justify feature-text" style={{lineHeight: '1.7', fontSize: '1rem'}}>
                    Strong preparation requires strong content, and IMA provides complete study support designed for NEET and JEE patterns. We provide our own subject-wise modules for Physics, Chemistry, Biology and Maths. These modules help students build concepts step-by-step and then practice questions in the right manner. The study material is structured topic-wise so students don't waste time in random learning. Along with modules, students receive Daily Practice Problems (DPP) after classes to continue learning every day.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-content" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px', border: 'none', marginBottom: '2rem'}}>
                <div style={{flex: '0 0 35%', minWidth: '300px'}}>
                  <img src="/Discussion.png" alt="Doubt Sessions" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}} />
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <h2 className="feature-title" style={{marginBottom: '15px'}}>Doubt Sessions</h2>
                  <p className="text-justify feature-text" style={{lineHeight: '1.7', fontSize: '1rem'}}>
                    At IMA, doubt solving is taken seriously because even one small doubt can become a major weakness later. We conduct regular doubt sessions where students can ask questions from classroom topics, DPPs, modules, homework and test papers. Teachers ensure doubts are cleared properly and completely, not in a rushed manner. The focus is to make students understand the concept behind the question, not just the final answer. Doubt sessions help students strengthen weak areas and correct their approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-content" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px', border: 'none', flexDirection: 'row-reverse', marginBottom: '2rem'}}>
                <div style={{flex: '0 0 35%', minWidth: '300px'}}>
                  <img src="/Class Room1.jpeg" alt="Sunday Tests" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}} />
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <h2 className="feature-title" style={{marginBottom: '15px'}}>Sunday Tests</h2>
                  <p className="text-justify feature-text" style={{lineHeight: '1.7', fontSize: '1rem'}}>
                    IMA believes that regular testing is an essential part of true exam preparation. We conduct a fixed test every Sunday to ensure consistency and continuous evaluation. Weekly tests help students improve time management, build exam confidence, and develop disciplined performance habits. Along with Sunday tests, we also conduct chapter tests, unit tests, and full syllabus tests during revision phases. These assessments help students understand their current level and identify areas that need improvement. Our faculty guides students in analysing mistakes and strengthening weak topics with the right strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-content" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '20px', border: 'none', marginBottom: '2rem'}}>
                <div style={{flex: '0 0 35%', minWidth: '300px'}}>
                  <img src="/Class room3.jpeg" alt="PTM Support" style={{width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}} />
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <h2 className="feature-title" style={{marginBottom: '15px'}}>PTM Support</h2>
                  <p className="text-justify feature-text" style={{lineHeight: '1.7', fontSize: '1rem'}}>
                    IMA conducts regular Parent-Teacher Meetings (PTM) to keep parents connected with the student's journey. PTMs help parents understand test performance, attendance, discipline and overall progress. This keeps preparation transparent and properly monitored. Parents receive clear feedback about the student's strengths and areas where improvement is needed. Teachers also guide parents on how to support the student at home during the preparation phase. PTMs build a stronger support system for the student from both sides — institute and home. When parents stay informed, students become more regular and responsible. This creates better consistency and better long-term performance. PTM also helps in correcting issues early, before they affect results. At IMA, parent support is treated as an important part of student success.
                  </p>
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

