"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateUs() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("couple");

  function handleCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please give your Us a name ❤️");
      return;
    }

    const us = {
      name: name.trim(),
      description: description.trim(),
      type,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("usData", JSON.stringify(us));

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-violet-100 px-5 py-8">
      <div className="mx-auto max-w-3xl">

        <div className="text-center">
          <a
            href="/"
            className="text-4xl font-serif italic font-bold text-violet-700"
          >
            Us<span className="text-pink-500">♥</span>
          </a>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-7 shadow-xl md:p-12">

          <div className="text-center">
            <div className="text-5xl">💗</div>

            <h1 className="mt-5 text-4xl font-bold text-slate-800">
              Create your Us
            </h1>

            <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-500">
              Create a shared space for the people who matter to you.
              Plan things, share ideas and create memories together.
            </p>
          </div>

          <form onSubmit={handleCreate} className="mt-10 space-y-7">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Give your Us a name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="You & Me"
                className="w-full rounded-2xl border border-pink-200 bg-pink-50/40 px-5 py-4 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />

              <p className="mt-2 text-xs text-slate-400">
                Example: You & Me, The Gang, Our Family
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Tell us a little about it
              </label>

              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Our little adventures..."
                className="w-full resize-none rounded-2xl border border-pink-200 bg-pink-50/40 px-5 py-4 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />

              <p className="mt-2 text-xs text-slate-400">
                You can always change this later.
              </p>
            </div>

            {/* Type */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Who is this Us for?
              </label>

              <div className="grid gap-3 sm:grid-cols-2">

                <label className="cursor-pointer rounded-2xl border border-pink-200 p-4 transition hover:border-pink-400 hover:bg-pink-50">
                  <input
                    type="radio"
                    name="type"
                    value="couple"
                    checked={type === "couple"}
                    onChange={(e) => setType(e.target.value)}
                    className="mr-3 accent-pink-500"
                  />
                  <span className="font-medium">💕 Two people</span>

                  <p className="mt-1 pl-6 text-xs text-slate-400">
                    For couples or two people
                  </p>
                </label>

                <label className="cursor-pointer rounded-2xl border border-violet-200 p-4 transition hover:border-violet-400 hover:bg-violet-50">
                  <input
                    type="radio"
                    name="type"
                    value="friends"
                    checked={type === "friends"}
                    onChange={(e) => setType(e.target.value)}
                    className="mr-3 accent-violet-500"
                  />
                  <span className="font-medium">👯 Friends</span>

                  <p className="mt-1 pl-6 text-xs text-slate-400">
                    Create something with your friends
                  </p>
                </label>

                <label className="cursor-pointer rounded-2xl border border-pink-200 p-4 transition hover:border-pink-400 hover:bg-pink-50">
                  <input
                    type="radio"
                    name="type"
                    value="family"
                    checked={type === "family"}
                    onChange={(e) => setType(e.target.value)}
                    className="mr-3 accent-pink-500"
                  />
                  <span className="font-medium">🏡 Family</span>

                  <p className="mt-1 pl-6 text-xs text-slate-400">
                    Your family's shared space
                  </p>
                </label>

                <label className="cursor-pointer rounded-2xl border border-violet-200 p-4 transition hover:border-violet-400 hover:bg-violet-50">
                  <input
                    type="radio"
                    name="type"
                    value="group"
                    checked={type === "group"}
                    onChange={(e) => setType(e.target.value)}
                    className="mr-3 accent-violet-500"
                  />
                  <span className="font-medium">✨ A group</span>

                  <p className="mt-1 pl-6 text-xs text-slate-400">
                    Any group of people
                  </p>
                </label>

              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
            >
              Create our Us ♥
            </button>

          </form>

          <div className="mt-7 text-center">
            <a
              href="/"
              className="text-sm font-medium text-slate-400 transition hover:text-violet-600"
            >
              ← Back to home
            </a>
          </div>

        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Your shared space. Your memories. Your Us. ♥
        </p>

      </div>
    </main>
  );
}