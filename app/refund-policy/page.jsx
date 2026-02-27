import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Refund Policy</h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Due to the digital nature of our content and the instant accessibility provided upon purchase, IMA Jodhpur maintains a strict no-refund policy. Once a user has enrolled in a course or made a payment, the transaction is deemed final and non-reversible under any circumstances. We strongly encourage all prospective users to read course descriptions thoroughly, review any free previews provided, and reach out to our support team for clarification before making a purchase.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              We are committed to delivering high-quality educational content and ensuring user satisfaction through continuous support and timely updates. However, since access to the course material is immediate and cannot be returned or revoked once provided, we are unable to accommodate refund requests, whether for accidental purchases, change of mind, or compatibility issues. We advise users to evaluate the suitability of a course prior to enrollment and reach out for assistance in case of any doubts. Our support team is available to help with technical issues and other concerns to ensure a smooth and effective learning journey.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
