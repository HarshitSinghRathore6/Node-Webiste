function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 w-full">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      
      {/* About Us Section */}
      <div className="flex flex-col">
        <h3 className="text-white font-semibold mb-4">About Us</h3>
        <p className="text-gray-400">
          At Music Institute, we believe that music has the power to inspire and transform lives. 
          Our experienced instructors are dedicated to nurturing each student’s musical potential, 
          offering personalized lessons for all skill levels. Whether you are a beginner or an advanced musician, 
          we provide the guidance and resources to help you achieve your musical goals.
        </p>
      </div>
      
      {/* Quick Links Section */}
      <div className="flex flex-col">
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="text-gray-400 space-y-2">
          <li><a href="#" className="hover:text-white">Courses</a></li>
          <li><a href="#" className="hover:text-white">Instructors</a></li>
          <li><a href="#" className="hover:text-white">Events</a></li>
          <li><a href="#" className="hover:text-white">Blog</a></li>
          <li><a href="#" className="hover:text-white">Contact Us</a></li>
          <li><a href="#" className="hover:text-white">FAQs</a></li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col">
        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-400">
          123 Music Avenue, Suite 456<br />
          City, State, ZIP Code<br />
          Phone: (123) 456-7890<br />
          Email: <a href="mailto:info@musicinstitute.com" className="hover:text-white">info@musicinstitute.com</a>
        </p>
      </div>

      {/* Follow Us and Hours of Operation */}
      <div className="flex flex-col">
        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
        <ul className="text-gray-400 space-y-2">
          <li><a href="#" className="hover:text-white">Facebook</a></li>
          <li><a href="#" className="hover:text-white">Instagram</a></li>
          <li><a href="#" className="hover:text-white">Twitter</a></li>
          <li><a href="#" className="hover:text-white">YouTube</a></li>
        </ul>
        <h3 className="text-white font-semibold mt-6 mb-4">Hours of Operation</h3>
        <p className="text-gray-400">
          Monday - Friday: 9:00 AM - 7:00 PM<br />
          Saturday: 10:00 AM - 5:00 PM<br />
          Sunday: Closed
        </p>
      </div>
    </div>
    
    <div className="text-center text-gray-500 mt-8">
      <p>
        © {new Date().getFullYear()} Music Institute. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>




      
    );
  }
  
  export default Footer;