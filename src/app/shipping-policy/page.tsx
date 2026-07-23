// app/shipping-policy/page.tsx
import React from 'react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
    


      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20">
        {/* Hero section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Shipping Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Thank you for choosing our store. We strive to ensure a smooth and
            efficient shipping process for all our customers. Please review our
            shipping policy below.
          </p>
        
        </div>

        {/* Policy sections - Apple style with clean typography */}
        <div className="space-y-10 md:space-y-12 divide-y divide-gray-100/80">
          {/* Section 1 - Order Processing and Production Times */}
          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Order Processing and Production Times
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed pl-2">
              <li className="pl-1">
                Custom-made products require an estimated production time of 2
                weeks.
              </li>
              <li className="pl-1">
                Ready-to-wear products are prepared for shipping within 3 days.
              </li>
              <li className="pl-1 text-gray-500 text-sm mt-2">
                This timeframe may vary due to factors beyond our control.
              </li>
            </ul>
          </section>

          {/* Section 2 - Shipping Rates and Delivery */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Shipping Rates and Delivery
            </h2>
            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <div>
                <span className="font-medium">Local delivery (Qatar):</span>{' '}
                Shipping is free for local orders.
              </div>
              <div>
                <span className="font-medium">International delivery:</span>{' '}
                Shipping costs are calculated at checkout based on location and
                order weight.
              </div>
              <div>
                <span className="font-medium">Estimated delivery time:</span>
                <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                  <li className="pl-1">
                    Local orders: 3-7 business days
                  </li>
                  <li className="pl-1">
                    International orders: 7-14 business days
                  </li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  (Excluding order processing and production time, which varies
                  depending on the item ordered and any customization requests)
                </p>
              </div>
              <div className="text-sm text-gray-500 border-l-2 border-gray-200 pl-4 mt-3">
                While we make every effort to deliver your order within the
                estimated timeframe, please understand that unforeseen
                circumstances or customs processes in the destination country
                may occasionally cause delays.
              </div>
            </div>
          </section>

          {/* Section 3 - Customs, Duties, and Taxes */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Customs, Duties, and Taxes
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              For international deliveries, any applicable customs duties,
              taxes, or import fees are the customer&apos;s responsibility.
              Please contact your local customs office for more information.
            </p>
          </section>

          {/* Section 4 - Policy Updates */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Policy Updates
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              This shipping policy is subject to change without prior notice.
              Please review the policy periodically for any updates or
              modifications.
            </p>
          </section>

          {/* Section 5 - Contact */}
          <section id="contact" className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Contact Us
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any further questions or concerns regarding our
              shipping policy, please don&apos;t hesitate to contact our
              customer service team at{' '}
              <a
                href="mailto:tecdure@gmail.com"
                className="text-black underline underline-offset-2 hover:no-underline transition-colors"
              >
                tecdure@gmail.com
              </a>
              . We are here to assist you and ensure a satisfactory shipping
              experience.
            </p>
          </section>
        </div>

       
      </main>
    </div>
  );
}