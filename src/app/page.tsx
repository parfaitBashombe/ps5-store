import React from "react";
import { allGames } from "@/lib/data/games-data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="relative h-[60vh] min-h-[480px] w-full overflow-hidden bg-cover bg-center md:h-[80vh]"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkNWOrUtZYByB7cp6UhJ3FUvXy6MiZxyf_5dytgOKXDaRUHd_mU5ZaMWAvv_reQiI89TDjGz8zgD4-zX91bef7-wQxYjsQiOs0eJ9J4jqCn9NxKiRW9EkK7801V-VdkEI7mOScpzvE5n8HT-npTI9RSAuyozjPJDK8FtOPVaiXcuXOOmMDgEwBOh2QfZuGDRjymhbb83ji_sXxIe-n3A4ghbL6Fnrus_0NoZdjVBbl80_eMHyHVPx8AMzk4vBb8IV4xBI8hIUcWA')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
              The Future of Gaming is Here
            </h1>
            <h2 className="mx-auto max-w-2xl text-white/90 text-sm font-normal leading-normal sm:text-base">
              Experience lightning-fast loading, deeper immersion, and an all-new
              generation of incredible PlayStation games.
            </h2>
          </div>
          <button className="mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
            <span className="truncate">Shop Consoles</span>
          </button>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <section className="py-12 md:py-16">
          <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5">
            Featured Products
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 p-4">
            <div className="flex flex-col gap-3 pb-3 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfHbfc-DVzp8gSe8T3KsWQeadMUGg-Jl416LxO2LmkC0IhE7eiYYHjpHMybAMtU6khhvOVwafWMtahIrIfnGZdjJXbYG8bcg0Va13MIlcDN7mAxNMuLVto7m-A-ZngGQMoW1a_auvrqMJd6XT7LBN8IlVROHhxheErwowMdfWdETLPjEb2Jr6cpuPiGDOVScdoHHTPNAycCk-Cw68Y1fQNx0LHt3cEiuB_6lvffBU3LRgTQn7oHn5oUImTY8FqlXeBTHJgogJeIQ")',
                }}
              ></div>
              <div>
                <p className="text-foreground text-base font-medium leading-normal">
                  PlayStation 5 Console
                </p>
                <p className="text-foreground/60 text-sm font-normal leading-normal">
                  $499.99
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfM5REoKP41HM9ZczhKOMJbvelf25df4-l8YUjXZ2f1qngk5V2csBNOLUNK_EKe6fzZtdLM3uLAMXs6CyW-Ve6QukGeHJ2ASd0IJbiT_nOrc-yVRvRTBe5-lvnrJlFuBEowWzN_QSKxy6E9oMe8wwOKViu3b-5bD_3kjZ_QCYB-vWGVimaVG71McLDZy6fayJN_n2bcH3z8FwTLLjKEhX2XAAIYnjO8Su1o2irhbpp9LT-t3s0n9EHh6wiO9nPRqsyOF9hezBZpw")',
                }}
              ></div>
              <div>
                <p className="text-foreground text-base font-medium leading-normal">
                  DualSense Wireless Controller
                </p>
                <p className="text-foreground/60 text-sm font-normal leading-normal">
                  $69.99
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfBlKi9PshbrbVFTLxHg0baIFHCQt9dDSO-2zwyU1BRbtr4mI6YtMNA-tncm4ibmW7Gjsile-3mO11p5IZy1CIq8SN8IQR0CtyK2TKVVUMGGB9J2Sgc3-r4QeJzXstAO4HGecHDKqHfYJfsyOx26HZ1ugrAwoXlme2J-pSHoumZ0hiEvXzUA-IXP6lb32ca2FpPxbIEKVR5TmJoRGV0_GqoheuUia3S0babBOTV4N2HYLIx4y25OzHKeHXOqeU5wgRKOC-wQtH1Q")',
                }}
              ></div>
              <div>
                <p className="text-foreground text-base font-medium leading-normal">
                  Marvel&apos;s Spider-Man 2
                </p>
                <p className="text-foreground/60 text-sm font-normal leading-normal">
                  $69.99
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCW-xz_Smo_Pc_2TehHWn5uo4JB2jxpqtJ7UXr9-3Z7gbNdkzwhfnHRlLIYatXCB-E1z8mpWn6flxotV6eqIclglxFC5EYbZR2AUM8rjMr3QZB3cbY4jDfTcefy2U92eU5XkWKDOkku45iAL1y9jCpiNt-LM95hb87D3SoknvcM2oISi6OmiAbKiNzl7784F6u77oOw0m-_b3wjf_Oj8lQKuzzGo1TpfSX7oQ2B0cET7opIlWECP0T_ludMFOhTGcWsXIscN6wvxw")',
                }}
              ></div>
              <div>
                <p className="text-foreground text-base font-medium leading-normal">
                  Horizon Forbidden West
                </p>
                <p className="text-foreground/60 text-sm font-normal leading-normal">
                  $59.99
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div
            className="relative flex min-h-[300px] flex-col items-start justify-center gap-4 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-white md:p-12"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkNWOrUtZYByB7cp6UhJ3FUvXy6MiZxyf_5dytgOKXDaRUHd_mU5ZaMWAvv_reQiI89TDjGz8zgD4-zX91bef7-wQxYjsQiOs0eJ9J4jqCn9NxKiRW9EkK7801V-VdkEI7mOScpzvE5n8HT-npTI9RSAuyozjPJDK8FtOPVaiXcuXOOmMDgEwBOh2QfZuGDRjymhbb83ji_sXxIe-n3A4ghbL6Fnrus_0NoZdjVBbl80_eMHyHVPx8AMzk4vBb8IV4xBI8hIUcWA")',
            }}
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Save on PS5 Bundles
            </h2>
            <p className="max-w-md text-white/90">
              Get the console, a controller, and a blockbuster game in one
              package. The ultimate way to start your next-gen journey.
            </p>
            <button className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
              <span className="truncate">Explore Bundles</span>
            </button>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5">
            Discover More
          </h2>
          <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3">
            <div className="group relative flex h-64 items-end justify-start overflow-hidden rounded-xl p-6 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-2-keyart-01-en-25may23?$1600px$")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="relative z-10 text-2xl font-bold">New Releases</h3>
            </div>
            <div className="group relative flex h-64 items-end justify-start overflow-hidden rounded-xl p-6 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-hero-banner-desktop-01-en-07sep21?$1600px$")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="relative z-10 text-2xl font-bold">Bestsellers</h3>
            </div>
            <div className="group relative flex h-64 items-end justify-start overflow-hidden rounded-xl p-6 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://gmedia.playstation.com/is/image/SIEPDC/returnal-hero-banner-desktop-01-en-11dec20?$1600px$")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="relative z-10 text-2xl font-bold">
                PS5 Exclusives
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

