import Image from 'next/image'

export default function Programs() {
  return (
    <section className="py-0" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)', paddingTop: '0'}}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* JEE Program Card */}
          <div className="program-card" style={{background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}>
            <div style={{width: '100%', height: '200px', position: 'relative', overflow: 'hidden'}}>
              <Image 
                src="/Class Room1.jpeg" 
                alt="JEE Preparation" 
                fill
                style={{objectFit: 'cover'}}
                className="program-image"
              />
            </div>
            <div className="program-content" style={{padding: '1.5rem'}}>
              <div className="program-badge" style={{display: 'inline-block', background: '#1B5A96', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', marginBottom: '1rem'}}>JEE</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{color: 'var(--primary-medium)'}}>JEE (Main+Advanced)</h3>
              <p className="text-gray-600" style={{fontSize: '14px', lineHeight: '1.5'}}>
                At IIT Medical Academy (IMA), our JEE program is designed to build strong academic fundamentals and develop the competitive skills required for JEE Main and JEE Advanced.
              </p>
            </div>
          </div>

          {/* NEET Program Card */}
          <div className="program-card" style={{background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}>
            <div style={{width: '100%', height: '200px', position: 'relative', overflow: 'hidden'}}>
              <Image 
                src="/Class Room2.jpeg" 
                alt="NEET Preparation" 
                fill
                style={{objectFit: 'cover'}}
                className="program-image"
              />
            </div>
            <div className="program-content" style={{padding: '1.5rem'}}>
              <div className="program-badge" style={{display: 'inline-block', background: '#1B5A96', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', marginBottom: '1rem'}}>NEET</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{color: 'var(--primary-medium)'}}>NEET Preparation</h3>
              <p className="text-gray-600" style={{fontSize: '14px', lineHeight: '1.5'}}>
                NEET preparation is designed with a complete academic system that builds strong concepts from the beginning and gradually upgrades students to the actual NEET level.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
