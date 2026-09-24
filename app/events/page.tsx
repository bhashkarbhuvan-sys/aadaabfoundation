import en from "@/messages/en.json";

export default function Events() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-heading text-aadaabOrange text-center mb-12">
          {en.events.heading}
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border-t-4 border-aadaabOrange">
          <h2 className="text-2xl font-heading text-aadaabDark mb-4">
            🎤 {en.events.openMicsTitle}
          </h2>
          <p className="text-aadaabDark leading-relaxed">
            {en.events.openMicsText}
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl shadow-md p-8 border-t-4 border-aadaabGreen">
          <h2 className="text-2xl font-heading text-aadaabGreen mb-4">
            📜 {en.events.upcomingTitle}
          </h2>
          <p className="text-aadaabDark leading-relaxed mb-6">
            {en.events.upcomingText}
          </p>
          <a
            href="mailto:aadaabfoundation@gmail.com?subject=Kavya%20Mahotsava%20Update"
            className="inline-block bg-aadaabGreen text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            {en.events.registerBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
