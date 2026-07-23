// app/privacy-policy/page.tsx
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">

   

      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20">
        {/* Hero section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            At Tecdure, we are committed to protecting your privacy. This policy
            explains how we collect, use, and protect your personal information.
          </p>
        
        </div>

        {/* Policy sections - Apple style with clean typography */}
        <div className="space-y-10 md:space-y-12 divide-y divide-gray-100/80">
          {/* Section 1 */}
          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Information We Collect
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We may collect personal information such as your name, contact
              details, order information, payment details, and any customization
              requests.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              How We Use Your Information
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-base text-gray-700 leading-relaxed pl-2">
              <li className="pl-1">Process and fulfill your orders.</li>
              <li className="pl-1">
                Communicate with you regarding orders or inquiries.
              </li>
              <li className="pl-1">Improve our services and website.</li>
              <li className="pl-1">Comply with legal obligations.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Sharing Your Information
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We do not sell your personal information. However, we may share it
              with third parties (e.g., delivery partners) to process orders or
              as required by law. If your data is transferred outside QATAR, we
              ensure compliance with applicable regulations.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Data Retention
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined or as required by law.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Security of Your Information
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We use encryption, secure payment gateways, and other reasonable
              measures to protect your information. However, no method of
              transmission over the internet is completely secure.
            </p>
          </section>

          {/* Section 6 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Your Rights
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your personal
              information. Please contact us at{' '}
              <a
                href="mailto:tecdure@gmail.com"
                className="text-black underline underline-offset-2 hover:no-underline transition-colors"
              >
                tecdure@gmail.com
              </a>{' '}
              to exercise these rights.
            </p>
          </section>

          {/* Section 7 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Cookies
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our website may use cookies to analyze traffic and enhance your
              experience. You can manage or disable cookies through your browser
              settings.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Consent
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              By using our website, you consent to our collection and use of
              your information as described in this policy.
            </p>
          </section>

          {/* Section 9 */}
          <section className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Changes to This Policy
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page and are effective immediately. This policy
              was last updated on 07/07/2025.
            </p>
          </section>

          {/* Section 10 - Contact */}
          <section id="contact" className="pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Contact Us
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any questions about this policy, please contact us at{' '}
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