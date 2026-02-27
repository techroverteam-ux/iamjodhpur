'use client';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .hero-section {
          background: linear-gradient(135deg, #0f2557 0%, #1977f3 50%, #00d4ff 100%);
          padding: 80px 20px 60px;
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
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: float 20s linear infinite;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, transparent, white);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          color: white;
          margin-bottom: 20px;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          animation: fadeSlideUp 1s ease-out;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.95);
          animation: fadeSlideUp 1s ease-out 0.2s backwards;
          line-height: 1.6;
        }

        .content-section {
          opacity: 0;
          transition: all 1s ease-out;
        }

        .content-section.animate-in {
          opacity: 1;
        }

        .intro-section {
          max-width: 1400px;
          margin: -40px auto 40px;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .intro-card {
          background: white;
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 30px 80px rgba(25, 119, 243, 0.2);
          border: 4px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1977f3, #00d4ff, #ff6b9d) border-box;
          position: relative;
          overflow: hidden;
        }

        .intro-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s infinite;
        }

        .intro-card.animate-in {
          animation: scaleIn 1s ease-out;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1977f3, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 30px;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 5px;
          background: linear-gradient(90deg, #1977f3, #00d4ff, #ff6b9d);
          border-radius: 3px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin: 30px 0;
        }

        .stat-card {
          background: linear-gradient(135deg, #1977f3 0%, #00d4ff 100%);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(25, 119, 243, 0.3);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          transition: all 0.6s ease;
        }

        .stat-card:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 25px 60px rgba(25, 119, 243, 0.4);
        }

        .stat-card:hover::before {
          top: -30%;
          right: -30%;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 10px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .stat-label {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
        }

        .text-content {
          font-size: 1.15rem;
          line-height: 2;
          color: #444;
          margin-bottom: 25px;
          text-align: justify;
        }

        .highlight-box {
          background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
          border-left: 6px solid #1977f3;
          padding: 30px;
          border-radius: 15px;
          margin: 40px 0;
          box-shadow: 0 10px 30px rgba(25, 119, 243, 0.1);
        }

        .vision-mission-wrapper {
          max-width: 1400px;
          margin: 50px auto;
          padding: 0 20px;
        }

        .vm-grid {
          display: block;
          margin-top: 30px;
        }

        .vision-card {
          background: linear-gradient(135deg, #1977f3 0%, #00d4ff 100%);
          border-radius: 20px;
          padding: 30px;
          color: white;
          text-align: center;
          box-shadow: 0 15px 40px rgba(25, 119, 243, 0.3);
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }

        .vision-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
        }

        .vision-card .vm-title {
          color: white;
          font-size: 2rem;
          margin-bottom: 20px;
          justify-content: center;
        }

        .vision-card .text-content {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.15rem;
          text-align: center;
          margin: 0;
          line-height: 2;
        }

        .mission-card {
          background: white;
          border-radius: 25px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 3px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1977f3, #00d4ff) border-box;
          position: relative;
          overflow: hidden;
        }

        .mission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #1977f3, #00d4ff, #ff6b9d);
        }

        .vision-card.animate-in {
          animation: slideRight 1s ease-out;
        }

        .mission-card.animate-in {
          animation: slideLeft 1s ease-out;
        }

        .vm-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #1977f3;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .vm-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #1977f3, #00d4ff);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .mission-list {
          list-style: none;
          padding: 0;
        }

        .mission-list li {
          padding: 20px 0 20px 50px;
          position: relative;
          font-size: 1.15rem;
          line-height: 2;
          color: #444;
          border-bottom: 1px solid #f0f0f0;
        }

        .mission-list li:last-child {
          border-bottom: none;
        }

        .mission-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 20px;
          width: 35px;
          height: 35px;
          background: linear-gradient(135deg, #1977f3, #00d4ff);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          box-shadow: 0 4px 15px rgba(25, 119, 243, 0.3);
        }

        .director-section {
          background: linear-gradient(135deg, #0f2557 0%, #1977f3 100%);
          color: white;
          padding: 60px 40px;
          margin: 50px 0 0;
          position: relative;
          overflow: hidden;
        }

        .director-section::before {
          content: '"';
          position: absolute;
          top: 40px;
          left: 60px;
          font-size: 200px;
          opacity: 0.08;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .director-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .director-section.animate-in {
          animation: fadeSlideUp 1s ease-out;
        }

        .director-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 30px;
          font-weight: 800;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .director-section p {
          font-size: 1.2rem;
          line-height: 2;
          margin-bottom: 25px;
          text-align: justify;
        }

        .director-signature {
          text-align: right;
          margin-top: 50px;
          padding: 30px 0;
          border-bottom: 3px solid white;
        }

        .director-signature strong {
          font-size: 1.3rem;
          display: block;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.75rem;
            padding: 40px 20px 30px;
          }
          .hero-subtitle {
            font-size: 0.875rem;
          }
          .section-title {
            font-size: 1.5rem;
          }
          .intro-card, .vm-card {
            padding: 20px;
          }
          .vm-grid {
            display: block;
          }
          .vision-card {
            margin-bottom: 20px;
          }
          .director-section {
            padding: 30px 15px;
          }
          .text-content {
            font-size: 0.875rem;
            line-height: 1.6;
          }
          .stat-number {
            font-size: 2rem;
          }
          .stat-label {
            font-size: 0.875rem;
          }
          .vm-title {
            font-size: 1.25rem;
          }
          .mission-list li {
            font-size: 0.875rem;
            padding: 12px 0 12px 35px;
          }
          .director-title {
            font-size: 1.5rem;
          }
          .director-section p {
            font-size: 0.875rem;
            line-height: 1.6;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section" style={{padding: '60px 20px 40px'}}>
        <div className="hero-content">
          <h1 className="hero-title">About IIT Medical Academy</h1>
          <p className="hero-subtitle">
            26 Years of Excellence in Shaping Future Doctors & Engineers
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="intro-section">
        <div className="intro-card content-section" ref={(el) => (sectionsRef.current[0] = el)}>
          <h2 className="section-title">Our Legacy Since 1999</h2>
          
          <div className="stats-grid" style={{gap: '15px'}}>
            <div className="stat-card">
              <div className="stat-number">1999</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">26+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Success Stories</div>
            </div>
          </div>

          <p className="text-content">
            Founded in 1999, IIT Medical Academy (IMA) has been serving Jodhpur for 26 years, building a strong legacy in competitive exam preparation. IMA was among the first coaching institutes in Jodhpur where students could receive proper guidance for entrance exams of IITs and top medical colleges through a structured and disciplined approach.
          </p>

          <p className="text-content">
            We primarily focus on students from Rajasthan, especially Western Rajasthan, and aim to extend quality education to rural and semi-urban areas as well. Many students lack awareness about the right academic pathway, and IMA helps them recognize their inner stamina, talent, and potential to achieve their goals.
          </p>

          <div className="highlight-box">
            <p className="text-content" style={{ marginBottom: 0 }}>
              <strong>🎯 Our Approach:</strong> IMA offers coaching in both Hindi medium and English medium, with a healthy study environment and experienced faculties. With regular testing, a dedicated Doubt Solving Centre, and complete student tracking with parent reporting, we ensure continuous academic improvement.
            </p>
          </div>

          <p className="text-content">
            We also provide career counselling and personal student counselling, supporting students not only in studies but also in overall well-being and decision-making. Over the years, our students have secured selections in prestigious institutions such as AIIMS, AFMC, ISRO, IITs, NITs, and many other reputed colleges. For students coming from outside Jodhpur, we also provide hostel facilities in a disciplined and supportive atmosphere.
          </p>

          <p className="text-content">
            At IIT Medical Academy, we don't just teach—we mentor, motivate, and transform students into future doctors, engineers, and professionals with ambition, discipline, and purpose.
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="vision-mission-wrapper">
        <h2 className="section-title content-section" ref={(el) => (sectionsRef.current[1] = el)}>
          Vision & Mission
        </h2>

        <div className="vm-grid">
          <div className="vision-card content-section" ref={(el) => (sectionsRef.current[2] = el)}>
            <h3 className="vm-title">
              <span className="vm-icon">🎯</span>
              Vision
            </h3>
            <p className="text-content">
              To reach every corner of Rajasthan with quality education and the right direction—guiding students towards becoming doctors and IITians through offline classroom learning, one-to-one mentorship, personal attention, and genuine care.
            </p>
          </div>

          <div className="mission-card content-section" ref={(el) => (sectionsRef.current[3] = el)}>
            <h3 className="vm-title">
              <span className="vm-icon">🚀</span>
              Mission
            </h3>
            <ul className="mission-list">
              <li>To provide high-quality offline classroom education with strong concept clarity for NEET and IIT-JEE.</li>
              <li>To ensure personal teacher-student interaction through one-to-one guidance and individual academic focus.</li>
              <li>To reach students across Rajasthan, especially rural and underrepresented areas, and show them the right career pathway.</li>
              <li>To support every learner with individual care, attention, and a disciplined study environment.</li>
              <li>To strengthen performance through regular tests, analysis, and a dedicated Doubt Solving Centre.</li>
              <li>To provide career counselling and personal counselling, helping students build confidence, mindset, and well-being.</li>
              <li>To maintain transparency through student tracking and regular parent reporting for continuous improvement.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Director's Message */}
      <section className="director-section content-section" ref={(el) => (sectionsRef.current[4] = el)}>
        <div className="director-content">
          <h3 className="director-title">Director's Message</h3>

          <p>
            <strong>Welcome to IIT Medical Academy (IMA).</strong>
            <br />
            For us, IMA is not just a coaching institute—it is an emotion, a responsibility, and a lifelong commitment that began in 1999 with one simple dream: to guide students with honesty, discipline, and the right direction.
          </p>

          <p>
            Every student who enters IMA carries a silent promise—to themselves and to their family. We understand the pressure, the sacrifices, and the expectations behind that dream. That is why we never treat students like numbers. We listen to them, support them, and stand by them like mentors who truly care.
          </p>

          <p>
            We strongly believe in offline classroom learning, where real teaching happens through eye contact, personal attention, and one-to-one guidance. Our purpose is not only to help students score well, but to help them become strong individuals—confident, focused, and mentally prepared to face life with courage.
          </p>

          <p>
            To every parent who has trusted us, and to every student who believes in their dream—thank you. Your faith is our strength, and your success is our motivation. We will continue to guide you with the same dedication, love, and sincerity—always.
          </p>

          <div className="director-signature">
            <strong>– A.R. Seervi & K.R. Choudhary</strong>
            <em>Founders & Directors, IIT Medical Academy (IMA)</em>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
