'use client'
import { useState, useEffect } from 'react'

export default function AchievementResults() {
  const [isVisible, setIsVisible] = useState(true) // Show content immediately
  
  const results = [
    {
      image: "/Neet Result2025.png",
      title: "NEET Results 2025"
    },
    {
      image: "/JEE Result2024_25.png",
      title: "NEET Results 2024"
    },
    {
      image: "/Neet Result2024.png", 
      title: "JEE Results 2024-25"
    }
  ]

  useEffect(() => {
    // Smooth scroll animation for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.result-card')
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .result-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          margin-bottom: 3rem;
          opacity: 1;
          transform: translateY(0);
        }
        
        .result-card.animate-in {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .result-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(27, 90, 150, 0.2);
        }
        
        .result-image {
          width: 100%;
          height: auto;
          min-height: 300px;
          display: block;
          object-fit: contain;
          background: #f8f9fa;
        }
        
        .result-title {
          padding: 2rem;
          text-align: center;
          font-size: 1.8rem;
          font-weight: 700;
          color: #1B5A96;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          border-top: 3px solid #1B5A96;
        }
        
        .results-container {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 1153px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        @media (max-width: 768px) {
          .results-container {
            gap: 0 !important;
            padding: 0 10px !important;
          }
          
          .result-card {
            margin-bottom: 0 !important;
            border-radius: 10px !important;
          }
          
          .result-image {
            min-height: 200px !important;
            border-radius: 10px 10px 0 0 !important;
          }
          
          .result-title {
            font-size: 1rem !important;
            padding: 1rem !important;
          }
          
          .achievement-results-section {
            padding: 30px 0 !important;
          }
          
          .section-header {
            margin-bottom: 20px !important;
            padding: 0 10px !important;
          }
          
          .section-header h2 {
            font-size: 1.8rem !important;
          }
          
          .section-header p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
      
      <section className="achievement-results-section" style={{padding: '80px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)'}}>
        <div className="section-header" style={{textAlign: 'center', marginBottom: '18px', padding: '0 3px'}}>
          <h2 style={{fontSize: '3rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
            IMA Achievement Results
          </h2>
          <div style={{width: '120px', height: '5px', background: '#1B5A96', margin: '0 auto 20px', borderRadius: '3px'}}></div>
          <p style={{fontSize: '1.2rem', color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>
            Celebrating our students' outstanding performance in JEE and NEET examinations
          </p>
        </div>
        
        <div className="results-container">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <img 
                src={result.image} 
                alt={result.title} 
                className="result-image" 
              />
              <div className="result-title">
                {result.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}