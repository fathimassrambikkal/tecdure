// app/return-policy/page.tsx
import React from 'react';

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">


      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20">
        {/* Hero section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Return Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Thank you for choosing our store. Your satisfaction with our
            products and services is our top priority. Please review our return
            policy below.
          </p>
        
        </div>

        {/* Policy sections - Apple style with clean typography */}
        <div className="space-y-10 md:space-y-12 divide-y divide-gray-100/80">
          {/* Section 1 - Refund and Exchange */}
          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Refund and Exchange
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We do not accept refunds of purchased products. However, we offer
              exchange/replacement free of charge for the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed pl-2">
              <li className="pl-1">
                <span className="font-medium">Damaged item:</span> If a damaged
                product is delivered, notify us within 24 hours of receipt to
                request assistance.
              </li>
              <li className="pl-1">
                <span className="font-medium">Incorrect order:</span> If the
                product, size, or customization does not match your order,
                report it within 24 hours, and we will arrange an alteration if
                eligible.
              </li>
            </ul>
          </section>

          {/* Section 2 - Return Requirements */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Return Requirements
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Returned products must be unworn with the original tag and proof
              of purchase, such as a receipt or order confirmation, included.
            </p>
          </section>

          {/* Section 3 - Policy Changes */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Policy Updates
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Please note that this return policy is subject to change without
              prior notice. We encourage you to review the policy periodically
              for any updates.
            </p>
          </section>

          {/* Section 4 - Contact */}
          <section id="contact" className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Contact Us
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any further questions or concerns regarding our return
              policy, please don&apos;t hesitate to contact our customer service
              team at{' '}
              <a
                href="mailto:tecdure@gmail.com"
                className="text-black underline underline-offset-2 hover:no-underline transition-colors"
              >
                tecdure@gmail.com
              </a>
              . We are here to assist you and ensure your satisfaction with our
              products.
            </p>
          </section>
        </div>

 
      </main>
    </div>
  );
}