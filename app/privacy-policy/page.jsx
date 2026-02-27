import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Floating particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative pt-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <span className="text-sm font-medium text-cyan-200">Legal Document</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80">Your privacy matters to us</p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            
            {/* Intro */}
            <div className="p-8 border-b border-white/10">
              <p className="text-lg text-white/90 leading-relaxed">
                We are committed to protecting the privacy of users ("Users") who access the website, app, or mobile applications ("Website/App"). This Privacy Policy explains how Creator collects, uses, and discloses your information.
              </p>
            </div>

            {/* Main sections grid */}
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left column */}
              <div className="p-8 space-y-8 border-r border-white/10">
                
                {/* Information We Collect */}
                <div className="group">
                  <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
                    Information We Collect
                  </h2>
                  <div className="space-y-3">
                    {[
                      'Personal information (name, email, phone number, date of birth, etc.)',
                      'Usage data (IP address, browser type)',
                      'Information from social media logins (name, profile picture, email)',
                      'Contact information from your device (name, phone number, email)'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How We Use */}
                <div className="group">
                  <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
                    How We Use Information
                  </h2>
                  <div className="space-y-3">
                    {[
                      'Provide and improve our services',
                      'Understand how you use our platform',
                      'Develop new features and functionalities',
                      'Communicate with you about our services and offers',
                      'Prevent fraud and illegal activities'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Privacy Rights */}
                <div className="group">
                  <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                    Your Privacy Rights
                  </h2>
                  <div className="space-y-3">
                    {[
                      'Access and request correction of your personal data',
                      'Request deletion of your personal data',
                      'Object to the processing of your personal data',
                      'Request data portability'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="p-8 space-y-6">
                
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
                  <div key={i} className="group/section">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover/section:text-cyan-300 transition-colors">
                      {section.title}:
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover/section:text-white/90 transition-colors">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Foreground Services - Full width */}
            <div className="p-8 border-t border-white/10 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
                Foreground Services
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
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
            <div className="p-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-pink-300 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full"></div>
                Additional Information
              </h2>
              <div className="space-y-2 text-white/80">
                <p>You have the option to opt out of providing information or withdraw information you have already provided.</p>
                <p>This Policy is subject to change, and we will notify you of any changes.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}