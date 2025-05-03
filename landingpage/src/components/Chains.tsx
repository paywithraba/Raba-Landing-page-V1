import { useEffect, useRef } from "react";

const Chains = () => {
  const chainsRef = useRef<HTMLDivElement | null>(null);

  // Define chains and chains data
  const chains = [
    {
      name: "Celo",
      icon: (
        <img
          src="/celo.jpg"
          alt="Celo"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Ethereum",
      icon: (
        <img
          src="/eth.jpg"
          alt="Ethereum"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Sui",
      icon: (
        <img
          src="/sui.jpg"
          alt="Sui"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Polygon",
      icon: (
        <img
          src="/polygon.jpg"
          alt="Polygon"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Arbitrum",
      icon: (
        <img
          src="/arbitrum.jpg"
          alt="Arbitrum"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Base",
      icon: (
        <img
          src="/base.jpg"
          alt="Base"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
  ];

  useEffect(() => {
    const chainsContainer = chainsRef.current;

    let chainsPosition = 0;

    const animateChains = () => {
      if (!chainsContainer) return;

      chainsPosition -= 1.2;

      // Reset when position exceeds half the total scrollable content (since we triplicated it)
      const scrollWidth = chainsContainer.scrollWidth / 3; // One set worth of items

      if (Math.abs(chainsPosition) >= scrollWidth) {
        chainsPosition = 0;
      }

      chainsContainer.style.transform = `translateX(${chainsPosition}px)`;

      requestAnimationFrame(animateChains);
    };

    const chainsAnimation = requestAnimationFrame(animateChains);

    return () => {
      cancelAnimationFrame(chainsAnimation);
    };
  }, []);

  return (
    <>
      {/* Chains Section */}
      <section id="chains" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chains We Support
            </h2>
            <p className="text-xl text-gray-600">
              Raba works seamlessly across multiple blockchain networks, giving
              you flexibility and choice.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex space-x-8" ref={chainsRef}>
              {/* Original chains */}
              {chains.map((chain, index) => (
                <div
                  key={`chain-${index}`}
                  className="flex-shrink-0 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <div className="w-32 h-32 bg-white rounded-full shadow-md border border-gray-100 flex flex-col items-center justify-center p-2">
                    {chain.icon}
                    <span className="text-gray-500 font-medium mt-2 text-sm">
                      {chain.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Duplicate chains to create seamless loop */}
              {chains.map((chain, index) => (
                <div
                  key={`chain-duplicate-${index}`}
                  className="flex-shrink-0 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <div className="w-32 h-32 bg-white rounded-full shadow-md border border-gray-100 flex flex-col items-center justify-center p-2">
                    {chain.icon}
                    <span className="text-gray-500 font-medium mt-2 text-sm">
                      {chain.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Add a third set for extra safety in case of fast scrolling */}
              {chains.map((chain, index) => (
                <div
                  key={`chain-triplicate-${index}`}
                  className="flex-shrink-0 transition-all duration-20 ease-in-out hover:scale-110"
                >
                  <div className="w-32 h-32 bg-white rounded-full shadow-md border border-gray-100 flex flex-col items-center justify-center p-2">
                    {chain.icon}
                    <span className="text-gray-500 font-medium mt-2 text-sm">
                      {chain.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chains;
