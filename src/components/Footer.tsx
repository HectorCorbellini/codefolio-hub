
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Interested in working together or have questions about my work?
              Feel free to reach out through any of the platforms below.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li><a href="#hero" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
                  <li><a href="#java-exercises" className="text-gray-600 hover:text-black transition-colors">Java Exercises</a></li>
                  <li><a href="#business-projects" className="text-gray-600 hover:text-black transition-colors">Business Projects</a></li>
                  <li><a href="#videos" className="text-gray-600 hover:text-black transition-colors">Videos</a></li>
                  <li><a href="#collaborations" className="text-gray-600 hover:text-black transition-colors">Collaborations</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
