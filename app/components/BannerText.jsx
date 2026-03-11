export default function BannerText() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{color: 'var(--primary-medium)'}}>
          IMA JODHPUR- 26 Years of Trusted Guidance, Proven Results
        </h1>
        <p className="text-center max-w-4xl mx-auto text-gray-600 mb-8" style={{fontSize: '16px', lineHeight: '1.6'}}>
          (Trusted by generations, driven by discipline and personal mentorship—guiding dreams with the right direction and delivering consistent results in NEET & JEE.)
        </p>
        
        {/* Classroom Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
          <div className="classroom-image-container">
            <img 
              src="/Class Room1.jpeg" 
              alt="IMA Classroom Environment 1" 
              className="classroom-image"
            />
          </div>
          <div className="classroom-image-container">
            <img 
              src="/Class Room2.jpeg" 
              alt="IMA Classroom Environment 2" 
              className="classroom-image"
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .classroom-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .classroom-image-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(27, 90, 150, 0.15);
        }
        
        .classroom-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .classroom-image:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .classroom-image {
            height: 200px;
          }
        }
      `}</style>
    </section>
  )
}
