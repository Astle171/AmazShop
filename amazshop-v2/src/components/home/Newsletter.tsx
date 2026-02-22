export default function Newsletter() {
  return (
    <section className="mt-20 bg-main rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#C9963A" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          Join the Inner Circle
        </h2>
        <p className="text-white/60 mb-8 text-lg">
          Get access to exclusive drops, member-only pricing, and tech tips
          delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 px-4 py-3"
          />
          <button className="bg-accent hover:bg-white hover:text-main text-white font-bold py-3 px-8 rounded-xl transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
