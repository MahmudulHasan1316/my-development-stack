import heroImage from '../assets/banner-stack.png'

export default function Hero() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Build Your Ideal{" "}
              <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* DaisyUI + Tailwind Gradient */}
              <button className="btn h-12 w-48 rounded-[10px] border-0 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-md hover:opacity-90">
                Explore Technologies
              </button>

              {/* DaisyUI Outline Button */}
              <button className="btn h-12 w-48 btn-outline rounded-[10px] border-gray-200 shadow-none text-[#475569]">Learn More</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Development Stack"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
