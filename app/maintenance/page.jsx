export const metadata = {
  title: 'IMA Jodhpur - Website Shutdown',
  description: 'This website has been temporarily shut down.',
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
            background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />

          <div style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '600px',
            width: '100%',
          }}>
            {/* Shutdown Icon */}
            <div style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 40px',
              borderRadius: '50%',
              border: '3px solid rgba(239,68,68,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(239,68,68,0.05)',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" y1="2" x2="12" y2="12" />
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
              Website Shut Down
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 40px',
              lineHeight: 1.6,
              fontWeight: 400,
            }}>
              This website has been permanently taken offline due to non-payment of development services.
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
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span style={{ color: '#f59e0b', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Notice
                </span>
              </div>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '15px',
                lineHeight: 1.7,
                margin: 0,
              }}>
                All services including the website, APIs, and associated features have been suspended. To restore access, please clear all outstanding development payments.
              </p>
            </div>

            {/* Contact */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '20px',
            }}>
              <p style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '13px',
                margin: '0 0 8px',
                fontWeight: 500,
              }}>
                Developer Contact
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '15px',
                margin: 0,
                fontWeight: 600,
              }}>
                TechRover Development Team
              </p>
            </div>

            {/* Footer */}
            <p style={{
              marginTop: '48px',
              color: 'rgba(255,255,255,0.2)',
              fontSize: '12px',
              fontWeight: 500,
            }}>
              © {new Date().getFullYear()} • Services suspended until payment clearance
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
