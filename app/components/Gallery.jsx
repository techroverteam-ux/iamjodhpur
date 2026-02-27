import Image from 'next/image'

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
    "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600"
  ]

  return (
    <section id="gallery" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Glimpses from our events, conferences, and community activities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 cursor-pointer"
            >
              <Image 
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">Event Photo {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  )
}
