export default function TestSeries() {
  const testSeries = [
    {
      image: "/Test Paper.png",
      title: "Weekly Tests",
      description: "Regular weekly assessments to track progress and identify improvement areas"
    },
    {
      image: "/Test Paper1.png", 
      title: "Chapter Tests",
      description: "Topic-wise tests after completion of each chapter for concept reinforcement"
    },
    {
      image: "/Test Paper2.png",
      title: "Mock Exams",
      description: "Full-length mock tests simulating actual JEE/NEET exam conditions"
    }
  ]

  return (
    <section style={{padding: '80px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
            Test Series & Assessment
          </h2>
          <div style={{width: '80px', height: '4px', background: '#1B5A96', margin: '0 auto 20px'}}></div>
          <p style={{fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>
            Comprehensive testing system to evaluate and enhance your preparation
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
          {testSeries.map((test, index) => (
            <div 
              key={index}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(27, 90, 150, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{height: '200px', overflow: 'hidden'}}>
                <img 
                  src={test.image} 
                  alt={test.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{padding: '25px'}}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1B5A96',
                  marginBottom: '15px'
                }}>
                  {test.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {test.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <a 
            href="/course-details/aits"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '15px 30px',
              background: '#1B5A96',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#0d4a7a'}
            onMouseLeave={(e) => e.target.style.background = '#1B5A96'}
          >
            View All Test Series
            <svg style={{marginLeft: '10px', width: '20px', height: '20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 0 !important;
          }
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          h2 {
            font-size: 2rem !important;
          }
          h3 {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </section>
  )
}