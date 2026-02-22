import Image from 'next/image'

export default function Offerings() {
  return (
    <section className="py-12" style={{background:'#f3f4f6'}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">What IMA Jodhpur Offers?</h3>
            <p className="text-gray-700 mb-6">
              IMA Jodhpur is a technology based online learning initiative by IMA Jodhpur. Add power of coaching to your online learning with IMA Jodhpur.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Live Online Interactive Classes</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Online Test Series and Feedback</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Procure Printed SMP & Exercise Sheets</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Free Stuff- Study Materials, E-Books, PDF etc</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Live Online Doubt Removal</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Recorded Video Lectures</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Daily Dose - Important Questions, Quizes & Tips</span>
                </li>
                <li className="flex items-start">
                  <i className="fa fa-check text-white rounded-full p-1 mr-2 mt-1" style={{background:'#1977f3'}}></i>
                  <span>Live Feed- Access to Important Videos & Questions</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="https://imajodhpur.com/assets/a.webp" width={500} height={400} alt="Education" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
