'use client'
import { useState, useEffect } from 'react'

export default function Awards() {
  const [isVisible, setIsVisible] = useState(false)

  const achievements = [
    { 
      image: "/JEE Result2024_25.png", 
      exam: "JEE", 
      year: "2024-25", 
      title: "JEE Main & Advanced Results",
      description: "Outstanding performance in JEE Main and Advanced examinations with multiple selections in top IITs and NITs",
      stats: { selections: "150+", topRank: "AIR 45", percentage: "95%" }
    },
    { 
      image: "/Neet Result2024.png", 
      exam: "NEET", 
      year: "2024", 
      title: "NEET UG Results",
      description: "Exceptional results in NEET UG with numerous selections in premier medical colleges across India",
      stats: { selections: "200+", topRank: "AIR 89", percentage: "98%" }
    },
    { 
      image: "/Neet Result2025.png", 
      exam: "NEET", 
      year: "2025", 
      title: "NEET UG Results",
      description: "Continued excellence in NEET preparation with remarkable success rates and top rankings",
      stats: { selections: "180+", topRank: "AIR 67", percentage: "96%" }
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('.awards-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .achievement-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 0;
          margin-bottom: 3rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        
        .achievement-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(27, 90, 150, 0.15);
          border-color: #1B5A96;
        }
        
        .achievement-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }
        
        .achievement-content {
          padding: 2rem;
        }
        
        .exam-badge {
          display: inline-block;
          background: linear-gradient(135deg, #1B5A96, #2563eb);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .achievement-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1B5A96;
          margin-bottom: 15px;
          line-height: 1.3;
        }
        
        .achievement-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        
        .achievement-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 20px;
        }
        
        .stat-item {
          text-align: center;
          padding: 15px;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        
        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1B5A96;
          display: block;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        .year-highlight {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(27, 90, 150, 0.9);
          color: white;
          padding: 10px 20px;
          border-radius: 15px;
          font-size: 1.1rem;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }
        
        @media (max-width: 768px) {
          .achievement-image {
            height: 250px;
          }
          
          .achievement-content {
            padding: 1.5rem;
          }
          
          .achievement-title {
            font-size: 1.5rem;
          }
          
          .achievement-stats {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
      
      <section className="awards-section" style={{padding: '60px 0 0 0', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)'}}>
        <div style={{textAlign: 'center', marginBottom: '50px', padding: '0 20px'}}>
          <h2 style={{fontSize: '2.8rem', fontWeight: '700', color: '#1B5A96', marginBottom: '15px'}}>
            IMA Achievement Results 2025
          </h2>
          <div style={{width: '100px', height: '4px', background: '#1B5A96', margin: '0 auto 15px', borderRadius: '2px'}}></div>
          <p style={{fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>
            Celebrating our students' outstanding performance in JEE and NEET examinations
          </p>
        </div>
        
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div style={{position: 'relative'}}>
                <img 
                  src={achievement.image} 
                  alt={`${achievement.exam} ${achievement.year} Results`} 
                  className="achievement-image" 
                />
                <div className="year-highlight">{achievement.year}</div>
              </div>
              
              <div className="achievement-content">
                <div className="exam-badge">{achievement.exam} {achievement.year}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                
                <div className="achievement-stats">
                  <div className="stat-item">
                    <span className="stat-number">{achievement.stats.selections}</span>
                    <span className="stat-label">Selections</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{achievement.stats.topRank}</span>
                    <span className="stat-label">Top Rank</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{achievement.stats.percentage}</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}