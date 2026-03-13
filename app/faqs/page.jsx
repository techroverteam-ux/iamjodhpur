'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionsRef = useRef([]);

  const faqs = [
    {
      question: "Which courses are available at IIT Medical Academy (IMA)?",
      answer: "IMA offers coaching for Pre-Foundation (Class 9th–10th), NEET (11th, 12th, Target), JEE Main + Advanced (11th, 12th, target), and All India Test Series."
    },
    {
      question: "Do you provide separate batches for 11th, 12th and Target?",
      answer: "Yes. We have dedicated batches like Foundation Batch (11th), Fresher Batch (12th), and Target Batch (GAP year students) for both NEET and JEE."
    },
    {
      question: "What is the medium of teaching at IMA?",
      answer: "IMA provides coaching in both Hindi medium and English medium, so students can learn comfortably with clear understanding."
    },
    {
      question: "How is classroom teaching different at IMA?",
      answer: "IMA focuses on offline classroom learning with personal teacher-student interaction, disciplined study routine, and continuous practice for strong exam preparation."
    },
    {
      question: "Do you cover NCERT thoroughly for NEET?",
      answer: "Yes. NCERT coverage is a major focus in NEET batches, along with gradual level upgrade to NEET-standard questions."
    },
    {
      question: "What study material is provided by IMA?",
      answer: "IMA provides its own subject-wise modules for Physics, Chemistry, Biology, and Mathematics, along with topic-wise practice questions."
    },
    {
      question: "Are Daily Practice Problems or DPPs provided?",
      answer: "Yes. Students receive Daily Practice Problems (DPPs) regularly to strengthen topic-wise practice, accuracy, and speed."
    },
    {
      question: "How are doubts cleared at IMA?",
      answer: "IMA conducts daily doubt-solving sessions, and students can ask doubts from classwork, modules, DPPs, homework, and tests."
    },
    {
      question: "Do you conduct regular tests?",
      answer: "Yes. We conduct weekly Sunday tests and also take chapter/unit/full-syllabus tests during revision phases."
    },
    {
      question: "Do you provide extra classes for difficult topics?",
      answer: "Yes. IMA arranges extra classes and revision support for topics students find difficult or need additional practice in."
    },
    {
      question: "What is All India Test Series at IMA?",
      answer: "After syllabus completion, IMA conducts an All India Test Series to help students practice full syllabus papers and evaluate real exam readiness."
    },
    {
      question: "Does IMA provide student counselling?",
      answer: "Yes. IMA provides personal student counselling to support students with motivation, discipline, improvement planning, and well-being."
    },
    {
      question: "Do you provide career counselling and admission guidance?",
      answer: "Yes. We guide students through career counselling, including form filling support and college preference guidance during counselling."
    },
    {
      question: "Is hostel facility available for students from outside Jodhpur?",
      answer: "Yes. IMA provides hostel facility for outstation students, helping them stay in a focused and disciplined environment."
    },
    {
      question: "Can students join IMA from rural areas?",
      answer: "Yes. IMA supports students from both urban and rural backgrounds, and provides the right pathway guidance and academic support."
    },
    {
      question: "How can I take admission in IMA?",
      answer: "You can take admission by visiting the institute campus, meeting the counselling team, and selecting the suitable batch as per your class and goal."
    },
    {
      question: "Does IMA offer Pre-Foundation coaching for Class 9th and 10th?",
      answer: "Yes. Our Pre-Foundation batches focus on Physics, Chemistry, Mathematics, and Biology, NCERT-based school preparation, and early awareness of NEET/JEE."
    },
    {
      question: "Why should I join IMA for NEET/JEE preparation?",
      answer: "IMA provides a complete preparation system with strong teaching, personal attention, daily doubt support, regular tests, study modules, and counselling guidance."
    }
  ];

  useEffect(() => {
    // Remove scroll-based animation - show all FAQs immediately
    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add('animate-in');
      }
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        .hero-section {
          background: linear-gradient(135deg, #0f2557 0%, #1B5A96 50%, #1B5A96 100%);
          padding: 100px 20px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '?';
          position: absolute;
          top: 20%;
          left: 10%;
          font-size: 200px;
          color: rgba(255, 255, 255, 0.05);
          font-weight: 900;
          animation: float 6s ease-in-out infinite;
        }

        .hero-section::after {
          content: '?';
          position: absolute;
          bottom: 10%;
          right: 15%;
          font-size: 150px;
          color: rgba(255, 255, 255, 0.05);
          font-weight: 900;
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
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
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.95);
          animation: fadeSlideUp 1s ease-out 0.2s backwards;
        }

        .faq-container {
          max-width: 1100px;
          margin: -40px auto 80px;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .faq-item {
          background: white;
          border-radius: 20px;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 3px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1B5A96, #1B5A96) border-box;
          overflow: hidden;
          opacity: 1;
          transition: all 0.4s ease;
        }

        .faq-item.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .faq-item:hover {
          box-shadow: 0 15px 40px rgba(25, 119, 243, 0.2);
          transform: translateX(5px);
        }

        .faq-question {
          padding: 30px 70px 30px 30px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: linear-gradient(135deg, #f8f9ff 0%, #e8f4ff 100%);
        }

        .faq-number {
          min-width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #1B5A96, #1B5A96);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(25, 119, 243, 0.3);
        }

        .faq-question-text {
          flex: 1;
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.5;
        }

        .faq-toggle {
          position: absolute;
          right: 30px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #1B5A96, #1B5A96);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 300;
          transition: all 0.3s ease;
        }

        .faq-item.open .faq-toggle {
          transform: rotate(45deg);
          background: linear-gradient(135deg, #ff6b9d, #ff8fab);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-out, padding 0.5s ease-out;
          padding: 0 30px;
        }

        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 0 30px 30px 95px;
        }

        .faq-answer-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          padding-top: 10px;
          border-top: 2px solid #f0f0f0;
        }

        .stats-section {
          background: linear-gradient(135deg, #f8f9ff 0%, #e8f4ff 100%);
          padding: 60px 20px;
          margin: 60px 0;
          border-radius: 30px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .stat-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(25, 119, 243, 0.15);
          border: 3px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1B5A96, #1B5A96) border-box;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .stat-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1B5A96;
          margin-bottom: 10px;
        }

        .stat-desc {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .faq-question {
            padding: 25px 60px 25px 20px;
          }
          .faq-question-text {
            font-size: 1.05rem;
          }
          .faq-number {
            min-width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          .faq-item.open .faq-answer {
            padding: 0 20px 25px 20px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-subtitle">
            Find answers to common questions about IIT Medical Academy
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <div style={{width: '48px', height: '48px', background: '#1B5A96', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
            </div>
            <div className="stat-title">Multiple Courses</div>
            <div className="stat-desc">Pre-Foundation, NEET, JEE & Test Series</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <div style={{width: '48px', height: '48px', background: '#1B5A96', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            <div className="stat-title">Expert Faculty</div>
            <div className="stat-desc">Experienced teachers with proven results</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <div style={{width: '48px', height: '48px', background: '#1B5A96', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zM12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="stat-title">Personal Attention</div>
            <div className="stat-desc">One-to-one guidance & doubt solving</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <div style={{width: '48px', height: '48px', background: '#1B5A96', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
              </div>
            </div>
            <div className="stat-title">26+ Years</div>
            <div className="stat-desc">Legacy of excellence since 1999</div>
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="faq-number">{index + 1}</div>
              <div className="faq-question-text">{faq.question}</div>
              <div className="faq-toggle">+</div>
            </div>
            <div className="faq-answer">
              <div className="faq-answer-text">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
