import en from "@/messages/en.json";

export default function Contact() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-2xl">
        <h1 className="text-4xl font-heading text-aadaabOrange text-center mb-6">
          {en.contact.heading}
        </h1>
        <p className="text-center text-aadaabDark mb-10">{en.contact.text}</p>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <form
            action="https://formsubmit.co/aadaabfoundation@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block text-sm font-medium text-aadaabDark mb-1">
                {en.contact.name}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-aadaabOrange"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-aadaabDark mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-aadaabOrange"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-aadaabDark mb-1">
                {en.contact.message}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-aadaabOrange"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-aadaabOrange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              {en.contact.send}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t text-center">
            <p className="text-sm text-aadaabDark mb-2">
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:aadaabfoundation@gmail.com" className="text-aadaabGreen hover:underline">
                aadaabfoundation@gmail.com
              </a>
            </p>
            <p className="text-sm text-aadaabDark">
              📸 <strong>Instagram:</strong>{" "}
              <a href="https://instagram.com/aadaabfoundation" className="text-aadaabGreen hover:underline">
                @aadaabfoundation
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
