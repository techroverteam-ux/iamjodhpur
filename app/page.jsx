import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BannerText from './components/BannerText'
import Programs from './components/Programs'
import Courses from './components/Courses'
import Advantages from './components/Advantages'
import CourseCategories from './components/CourseCategories'
import Offerings from './components/Offerings'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Navbar />
      <Hero />
      <BannerText />
      <Programs />
      <Courses />
      <Advantages />
      <CourseCategories />
      <Offerings />
      <Testimonials />
      <Stats />
      <Footer />
    </>
  )
}
