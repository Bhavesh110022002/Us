const features = [
  {
    icon: "👥",
    title: "Create your Us",
    text: "Start your shared space in seconds",
  },
  {
    icon: "💡",
    title: "Add ideas",
    text: "Share the things you want to do",
  },
  {
    icon: "✓",
    title: "Do things together",
    text: "Turn ideas into amazing experiences",
  },
  {
    icon: "♡",
    title: "Keep memories",
    text: "Save photos, stories and moments",
  },
];

const ideas = [
  {
    icon: "🌅",
    title: "Watch a sunrise together",
    description: "Somewhere quiet and beautiful",
    status: "Idea",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: "🍕",
    title: "Make pizza at home",
    description: "Try a new recipe together",
    status: "Planned",
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: "🚗",
    title: "Weekend road trip",
    description: "Explore a new place nearby",
    status: "Planned",
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: "🎡",
    title: "Visit an amusement park",
    description: "Ride everything and eat all the snacks",
    status: "Idea",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: "🎈",
    title: "Take a hot air balloon ride",
    description: "See the world from above",
    status: "Completed",
    color: "bg-green-100 text-green-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-violet-100 text-slate-800">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="text-4xl font-serif italic font-bold text-violet-700">
          Us<span className="text-pink-500">♥</span>
        </div>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#features" className="hover:text-pink-500">
            Features
          </a>
          <a href="#how" className="hover:text-pink-500">
            How it works
          </a>
          <a href="#groups" className="hover:text-pink-500">
            For groups
          </a>
          <a href="#about" className="hover:text-pink-500">
            About
          </a>
        </div>

        <button className="rounded-full border border-violet-300 bg-white px-6 py-2 font-medium text-violet-700 shadow-sm transition hover:bg-violet-50">
          Log in
        </button>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-200 via-pink-100 to-violet-300 px-7 py-16 shadow-xl md:px-16 md:py-24">
          
          {/* Decorative hearts */}
          <div className="absolute right-10 top-10 text-5xl text-pink-400 opacity-60">
            ♡
          </div>
          <div className="absolute bottom-20 right-20 text-3xl text-violet-500 opacity-50">
            ✦
          </div>

          <div className="relative max-w-2xl">
            <p className="mb-4 font-medium tracking-wide text-violet-700">
              A place for the people who matter ❤️
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Things are better
              <br />
              when we do them
              <br />
              <span className="font-serif italic text-pink-500">
                together.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-700">
              Us is a shared space for couples, friends, families and groups.
              Make plans, collect ideas, experience them together, and keep
              the memories forever.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                ♥ Create an Us
              </button>

              <button className="rounded-full bg-white px-8 py-4 font-semibold text-violet-700 shadow-md transition hover:scale-105">
                Log in
              </button>
            </div>
          </div>

          {/* Couple illustration */}
          <div className="absolute bottom-0 right-0 hidden h-full w-[40%] md:block">
            <div className="absolute bottom-0 right-10 h-80 w-64 rounded-t-full bg-gradient-to-t from-violet-500/60 to-pink-200/20" />
            <div className="absolute bottom-10 right-32 text-[10rem] leading-none">
              🧑‍🤝‍🧑
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-10 md:px-10">
        <div className="grid gap-4 rounded-3xl bg-white/80 p-5 shadow-lg backdrop-blur md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl p-5 transition hover:bg-pink-50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-violet-100 text-xl">
                {feature.icon}
              </div>

              <h3 className="font-semibold">{feature.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section id="how" className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
          
          {/* SIDEBAR */}
          <aside className="hidden border-r border-pink-100 bg-gradient-to-b from-pink-50 to-violet-50 p-5 lg:block">
            <div className="mb-8 text-3xl font-serif italic font-bold text-violet-700">
              Us<span className="text-pink-500">♥</span>
            </div>

            <div className="space-y-2">
              {[
                ["⌂", "Home"],
                ["♡", "Ideas"],
                ["▣", "Plan"],
                ["✓", "Completed"],
                ["▧", "Memories"],
                ["◷", "Calendar"],
                ["♧", "Members"],
                ["⚙", "Settings"],
              ].map(([icon, label], index) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                    index === 0
                      ? "bg-pink-100 text-pink-600"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  <span>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </aside>

          {/* DASHBOARD */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-slate-400">Your shared space</p>
                <h2 className="mt-1 text-3xl font-bold">
                  You & Me <span className="text-pink-500">♥</span>
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Our little adventures together ✨
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-violet-400 text-xl shadow">
                👫
              </div>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["💡", "12", "Ideas"],
                ["📅", "3", "Planned"],
                ["✓", "4", "Completed"],
                ["📸", "7", "Memories"],
              ].map(([icon, number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-pink-100 bg-gradient-to-br from-white to-pink-50 p-4"
                >
                  <div className="text-xl">{icon}</div>
                  <div className="mt-2 text-2xl font-bold">{number}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            {/* BUCKET LIST */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  Bucket List <span className="text-pink-400">♡</span>
                </h3>

                <button className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow">
                  + Add Idea
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {ideas.map((idea) => (
                  <div
                    key={idea.title}
                    className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-violet-100 text-xl">
                      {idea.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold">{idea.title}</h4>
                      <p className="truncate text-sm text-slate-400">
                        {idea.description}
                      </p>
                    </div>

                    <span
                      className={`hidden rounded-full px-3 py-1 text-xs font-medium sm:block ${idea.color}`}
                    >
                      {idea.status}
                    </span>

                    <div className="text-slate-400">•••</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="groups"
        className="mx-auto max-w-5xl px-5 pb-20 text-center"
      >
        <div className="rounded-[2rem] bg-gradient-to-r from-pink-200 via-violet-100 to-pink-200 px-6 py-16 shadow-lg">
          <div className="text-5xl">💗</div>

          <h2 className="mt-5 text-4xl font-bold">
            Your people. Your plans. Your memories.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Create your own Us and start collecting the moments you never want
            to forget.
          </p>

          <button className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-9 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
            Create an Us ♥
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="about"
        className="border-t border-pink-100 bg-white/70 px-6 py-8 text-center"
      >
        <div className="text-3xl font-serif italic font-bold text-violet-700">
          Us<span className="text-pink-500">♥</span>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Make plans. Do things. Keep the memories.
        </p>

        <p className="mt-5 text-xs text-slate-400">
          © 2026 Us. Made for the moments that matter.
        </p>
      </footer>
    </main>
  );
}