import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Terms & Conditions</h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              By using the services provided through the IMA Jodhpur website and mobile application, you agree to comply with and be legally bound by the following terms and conditions. These terms govern your access to and use of the platform and its educational content, including all associated features, updates, and support services. Accessing our platform constitutes your full and unconditional acceptance of these terms, so we urge you to read them carefully before proceeding.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Users are expected to maintain the confidentiality of their account credentials and are solely responsible for any activity under their registered accounts. Sharing login details or course content with unauthorized users is strictly prohibited and may result in immediate suspension or termination of services without notice. We reserve the right to modify, update, or discontinue any part of our services at any time without prior notice. While we strive to provide accurate and up-to-date content, we do not guarantee the completeness, reliability, or timeliness of the course material. All intellectual property, including but not limited to videos, notes, and test content, belongs exclusively to IMA Jodhpur, and unauthorized distribution or duplication is strictly forbidden. Violation of any of these terms may lead to legal action and the forfeiture of access to our platform.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}