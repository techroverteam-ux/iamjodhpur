'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showToastMessage('Please fix the errors below', 'error')
      return
    }
    
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]')
    const newEnquiry = { ...formData, id: Date.now(), date: new Date().toLocaleDateString() }
    enquiries.push(newEnquiry)
    localStorage.setItem('enquiries', JSON.stringify(enquiries))
    
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setErrors({})
    showToastMessage('Thank you! Your message has been sent successfully. We will contact you soon!')
    
    setTimeout(() => setSubmitted(false), 5000)
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-slide').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide {
          opacity: 0;
        }
        .animate-slide.slide-in.left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide.slide-in.right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide.slide-in.up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          transition: all 0.4s;
          box-shadow: 0 4px 15px rgba(25, 119, 243, 0.1);
          position: relative;
          overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1977f3, #00d4ff);
        }
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(25, 119, 243, 0.25);
        }
        .icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1977f3, #00d4ff);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          box-shadow: 0 8px 20px rgba(25, 119, 243, 0.3);
        }
        .advantage-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px;
          background: white;
          border-radius: 10px;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          border-left: 4px solid #1977f3;
        }
        .advantage-item:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 15px rgba(25, 119, 243, 0.2);
        }
      `}</style>
      
      <Navbar />
      
      <section style={{background: 'linear-gradient(135deg, #0a1628 0%, #1977f3 100%)', padding: '40px 0', color: 'white'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="text-center animate-slide up">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-base">We're here to help you succeed</p>
          </div>
        </div>
      </section>

      <section style={{padding: '40px 0', background: '#f8f9fa'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="contact-card animate-slide left">
              <div className="text-center">
                <div className="icon-circle">
                  <i className="fa fa-map-marker" style={{fontSize: '30px', color: 'white'}}></i>
                </div>
                <h4 className="font-bold mb-2 text-base" style={{color: '#1977f3'}}>Address</h4>
                <p className="text-gray-700 text-sm">Pal Rd, near Barkatullah Khan Stadium, Shastri Nagar, Jodhpur, Rajasthan 342003</p>
              </div>
            </div>
            
            <div className="contact-card animate-slide up" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <div className="icon-circle">
                  <i className="fa fa-phone" style={{fontSize: '30px', color: 'white'}}></i>
                </div>
                <h4 className="font-bold mb-2 text-base" style={{color: '#1977f3'}}>Phone Number</h4>
                <p className="text-gray-700 text-sm">+91 9571037333</p>
              </div>
            </div>
            
            <div className="contact-card animate-slide right" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="icon-circle">
                  <i className="fa fa-envelope" style={{fontSize: '30px', color: 'white'}}></i>
                </div>
                <h4 className="font-bold mb-2 text-base" style={{color: '#1977f3'}}>Email Address</h4>
                <p className="text-gray-700 text-sm">ceo.iitacademy@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="animate-slide left" style={{background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
              <h3 className="text-2xl font-bold mb-3" style={{color: '#1977f3', borderBottom: '3px solid #1977f3', paddingBottom: '10px', display: 'inline-block'}}>IMA Jodhpur Classroom Advantages</h3>
              <p className="text-gray-700 mb-4 text-sm" style={{lineHeight: '1.6', marginTop: '20px'}}>
                IMA Jodhpur Classroom Classes offer a disciplined and focused learning environment where students prepare with consistency and clarity. Offline teaching ensures direct interaction, better concept understanding, quicker doubt resolution, and stronger academic control.
              </p>
              <ul className="text-gray-600 space-y-2" style={{fontSize: '15px', lineHeight: '1.5'}}>
                <li>• Personal Attention in Every Class</li>
                <li>• Better Concept Clarity</li>
                <li>• Daily Doubt Support</li>
                <li>• Discipline and Consistent Routine</li>
              </ul>
            </div>

            <div className="animate-slide right">
              <div style={{background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#1977f3', borderBottom: '3px solid #1977f3', paddingBottom: '10px', display: 'inline-block'}}>Send us a Message</h3>
                {submitted && (
                  <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{fontSize: '15px'}}>Full Name *</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                      style={{fontSize: '16px'}}
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{fontSize: '15px'}}>Email Address *</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                      style={{fontSize: '16px'}}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{fontSize: '15px'}}>Phone Number *</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                      style={{fontSize: '16px'}}
                      placeholder="Enter 10-digit phone number"
                      maxLength="10"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{fontSize: '15px'}}>Message *</label>
                    <textarea 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                      style={{fontSize: '16px'}}
                      placeholder="Your message"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold" style={{fontSize: '16px'}}>
                    Send Message
                  </button>
                </form>
              </div>
          <div className="animate-slide up">
            <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#1977f3'}}>Find Us Here</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.123456789!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4444444444%3A0x1111111111111111!2sIMA%20Jodhpur%20-%20IIT%20Academy%20Medical%20Academy%2C%20MAIN%2C%20Pal%20Rd%2C%20near%20BARKATULLAH%20KHAN%20STADIUM%2C%20Shastri%20Nagar%2C%20Jodhpur%2C%20Rajasthan%20342003!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%" 
                height="350" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div className={`p-4 rounded-lg shadow-lg ${toastMessage.includes('error') || toastMessage.includes('fix') ? 'bg-red-500' : 'bg-green-500'} text-white`}>
            <div className="flex items-center">
              <i className={`fa ${toastMessage.includes('error') || toastMessage.includes('fix') ? 'fa-exclamation-circle' : 'fa-check-circle'} mr-2`}></i>
              <span className="text-sm font-medium">{toastMessage}</span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
