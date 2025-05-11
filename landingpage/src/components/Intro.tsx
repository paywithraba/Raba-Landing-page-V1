import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section id="intro" className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container flex flex-col md:flex-row md:gap-4 gap-14 md:items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`lg:w-1/2 mx-auto transition-opacity duration-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Powering <span className="bg-yellow-200 px-2">Digital</span>{" "}
            Payments with StableCoins
          </h1>
          <p
            className={`text-xl text-gray-600 mb-10 max-w-2xl transition-all duration-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Raba makes it easy to pay for airtime, data, electricity, and more -
            fast, secure and built for Africa's digital economy
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-800 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <Link
              to="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-sm shadow-md transition-colors w-full sm:w-auto"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Call Support
            </Link>
          </div>
        </div>

        <div
          className={`relative lg:w-1/2 mx-auto transition-all duration-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/banner.jpg"
              alt="Raba DeFi App Billboard"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
