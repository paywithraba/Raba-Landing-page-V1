import { useEffect, useRef } from "react";

const Partners = () => {
  const partnersRef = useRef<HTMLDivElement | null>(null);

  const partners = [
    {
      name: "EBills Africa",
      icon: (
        <img
          src="/ebills.jpg"
          alt="EBills Africa"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "NextBridge",
      icon: (
        <img
          src="/nextbridge.jpg"
          alt="NextBridge"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Paycrest",
      icon: (
        <img
          src="/paycrest.jpg"
          alt="Paycrest"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Flutterwave",
      icon: (
        <img
          src="/flutterwave.jpg"
          alt="Flutterwave"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Paychant",
      icon: (
        <img
          src="/paychant.jpg"
          alt="Paychant"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
    {
      name: "Fonbnk",
      icon: (
        <img
          src="/fonbnk.jpg"
          alt="Fonbnk"
          className="h-12 w-12 rounded-full object-cover"
        />
      ),
    },
  ];

  useEffect(() => {
    const partnersContainer = partnersRef.current;

    let partnersPosition = 0;

    const animatepartners = () => {
      if (!partnersContainer) return;

      partnersPosition -= 1.8;

      // Reset when position exceeds half the total scrollable content (since we triplicated it)
      const scrollWidth = partnersContainer.scrollWidth / 3; // One set worth of items

      if (Math.abs(partnersPosition) >= scrollWidth) {
        partnersPosition = 0;
      }

      partnersContainer.style.transform = `translateX(${partnersPosition}px)`;

      requestAnimationFrame(animatepartners);
    };

    const partnersAnimation = requestAnimationFrame(animatepartners);

    return () => {
      cancelAnimationFrame(partnersAnimation);
    };
  }, []);

  return (
    <section id="partners" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600">
            We collaborate with industry leaders to bring you the best crypto
            payment experience.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-8" ref={partnersRef}>
            {/* Original partners */}
            {partners.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className="flex-shrink-0 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <div className="w-32 h-32 bg-white rounded-full shadow-md border border-gray-100 flex flex-col items-center justify-center p-2">
                  {partner.icon}
                  <span className="text-gray-500 font-medium mt-2 text-sm">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate partners to create seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`partner-duplicate-${index}`}
                className="flex-shrink-0 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <div className="w-32 h-32 bg-white rounded-full shadow-md border border-gray-100 flex flex-col items-center justify-center p-2">
                  {partner.icon}
                  <span className="text-gray-500 font-medium mt-2 text-sm">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}

            {/* Add a third set for extra safety in case of fast scrolling */}
            {partners.map((partner, index) => (
              <div
                key={`partner-triplicate-${index}`}
                className="flex-shrink-0 transition-all duration-20 ease-in-out hover:scale-110"
              >
                <div className="w-32 h-32 bg-white rounded-full shadow-md border border-gray-100 flex flex-col items-center justify-center p-2">
                  {partner.icon}
                  <span className="text-gray-500 font-medium mt-2 text-sm">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
