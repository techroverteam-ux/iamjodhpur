export default function Offerings() {
  const offerings = [
    'Live Online Interactive Classes',
    'Online Test Series and Feedback', 
    'Procure Printed SMP & Exercise Sheets',
    'Free Stuff- Study Materials, E-Books, PDF etc',
    'Live Online Doubt Removal',
    'Recorded Video Lectures',
    'Daily Dose - Important Questions, Quizes & Tips',
    'Live Feed- Access to Important Videos & Questions'
  ]

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes backgroundMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .bg-animate {
          animation: backgroundMove 20s ease-in-out infinite;
        }
        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
      
      <section 
        className="py-16 relative overflow-hidden" 
        style={{
          backgroundImage: `url('/images/a.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f8fafc',
          minHeight: '100vh'
        }}
      >
        
        {/* Remove overlay completely */}

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-5xl font-bold mb-4 text-white" style={{fontFamily: 'Poppins, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              What IMA Jodhpur Offers?
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-white" style={{fontFamily: 'Inter, sans-serif', textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
              IMA Jodhpur is a technology based online learning initiative by IMA Jodhpur. Add power of coaching to your online learning with IMA Jodhpur.
            </p>
          </div>

          {/* Systematic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 slide-in"
                style={{
                  borderLeftColor: 'var(--primary-medium)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4 hover:scale-110 transition-transform"
                    style={{background: 'linear-gradient(135deg, var(--primary-medium), var(--primary-bright))'}}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight" style={{fontFamily: 'Poppins, sans-serif', color: 'var(--text-dark)'}}>
                    {offering}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}