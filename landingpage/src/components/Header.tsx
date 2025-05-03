import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="logo.png" className="w-22" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#intro"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="#features"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="#footer"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              to="#"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center ml-4 px-4 py-2 text-sm font-medium text-white bg-[#E5C66E] rounded-md hover:cursor-pointer shadow-sm transition-colors"
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
