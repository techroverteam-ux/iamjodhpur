export default function Advantages() {
  return (
    <section className="advantages-section">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{color: '#0B4F8A'}}>IMA Jodhpur Classes Advantages</h2>
          <p className="text-gray-600 mb-6" style={{fontSize: '16px', lineHeight: '1.6'}}>
            IMA Jodhpur is India's Premier institution established with the sole aim to initiate, enable and empower individuals to grow up to be extraordinary Teachers. IMA Jodhpur invites students who are prepared to interface their experience and diverse backgrounds with our high-end educational programmes.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Left Column */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="advantage-icon mb-2">
                <i className="fa fa-graduation-cap" style={{fontSize: '3.5rem', color: 'var(--primary-medium)'}}></i>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#333'}}>Start learning with IMA Jodhpur Classes</h3>
              <p className="text-gray-600 mb-3" style={{fontSize: '14px', lineHeight: '1.5'}}>
                Get unlimited access of structured Live & Recorded Lecture, Test & advanced conceptual study material.
              </p>
              <ul className="text-gray-600" style={{fontSize: '13px', lineHeight: '1.4'}}>
                <li>Classes by Expert faculty members</li>
                <li>Compile & Customize your study stuff in Profile</li>
                <li>Academic & Motivational Seminar</li>
                <li>Free Stuff - Study material, eBooks, eDPPS etc</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="advantage-icon mb-2">
                <i className="fa fa-user" style={{fontSize: '3.5rem', color: 'var(--primary-medium)'}}></i>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#333'}}>Every Student is Unique</h3>
              <p className="text-gray-600 mb-2" style={{fontSize: '14px', lineHeight: '1.5'}}>
                We believe that every student learns differently and we work towards helping them learn better.
              </p>
              <p className="text-gray-600" style={{fontSize: '14px', lineHeight: '1.5'}}>
                They learn with videos, concepts, tests & stories
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="advantage-icon mb-2">
                <i className="fa fa-clock-o" style={{fontSize: '3.5rem', color: 'var(--primary-medium)'}}></i>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#333'}}>Whether they want to start a new chapter or revise an old one</h3>
              <p className="text-gray-600" style={{fontSize: '14px', lineHeight: '1.5'}}>
                Students learn at their own pace.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="advantage-icon mb-2">
                <i className="fa fa-road" style={{fontSize: '3.5rem', color: 'var(--primary-medium)'}}></i>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#333'}}>Learn better with individual learning paths</h3>
              <p className="text-gray-600" style={{fontSize: '14px', lineHeight: '1.5'}}>
                We provide multiple types of courses according to each students needs, they can choose courses according to his requirment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="advantage-icon mb-2">
                <i className="fa fa-line-chart" style={{fontSize: '3.5rem', color: 'var(--primary-medium)'}}></i>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#333'}}>Students experience all round academic growth</h3>
              <p className="text-gray-600" style={{fontSize: '14px', lineHeight: '1.5'}}>
                Our four modules work seam-lessly to boost every student's all-round academic growth, helping them learn better.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
