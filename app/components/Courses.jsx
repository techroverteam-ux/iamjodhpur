import Image from 'next/image'

export default function Courses() {
  const courses = [
    {
      id: 42147,
      title: "Pre Foundation Course",
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/bundle_management/course/236614642147_Gemini_Generated_Image_xtokhaxtokhaxtok.png",
      price: "Free",
      validity: "354 Days"
    },
    {
      id: 42161,
      title: "NEET Preparation",
      image: "https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png",
      price: "Free",
      validity: "365 Days"
    },
    {
      id: 42286,
      title: "JEE (Mains+Advance)",
      image: "https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png",
      price: "Free",
      validity: "365 Days"
    },
    {
      id: 42385,
      title: "All India Test Series (AITS)",
      image: "https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/3520795826_both.png",
      price: "Free",
      validity: "365 Days"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'#1977f3'}}>Our Popular Courses</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2" style={{borderBottom:'2px solid #1977f3'}}>
              <img src={course.image} alt={course.title} className="w-full h-40 object-contain" />
              <div className="p-4">
                <h6 className="font-bold text-gray-800 mb-2">{course.title}</h6>
                <h6 className="text-lg font-semibold mb-2">{course.price}</h6>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <i className="fa fa-calendar mr-2"></i> Validity {course.validity}
                </div>
                <div className="flex gap-2">
                  <a href="/course-details" className="flex-1 py-2 rounded text-white font-semibold text-center" style={{background:'#1977f3'}}>Explore</a>
                  <button className="flex-1 py-2 rounded text-white font-semibold" style={{background:'#1977f3'}}>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
