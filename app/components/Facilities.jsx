export default function Facilities() {
  const facilities = [
    {
      image: "/Tranasport.png",
      title: "Transport Facility",
      description: "Safe and reliable transportation for students with dedicated pickup and drop services across Jodhpur."
    },
    {
      image: "/Transport Facility.png", 
      title: "Hostel Facility",
      description: "Comfortable and secure hostel accommodation with separate facilities for boys and girls."
    },
    {
      image: "/Transport Facility.png", 
      title: "Mess Facility",
      description: "Hygienic and nutritious meals with proper dining facilities to support students' health and energy."
    }
  ]

  return (
    <section style={{width: '100%', minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '60px 0'}}>
      <div style={{textAlign: 'center', marginBottom: '50px', padding: '0 20px'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
          Our Facilities
        </h2>
        <div style={{width: '80px', height: '4px', background: '#1B5A96', margin: '0 auto 20px'}}></div>
        <p style={{fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>
          World-class facilities designed to support your academic journey
        </p>
      </div>

      <div style={{width: '100%', padding: '0'}}>
        {facilities.map((facility, index) => (
          <div 
            key={index}
            style={{
              width: '100%',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              padding: '40px 0',
              background: index % 2 === 0 ? 'rgba(255,255,255,0.5)' : 'transparent'
            }}
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                gap: '60px',
                padding: '0 40px',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
            >
              <div style={{flex: '0 0 500px'}}>
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              <div style={{flex: 1}}>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1B5A96',
                  marginBottom: '20px'
                }}>
                  {facility.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#4a5568',
                  textAlign: 'justify'
                }}>
                  {facility.description}
                </p>
                <a 
                  href="/facilities" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    marginTop: '30px',
                    padding: '12px 24px',
                    background: '#1B5A96',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#0d4a7a'}
                  onMouseLeave={(e) => e.target.style.background = '#1B5A96'}
                >
                  Learn More
                  <svg style={{marginLeft: '8px', width: '16px', height: '16px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            min-height: auto !important;
            padding: 40px 0 !important;
          }
          div[style*="flex"] {
            flex-direction: column !important;
            gap: 30px !important;
            padding: 0 20px !important;
          }
          div[style*="flex: 0 0 500px"] {
            flex: none !important;
            width: 100% !important;
          }
          img {
            height: 200px !important;
          }
          h3 {
            font-size: 1.8rem !important;
            text-align: center !important;
          }
          p {
            font-size: 1rem !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  )
}