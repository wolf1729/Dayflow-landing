import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-[#1ba485]/30">
      {/* Soft background blobs */}
      <div className="blob-bg w-[600px] h-[600px] bg-[#1ba485]/10 top-[-200px] left-[-200px]" />
      <div className="blob-bg w-[500px] h-[500px] bg-[#2b443a]/5 bottom-[10%] right-[-100px]" />

      <Navbar />

      <main className="pt-32 pb-16 px-6 sm:px-12 md:px-24 max-w-[1400px] mx-auto flex flex-col items-center">

        {/* --- Hero Section (Split Layout) --- */}
        <section className="mt-12 md:mt-24 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">

          {/* Left Text */}
          <div className="flex-1 max-w-xl text-center md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-[#1f2924] tracking-tight leading-[1.1] mb-6">
              Resume your flow.
            </h1>
            <p className="text-lg md:text-xl text-[#1f2924]/70 mb-10 max-w-lg mx-auto md:mx-0 font-normal leading-relaxed">
              A mindful productivity companion designed to cultivate your focus. Drag, drop, and plant your routines.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center md:justify-start">
              <button className="px-10 py-4 rounded-full bg-[#1ba485] text-white font-bold tracking-wide text-[14px] uppercase hover:bg-[#148369] shadow-lg shadow-[#1ba485]/30 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1">
                Begin Practice
              </button>
            </div>
          </div>

          {/* Right Phone Mockup - Dashboard "Oct 24" */}
          <div className="flex-1 flex justify-center md:justify-end w-full max-w-md relative">
            <div className="relative w-[320px] h-[640px] bg-[#f8f9f8] border-[8px] border-[#1f2924] rounded-[48px] shadow-2xl shadow-[#1ba485]/10 overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-700 flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1f2924] rounded-b-3xl z-20"></div>

              {/* Screen Content Mockup */}
              <div className="w-full h-full flex flex-col p-5 pt-12 relative z-10">

                {/* Header (Date & Profile) */}
                <div className="w-full flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-[#1f2924]/50 uppercase mb-1">Thursday</p>
                    <h2 className="text-3xl font-extrabold text-[#1f2924] tracking-tight">Oct 24</h2>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#1f2924]/20 flex items-center justify-center text-[#1f2924]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                </div>

                {/* Calendar Strip */}
                <div className="flex justify-between items-center mb-8 px-1">
                  {['21', '22', '23'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 opacity-50">
                      <span className="text-[10px] text-[#1f2924]">{['Mon', 'Tue', 'Wed'][i]}</span>
                      <span className="text-lg font-bold text-[#1f2924]">{day}</span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-1 bg-white border border-[#1f2924] rounded-full px-3 py-2 shadow-sm">
                    <span className="text-[10px] font-bold text-[#1f2924]">Today</span>
                    <span className="text-xl font-bold text-[#1f2924]">24</span>
                    <div className="w-1 h-1 rounded-full bg-[#1f2924]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-1 opacity-30">
                    <span className="text-[10px] text-[#1f2924]">Fri</span>
                    <span className="text-lg font-bold text-[#1f2924]">25</span>
                  </div>
                </div>

                {/* Section Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest text-[#1f2924]/50 uppercase font-semibold">Morning Rituals</span>
                  <div className="h-[1px] flex-1 bg-[#1f2924]/10"></div>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="w-full bg-white border border-[#1f2924]/15 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-[#2b443a]"></div>
                    <div className="flex-1">
                      <p className="font-medium text-[#1f2924] text-[15px]">Morning Meditation</p>
                      <p className="text-[12px] text-[#1f2924]/50">15 mins • Mindfulness</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#1f2924]/30">
                      <span className="text-xs font-bold">12</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 17 8 17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 8 12 2 12 2Z" /></svg>
                    </div>
                  </div>

                  <div className="w-full bg-white border border-[#1f2924]/15 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-[#2b443a]"></div>
                    <div className="flex-1">
                      <p className="font-medium text-[#1f2924] text-[15px]">Hydrate</p>
                      <p className="text-[12px] text-[#1f2924]/50">Drink 500ml water</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Nav */}
              <div className="h-16 w-full border-t border-[#1f2924]/10 bg-[#f8f9f8] flex justify-around items-center px-4 absolute bottom-0 z-20">
                <div className="flex flex-col items-center gap-1 text-[#2b443a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21C12 21 16 17 16 11C16 8.5 14.5 7 12 7C9.5 7 8 8.5 8 11C8 17 12 21 12 21Z" /></svg>
                  <span className="text-[10px] font-medium">Garden</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[#2b443a]/40">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 20v-5m-6 5v-9m-6 9V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[10px] font-medium">Insight</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[#2b443a]/40">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  <span className="text-[10px] font-medium">Cultivate</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Features Grid (3 Columns) --- */}
        <section id="features" className="mt-40 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2924] mb-4 tracking-tight">Intentional Design</h2>
            <p className="text-[#1f2924]/60 max-w-2xl mx-auto text-lg leading-relaxed">Every feature is crafted to reduce cognitive load and bring you back to the present moment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-[#1f2924]/5 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[#e4efe5] flex items-center justify-center text-[#1ba485]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22v-9m0 0l-4 4m4-4l4 4m-4-15a3 3 0 100 6 3 3 0 000-6z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1f2924]">
                  {i === 1 ? 'Habit Gardening' : i === 2 ? 'Calm Insights' : 'Mindful Rituals'}
                </h3>
                <p className="text-[#1f2924]/60 leading-relaxed text-sm">Watch your progress bloom. Visual growth mechanics transform daily tracking into a rewarding experience.</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="mt-32 mb-10 w-full max-w-4xl rounded-[3rem] bg-[#2b443a] text-white p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 tracking-tight">Begin Your Journey</h2>
          <p className="text-md md:text-lg text-white/70 mb-10 max-w-md mx-auto relative z-10">
            Join thousands of others cultivating peace and productivity. Plant your first seed today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative z-10">
            <button className="px-8 py-4 rounded-full bg-white text-[#2b443a] font-bold text-[14px] uppercase tracking-wider hover:bg-zinc-100 shadow-xl transition-all duration-300 w-full sm:w-auto">
              Download Now
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm text-[#1f2924]/40 font-medium">
        <p>© 2026 Dayflow App. Nurture your mind.</p>
      </footer>
    </div>
  );
}
