// app/terms-of-service/page.tsx
import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* header with subtle border */}


      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20">
        {/* Hero section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Terms of Service
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            By visiting our site or purchasing from us, you agree to comply with
            and be bound by the following Terms and Conditions as well as the
            additional terms outlined in the policies referenced herein or
            available by hyperlink. Please review these Terms carefully.
          </p>
        </div>

        {/* Terms sections - Apple style with clean typography */}
        <div className="space-y-10 md:space-y-12 divide-y divide-gray-100/80">
          {/* Section 1 - Products and Services */}
          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Products and Services
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Certain products or services may be available exclusively online
              through the website. These products or services may have limited
              quantities and are subject to return or exchange only according to
              our Return Policy. Once the order is placed, it is considered a
              final sale and cannot be cancelled. Ensure that all information,
              including size and customization requests, is accurate before
              submitting your order.
            </p>
          </section>

          {/* Section 2 - Production and Delivery */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Production and Delivery
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The estimated durations for order production, preparation and
              delivery are outlined in our shipping policy. The listed
              timeframes are estimates and may or may not vary, based on factors
              beyond our control.
            </p>
          </section>

          {/* Section 3 - Customization and Alterations */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Customization and Alterations
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Requests for special customization must be communicated prior to
              placing an order. Once processing begins, no changes can be made.
            </p>
          </section>

          {/* Section 4 - Damaged Products */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Damaged Products
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We do not accept returns of damaged products unless a damaged
              product was delivered and the damage was reported within 24 hours
              of receiving the item. Please inspect your order upon delivery and
              notify us promptly if any damage is found.
            </p>
          </section>

          {/* Section 5 - Payment */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Payment
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Full payment is required at the time of order placement.
            </p>
          </section>

          {/* Section 6 - Intellectual Property */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Intellectual Property
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              All content on the Site, including text, graphics, logos, and
              images, is the property of Tecdure and is protected by copyright
              and other intellectual property laws. You may not reproduce,
              distribute, or otherwise use any content from the Site without our
              prior written consent.
            </p>
          </section>

          {/* Section 7 - Limitation of Liability */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Limitation of Liability
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Tecdure shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising out of or in connection with your use of the Site
              or the products purchased.
            </p>
          </section>

          {/* Section 8 - Governing Law */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Governing Law
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of QATAR. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts in QATAR.
            </p>
          </section>

          {/* Section 9 - Changes to Terms */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Changes to Terms
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Any
              changes will be effective immediately upon posting on the Site.
              Your continued use of the Site constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          {/* Section 10 - Contact */}
          <section id="contact" className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Contact Us
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any questions or concerns about these Terms, please
              contact us at{' '}
              <a
                href="mailto:tecdure@gmail.com"
                className="text-black underline underline-offset-2 hover:no-underline transition-colors"
              >
                tecdure@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

      </main>
    </div>
  );
}