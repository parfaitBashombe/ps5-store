import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkNWOrUtZYByB7cp6UhJ3FUvXy6MiZxyf_5dytgOKXDaRUHd_mU5ZaMWAvv_reQiI89TDjGz8zgD4-zX91bef7-wQxYjsQiOs0eJ9J4jqCn9NxKiRW9EkK7801V-VdkEI7mOScpzvE5n8HT-npTI9RSAuyozjPJDK8FtOPVaiXcuXOOmMDgEwBOh2QfZuGDRjymhbb83ji_sXxIe-n3A4ghbL6Fnrus_0NoZdjVBbl80_eMHyHVPx8AMzk4vBb8IV4xBI8hIUcWA')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
            The Future of Gaming is Here
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 text-sm font-normal leading-normal sm:text-base">
            Your ultimate destination for the complete PlayStation 5 experience.
            Dive into next-gen gaming with our curated collection of consoles,
            accessories, and titles.
          </p>
          <button className="mt-8 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
            <span className="truncate">Explore Products</span>
          </button>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        {/* Mission & Values */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-foreground text-3xl font-bold mb-4">
              Our Mission & Values
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              We are dedicated to providing gamers with the ultimate PS5
              experience, built on a foundation of passion, quality, and
              community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "sports_esports",
                title: "Passion for Gaming",
                desc: "We live and breathe gaming, ensuring every product we offer is something we'd use ourselves.",
              },
              {
                icon: "favorite",
                title: "Customer First",
                desc: "Your satisfaction is our top priority. We're here to support your gaming journey every step of the way.",
              },
              {
                icon: "memory",
                title: "Cutting-Edge Tech",
                desc: "We stay ahead of the curve, offering the latest and greatest in PlayStation 5 technology.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  {item.icon}
                </span>
                <h3 className="text-foreground text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-foreground text-3xl font-bold mb-4">
              Our Story
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              From a passionate idea to a thriving community hub, this is our
              journey.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2020",
                title: "Inception",
                desc: "A group of avid gamers envisioned a dedicated space for all things PlayStation 5.",
                icon: "lightbulb",
              },
              {
                year: "2021",
                title: "Grand Opening",
                desc: "Our digital doors opened, welcoming the first wave of next-gen gamers.",
                icon: "storefront",
              },
              {
                year: "2022",
                title: "First 10,000 Sales",
                desc: "A major milestone achieved, thanks to our incredible and growing community.",
                icon: "rocket_launch",
              },
              {
                year: "2023",
                title: "Community Hub Launch",
                desc: "Launched forums and events to bring PS5 enthusiasts together.",
                icon: "groups",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  {index !== 3 && (
                    <div className="w-0.5 h-full bg-white/10 my-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-primary font-bold">
                    {item.year}
                  </span>
                  <h3 className="text-foreground text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-foreground text-3xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              The passionate gamers behind the ultimate PS5 destination. We&apos;re
              dedicated to bringing you the best experience possible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Jane Doe",
                role: "Founder & CEO",
                desc: "A lifelong gamer with a vision to create the perfect store for PlayStation fans.",
                img: "https://i.pravatar.cc/150?u=jane",
              },
              {
                name: "John Smith",
                role: "Head of Operations",
                desc: "Ensuring every order is perfect and every customer is happy.",
                img: "https://i.pravatar.cc/150?u=john",
              },
              {
                name: "Emily White",
                role: "Community Manager",
                desc: "Connecting with our community and curating the best PS5 content.",
                img: "https://i.pravatar.cc/150?u=emily",
              },
              {
                name: "Michael Brown",
                role: "Lead Technician",
                desc: "The expert on all things hardware, from consoles to accessories.",
                img: "https://i.pravatar.cc/150?u=michael",
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-foreground text-lg font-bold">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-bold mb-2">
                  {member.role}
                </p>
                <p className="text-foreground/60 text-xs">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
