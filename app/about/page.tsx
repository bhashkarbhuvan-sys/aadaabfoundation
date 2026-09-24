import en from "@/messages/en.json";

export default function About() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-heading text-aadaabOrange text-center mb-8">
          {en.about.heading}
        </h1>
        <p className="text-lg text-aadaabDark leading-relaxed text-center mb-12">
          {en.about.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-aadaabOrange">
            <p className="text-sm font-semibold text-aadaabOrange uppercase">
              {en.about.founder}
            </p>
            <h3 className="text-2xl font-heading text-aadaabDark mt-1 mb-3">
              {en.about.founderName}
            </h3>
            <p className="text-aadaabDark leading-relaxed">
              {en.about.founderBio}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-aadaabGreen">
            <p className="text-sm font-semibold text-aadaabGreen uppercase">
              {en.about.cofounder}
            </p>
            <h3 className="text-2xl font-heading text-aadaabDark mt-1 mb-3">
              {en.about.cofounderName}
            </h3>
            <p className="text-aadaabDark leading-relaxed">
              {en.about.cofounderBio}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-aadaabCream rounded-2xl p-6">
            <h3 className="text-xl font-heading text-aadaabOrange mb-3">
              🎯 {en.about.missionTitle}
            </h3>
            <p className="text-aadaabDark">{en.about.mission}</p>
          </div>
          <div className="bg-aadaabCream rounded-2xl p-6">
            <h3 className="text-xl font-heading text-aadaabGreen mb-3">
              ✨ {en.about.visionTitle}
            </h3>
            <p className="text-aadaabDark">{en.about.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
