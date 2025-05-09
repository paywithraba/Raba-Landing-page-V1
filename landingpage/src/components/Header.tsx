import { Apple, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
  
    const handleScroll = () => {
      setShowDropdown(false);
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

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
          <div ref={dropdownRef} className="relative flex items-center">
            {/* Download Button */}
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="inline-flex items-center justify-center ml-4 px-4 py-2 text-sm font-medium text-white bg-[#E5C66E] rounded-md shadow-sm hover:cursor-pointer"
            >
              Download
              <svg
                className="ml-2 h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div
                className={`absolute top-full mt-2 right-0 w-53 md:w-60 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 
      transition-all duration-200 ease-out transform opacity-100 scale-100
    `}
                style={{
                  opacity: showDropdown ? 1 : 0,
                  transform: showDropdown
                    ? "translateY(0)"
                    : "translateY(10px)",
                }}
              >
                <div className="flex flex-col md:flex-row backdrop-blur-md justify-between items-center gap-2 md:gap-4">
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg p-2"
                  >
                    <Apple size={28} />
                    <span className="mt-1 text-xs text-center">
                      Download from Apple
                    </span>
                  </a>
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg p-2"
                  >
                    <Play size={28} />
                    <span className="mt-1 text-xs text-center">
                      Download from Playstore
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
