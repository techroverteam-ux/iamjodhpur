export default function StudyResources() {
  const resources = [
    {
      icon: "fa-book",
      title: "Study Modules",
      description: "Comprehensive subject-wise modules designed for JEE & NEET preparation"
    },
    {
      icon: "fa-file-text-o", 
      title: "Practice Papers",
      description: "Extensive collection of practice papers and previous year questions"
    },
    {
      icon: "fa-graduation-cap",
      title: "Reference Materials",
      description: "Curated reference books and study materials from top publications"
    }
  ]

  return (
    <section style={{
      padding: '80px 0', 
      background: 'linear-gradient(135deg, #1B5A96 0%, #2563eb 50%, #1B5A96 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)',
        backgroundSize: '60px 60px',
        opacity: 0.3
      }}></div>
      
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
          
          {/* Content Side */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Study Resources & Materials
            </h2>
            <div style={{width: '80px', height: '4px', background: 'white', marginBottom: '30px', borderRadius: '2px'}}></div>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Access our comprehensive collection of study materials, practice papers, and reference resources designed specifically for JEE and NEET preparation.
            </p>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              {resources.map((resource, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '15px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px'
                  }}>
                    <i className={`fa ${resource.icon}`}></i>
                  </div>
                  <div>
                    <h4 style={{color: 'white', fontSize: '1.1rem', fontWeight: '600', marginBottom: '5px'}}>
                      {resource.title}
                    </h4>
                    <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0}}>
                      {resource.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Side */}
          <div style={{textAlign: 'center'}}>
            <div style={{
              position: 'relative',
              display: 'inline-block',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              <img 
                src="/Archive.png" 
                alt="Study Resources"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(45deg, rgba(27,90,150,0.2), transparent)',
                borderRadius: '20px'
              }}></div>
            </div>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 0 !important;
          }
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          h2 {
            font-size: 2rem !important;
          }
          img {
            max-width: 300px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  )
}