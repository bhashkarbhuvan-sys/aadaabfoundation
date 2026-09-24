import Link from "next/link";
import en from "@/messages/en.json";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-aadaabCream to-orange-50 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading text-aadaabOrange mb-5">
            {en.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-aadaabDark max-w-2xl mx-auto mb-8">
            {en.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/events"
              className="bg-aadaabOrange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              {en.hero.cta1}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-aadaabGreen text-aadaabGreen px-6 py-3 rounded-full font-semibold hover:bg-aadaabGreen hover:text-white transition"
            >
              {en.hero.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-aadaabOrange">
            <p className="text-4xl font-bold text-aadaabOrange">30+</p>
            <p className="text-aadaabDark mt-2 font-medium">Open Mic Events</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-aadaabGreen">
            <p className="text-4xl font-bold text-aadaabGreen">2024</p>
            <p className="text-aadaabDark mt-2 font-medium">Founded in Patna</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-aadaabOrange">
            <p className="text-4xl font-bold text-aadaabOrange">🎭</p>
            <p className="text-aadaabDark mt-2 font-medium">Kavya Mahotsava Coming Soon</p>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-aadaabGreen mb-5">
            {en.about.heading}
          </h2>
          <p className="text-aadaabDark text-lg leading-relaxed mb-6">
            {en.about.intro}
          </p>
          <Link
            href="/about"
            className="text-aadaabOrange font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </section>
    </>
  );
}
