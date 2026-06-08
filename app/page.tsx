import LookbookShell from "@/app/components/LookbookShell";
import OurStory     from "@/app/components/OurStory";
import NewArrivals  from "@/app/components/NewArrivals";
import Collections  from "@/app/components/Collections";
import Footer       from "@/app/components/Footer";

export default function Page() {
  return (
    <main className="w-full bg-[#F5F1EB]">

      {/* ── Runway hero — full viewport height ─────────────────────────── */}
      <section className="relative w-full h-screen">
        <LookbookShell />
        {/* Gradient bridge fades runway into OurStory parchment on scroll */}
        <div
          className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-50"
          style={{ background: "linear-gradient(to top, #F5F1EB 0%, transparent 100%)" }}
        />
      </section>

      {/* ── Editorial sections ──────────────────────────────────────────── */}
      <OurStory />
      <NewArrivals />
      <Collections />
      <Footer />

    </main>
  );
}
