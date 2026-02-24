'use client'
import { useEffect } from 'react'

export default function Advantages() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.advantage-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('flip-in')
              }, index * 400)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.advantages-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes flipIn {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(90deg) translateX(50px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateX(0);
          }
        }
        .advantage-card {
          opacity: 0;
          transform: perspective(1000px) rotateY(90deg) translateX(50px);
        }
        .advantage-card.flip-in {
          animation: flipIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .advantage-card {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1977f3, #00d4ff) border-box;
          border: 3px solid transparent;
          border-radius: 20px;
          padding: 30px;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
        }
        .advantage-card::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(25, 119, 243, 0.1) 0%, transparent 70%);
          transition: all 0.6s;
          transform: scale(0);
        }
        .advantage-card:hover::after {
          transform: scale(1);
        }
        .advantage-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(25, 119, 243, 0.3);
        }
        .advantage-icon {
          font-size: 50px;
          margin-bottom: 20px;
          display: inline-block;
          transition: all 0.4s;
        }
        .advantage-card:hover .advantage-icon {
          transform: rotateY(360deg) scale(1.2);
        }
      `}</style>
      <section className="advantages-section py-12 bg-white">
        <div className="container mx-auto px-4" style={{maxWidth: '1140px'}}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{color: '#1977f3'}}>IMA Jodhpur Classes Advantages</h3>
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
                <div className="advantage-card">
                  <span className="advantage-icon" style={{color:'#1977f3'}}><i className="fa fa-user"></i></span>
                  <h5 className="font-bold mb-2">Every Student is Unique</h5>
                  <p className="text-sm text-gray-600">We believe that every student learns differently and we work towards helping them learn better.</p>
                </div>
                <div className="advantage-card">
                  <span className="advantage-icon" style={{color:'#10b981'}}><i className="fa fa-video-camera"></i></span>
                  <h5 className="font-bold mb-2">They learn with videos, concepts, tests & stories</h5>
                  <p className="text-sm text-gray-600">Whether they want to start a new chapter or revise an old one, students learn at their own pace.</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="advantage-card">
                  <span className="advantage-icon" style={{color:'#f59e0b'}}><i className="fa fa-road"></i></span>
                  <h5 className="font-bold mb-2">Learn better with individual learning paths</h5>
                  <p className="text-sm text-gray-600">We provide multiple types of courses according to each students needs, they can choose courses according to his requirment.</p>
                </div>
                <div className="advantage-card">
                  <span className="advantage-icon" style={{color:'#8b5cf6'}}><i className="fa fa-line-chart"></i></span>
                  <h5 className="font-bold mb-2">Students experience all round academic growth</h5>
                  <p className="text-sm text-gray-600">Our four modules work seam-lessly to boost every student's all-round academic growth, helping them learn better.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
