import React from "react";

export default function App() {
  return (
    <>
      <div id="__next">
        <main className="antialiased" id="novium-home">
          <div className="px-4">
            <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
              <svg
                aria-hidden="true"
                className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-5deg] fill-tertiary/[0.05] stroke-gray-100 dark:fill-primary dark:stroke-gray-100"
              >
                <defs>
                  <pattern
                    height="120"
                    id=":R166:"
                    patternunits="userSpaceOnUse"
                    width="120"
                    x="50%"
                    y="-6"
                  >
                    <path d="M.5 120V.5H120" fill="none"></path>
                  </pattern>
                </defs>
                <rect
                  fill="url(#:R166:)"
                  height="100%"
                  stroke-width="0"
                  width="100%"
                ></rect>
                <svg className="overflow-visible" x="50%" y="-6">
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-120"
                    y="240"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="120"
                    y="360"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-600"
                    y="960"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-1080"
                    y="720"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="600"
                    y="360"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-120"
                    y="-480"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="480"
                    y="-600"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-1080"
                    y="0"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-240"
                    y="960"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="840"
                    y="-1080"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-960"
                    y="-240"
                  ></rect>
                  <rect
                    height="121"
                    stroke-width="0"
                    width="121"
                    x="-1200"
                    y="-120"
                  ></rect>
                </svg>
              </svg>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto mt-32 text-center">
              <h1 className="text-5xl sm:text-7xl font-extrabold text-blue-700 tracking-tight glow-text">
                <span className="line-under-text">Novium</span>
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-zinc-700 font-medium leading-normal">
                Revolutionizing material development with Generative AI
                <br />
                to accelerate discovery, reduce costs, and enable sustainable
                innovation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mt-12">
                <a href="#features">
                  <button className="text-zinc-700 inline-flex items-center justify-center bg-white text-base px-6 py-2 border border-zinc-200 rounded-2xl transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_0,_0,_.15)_0_2px_8px] hover:opacity-80">
                    Explore Challenges
                  </button>
                </a>
                <a href="#solutions">
                  <button className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 py-2 rounded-2xl transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_0,_0,_.2)_0_2px_8px] hover:opacity-80">
                    Discover Our Approach
                  </button>
                </a>
              </div>
              <div
                className="overflow-hidden pt-20 px-4 w-full relative"
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-[100%] overflow-x-hidden md:w-3/4 mx-auto h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[32rem] -mb-8 md:-mb-16 max-w-5xl">
                  <img
                    alt="Dashboard Image"
                    className="transition duration-500 scale-100 rounded-xl md:rounded-3xl border mx-auto object-cover shadow-lg hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.7)] object-right-top"
                    decoding="async"
                    loading="lazy"
                    sizes="100vw"
                    src="images/dashboard.png"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      color: "transparent"
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="px-4 bg-zinc-900 py-20 md:py-40 relative group"
              id="features"
            >
              <div className="absolute w-96 h-96 -left-20 -top-20 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl rounded-full opacity-20"></div>
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
                  Key Challenges in Material Development
                </h2>
                <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed">
                  The material development industry faces critical challenges
                  that hinder innovation and progress. Slow R&amp;D cycles,
                  driven by traditional trial-and- error methods, lead to
                  inefficiencies and delayed outcomes. High costs associated
                  with prototyping and testing further limit companies' ability
                  to innovate. At the same time, growing demands for sustainable
                  and eco- friendly materials create pressure, as developing
                  these solutions is both complex and expensive.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-20 px-4">
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center">
                    <svg
                      className="text-primary h-5 w-5 text-zinc-900"
                      fill="currentColor"
                      viewbox="0 0 24 24"
                    >
                      <path d="M9 2v2h1v4.586l-5.707 5.707a1 1 0 0 0 .707 1.707H19a1 1 0 0 0 .707-1.707L14 8.586V4h1V2H9zM7.414 14l4-4h1.172l4 4H7.414z"></path>
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-white text-2xl font-semibold">
                      R&amp;D Inefficiencies
                    </h3>
                    <p className="text-zinc-100 mt-4 text-base leading-relaxed">
                      Traditional trial-and-error methods slow down research and
                      increase costs, making innovation difficult to scale.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center">
                    <svg
                      className="text-primary h-5 w-5 text-zinc-900"
                      fill="currentColor"
                      viewbox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.91 8.19 7 9.5v-2.02c-2.9-1.13-5-3.94-5-7.48 0-4.42 3.58-8 8-8 2.48 0 4.71 1.12 6.22 2.88C17.84 8.57 16 11.05 16 14v4l4 4 1.41-1.41-3.59-3.59V14c0-3.87 3.13-7 7-7v2c-2.76 0-5 2.24-5 5v3.17l-3.59-3.59L12 22l-1.41-1.41L14.17 17H12c-4.97 0-9-4.03-9-9s4.03-9 9-9z"></path>
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-white text-2xl font-semibold">
                      Sustainability Pressures
                    </h3>
                    <p className="text-zinc-100 mt-4 text-base leading-relaxed">
                      The demand for greener materials is rising, but developing
                      sustainable alternatives remains expensive and complex.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center">
                    <svg
                      className="text-primary h-5 w-5 text-zinc-900"
                      fill="currentColor"
                      viewbox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10.01142 10.01142 0 0 0 12 2Zm7.93 9H17.07a7.9925 7.9925 0 0 0-1.15-4.44A8.03334 8.03334 0 0 1 19.93 11ZM12 20a8.0165 8.0165 0 0 1-6.92-4h13.84A8.0165 8.0165 0 0 1 12 20Zm-7.93-9a8.03334 8.03334 0 0 1 4.01-5.44A7.9925 7.9925 0 0 0 6.93 11Zm2.23 2a7.9925 7.9925 0 0 0 1.15 4.44A8.03334 8.03334 0 0 1 4.07 13ZM12 4a8.0165 8.0165 0 0 1 6.92 4H5.08A8.0165 8.0165 0 0 1 12 4Zm1.77 13.44A7.9925 7.9925 0 0 0 17.07 13H6.93a7.9925 7.9925 0 0 0 3.3 4.44ZM13.85 13A6.05194 6.05194 0 0 1 12 18a6.05194 6.05194 0 0 1-1.85-5Z"></path>
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-white text-2xl font-semibold">
                      Climate Imperative
                    </h3>
                    <p className="text-zinc-100 mt-4 text-base leading-relaxed">
                      Meeting climate goals demands materials that are
                      low-emission and energy-efficient — a challenge for
                      conventional R&amp;D.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-4 bg-white py-20 md:py-32 relative overflow-hidden"
              id="solutions"
            >
              <div className="absolute h-96 -top-64 inset-x-0 w-1/2 mx-auto bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl rounded-full opacity-50"></div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                  Our Smart Solutions
                </h2>
                <p className="mt-6 text-lg md:text-xl text-zinc-700 leading-relaxed max-w-3xl mx-auto">
                  Cutting-edge solution that directly addresses the challenges
                  of slow R&amp;D cycles, high costs, and sustainability demands
                  in material development. Our generative AI platform
                  accelerates innovation by replacing traditional
                  trial-and-error methods with precise digital prototyping and
                  simulation. This approach not only saves time but also
                  significantly reduces development costs by minimizing the need
                  for physical testing.
                </p>
              </div>
              <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
                <div className="shadow-lg px-8 py-12 rounded-xl border bg-white">
                  <div className="mb-6">
                    <i className="fas fa-lightbulb text-[#d62828] text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#d62828]">
                    Faster Innovation
                  </h3>
                  <p className="mt-4 text-zinc-700 text-lg leading-relaxed">
                    Replace traditional testing with rapid digital simulations,
                    accelerating R&amp;D and speeding up the path from idea to
                    market.
                  </p>
                </div>
                <div className="shadow-lg px-8 py-12 rounded-xl border bg-white">
                  <div className="mb-6">
                    <i className="fas fa-dollar-sign text-[#d62828] text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#d62828]">
                    Cost Reduction
                  </h3>
                  <p className="mt-4 text-zinc-700 text-lg leading-relaxed">
                    Cut material development costs by minimizing physical
                    testing and optimizing formulations for performance and
                    efficiency.
                  </p>
                </div>
                <div className="shadow-lg px-8 py-12 rounded-xl border bg-white">
                  <div className="mb-6">
                    <i className="fas fa-leaf text-[#d62828] text-4xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#d62828]">
                    Eco-Friendly Solutions
                  </h3>
                  <p className="mt-4 text-zinc-700 text-lg leading-relaxed">
                    Advance sustainability with AI-powered insights that
                    recommend low-impact, high-performance materials tailored to
                    your industry.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl bg-vulcan-700 mx-4 mb-20 mt-20 text-gray-100 max-w-6xl lg:mx-auto min-h-96 h-full overflow-hidden pb-4">
                <div
                  className="absolute inset-0 top-0 bg-grid-vulcan-500"
                  style={{
                    maskImage: "linear-gradient(to bottom, transparent, white, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, white, transparent)"
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold my-4 text-center">
                      So what are you waiting for?
                    </h2>
                    <p className="my-4 text-base text-gray-300 md:text-lg tracking-wide font-light text-center max-w-lg mx-auto">
                      We are here to help you with your business. Get in touch
                      with us and we will get back to you as soon as possible.
                    </p>
                    <div className="flex justify-center">
                      <button
                        as="button"
                        className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2"
                        variant="large"
                      >
                        <a href="https://www.linkedin.com/company/nov-ium">
                          Contact Us
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8">
          <div className="flex flex-col justify-center items-center py-10">
            <a
              className="font-bold text-sm flex items-center justify-center text-white space-x-2 text-black text-xl"
              href="/"
            >
              <span className="bg-primary w-6 h-6 flex items-center justify-center rounded-[6px] font-mono relative overflow-hidden">
                <span className="absolute w-full h-full transform translate-x-3 bg-white/[0.2] rotate-45"></span>
              </span>
              <span className="font-mono text-black text-xl">Novium</span>
            </a>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
              <a className="text-zinc-500 text-sm relative" href="#novium-home">
                <span className="relative z-10 px-2 py-2 inline-block">
                  Home
                </span>
              </a>
              <a className="text-zinc-500 text-sm relative" href="#features">
                <span className="relative z-10 px-2 py-2 inline-block">
                  Explore Challenges
                </span>
              </a>
              <a className="text-zinc-500 text-sm relative" href="#solutions">
                <span className="relative z-10 px-2 py-2 inline-block">
                  Discover Our Approach
                </span>
              </a>
            </div>
            <p className="text-slate-500 text-sm font-light text-center mt-8 border-t border-zinc-100 pt-4">
              © 2025 Novium Gen Ai. All rights reserved.
            </p>
            <div className="flex flex-row justify-center space-x-2 mt-2">
              <a
                className="text-zinc-500 text-sm relative"
                href="https://www.linkedin.com/company/nov-ium"
                target="__blank"
              >
                <span className="relative z-10 px-2 py-2 inline-block">
                  <svg
                    className="h-5 w-5 hover:text-primary transition duration-150"
                    fill="currentColor"
                    height="1em"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
