import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto text-center transition-opacity duration-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 transition-all duration-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Finance, Simplified with Crypto
          </h1>
          <p
            className={`text-xl text-gray-600 mb-10 max-w-2xl mx-auto transition-all duration-800 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Buy airtime, pay utilities, and transact with stablecoins — all in
            one place.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-800 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <Link
              to="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 shadow-md transition-colors w-full sm:w-auto"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div
          className={`mt-16 relative max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-64 md:h-96 bg-gradient-to-r from-yellow-100 to-yellow-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full py-2 px-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
              <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
              <span>Trusted by 10,000+ users worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
