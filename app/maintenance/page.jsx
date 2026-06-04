export const metadata = {
  title: 'IMA Jodhpur - Under Maintenance',
  description: 'This website is currently under maintenance.',
}

export default function MaintenancePage() {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'Inter, sans-serif' }}>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background grid effect */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />

          {/* Glow effect */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />

          <div style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '600px',
            width: '100%',
          }}>
            {/* Maintenance Icon */}
            <div style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 40px',
              borderRadius: '50%',
              border: '3px solid rgba(59,130,246,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(59,130,246,0.05)',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>

            {/* Main heading */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '0 0 16px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              Under Maintenance
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 40px',
              lineHeight: 1.6,
              fontWeight: 400,
            }}>
              We are currently performing scheduled maintenance to improve your experience. The website will be back online shortly.
            </p>

            {/* Info card */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span style={{ color: '#f59e0b', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Temporary Downtime
                </span>
              </div>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '15px',
                lineHeight: 1.7,
                margin: 0,
              }}>
                Our team is working on essential updates and improvements. We apologize for the inconvenience and appreciate your patience. Please check back soon.
              </p>
            </div>

            {/* Footer */}
            <p style={{
              marginTop: '48px',
              color: 'rgba(255,255,255,0.2)',
              fontSize: '12px',
              fontWeight: 500,
            }}>
              © {new Date().getFullYear()} IMA Jodhpur • We'll be back soon
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
