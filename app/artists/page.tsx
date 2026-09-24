import en from "@/messages/en.json";

export default function Artists() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl text-center">
        <h1 className="text-4xl font-heading text-aadaabOrange mb-6">
          {en.artists.heading}
        </h1>
        <p className="text-lg text-aadaabDark leading-relaxed mb-8">
          {en.artists.text}
        </p>
        <a
          href="mailto:aadaabfoundation@gmail.com?subject=I%20want%20to%20perform"
          className="inline-block bg-aadaabOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          {en.artists.joinBtn}
        </a>
      </div>
    </section>
  );
}
