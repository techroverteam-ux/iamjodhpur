import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white">
        
        {/* Header */}
        <div className="relative pt-16 pb-12 text-center" style={{background: 'linear-gradient(135deg, #0B4F8A 0%, #1677C8 100%)'}}>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90">Your privacy matters to us</p>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 py-8">
          
          {/* Intro */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to protecting the privacy of users ("Users") who access the website, app, or mobile applications ("Website/App"). This Privacy Policy explains how Creator collects, uses, and discloses your information.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              Information We Collect
            </h2>
            <div className="space-y-2">
              {[
                'Personal information (name, email, phone number, date of birth, etc.)',
                'Usage data (IP address, browser type)',
                'Information from social media logins (name, profile picture, email)',
                'Contact information from your device (name, phone number, email)'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Use */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full"></div>
              How We Use Information
            </h2>
            <div className="space-y-2">
              {[
                'Provide and improve our services',
                'Understand how you use our platform',
                'Develop new features and functionalities',
                'Communicate with you about our services and offers',
                'Prevent fraud and illegal activities'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Rights */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
              Your Privacy Rights
            </h2>
            <div className="space-y-2">
              {[
                'Access and request correction of your personal data',
                'Request deletion of your personal data',
                'Object to the processing of your personal data',
                'Request data portability'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {[
            { title: 'Sharing Your Information', content: 'We may share your information with third parties only if they adopt appropriate security standards and only for the purposes mentioned above.' },
            { title: 'Data Retention', content: 'We retain information for as long as necessary to fulfill the purposes outlined in this policy. Chat and test attempt data are kept for 2 years and then automatically deleted.' },
            { title: 'Cookies and Third-Party Links', content: 'We use cookies to improve your experience and track user trends. You can disable cookies in your browser settings. Our website may contain links to third-party sites with different privacy policies. We are not responsible for their practices.' },
            { title: "Children's Privacy", content: 'We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe your child has provided us with information, please contact us.' },
            { title: 'Updates to this Policy', content: 'We may update this policy at any time. We will notify you of any changes that affect your rights.' },
            { title: 'Contact Us', content: 'If you have any questions about this policy, please contact us.' },
            { title: 'Governing Law and Jurisdiction', content: 'This policy is governed by Indian law, and any disputes will be resolved through arbitration in New Delhi.' },
            { title: 'Age Requirements', content: 'The minimum age to use our platform is 18 for India and Australia, 13 for Singapore, 14 for South Korea, and 16 for Vietnam. If you are under the required age, parental consent is necessary.' }
          ].map((section, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* Foreground Services */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
              Foreground Services
            </h2>
            <div className="space-y-3 text-gray-700 text-base leading-relaxed">
              <p>
                We utilize the Foreground Data Sync permission in our application to facilitate the flawless synchronization of downloaded videos. This permission is essential for managing data transfers effectively, allowing us to keep your videos updated and ready for uninterrupted playback.
              </p>
              <p>
                By leveraging this permission, we can ensure that you experience a smooth and seamless viewing experience. The efficient handling of data synchronization is crucial to providing you with uninterrupted access to your downloaded content, enhancing your overall satisfaction with our app.
              </p>
              <p>
                Rest assured, all data is handled with the highest level of care and in strict accordance with our privacy policy, ensuring your information remains secure and protected. We are committed to maintaining your trust by prioritizing the security and privacy of your data at all times.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-pink-500 rounded-full"></div>
              Additional Information
            </h2>
            <div className="space-y-2 text-gray-700 text-base">
              <p>You have the option to opt out of providing information or withdraw information you have already provided.</p>
              <p>This Policy is subject to change, and we will notify you of any changes.</p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  )
}
