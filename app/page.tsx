import LookbookShell from "@/app/components/LookbookShell";
import OurStory     from "@/app/components/OurStory";
import NewArrivals  from "@/app/components/NewArrivals";
import Collections  from "@/app/components/Collections";
import Footer       from "@/app/components/Footer";

export default function Page() {
  return (
    <main className="w-full bg-white">

      {/* ── Runway hero — full viewport height ─────────────────────────── */}
      <section className="relative w-full h-screen">
        <LookbookShell />
      </section>

      {/* ── Editorial sections ──────────────────────────────────────────── */}
      <OurStory />
      <NewArrivals />
      <Collections />
      <Footer />

    </main>
  );
}
