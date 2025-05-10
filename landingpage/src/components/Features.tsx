const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Finance
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of financial transactions with our
            comprehensive suite of services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-auto">
          {/* Feature 1 */}
          <div className="bg-white flex flex-col lg:flex-row gap-4 items-start md:items-center rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <img
                src="/airtime.jpg"
                className="w-24 sm:w-28 md:w-32 lg:w-24"
                alt="Airtime"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Buy Airtime with Crypto
              </h3>
              <p className="text-gray-600">
                Purchase mobile airtime and data bundles using your favorite
                cryptocurrencies instantly.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white flex flex-col lg:flex-row gap-4 items-start md:items-center rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <img
                src="/electricity.jpg"
                className="w-24 sm:w-28 md:w-32 lg:w-24"
                alt="Airtime"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pay Utility Bills
              </h3>
              <p className="text-gray-600">
              Settle electricity, water, and other utility bills seamlessly with
              cryptocurrency.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white flex flex-col lg:flex-row gap-4 items-start md:items-center rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <img
                src="/home.jpg"
                className="w-24 sm:w-28 md:w-32 lg:w-24"
                alt="Airtime"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
              Multiple Stablecoins
              </h3>
              <p className="text-gray-600">
              Support for various stablecoins including USDT, USDC, and more for
              stable transactions.
              </p>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
