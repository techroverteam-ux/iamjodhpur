// Updated TopHeader component
'use client'
import { PhoneIcon, EmailIcon } from '../../lib/icons'

export default function TopHeader() {
  return (
    <section className="top_heads top_heads_header top-head" style={{background:'#1B5A96'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center py-2.5 gap-1">
          <a href="tel:9571037333" className="text-white text-sm flex items-center">
            <PhoneIcon className="mr-1" size={12} aria-hidden="true" style={{transform: 'scaleX(-1)'}} /> +91 - 9571037333
          </a>
          <a href="mailto:ceo.iitacademy@gmail.com" className="text-white text-sm flex items-center">
            <EmailIcon className="mr-1" size={12} aria-hidden="true" /> ceo.iitacademy@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}