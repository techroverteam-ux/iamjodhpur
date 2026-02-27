export default function Advantages() {
  return (
    <section className="advantages-section">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="advantages-title">IMA Jodhpur Classes Advantages</h2>
          <p className="advantages-intro">
            IMA Jodhpur is India's Premier institution established with the sole aim to initiate, enable and empower individuals to grow up to be extraordinary Teachers. IMA Jodhpur invites students who are prepared to interface their experience and diverse backgrounds with our high-end educational programmes.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Left Column */}
          <div className="space-y-4">
            <div className="feature-card">
              <div className="advantage-icon mb-2">
                <i className="fa fa-graduation-cap text-blue-600" style={{fontSize: '3.5rem'}}></i>
              </div>
              <h3 className="feature-title">Start learning with IMA Jodhpur Classes</h3>
              <p className="feature-description">
                Get unlimited access of structured Live & Recorded Lecture, Test & advanced conceptual study material.
              </p>
              <ul className="feature-list">
                <li>Classes by Expert faculty members</li>
                <li>Compile & Customize your study stuff in Profile</li>
                <li>Academic & Motivational Seminar</li>
                <li>Free Stuff - Study material, eBooks, eDPPS etc</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="advantage-icon mb-2">
                <i className="fa fa-user text-green-600" style={{fontSize: '3.5rem'}}></i>
              </div>
              <h3 className="feature-title">Every Student is Unique</h3>
              <p className="feature-description">
                We believe that every student learns differently and we work towards helping them learn better.
              </p>
              <p className="feature-description">
                They learn with videos, concepts, tests & stories
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="feature-card">
              <div className="advantage-icon mb-2">
                <i className="fa fa-clock-o text-purple-600" style={{fontSize: '3.5rem'}}></i>
              </div>
              <h3 className="feature-title">Whether they want to start a new chapter or revise an old one</h3>
              <p className="feature-description">
                Students learn at their own pace.
              </p>
            </div>

            <div className="feature-card">
              <div className="advantage-icon mb-2">
                <i className="fa fa-road text-orange-600" style={{fontSize: '3.5rem'}}></i>
              </div>
              <h3 className="feature-title">Learn better with individual learning paths</h3>
              <p className="feature-description">
                We provide multiple types of courses according to each students needs, they can choose courses according to his requirment.
              </p>
            </div>

            <div className="feature-card">
              <div className="advantage-icon mb-2">
                <i className="fa fa-line-chart text-teal-600" style={{fontSize: '3.5rem'}}></i>
              </div>
              <h3 className="feature-title">Students experience all round academic growth</h3>
              <p className="feature-description">
                Our four modules work seam-lessly to boost every student's all-round academic growth, helping them learn better.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}