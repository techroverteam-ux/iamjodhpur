export default function Advantages() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">IMA Jodhpur Classes Advantages</h3>
            <p className="text-gray-700 mb-6">
              IMA Jodhpur is India's Premier institution established with the sole aim to initiate, enable and empower individuals to grow up to be extraordinary Teachers. IMA Jodhpur invites students who are prepared to interface their experience and diverse backgrounds with our high-end educational programmes.
            </p>
            <ul className="space-y-3">
              <li className="border-l-4 pl-4" style={{borderColor:'#1977f3'}}>Start learning with IMA Jodhpur Classes Get unlimited access of structured Live & Recorded Lecture, Test & advanced conceptual study material.</li>
              <li className="border-l-4 pl-4" style={{borderColor:'#1977f3'}}>Classes by Expert faculty members</li>
              <li className="border-l-4 pl-4" style={{borderColor:'#1977f3'}}>Compile & Customize your study stuff in Profile</li>
              <li className="border-l-4 pl-4" style={{borderColor:'#1977f3'}}>Academic & Motivational Seminar</li>
              <li className="border-l-4 pl-4" style={{borderColor:'#1977f3'}}>Free Stuff - Study material, eBooks, eDPPS etc</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-blue-100 p-6 rounded-lg">
                <span className="text-5xl mb-4 block" style={{color:'#1977f3'}}><i className="fa fa-user"></i></span>
                <h5 className="font-bold mb-2">Every Student is Unique</h5>
                <p className="text-sm text-gray-600">We believe that every student learns differently and we work towards helping them learn better.</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <span className="text-5xl mb-4 block" style={{color:'#10b981'}}><i className="fa fa-user"></i></span>
                <h5 className="font-bold mb-2">They learn with videos, concepts, tests & stories</h5>
                <p className="text-sm text-gray-600">Whether they want to start a new chapter or revise an old one, students learn at their own pace.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-yellow-100 p-6 rounded-lg">
                <span className="text-5xl mb-4 block" style={{color:'#f59e0b'}}><i className="fa fa-user"></i></span>
                <h5 className="font-bold mb-2">Learn better with individual learning paths</h5>
                <p className="text-sm text-gray-600">We provide multiple types of courses according to each students needs, they can choose courses according to his requirment.</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <span className="text-5xl mb-4 block" style={{color:'#8b5cf6'}}><i className="fa fa-user"></i></span>
                <h5 className="font-bold mb-2">Students experience all round academic growth</h5>
                <p className="text-sm text-gray-600">Our four modules work seam-lessly to boost every student's all-round academic growth, helping them learn better.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
