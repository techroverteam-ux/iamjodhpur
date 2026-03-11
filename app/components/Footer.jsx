'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{background:'#1B5A96'}} className="text-white">
      <style jsx>{`
        /* Mobile-First Footer Responsive Design */
        @media (max-width: 768px) {
          footer {
            padding: 1rem 0 !important;
          }
          .footer-container {
            padding: 1rem !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            text-align: center !important;
          }
          .footer-section {
            padding: 1rem 0 !important;
          }
          .footer-title {
            font-size: 1rem !important;
            margin-bottom: 0.75rem !important;
          }
          .footer-link {
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
          }
          .footer-logo {
            width: 100px !important;
            height: auto !important;
            margin: 0 auto 1rem auto !important;
          }
          .footer-description {
            font-size: 0.875rem !important;
            text-align: center !important;
            max-width: 280px !important;
            margin: 0 auto !important;
          }
          .footer-contact {
            text-align: center !important;
          }
          .footer-contact li {
            justify-content: center !important;
            text-align: center !important;
            margin-bottom: 0.75rem !important;
          }
          .footer-contact a {
            text-align: center !important;
            display: inline-block !important;
          }
          .footer-social {
            justify-content: center !important;
            gap: 1rem !important;
          }
          .footer-icon {
            width: 24px !important;
            height: 24px !important;
          }
          .footer-bottom {
            font-size: 0.75rem !important;
            text-align: center !important;
            padding-top: 1rem !important;
          }
          .quick-links-mobile {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 0.75rem !important;
            justify-content: center !important;
            max-width: 300px !important;
            margin: 0 auto !important;
          }
          .quick-links-mobile li {
            flex: 0 0 auto !important;
          }
          .quick-links-desktop {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .quick-links-mobile {
            display: none !important;
          }
        }
      `}</style>
      <div className="container mx-auto px-4 py-4 footer-container">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section text-center md:text-left">
            <Link href="/">
              <Image src="/images/new_logo.png" width={140} height={56} alt="IMA Jodhpur" className="footer-logo mb-4" />
            </Link>
            <p className="footer-description text-white/90 footer-link leading-relaxed">Leading coaching institute for JEE, NEET, and Pre-foundation courses with 26+ years of excellence.</p>
          </div>

          <div className="footer-section text-center">
            <h4 className="footer-title font-bold mb-4 text-white">Quick Links</h4>
            <div className="quick-links-desktop grid grid-cols-2 gap-x-2 justify-center max-w-xs mx-auto">
              <ul className="space-y-3 text-center">
                <li><Link href="/about-us" className="footer-link hover:text-blue-200 transition-colors text-white/90">About Us</Link></li>
                <li><Link href="/courses" className="footer-link hover:text-blue-200 transition-colors text-white/90">Courses</Link></li>
                <li><Link href="/facilities" className="footer-link hover:text-blue-200 transition-colors text-white/90">Facilities</Link></li>
                <li><Link href="/blog" className="footer-link hover:text-blue-200 transition-colors text-white/90">Blogs</Link></li>
              </ul>
              <ul className="space-y-3 text-center">
                <li><Link href="/why-ima" className="footer-link hover:text-blue-200 transition-colors text-white/90">Why IMA?</Link></li>
                <li><Link href="/contact-us" className="footer-link hover:text-blue-200 transition-colors text-white/90">Contact Us</Link></li>
                <li><Link href="/faqs" className="footer-link hover:text-blue-200 transition-colors text-white/90">FAQ's</Link></li>
              </ul>
            </div>
            <ul className="quick-links-mobile">
              <li><Link href="/about-us" className="footer-link hover:text-blue-200 transition-colors text-white/90">About Us</Link></li>
              <li><Link href="/courses" className="footer-link hover:text-blue-200 transition-colors text-white/90">Courses</Link></li>
              <li><Link href="/facilities" className="footer-link hover:text-blue-200 transition-colors text-white/90">Facilities</Link></li>
              <li><Link href="/blog" className="footer-link hover:text-blue-200 transition-colors text-white/90">Blogs</Link></li>
              <li><Link href="/why-ima" className="footer-link hover:text-blue-200 transition-colors text-white/90">Why IMA?</Link></li>
              <li><Link href="/contact-us" className="footer-link hover:text-blue-200 transition-colors text-white/90">Contact Us</Link></li>
              <li><Link href="/faqs" className="footer-link hover:text-blue-200 transition-colors text-white/90">FAQ's</Link></li>
            </ul>
          </div>

          <div className="footer-section text-center md:text-left">
            <h4 className="footer-title font-bold mb-4 text-white">Contact Us</h4>
            <ul className="footer-contact space-y-3">
              <li className="footer-link flex items-start justify-center md:justify-start text-white/90">
                <i className="fa fa-map-marker mr-2 mt-1 text-blue-200"></i>
                <a href="https://maps.google.com/?q=IMA+Jodhpur+IIT+Academy+Medical+Academy+Main+Pal+Road+Shastri+Nagar+Jodhpur+Rajasthan" target="_blank" rel="noopener noreferrer" className="text-white hover:!text-blue-200 transition-colors">
                  Main Pal Road, Near Barkatullah Khan Stadium, Shastri Nagar, Jodhpur - 342003
                </a>
              </li>
              <li>
                <a href="tel:9571037333" className="footer-link flex items-center justify-center md:justify-start hover:text-blue-200 transition-colors text-white/90">
                  <i className="fa fa-phone mr-2 text-blue-200"></i> +91 - 9571037333
                </a>
              </li>
              <li>
                <a href="mailto:ceo.iitacademy@gmail.com" className="footer-link flex items-center justify-center md:justify-start hover:text-blue-200 transition-colors text-white/90">
                  <i className="fa fa-envelope mr-2 text-blue-200"></i> ceo.iitacademy@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="footer-title font-bold mb-3 text-white">Follow Us</h5>
              <ul className="footer-social flex space-x-4 justify-center md:justify-start">
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

        <hr className="border-white/30 my-6" />

        <div className="footer-bottom text-center text-white">
          <p>© 2026 IMA Jodhpur. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
