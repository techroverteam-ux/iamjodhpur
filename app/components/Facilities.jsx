import { TransportIcon, HostelIcon, MessIcon } from '../../lib/icons'

export default function Facilities() {
  const facilities = [
    {
      icon: TransportIcon,
      title: "Transport Facility",
      link: "/facilities#transport",
      type: "react-icon"
    },
    {
      icon: "/hostel.png", 
      title: "Hostel Facility",
      link: "/facilities#hostel",
      type: "image"
    },
    {
      icon: MessIcon, 
      title: "Mess Facility",
      link: "/facilities#mess",
      type: "react-icon"
    }
  ]

  return (
    <section style={{padding: '60px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)'}}>
      <div style={{textAlign: 'center', marginBottom: '50px', padding: '0 20px'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#1B5A96', marginBottom: '20px'}}>
          Our Facilities
        </h2>
        <div style={{width: '100px', height: '4px', background: '#1B5A96', margin: '0 auto 20px', borderRadius: '2px'}}></div>
        <p style={{fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>
          World-class facilities designed to support your academic journey
        </p>
      </div>

      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {facilities.map((facility, index) => (
            <a 
              key={index}
              href={facility.link}
              style={{
                display: 'block',
                background: 'white',
                padding: '2.5rem',
                borderRadius: '15px',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)'
                e.target.style.boxShadow = '0 15px 40px rgba(27, 90, 150, 0.15)'
                e.target.style.borderColor = '#1B5A96'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
                e.target.style.borderColor = 'transparent'
              }}
            >
              {facility.type === "image" ? (
                <img 
                  src={facility.icon}
                  alt={facility.title}
                  style={{
                    width: '60px',
                    height: '60px',
                    marginBottom: '1.5rem',
                    display: 'block',
                    margin: '0 auto 1.5rem auto'
                  }}
                />
              ) : facility.type === "react-icon" ? (
                <facility.icon 
                  style={{
                    fontSize: '3.5rem',
                    color: '#1B5A96',
                    marginBottom: '1.5rem',
                    display: 'block',
                    margin: '0 auto 1.5rem auto'
                  }}
                />
              ) : (
                <div 
                  style={{
                    fontSize: '3.5rem',
                    color: '#1B5A96',
                    marginBottom: '1.5rem',
                    display: 'block'
                  }}
                >
                  {facility.icon}
                </div>
              )}
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#1B5A96',
                margin: '0'
              }}>
                {facility.title}
              </h3>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          a {
            padding: 2rem !important;
          }
          
          div[style*="font-size: 3.5rem"] {
            font-size: 3rem !important;
          }
          
          h3 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  )
}