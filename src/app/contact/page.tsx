import React from "react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background-dark pt-24 pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="mb-12">
          <h1 className="text-white text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white/60 max-w-2xl">
            For questions about orders, products, or support, please fill out the
            form below or use our contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-white text-xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white">
                  mail
                </span>
              </div>
              <div>
                <p className="text-white font-medium">support@ps5store.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white">
                  call
                </span>
              </div>
              <div>
                <p className="text-white font-medium">+1 (800) 555-0199</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white">
                  location_on
                </span>
              </div>
              <div>
                <p className="text-white font-medium">
                  123 Gaming Avenue, Suite 404
                  <br />
                  PlayStation City, CA 90210
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 6.363a4.733 4.733 0 100 9.467 4.733 4.733 0 000-9.467zM12 15.44a3.44 3.44 0 110-6.88 3.44 3.44 0 010 6.88zm4.75-8.82a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-white text-xl font-bold mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Question about an order"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Please describe your issue or question..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
