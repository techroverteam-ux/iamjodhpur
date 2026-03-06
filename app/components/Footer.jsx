'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{background:'#1B5A96'}} className="text-white">
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1rem !important;
          }
          .footer-title {
            font-size: 14px !important;
            margin-bottom: 0.5rem !important;
          }
          .footer-link {
            font-size: 13px !important;
          }
          .footer-logo {
            width: 60px !important;
            height: 24px !important;
          }
          .footer-icon {
            width: 20px !important;
            height: 20px !important;
          }
          .footer-bottom {
            font-size: 12px !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
      <div className="container mx-auto px-4 py-2">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Link href="/">
              <Image src="/images/new_logo.png" width={140} height={56} alt="IMA Jodhpur" className="footer-logo mb-3" />
            </Link>
            <p className="text-white/90 footer-link leading-relaxed" style={{fontSize: '15px'}}>Leading coaching institute for JEE, NEET, and<br/>Pre-foundation courses with 26+ years of excellence.</p>
          </div>

          <div className="text-center">
            <h4 className="footer-title font-bold mb-3 text-white" style={{fontSize: '18px'}}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-1 justify-center max-w-xs mx-auto">
              <ul className="space-y-2 text-center">
                <li><Link href="/about-us" className="footer-link hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>About Us</Link></li>
                <li><Link href="/courses" className="footer-link hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>Courses</Link></li>
                <li><Link href="/facilities" className="footer-link hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>Facilities</Link></li>
                <li><Link href="/blog" className="footer-link hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>Blogs</Link></li>
              </ul>
              <ul className="space-y-2 text-center">
                <li><Link href="/why-ima" className="footer-link hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>Why IMA?</Link></li>
                <li><Link href="/contact-us" className="footer-link hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>Contact Us</Link></li>
                <li><Link href="/faqs" className="footer-link hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>FAQ's</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="footer-title font-bold mb-3 text-white" style={{fontSize: '18px'}}>Contact Us</h4>
            <ul className="space-y-2">
              <li className="footer-link flex items-start text-white/90" style={{fontSize: '15px'}}>
                <i className="fa fa-map-marker mr-2 mt-1 text-blue-200"></i>
                <span>Main Pal Road, Near Barkatullah Khan Stadium, Shastri Nagar, Jodhpur - 342003</span>
              </li>
              <li>
                <a href="tel:9571037333" className="footer-link flex items-center hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>
                  <i className="fa fa-phone mr-2 text-blue-200"></i> +91 - 9571037333
                </a>
              </li>
              <li>
                <a href="mailto:ceo.iitacademy@gmail.com" className="footer-link flex items-center hover:text-blue-200 transition-colors text-white/90" style={{fontSize: '15px'}}>
                  <i className="fa fa-envelope mr-2 text-blue-200"></i> ceo.iitacademy@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="footer-title font-bold mb-3 text-white" style={{fontSize: '18px'}}>Follow Us</h5>
              <ul className="flex space-x-3">
                <li>
                  <a href="https://facebook.com/imajodhpur" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <Image src="https://imajodhpur.com/assets/images/facebook.png" width={28} height={28} alt="Facebook" className="footer-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/imajodhpur" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <Image src="https://imajodhpur.com/assets/images/instagram.png" width={28} height={28} alt="Instagram" className="footer-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@imajodhpur" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <Image src="https://imajodhpur.com/assets/images/youtube.png" width={28} height={28} alt="YouTube" className="footer-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-white/30 my-3" />

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-white" style={{fontSize: '14px'}}>
          <p>© 2026 IMA Jodhpur. All Rights Reserved</p>
          <ul className="flex space-x-2 mt-1 md:mt-0">
            <li><Link href="/privacy-policy" className="hover:underline text-white">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:underline text-white">Refund Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:underline text-white">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
