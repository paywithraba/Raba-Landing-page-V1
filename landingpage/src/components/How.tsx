import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Raba Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in minutes with our simple three-step process.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-yellow-200"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative bg-gray-50 rounded-sm py-7 px-3 text-center">
                <div className="w-12 h-12 bg-[#E5C66E] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Create an Account
                </h3>
                <p className="text-gray-600">
                  Sign up and complete a simple verification process to get
                  started.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-gray-50 py-7 px-3 rounded-sm text-center">
                <div className="w-12 h-12 bg-[#E5C66E] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Deposit Crypto
                </h3>
                <p className="text-gray-600">
                  Add your preferred stablecoins to your Raba wallet securely.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-gray-50 py-7 px-3 rounded-sm text-center">
                <div className="w-12 h-12 bg-[#E5C66E] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-white font-bold">3</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Start Transacting
                </h3>
                <p className="text-gray-600">
                  Pay bills, buy airtime, or send money instantly with low fees.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-sm shadow-md transition-colors"
            >
              Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
