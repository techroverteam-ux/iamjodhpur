'use client'
import { GraduationIcon, UserIcon, ClockIcon, RoadIcon, ChartIcon } from '../../lib/icons'

export default function Advantages() {
  const advantages = [
    {
      icon: GraduationIcon,
      title: "Expert Faculty",
      description: "Learn from experienced and qualified teachers"
    },
    {
      icon: UserIcon,
      title: "Personal Attention",
      description: "Individual focus on each student's progress"
    },
    {
      icon: ClockIcon,
      title: "Flexible Timing",
      description: "Classes scheduled according to student convenience"
    },
    {
      icon: RoadIcon,
      title: "Proven Track Record",
      description: "26+ years of successful results and achievements"
    },
    {
      icon: ChartIcon,
      title: "Performance Analysis",
      description: "Regular assessment and progress tracking"
    }
  ]

  return (
    <section className="py-16" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#1B5A96'}}>Why Choose IMA Jodhpur?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  <IconComponent size={56} style={{color: 'var(--primary-medium)'}} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#1B5A96'}}>{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}