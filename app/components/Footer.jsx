import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{background:'#1977f3'}}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <h4 className="text-lg font-bold mb-4">Contact us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa fa-map-marker mr-3 mt-1"></i>
                <span>E-74 main pal road near barkatullah khan stadium Shastri nagar jodhpur</span>
              </li>
              <li>
                <a href="tel:9828019432" className="flex items-center hover:underline">
                  <i className="fa fa-phone mr-3"></i> +91 - 9828019432
                </a>
              </li>
              <li>
                <a href="mailto:ceo.imajodhpur@gmail.com" className="flex items-center hover:underline">
                  <i className="fa fa-envelope mr-3"></i> ceo.imajodhpur@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">quick links</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/faqs" className="hover:underline">FAQ's</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">JOIN US ON</h5>
            <ul className="flex space-x-4 mb-6">
              <li>
                <a href="https://facebook.com/imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/facebook.png" width={40} height={40} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/instagram.png" width={40} height={40} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/youtube.png" width={40} height={40} alt="YouTube" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <p>© 2026 IMA Jodhpur All Right Reserved</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:underline">Refund Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
