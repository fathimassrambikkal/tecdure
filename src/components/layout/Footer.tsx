import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-10 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo white.png"
                alt="Tecdure"
                width={220}
                height={70}
                priority
                className="
                  h-10
                  sm:h-11
                  md:h-12
                  lg:h-14
                  xl:h-16
                  w-auto
                  object-contain
                  transition-all
                  duration-300
                  hover:opacity-80
                  hover:scale-[1.02]
                "
              />
            </Link>

            <p className="text-white/40 text-sm leading-relaxed font-light">
              Ready to wear and made to order clothing brand with technology &
              fashion intertwined to create garments with purpose.
            </p>
          </div>

          {/* Terms & Policies */}
          <div>
            <h4 className="text-white/90 text-[11px] font-light tracking-[0.25em] uppercase mb-5">
              Terms & Policies
            </h4>

            <ul className="space-y-2.5 text-sm text-white/40 font-light">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/return-policy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Return Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping-policy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/90 text-[11px] font-light tracking-[0.25em] uppercase mb-5">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-sm text-white/40 font-light">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/account"
                  className="hover:text-white transition-colors duration-300"
                >
                  My Account
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="hover:text-white transition-colors duration-300"
                >
                  My Cart
                </Link>
              </li>

              <li>
                <Link
                  href="/checkout"
                  className="hover:text-white transition-colors duration-300"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/90 text-[11px] font-light tracking-[0.25em] uppercase mb-5">Contact</h4>
            <p className="text-white/70">
  <a
    href="mailto:tecdure@gmail.com"
    className="hover:text-white transition-colors duration-300"
  >
    tecdure@gmail.com
  </a>
</p>
             

            <p className="text-white/40 text-sm mt-2 font-light">
              +974 5145 1588
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://wa.me/97451451588"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="https://www.instagram.com/tecdure?igsh=eHI1Y2xqOHNibDNx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/tecdure?mibextid=wwXIfr&rdid=XCbztnj3y3kpAUCb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QcKhDXPVn%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.snapchat.com/t/pRwbSkLQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Snapchat"
                className="text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaSnapchatGhost size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@tecdure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-white/40 font-light text-center lg:text-left tracking-wide">
            © 2026 – tecdure. All Rights Reserved.
          </p>

          {/* Payment */}
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-xs uppercase tracking-[0.25em] hidden sm:block font-light">
              Secure Payments
            </span>

            <Image
              src="/images/pay.png"
              alt="Payment Methods"
              width={180}
              height={35}
              className="h-7 w-auto object-contain brightness-90 hover:brightness-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}