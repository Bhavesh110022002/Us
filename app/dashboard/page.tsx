"use client";

import { FormEvent, useEffect, useState } from "react";

type UsData = {
  name: string;
  description: string;
  type: string;
};

type Idea = {
  id: number;
  title: string;
  description: string;
  category: string;
  status: "Idea" | "Planned" | "Completed";
  createdAt: string;
};

export default function Dashboard() {
  const [us, setUs] = useState<UsData | null>(null);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Date");

  useEffect(() => {
    const savedUs = localStorage.getItem("usData");
    const savedIdeas = localStorage.getItem("usIdeas");

    if (savedUs) {
      setUs(JSON.parse(savedUs));
    }

    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas));
    }
  }, []);

  function saveIdeas(updatedIdeas: Idea[]) {
    setIdeas(updatedIdeas);
    localStorage.setItem("usIdeas", JSON.stringify(updatedIdeas));
  }

  function handleAddIdea(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      alert("Give your idea a name ❤️");
      return;
    }

    const newIdea: Idea = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      category,
      status: "Idea",
      createdAt: new Date().toISOString(),
    };

    saveIdeas([newIdea, ...ideas]);

    setTitle("");
    setDescription("");
    setCategory("Date");
    setShowForm(false);
  }

  function markCompleted(id: number) {
    const updatedIdeas = ideas.map((idea) =>
      idea.id === id
        ? { ...idea, status: "Completed" as const }
        : idea
    );

    saveIdeas(updatedIdeas);
  }

  if (!us) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-pink-50">
        <div className="text-center">
          <div className="text-5xl">💗</div>

          <h1 className="mt-4 text-2xl font-bold">
            No Us found
          </h1>

          <a
            href="/create"
            className="mt-5 inline-block rounded-full bg-pink-500 px-6 py-3 font-semibold text-white"
          >
            Create an Us
          </a>
        </div>
      </main>
    );
  }

  const completed = ideas.filter(
    (idea) => idea.status === "Completed"
  ).length;

  const planned = ideas.filter(
    (idea) => idea.status === "Planned"
  ).length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-violet-100">

      {/* HEADER */}

      <header className="border-b border-pink-100 bg-white/80 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <a
            href="/"
            className="text-3xl font-serif italic font-bold text-violet-700"
          >
            Us<span className="text-pink-500">♥</span>
          </a>

          <button className="rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-medium text-slate-600">
            Profile
          </button>

        </div>
      </header>


      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10">

        {/* WELCOME */}

        <section className="rounded-[2rem] bg-gradient-to-r from-pink-200 via-pink-100 to-violet-200 p-8 shadow-lg md:p-12">

          <p className="text-sm font-medium text-violet-700">
            Your shared space ❤️
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-800 md:text-5xl">
            {us.name}
          </h1>

          <p className="mt-3 max-w-xl text-slate-600">
            {us.description || "Your little adventures together ✨"}
          </p>

        </section>


        {/* STATS */}

        <section className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-2xl">💡</div>
            <div className="mt-3 text-3xl font-bold">
              {ideas.length}
            </div>
            <p className="text-sm text-slate-400">
              Ideas
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-2xl">📅</div>
            <div className="mt-3 text-3xl font-bold">
              {planned}
            </div>
            <p className="text-sm text-slate-400">
              Planned
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-2xl">✓</div>
            <div className="mt-3 text-3xl font-bold">
              {completed}
            </div>
            <p className="text-sm text-slate-400">
              Completed
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-2xl">📸</div>
            <div className="mt-3 text-3xl font-bold">
              0
            </div>
            <p className="text-sm text-slate-400">
              Memories
            </p>
          </div>

        </section>


        {/* BUCKET LIST */}

        <section className="mt-8 rounded-[2rem] bg-white p-7 shadow-xl md:p-10">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>

              <h2 className="text-2xl font-bold">
                Our Bucket List{" "}
                <span className="text-pink-400">
                  ♡
                </span>
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Things we want to experience together.
              </p>

            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-md"
            >
              {showForm ? "Close" : "+ Add Idea"}
            </button>

          </div>


          {/* ADD IDEA FORM */}

          {showForm && (
            <form
              onSubmit={handleAddIdea}
              className="mt-7 rounded-3xl bg-gradient-to-br from-pink-50 to-violet-50 p-6"
            >

              <h3 className="text-xl font-bold">
                Add a new idea 💡
              </h3>

              <div className="mt-5 space-y-4">

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="What do you want to do together?"
                  className="w-full rounded-2xl border border-pink-200 bg-white px-5 py-4 outline-none focus:border-violet-400"
                />

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us a little more..."
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-pink-200 bg-white px-5 py-4 outline-none focus:border-violet-400"
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-2xl border border-pink-200 bg-white px-5 py-4 outline-none"
                >
                  <option>Date</option>
                  <option>Travel</option>
                  <option>Food</option>
                  <option>Adventure</option>
                  <option>Entertainment</option>
                  <option>Personal</option>
                  <option>Other</option>
                </select>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-7 py-4 font-semibold text-white shadow-lg"
                >
                  Add to our Bucket List ♥
                </button>

              </div>

            </form>
          )}


          {/* IDEAS */}

          <div className="mt-8 space-y-4">

            {ideas.length === 0 ? (

              <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 p-12 text-center">

                <div className="text-5xl">
                  🌷
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  Your bucket list is waiting
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Add your first idea and start creating the list of things
                  you want to experience together.
                </p>

                <button
                  onClick={() => setShowForm(true)}
                  className="mt-6 rounded-full bg-pink-500 px-7 py-3 font-semibold text-white shadow-md"
                >
                  Add your first idea ♥
                </button>

              </div>

            ) : (

              ideas.map((idea) => (

                <div
                  key={idea.id}
                  className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-violet-100 text-xl">
                      {idea.category === "Travel"
                        ? "✈️"
                        : idea.category === "Food"
                        ? "🍕"
                        : idea.category === "Adventure"
                        ? "🎢"
                        : idea.category === "Entertainment"
                        ? "🎬"
                        : "💗"}
                    </div>

                    <div className="flex-1">

                      <h3 className="text-lg font-semibold">
                        {idea.title}
                      </h3>

                      {idea.description && (
                        <p className="mt-1 text-sm text-slate-500">
                          {idea.description}
                        </p>
                      )}

                      <p className="mt-2 text-xs text-slate-400">
                        {idea.category}
                      </p>

                    </div>

                    <div className="flex items-center gap-3">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          idea.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : idea.status === "Planned"
                            ? "bg-pink-100 text-pink-700"
                            : "bg-violet-100 text-violet-700"
                        }`}
                      >
                        {idea.status}
                      </span>

                      {idea.status !== "Completed" && (
                        <button
                          onClick={() => markCompleted(idea.id)}
                          className="rounded-full border border-pink-200 px-4 py-2 text-xs font-medium text-pink-600 hover:bg-pink-50"
                        >
                          Complete ✓
                        </button>
                      )}

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

        </section>


        {/* MEMORIES */}

        <section className="mt-8 pb-12">

          <div className="rounded-[2rem] bg-gradient-to-br from-violet-100 to-pink-100 p-8 text-center">

            <div className="text-5xl">
              📖
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              Our Memories
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              The best part is still waiting to be written.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}