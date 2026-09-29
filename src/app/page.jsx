"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe2,
  Heart,
  Lightbulb,
  Menu,
  Rocket,
  Sparkles,
  Users,
  X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const challenges = [
  {
    title: "Smart Waste Management",
    category: "Environment",
    description:
      "Build a technology solution that helps communities improve waste collection and reporting.",
    teams: 24,
    color: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Digital Education",
    category: "Education",
    description:
      "Create accessible learning technology for students with limited educational resources.",
    teams: 18,
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "Community Healthcare",
    category: "Healthcare",
    description:
      "Develop innovative solutions that improve access to essential healthcare information.",
    teams: 16,
    color: "from-rose-500/20 to-orange-500/5",
  },
];

const stats = [
  ["2,450+", "Participants"],
  ["180+", "Teams"],
  ["64", "Projects"],
  ["25", "Communities"],
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08090d]/80 backdrop-blur-xl">
        <div className="container-main flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
              <Rocket size={20} />
            </div>

            <span>
              Hack<span className="text-violet-400">4</span>Community
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/challenges" className="text-sm text-gray-300 hover:text-white">
              Challenges
            </Link>

            <Link href="/hackathons" className="text-sm text-gray-300 hover:text-white">
              Hackathons
            </Link>

            <Link href="/leaderboard" className="text-sm text-gray-300 hover:text-white">
              Leaderboard
            </Link>

            <Link href="/community" className="text-sm text-gray-300 hover:text-white">
              Community
            </Link>

            <Link href="/about" className="text-sm text-gray-300 hover:text-white">
              About
            </Link>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-sm text-gray-300 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Join Hackathon
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#08090d] px-5 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <Link href="/challenges">Challenges</Link>
              <Link href="/hackathons">Hackathons</Link>
              <Link href="/leaderboard">Leaderboard</Link>
              <Link href="/community">Community</Link>
              <Link href="/about">About</Link>

              <Link
                href="/register"
                className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-black"
              >
                Join Hackathon
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center pt-20">
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="container-main relative py-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              Community-Based Hackathon for Social Innovation
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Build Technology.
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Create Impact.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              Bring communities, developers, students and innovators
              together to solve real-world social problems through
              technology.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/challenges"
                className="group flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500"
              >
                Explore Challenges
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/hackathons"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Join a Hackathon
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="mx-auto mt-24 grid max-w-4xl grid-cols-2 border-y border-white/10 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="border-white/10 px-6 py-8 text-center md:border-r last:border-r-0"
              >
                <div className="text-3xl font-bold">{value}</div>
                <div className="mt-2 text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="border-t border-white/10 py-28">
        <div className="container-main">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
                Real Problems
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Community Challenges
              </h2>

              <p className="mt-4 max-w-xl text-gray-400">
                Discover real problems and build technology solutions that
                can make a difference.
              </p>
            </div>

            <Link
              href="/challenges"
              className="flex items-center gap-2 text-sm font-semibold text-violet-400"
            >
              View all challenges
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${challenge.color} p-7 transition hover:-translate-y-1 hover:border-white/20`}
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300">
                    {challenge.category}
                  </div>

                  <Lightbulb size={20} className="text-violet-300" />
                </div>

                <h3 className="text-xl font-bold">{challenge.title}</h3>

                <p className="mt-4 min-h-20 text-sm leading-6 text-gray-400">
                  {challenge.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-gray-500">
                    {challenge.teams} teams joined
                  </span>

                  <Link
                    href="/challenges"
                    className="text-sm font-semibold text-white"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white/[0.02] py-28">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Simple Process
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              From Problem to Impact
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              {
                number: "01",
                icon: Globe2,
                title: "Discover",
                text: "Find real community problems that need innovative solutions.",
              },
              {
                number: "02",
                icon: Users,
                title: "Build a Team",
                text: "Connect with developers, designers and problem solvers.",
              },
              {
                number: "03",
                icon: Code2,
                title: "Build",
                text: "Turn your idea into a working technology solution.",
              },
              {
                number: "04",
                icon: Heart,
                title: "Create Impact",
                text: "Submit your solution and help communities.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative rounded-3xl border border-white/10 bg-[#0d0f14] p-7"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="text-violet-400" size={24} />

                    <span className="text-sm font-bold text-gray-600">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPCOMING HACKATHON */}
      <section className="py-28">
        <div className="container-main">
          <div className="overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-[#11131a] to-cyan-500/10 p-8 md:p-14">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <div className="mb-5 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  REGISTRATION OPEN
                </div>

                <h2 className="text-4xl font-bold md:text-5xl">
                  Social Innovation
                  <br />
                  Hack 2026
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-gray-400">
                  A 48-hour community hackathon where teams collaborate to
                  solve meaningful social problems using technology.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
                  <span className="rounded-lg bg-white/5 px-4 py-2">
                    48 Hours
                  </span>

                  <span className="rounded-lg bg-white/5 px-4 py-2">
                    Hybrid
                  </span>

                  <span className="rounded-lg bg-white/5 px-4 py-2">
                    ₹1,00,000 Prize
                  </span>
                </div>

                <Link
                  href="/hackathons"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black"
                >
                  Register Now
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["500+", "Participants"],
                  ["100", "Teams"],
                  ["48", "Hours"],
                  ["₹1L", "Prize Pool"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-6"
                  >
                    <div className="text-3xl font-bold">{value}</div>
                    <div className="mt-2 text-sm text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-t border-white/10 py-28">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
              <Heart />
            </div>

            <h2 className="text-4xl font-bold md:text-5xl">
              Technology With Purpose
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Hack4Community connects technology with the people and
              communities that need it most.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["64", "Problems Solved"],
              ["25", "Communities Helped"],
              ["18K+", "People Impacted"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center"
              >
                <div className="text-5xl font-black text-violet-400">
                  {value}
                </div>

                <div className="mt-3 text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-main">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center md:px-12">
            <Code2 className="mx-auto text-violet-400" size={40} />

            <h2 className="mt-6 text-4xl font-bold">
              Ready to build something meaningful?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Join developers, students and communities working together
              to create real social impact.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold hover:bg-violet-500"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="container-main flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="font-bold">
              Hack<span className="text-violet-400">4</span>Community
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Technology for meaningful social impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            <Link href="/about">About</Link>
            <Link href="/challenges">Challenges</Link>
            <Link href="/hackathons">Hackathons</Link>
            <Link href="/community">Community</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}