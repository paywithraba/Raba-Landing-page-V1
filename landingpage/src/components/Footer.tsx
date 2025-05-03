import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer
        id="footer"
        className="bg-gray-50 border-t border-gray-100 pt-16 pb-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <img src="logo.png" className="w-20 mr-4" />
                <span className="text-gray-500">
                  © 2025 All rights reserved.
                </span>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
