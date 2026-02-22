import Image from 'next/image'

export default function Events() {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      date: "15 Dec 2024",
      title: "Annual Medical Conference 2024",
      description: "Join us for our flagship annual conference featuring renowned speakers and latest medical research",
      location: "Jodhpur Convention Center"
    },
    {
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
      date: "22 Dec 2024",
      title: "CME Workshop on Cardiology",
      description: "Comprehensive workshop on latest advances in cardiovascular medicine and treatment protocols",
      location: "IMA Jodhpur Hall"
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600",
      date: "05 Jan 2025",
      title: "Health Awareness Camp",
      description: "Free health checkup and awareness program for the community with expert consultations",
      location: "Multiple Locations"
    }
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events, conferences, and medical programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="relative h-48">
                <Image 
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {event.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  {event.location}
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
