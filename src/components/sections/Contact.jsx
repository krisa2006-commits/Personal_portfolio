import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="border-b border-[#1E293B] bg-[#0B1120]">
      <div className="mx-auto grid w-[92%] max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7CF6]">
            Contact
          </p>

          <h2 className="max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Let's Build Something
            <br />
            <span className="text-[#8B7CF6]">Together.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#94A3B8]">
            I’m open to internships, junior developer opportunities and
            interesting projects. Feel free to reach out and let’s connect.
          </p>

          <div className="mt-8 space-y-5">
            <a
              href="mailto:krishachaniyara2706@gmail.com"
              className="flex items-center gap-4 text-[#CBD5E1] transition-colors duration-300 hover:text-[#8B7CF6]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#1E293B] bg-[#111827] text-[#8B7CF6]">
                <Mail size={20} />
              </span>

              <span>
                <span className="block text-xs text-[#64748B]">Email</span>

                <span className="text-sm font-medium">
                  krishachaniyara2706@gmail.com
                </span>
              </span>
            </a>

            <a
              href="tel:+919924846806"
              className="flex items-center gap-4 text-[#CBD5E1] transition-colors duration-300 hover:text-[#8B7CF6]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#1E293B] bg-[#111827] text-[#8B7CF6]">
                <Phone size={20} />
              </span>

              <span>
                <span className="block text-xs text-[#64748B]">Phone</span>

                <span className="text-sm font-medium">+91 99248 46806</span>
              </span>
            </a>

            <div className="flex items-center gap-4 text-[#CBD5E1]">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#1E293B] bg-[#111827] text-[#8B7CF6]">
                <MapPin size={20} />
              </span>

              <span>
                <span className="block text-xs text-[#64748B]">Location</span>

                <span className="text-sm font-medium">
                  Rajkot, Gujarat, India
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1E293B] bg-[#111827] p-6 md:p-8">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-[#263449] bg-[#0D1628] px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#64748B] focus:border-[#8B7CF6]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-[#263449] bg-[#0D1628] px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#64748B] focus:border-[#8B7CF6]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-lg border border-[#263449] bg-[#0D1628] px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#64748B] focus:border-[#8B7CF6]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#CBD5E1]">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-[#263449] bg-[#0D1628] px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#64748B] focus:border-[#8B7CF6]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B7CF6] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#A78BFA]"
            >
              Send Message
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
