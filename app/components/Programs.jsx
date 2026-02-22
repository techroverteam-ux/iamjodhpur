import Image from 'next/image'

export default function Programs() {
  return (
    <section className="py-12" style={{background:'#e5e7eb'}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="inline-block px-6 py-2 rounded-b-3xl text-white font-bold mb-4" style={{background:'#1977f3'}}>
              JEE (Main+Advanced)
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="border-r border-gray-400">
                <Image src="https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/thumbnail/11878191768826820_neet.png" width={300} height={200} alt="JEE" className="mx-auto" />
              </div>
              <div className="text-left px-4">
                <p className="text-gray-700">
                  At <strong>IIT Medical Academy (IMA)</strong>, our JEE program is designed to build strong academic fundamentals and develop the competitive skills required for <strong>JEE Main and JEE Advanced.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block px-6 py-2 rounded-b-3xl text-white font-bold mb-4" style={{background:'#1977f3'}}>
              NEET Preparation
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="border-r border-gray-400">
                <Image src="https://d3aj4itat0hxro.cloudfront.net/826/admin_v1/thumbnail/24045961768826895_neet.png" width={300} height={200} alt="NEET" className="mx-auto" />
              </div>
              <div className="text-left px-4">
                <p className="text-gray-700">
                  NEET preparation is designed with a complete academic system that builds strong concepts from the beginning and gradually upgrades students to the actual NEET level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
