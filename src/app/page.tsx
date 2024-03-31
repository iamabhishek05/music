import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import MusicSchoolTestimonials from '@/components/MusicSchoolTestimonials'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'



const page = () => {
    return (
        <main>
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <MusicSchoolTestimonials />
            <UpcomingWebinars />
            <Instructors />
            <Footer />
        </main>
    )
}

export default page  