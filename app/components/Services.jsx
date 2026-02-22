export default function Services() {
  const services = [
    {
      icon: "📚",
      title: "Continuous Medical Education",
      description: "Regular CME programs, workshops, and seminars to keep our members updated with latest medical advancements"
    },
    {
      icon: "🤝",
      title: "Professional Networking",
      description: "Connect with fellow medical professionals, share knowledge, and build lasting professional relationships"
    },
    {
      icon: "⚖️",
      title: "Legal Support",
      description: "Expert legal guidance and support for medical practitioners in professional matters"
    },
    {
      icon: "🏥",
      title: "Healthcare Advocacy",
      description: "Representing medical professionals and advocating for better healthcare policies and practices"
    },
    {
      icon: "📰",
      title: "Medical Publications",
      description: "Access to journals, research papers, and medical literature for continuous learning"
    },
    {
      icon: "🎯",
      title: "Career Development",
      description: "Guidance and resources for professional growth and career advancement opportunities"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive support and resources for medical professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
