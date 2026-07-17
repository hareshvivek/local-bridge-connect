import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Store,
  GraduationCap,
  Rocket,
  Info,
  Star,
  CheckCircle2,
  Circle,
  Hammer,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Home as HomeIcon,
  LayoutDashboard,
  User,
  ShieldAlert,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LocalBridgeApp,
});

type View = "home" | "shop" | "student" | "admin";

function LocalBridgeApp() {
  const [view, setView] = useState<View>("home");

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Centered phone-like frame */}
      <div className="mx-auto flex min-h-screen max-w-[440px] flex-col bg-background px-5 pb-28 pt-8 sm:my-6 sm:min-h-[calc(100vh-3rem)] sm:rounded-[44px] sm:border sm:border-border sm:shadow-[0_40px_120px_-40px_rgba(255,200,55,0.15)]">
        {view === "home" && <HomeView />}
        {view === "shop" && <ShopView />}
        {view === "student" && <StudentView />}
        {view === "admin" && <AdminView />}

        <BottomNav view={view} setView={setView} />
      </div>
    </div>
  );
}

/* ---------------- Bottom Nav ---------------- */

function BottomNav({ view, setView }: { view: View; setView: (v: View) => void }) {
  const items: { key: View; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { key: "home", label: "Home", icon: HomeIcon },
    { key: "shop", label: "Shop", icon: LayoutDashboard },
    { key: "student", label: "Student", icon: User },
    { key: "admin", label: "Admin", icon: ShieldAlert },
  ];
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[400px] -translate-x-1/2">
      <div className="flex items-center justify-between rounded-[28px] border border-border bg-surface/90 p-2 backdrop-blur-xl">
        {items.map((it) => {
          const Icon = it.icon;
          const active = view === it.key;
          return (
            <button
              key={it.key}
              onClick={() => setView(it.key)}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-[22px] px-2 py-2 transition ${
                active ? "bg-yellow text-ink" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={18} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- HOME ---------------- */

function HomeView() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-start justify-between pt-2">
        <div>
          <p className="text-sm text-muted-foreground">Good afternoon!</p>
          <h1 className="mt-1 font-display text-[42px] leading-[0.95] tracking-tight text-foreground">
            Local
            <br />
            Bridge<span className="text-yellow">.</span>
          </h1>
        </div>
        <button className="mt-2 flex h-11 w-11 items-center justify-center rounded-full bg-yellow text-ink">
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </button>
      </header>

      {/* Row 1: Yellow + White */}
      <div className="grid grid-cols-5 gap-3">
        <FeatureBlock
          className="col-span-3 bg-yellow text-ink"
          eyebrow="For"
          title="Shop­keepers"
          icon={<Store size={28} strokeWidth={2.5} />}
        />
        <div className="col-span-2 flex flex-col justify-between rounded-[28px] bg-paper p-5 text-ink">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink/60">Live</span>
            <div className="h-2 w-2 rounded-full bg-mint" />
          </div>
          <div>
            <div className="font-display text-4xl leading-none">128</div>
            <div className="mt-1 text-xs font-medium text-ink/60">shops matched</div>
          </div>
        </div>
      </div>

      {/* Row 2: Coral wide */}
      <div className="rounded-[32px] bg-coral p-6 text-ink">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block rounded-full bg-ink/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Program
            </span>
            <h2 className="mt-3 font-display text-3xl leading-tight">
              Start a
              <br />
              3-Week Sprint
            </h2>
            <p className="mt-2 max-w-[220px] text-sm font-medium text-ink/80">
              From brief to launch. Built by a paired student developer.
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-coral">
            <Rocket size={20} strokeWidth={2.5} />
          </div>
        </div>
        <button className="mt-5 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-coral">
          Begin brief <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Row 3: Mint + White */}
      <div className="grid grid-cols-5 gap-3">
        <FeatureBlock
          className="col-span-3 bg-mint text-ink"
          eyebrow="For"
          title="Student Devs"
          icon={<GraduationCap size={28} strokeWidth={2.5} />}
        />
        <div className="col-span-2 flex flex-col justify-between rounded-[28px] bg-paper p-5 text-ink">
          <Info size={20} />
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink/60">About</div>
            <div className="mt-1 text-sm font-semibold leading-tight">How the platform works</div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mt-2 rounded-[28px] bg-surface-2 p-5">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="h-8 w-8 rounded-full bg-yellow" />
            <div className="h-8 w-8 rounded-full bg-coral" />
            <div className="h-8 w-8 rounded-full bg-mint" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Neighborhood-first</div>
            <div className="truncate text-xs text-muted-foreground">
              Real shops, real students, real craft.
            </div>
          </div>
          <ChevronRight size={18} className="text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

function FeatureBlock({
  className,
  eyebrow,
  title,
  icon,
}: {
  className: string;
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col justify-between rounded-[28px] p-5 ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/10">
        {icon}
      </div>
      <div className="mt-8">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{eyebrow}</span>
        <div className="mt-1 font-display text-3xl leading-none">{title}</div>
      </div>
    </div>
  );
}

/* ---------------- SHOPKEEPER ---------------- */

function ShopView() {
  return (
    <div className="flex flex-col gap-4">
      <ViewHeader eyebrow="Shopkeeper" title="Your sprint" />

      {/* Onboarding steps */}
      <StepCard
        step="Step 1"
        color="bg-yellow"
        title="Tell us about your shop"
        body={
          <input
            placeholder="e.g. Marta's Bakery"
            className="w-full rounded-[20px] bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-yellow"
          />
        }
      />
      <StepCard
        step="Step 2"
        color="bg-coral"
        title="What do you need built?"
        body={
          <textarea
            rows={3}
            placeholder="A simple ordering page for weekend pastries…"
            className="w-full resize-none rounded-[20px] bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral"
          />
        }
      />

      {/* Sprint progress */}
      <div className="rounded-[32px] bg-surface p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="rounded-full bg-mint px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
              Sprint 04
            </span>
            <h3 className="mt-3 font-display text-2xl">Building phase</h3>
            <p className="text-xs text-muted-foreground">Day 9 of 21</p>
          </div>
          <IsometricBlock />
        </div>

        <div className="mt-5 space-y-2">
          {[
            { label: "Matched", done: true },
            { label: "Building", done: true, active: true },
            { label: "QA", done: false },
            { label: "Live", done: false },
          ].map((p) => (
            <div
              key={p.label}
              className={`flex items-center justify-between rounded-[20px] px-4 py-3 ${
                p.active ? "bg-mint text-ink" : "bg-surface-2 text-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                {p.done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                <span className="text-sm font-semibold">{p.label}</span>
              </div>
              {p.active && (
                <span className="text-[10px] font-bold uppercase tracking-widest">In progress</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Feedback module (stark white) */}
      <div className="rounded-[32px] bg-paper p-6 text-ink">
        <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-paper">
          Feedback
        </span>
        <h3 className="mt-3 font-display text-2xl leading-tight">
          Submit an update request
          <br />
          to your developer
        </h3>
        <div className="mt-4 flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              size={26}
              className={n <= 4 ? "fill-yellow text-yellow" : "text-ink/20"}
              strokeWidth={1.5}
            />
          ))}
          <span className="ml-auto text-xs font-bold text-ink/60">4.0 so far</span>
        </div>
        <textarea
          rows={4}
          placeholder="What should we tweak this week?"
          className="mt-4 w-full resize-none rounded-[22px] border border-ink/10 bg-white px-5 py-4 text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
        />
        <button className="mt-4 w-full rounded-full bg-ink py-3 text-sm font-bold uppercase tracking-widest text-paper">
          Send to developer
        </button>
      </div>
    </div>
  );
}

function StepCard({
  step,
  color,
  title,
  body,
}: {
  step: string;
  color: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-[32px] bg-surface p-5">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink ${color}`}
        >
          {step}
        </span>
        <Sparkles size={16} className="text-muted-foreground" />
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight">{title}</h3>
      <div className="mt-4">{body}</div>
    </div>
  );
}

function IsometricBlock() {
  return (
    <svg width="88" height="88" viewBox="0 0 100 100" className="drop-shadow-[0_10px_20px_rgba(102,187,106,0.35)]">
      <defs>
        <linearGradient id="ig-top" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8fd992" />
          <stop offset="1" stopColor="#66bb6a" />
        </linearGradient>
        <linearGradient id="ig-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#4c9950" />
          <stop offset="1" stopColor="#2f6b33" />
        </linearGradient>
        <linearGradient id="ig-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffc837" />
          <stop offset="1" stopColor="#e0a520" />
        </linearGradient>
      </defs>
      <polygon points="50,15 88,35 50,55 12,35" fill="url(#ig-top)" />
      <polygon points="12,35 50,55 50,90 12,70" fill="url(#ig-left)" />
      <polygon points="88,35 50,55 50,90 88,70" fill="url(#ig-right)" />
    </svg>
  );
}

/* ---------------- STUDENT ---------------- */

function StudentView() {
  return (
    <div className="flex flex-col gap-4">
      <ViewHeader eyebrow="Student" title="Portfolio & jobs" />

      {/* Profile card */}
      <div className="rounded-[32px] bg-surface p-6">
        <div className="flex justify-center">
          <Avatar3D />
        </div>
        <div className="mt-4 text-center">
          <span className="rounded-full bg-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
            Full-stack · Yr 3
          </span>
          <h3 className="mt-3 font-display text-3xl leading-tight">Amara Okafor</h3>
          <p className="text-xs text-muted-foreground">Cape Town · 3 sprints shipped</p>
        </div>

        <div className="mt-5 space-y-3">
          <SubBlock title="User Story">
            "I want a warm, simple site that shows today's bakes and lets locals pre-order for
            Saturday morning pickup."
          </SubBlock>
          <SubBlock title="Job Details">
            <div className="flex flex-wrap gap-2">
              <Pill className="bg-mint text-ink">React</Pill>
              <Pill className="bg-coral text-ink">Stripe</Pill>
              <Pill className="bg-yellow text-ink">3 weeks</Pill>
              <Pill className="bg-paper text-ink">Remote</Pill>
            </div>
          </SubBlock>
        </div>
      </div>

      {/* Job board */}
      <div className="rounded-[32px] bg-surface p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl">Open briefs</h3>
          <span className="text-xs text-muted-foreground">6 nearby</span>
        </div>
        <div className="mt-4 space-y-3">
          <JobRow accent="bg-yellow" shop="Marta's Bakery" tag="Landing + orders" pay="R 4 800" />
          <JobRow accent="bg-coral" shop="Cafe Norte" tag="Menu & bookings" pay="R 6 200" />
          <JobRow accent="bg-mint" shop="Ivy Florist" tag="Portfolio site" pay="R 3 900" />
          <JobRow accent="bg-paper" shop="Blend & Grind" tag="Loyalty page" pay="R 5 100" />
        </div>
      </div>
    </div>
  );
}

function Avatar3D() {
  return (
    <div className="relative">
      <div className="h-28 w-28 rounded-[32px] bg-linear-to-br from-coral via-yellow to-mint p-[2px]">
        <div className="flex h-full w-full items-center justify-center rounded-[30px] bg-surface-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-yellow to-coral text-ink">
            <span className="font-display text-3xl">A</span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-surface bg-mint text-ink">
        <CheckCircle2 size={14} strokeWidth={3} />
      </div>
    </div>
  );
}

function SubBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[22px] bg-surface-2 p-5">
      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {title}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

function Pill({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${className}`}>{children}</span>
  );
}

function JobRow({
  accent,
  shop,
  tag,
  pay,
}: {
  accent: string;
  shop: string;
  tag: string;
  pay: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[22px] bg-surface-2 p-3 pr-4">
      <div className={`h-12 w-12 shrink-0 rounded-[18px] ${accent}`} />
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold">{shop}</div>
        <div className="truncate text-xs text-muted-foreground">{tag}</div>
      </div>
      <div className="text-right">
        <div className="text-sm font-bold">{pay}</div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">3-wk</div>
      </div>
    </div>
  );
}

/* ---------------- ADMIN ---------------- */

function AdminView() {
  const [tab, setTab] = useState<"sprints" | "matches" | "payouts">("sprints");

  return (
    <div className="flex flex-col gap-4">
      <ViewHeader eyebrow="Admin" title="Control panel" />

      <div className="grid grid-cols-3 gap-2 rounded-[24px] bg-surface p-2">
        {[
          { k: "sprints", label: "Sprints" },
          { k: "matches", label: "Matches" },
          { k: "payouts", label: "Payouts" },
        ].map((t) => (
          <button
            key={t.k}
            onClick={() => setTab(t.k as typeof tab)}
            className={`rounded-[18px] py-2 text-xs font-bold uppercase tracking-widest transition ${
              tab === t.k ? "bg-yellow text-ink" : "text-muted-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard color="bg-yellow" icon={<Hammer size={18} />} value="12" label="Active" />
        <StatCard color="bg-coral" icon={<Users size={18} />} value="34" label="Queue" />
        <StatCard color="bg-mint" icon={<Wallet size={18} />} value="R 82k" label="Pending" />
      </div>

      {tab === "sprints" && (
        <div className="rounded-[32px] bg-surface p-5">
          <h3 className="font-display text-2xl">Active project sprints</h3>
          <div className="mt-4 space-y-3">
            <AdminRow left="Marta's Bakery ↔ Amara" right="Day 9/21" state="Building" tone="mint" />
            <AdminRow left="Cafe Norte ↔ Kwame" right="Day 3/21" state="Matched" tone="yellow" />
            <AdminRow left="Ivy Florist ↔ Priya" right="Day 18/21" state="QA" tone="coral" />
            <AdminRow left="Blend & Grind ↔ Sam" right="Live" state="Live" tone="paper" />
          </div>
        </div>
      )}

      {tab === "matches" && (
        <div className="rounded-[32px] bg-surface p-5">
          <h3 className="font-display text-2xl">Student match requests</h3>
          <div className="mt-4 space-y-3">
            <MatchRow name="Thabo M." shop="Norte Cafe" />
            <MatchRow name="Lin Yao" shop="Marta's Bakery" />
            <MatchRow name="Aisha K." shop="Ivy Florist" />
          </div>
        </div>
      )}

      {tab === "payouts" && (
        <div className="rounded-[32px] bg-surface p-5">
          <h3 className="font-display text-2xl">Payout clearances</h3>
          <div className="mt-4 space-y-3">
            <PayoutRow who="Amara O." amount="R 4 800" status="Ready" />
            <PayoutRow who="Kwame A." amount="R 6 200" status="Hold" />
            <PayoutRow who="Priya S." amount="R 3 900" status="Ready" />
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  color,
  icon,
  value,
  label,
}: {
  color: string;
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className={`rounded-[24px] p-4 text-ink ${color}`}>
      <div className="flex items-center justify-between">
        {icon}
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </div>
      <div className="mt-3 font-display text-3xl leading-none">{value}</div>
      <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink/70">
        {label}
      </div>
    </div>
  );
}

function AdminRow({
  left,
  right,
  state,
  tone,
}: {
  left: string;
  right: string;
  state: string;
  tone: "yellow" | "coral" | "mint" | "paper";
}) {
  const toneMap = {
    yellow: "bg-yellow text-ink",
    coral: "bg-coral text-ink",
    mint: "bg-mint text-ink",
    paper: "bg-paper text-ink",
  };
  return (
    <div className="flex items-center gap-3 rounded-[22px] bg-surface-2 p-4">
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold">{left}</div>
        <div className="text-xs text-muted-foreground">{right}</div>
      </div>
      <span
        className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${toneMap[tone]}`}
      >
        {state}
      </span>
    </div>
  );
}

function MatchRow({ name, shop }: { name: string; shop: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[22px] bg-surface-2 p-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-coral text-ink">
        <User size={18} strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold">{name}</div>
        <div className="truncate text-xs text-muted-foreground">wants to join {shop}</div>
      </div>
      <button className="rounded-full bg-mint px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ink">
        Approve
      </button>
      <button className="rounded-full bg-surface px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        Skip
      </button>
    </div>
  );
}

function PayoutRow({
  who,
  amount,
  status,
}: {
  who: string;
  amount: string;
  status: "Ready" | "Hold";
}) {
  return (
    <div className="flex items-center gap-3 rounded-[22px] bg-surface-2 p-4">
      <ShieldCheck size={20} className={status === "Ready" ? "text-mint" : "text-coral"} />
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold">{who}</div>
        <div className="text-xs text-muted-foreground">Cleared invoice · 3-wk sprint</div>
      </div>
      <div className="text-right">
        <div className="text-sm font-bold">{amount}</div>
        <div
          className={`text-[10px] font-bold uppercase tracking-widest ${
            status === "Ready" ? "text-mint" : "text-coral"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Shared ---------------- */

function ViewHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="flex items-start justify-between pt-2">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-yellow">{eyebrow}</p>
        <h1 className="mt-1 font-display text-[38px] leading-[0.95] tracking-tight">{title}</h1>
      </div>
      <button className="mt-2 flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-foreground">
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </button>
    </header>
  );
}
