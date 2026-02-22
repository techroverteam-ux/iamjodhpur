import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/2667795421_ima%20logo.png",
      title: "✦ Mess Facility",
      text: "IMA provides mess facility to support students' daily routine and health during NEET/JEE preparation. We maintain proper hygiene and cleanliness, ensuring students get a comfortable and healthy food environment. Regular meals help students stay energetic and maintain a stable schedule without interruptions. A well-managed mess system saves time and allows students to remain fully focused on studies, revision, and test preparation."
    },
    {
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/1798503420_ima%20logo.png",
      title: "✦ Hostel Facility",
      text: "IMA offers a well-managed hostel facility designed for students who want a fully focused preparation environment. We provide separate hostel facilities for both boys and girls, ensuring comfort, safety, and a disciplined academic routine. Students can choose AC or Non-AC rooms as per their preference. Hostel life helps students stay connected to a fixed study schedule, improves self-discipline, and consistent improvement throughout NEET/JEE preparation."
    },
    {
      image: "https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/menus/icon/5931184419_ima%20logo.png",
      title: "✦ Transport Facility",
      text: "IMA provides a dedicated transport facility for Jodhpur-based students to make daily travel comfortable and stress-free. It helps students reach the institute on time, maintain regular attendance, and follow a disciplined routine throughout the academic session. With a smooth pickup-drop schedule, students save time and energy, which supports better consistency and academic performance. Parents also feel assured knowing the student's daily commute is properly managed."
    }
  ]

  return (
    <section className="py-12" style={{background:'#f3f4f6'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">What students say</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <Image src={item.image} width={80} height={80} alt="Testimonial" className="rounded-full" />
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl">
                <i className="fa fa-quote-left text-2xl text-gray-400 mb-4 block"></i>
                <p className="text-gray-700 text-justify">{item.text}</p>
              </div>
              <h4 className="font-bold text-center mt-4">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
