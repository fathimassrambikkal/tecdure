"use client";

import Link from "next/link";

const accountItems = [
  {
    title: "My Profile",
    description: "Manage your personal information.",
    href: "/account/profile",
  },
  {
    title: "Orders",
    description: "Track and view your recent purchases.",
    href: "/account/orders",
  },
  {
    title: "Wishlist",
    description: "Your saved favourite products.",
    href: "/favorites",
  },
  {
    title: "Addresses",
    description: "Manage your shipping addresses.",
    href: "/account/addresses",
  },
  {
    title: "Change Password",
    description: "Update your account password.",
    href: "/account/change-password",
  },
];

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1800px]">

        {/* Header */}
        <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">

          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm md:text-base text-black/50">
            Welcome Back
          </p>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif">
            My Account
          </h1>

          <p className="mt-3 sm:mt-4 max-w-xl sm:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg text-black/45 leading-6 sm:leading-7 md:leading-8">
            Manage your orders, profile, addresses and account settings from
            one place.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-4">

          {accountItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl sm:rounded-3xl border border-black/10 p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif">
                {item.title}
              </h2>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 opacity-70 group-hover:opacity-100">
                {item.description}
              </p>

              <div className="mt-8 sm:mt-10 flex items-center justify-between">

                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                  Open
                </span>

                <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </div>
            </Link>
          ))}

          {/* Logout */}
          <button
            className="rounded-2xl sm:rounded-3xl border border-red-500/40 p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 text-left transition hover:bg-red-500 hover:text-white hover:border-red-500"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif">
              Logout
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base opacity-70">
              Sign out of your account securely.
            </p>

            <div className="mt-8 sm:mt-10 text-[10px] sm:text-xs uppercase tracking-[0.25em]">
              Logout
            </div>

          </button>

        </div>

      </div>
    </main>
  );
}