export default function PDPNewsletter() {
  return (
    <section className="mt-28 bg-main rounded-[40px] p-12 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-4">
          Ready for the Upgrade?
        </h2>
        <p className="text-white/60 mb-8 font-medium">
          Subscribe to get notified about new arrivals and exclusive deals on
          premium audio gear.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 rounded-2xl">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 px-4 py-3"
          />
          <button className="bg-accent hover:bg-white hover:text-main text-white font-black py-3 px-8 rounded-xl transition-all">
            Join
          </button>
        </div>
      </div>
    </section>
  );
}
