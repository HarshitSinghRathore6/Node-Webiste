import HeroSection from "./components/HeroSection";
import FeaturedCourses  from "./components/FeaturedCourses";
import Testimonials from "./components/Testimonials";
import UpcomingWenbinar from "./components/UpcomingWebinar";
import MeetYourTeacher from "./components/MeetYourTeacher";
import Footer from "./components/ui/Footer";



export default function Home() {
  return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
          
          
          <HeroSection />
          
          <FeaturedCourses /> 
          
          <Testimonials />
          
          <UpcomingWenbinar />
          
          <MeetYourTeacher />

          <Footer />
          
        </main>
      
  );
}
