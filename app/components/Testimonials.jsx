'use client'
import { useEffect } from 'react'

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateX(0) scale(1)'
              }, index * 400)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.testimonials-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .testimonial-card {
          opacity: 0;
          transform: translateX(100px) scale(0.9);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1977f3, #00d4ff, #ff6b9d) border-box;
          border: 3px solid transparent;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(25, 119, 243, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s;
        }
        .testimonial-card:hover::before {
          left: 100%;
        }
        .testimonial-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 15px 40px rgba(25, 119, 243, 0.4);
        }
        .testimonial-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 4px solid #1977f3;
          padding: 5px;
          background: white;
        }
        .testimonial-content {
          background: linear-gradient(135deg, #f3efef, #e8f4ff);
          border-left: 4px solid #1977f3;
        }
      `}</style>
      <section className="testimonials-section py-12" style={{background:'#f3f4f6'}}>
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold" style={{color: '#1977f3'}}>What students say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card bg-white p-6">
                <div className="flex justify-center mb-4">
                  <img src={item.image} alt="Testimonial" className="testimonial-img" />
                </div>
                <div className="testimonial-content p-6 rounded-2xl">
                  <i className="fa fa-quote-left text-2xl mb-4 block" style={{color: '#1977f3'}}></i>
                  <p className="text-gray-700 text-justify">{item.text}</p>
                </div>
                <h4 className="font-bold text-center mt-4" style={{color: '#1977f3'}}>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
