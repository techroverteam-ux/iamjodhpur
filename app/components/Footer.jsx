'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{background:'#0B4F8A'}} className="text-white">
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
      <div className="container mx-auto px-4 py-4">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <Link href="/">
              <Image src="/images/new_logo.png" width={120} height={48} alt="IMA Jodhpur" className="footer-logo" />
            </Link>
            <p className="text-white mt-1 footer-link" style={{fontSize: '15px'}}>Leading coaching institute for JEE, NEET, and Foundation.</p>
          </div>

          <div>
            <h4 className="footer-title font-bold mb-1 text-white" style={{fontSize: '16px'}}>Quick Links</h4>
            <ul className="space-y-0.5">
              <li><Link href="/about-us" className="footer-link hover:underline text-white" style={{fontSize: '15px'}}>About Us</Link></li>
              <li><Link href="/courses" className="footer-link hover:underline text-white" style={{fontSize: '15px'}}>Courses</Link></li>
              <li><Link href="/faqs" className="footer-link hover:underline text-white" style={{fontSize: '15px'}}>FAQ's</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="footer-title font-bold mb-1 text-white" style={{fontSize: '16px'}}>Follow Us</h5>
            <ul className="flex space-x-2">
              <li>
                <a href="https://facebook.com/imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/facebook.png" width={26} height={26} alt="Facebook" className="footer-icon" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/instagram.png" width={26} height={26} alt="Instagram" className="footer-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/youtube.png" width={26} height={26} alt="YouTube" className="footer-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title font-bold mb-1 text-white" style={{fontSize: '16px'}}>Contact Us</h4>
            <ul className="space-y-0.5">
              <li className="footer-link flex items-start text-white" style={{fontSize: '15px'}}>
                <i className="fa fa-map-marker mr-1 mt-0.5"></i>
                <span>MAIN, Pal Rd, near BARKATULLAH KHAN STADIUM, near SHRI RAM FILLING STATION, Sector-E, Shastri Nagar, Jodhpur, Rajasthan 342003</span>
              </li>
              <li>
                <a href="tel:9571037333" className="footer-link flex items-center hover:underline text-white" style={{fontSize: '15px'}}>
                  <i className="fa fa-phone mr-1"></i> +91 - 9571037333
                </a>
              </li>
              <li>
                <a href="mailto:ceo.iitacademy@gmail.com" className="footer-link flex items-center hover:underline text-white" style={{fontSize: '15px'}}>
                  <i className="fa fa-envelope mr-1"></i> ceo.iitacademy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-3" />

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
