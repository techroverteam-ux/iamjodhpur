import Image from 'next/image'

export default function Programs() {
  return (
    <section className="py-16" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)'}}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* JEE Program Card */}
          <div className="program-card">
            <Image 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop" 
              alt="JEE Preparation" 
              width={400} 
              height={200} 
              className="program-image"
            />
            <div className="program-content">
              <div className="program-badge">JEE</div>
              <h3 className="program-title">JEE (Main+Advanced)</h3>
              <p className="program-description">
                At IIT Medical Academy (IMA), our JEE program is designed to build strong academic fundamentals and develop the competitive skills required for JEE Main and JEE Advanced.
              </p>
            </div>
          </div>

          {/* NEET Program Card */}
          <div className="program-card">
            <Image 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=400&fit=crop" 
              alt="NEET Preparation" 
              width={400} 
              height={200} 
              className="program-image"
            />
            <div className="program-content">
              <div className="program-badge">NEET</div>
              <h3 className="program-title">NEET Preparation</h3>
              <p className="program-description">
                NEET preparation is designed with a complete academic system that builds strong concepts from the beginning and gradually upgrades students to the actual NEET level.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
