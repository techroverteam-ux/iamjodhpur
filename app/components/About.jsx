import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About IMA Jodhpur</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Indian Medical Association Jodhpur Branch is dedicated to promoting medical excellence and serving the healthcare community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800" 
              alt="Medical professionals"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              IMA Jodhpur is committed to advancing the science and art of medicine, promoting public health, and fostering the professional development of our members.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We strive to create a strong network of medical professionals, facilitate continuous medical education, and advocate for better healthcare policies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Members</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
