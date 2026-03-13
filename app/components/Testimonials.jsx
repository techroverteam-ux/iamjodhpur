'use client'
import { QuoteIcon } from '../../lib/icons'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "JEE Main",
      text: "IMA Jodhpur helped me achieve my dream of getting into IIT. The faculty is excellent and the study material is comprehensive.",
      rating: 5
    },
    {
      name: "Priya Patel",
      course: "NEET",
      text: "The personalized attention and regular tests helped me improve my performance significantly. Highly recommended!",
      rating: 5
    },
    {
      name: "Arjun Singh",
      course: "Pre-Foundation",
      text: "Starting early with IMA's pre-foundation course gave me a strong base for competitive exams.",
      rating: 5
    }
  ]

  return (
    <section className="py-16" style={{background: '#f8f9fa'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#1B5A96'}}>What Our Students Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <QuoteIcon className="text-sm mb-2 block" style={{color: '#4D94FF'}} size={20} />
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <h4 className="font-bold" style={{color: '#1B5A96'}}>{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}