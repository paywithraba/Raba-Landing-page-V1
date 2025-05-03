import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                Raba
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#features"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="#testimonials"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              to="#"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 shadow-sm transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
