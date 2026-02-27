import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{background:'#0066FF'}} className="text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <Link href="/">
              <Image src="/images/3520795826_both.png" width={80} height={32} alt="IMA Jodhpur" />
            </Link>
            <p className="text-white mt-1" style={{fontSize: '15px'}}>Leading coaching institute for JEE, NEET, and Foundation.</p>
          </div>

          <div>
            <h4 className="font-bold mb-1 text-white" style={{fontSize: '16px'}}>Quick Links</h4>
            <ul className="space-y-0.5">
              <li><Link href="/about-us" className="hover:underline text-white" style={{fontSize: '15px'}}>About Us</Link></li>
              <li><Link href="/courses" className="hover:underline text-white" style={{fontSize: '15px'}}>Courses</Link></li>
              <li><Link href="/faqs" className="hover:underline text-white" style={{fontSize: '15px'}}>FAQ's</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-1 text-white" style={{fontSize: '16px'}}>Follow Us</h5>
            <ul className="flex space-x-2">
              <li>
                <a href="https://facebook.com/imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/facebook.png" width={26} height={26} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/instagram.png" width={26} height={26} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@imajodhpur" target="_blank" rel="noopener noreferrer">
                  <Image src="https://imajodhpur.com/assets/images/youtube.png" width={26} height={26} alt="YouTube" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-1 text-white" style={{fontSize: '16px'}}>Contact Us</h4>
            <ul className="space-y-0.5">
              <li className="flex items-start text-white" style={{fontSize: '15px'}}>
                <i className="fa fa-map-marker mr-1 mt-0.5"></i>
                <span>E-74 main pal road, Jodhpur</span>
              </li>
              <li>
                <a href="tel:9828019432" className="flex items-center hover:underline text-white" style={{fontSize: '15px'}}>
                  <i className="fa fa-phone mr-1"></i> +91 - 9828019432
                </a>
              </li>
              <li>
                <a href="mailto:ceo.imajodhpur@gmail.com" className="flex items-center hover:underline text-white" style={{fontSize: '15px'}}>
                  <i className="fa fa-envelope mr-1"></i> ceo.imajodhpur@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-3" />

        <div className="flex flex-col md:flex-row justify-between items-center text-white" style={{fontSize: '14px'}}>
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
