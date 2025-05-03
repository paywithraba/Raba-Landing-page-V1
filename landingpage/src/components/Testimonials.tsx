import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied users who have simplified their
            financial lives with Raba.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              "Raba has completely transformed how I handle my monthly bills.
              The process is seamless and I love being able to use my crypto
              holdings."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Crypto Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              "As someone who travels frequently, being able to top up my phone
              with crypto from anywhere in the world is a game-changer."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium text-gray-900">Michael Chen</h4>
                <p className="text-sm text-gray-500">Digital Nomad</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              "The multi-stablecoin support is fantastic. I can use whatever
              coins I have on hand without worrying about conversion fees."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium text-gray-900">Alex Rodriguez</h4>
                <p className="text-sm text-gray-500">DeFi Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
