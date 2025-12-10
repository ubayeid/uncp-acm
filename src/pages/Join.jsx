export default function Join() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-6">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop" 
            alt="Students collaborating and learning together" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Get Involved</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Want to join? Cool! Fill out the form below and we'll add you to our email list and send you the Discord link. Or honestly, you can just show up to one of our meetings—we're pretty informal about it.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto space-y-6">
        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Sign Up</h2>
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 focus:border-slate-900 focus:outline-none transition"
                placeholder="First Last"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">UNCP Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 focus:border-slate-900 focus:outline-none transition"
                placeholder="you@bravemail.uncp.edu"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Year</label>
              <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 focus:border-slate-900 focus:outline-none transition">
                <option>Select your year</option>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
                <option>Graduate</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Major (optional)</label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 focus:border-slate-900 focus:outline-none transition"
                placeholder="Computer Science, Business, etc."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">What are you interested in? (optional)</label>
              <textarea
                rows="3"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 focus:border-slate-900 focus:outline-none transition"
                placeholder="Web development, AI, cybersecurity, game design, or just learning to code..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full mt-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
            >
              Submit
            </button>

            <p className="text-xs text-slate-500 text-center">
              We'll email you back within a few days with the Discord link and meeting info.
            </p>
          </form>
        </div>
      </section>

      {/* Alternative Ways to Join */}
      <section className="max-w-2xl mx-auto rounded-lg border border-slate-200 bg-slate-50 p-6 space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Or Just Show Up</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          You don't actually need to fill out the form to come to meetings. We meet every Tuesday at 5 PM in the Science Building (usually room 205). Just walk in and introduce yourself. We're pretty chill about it.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Questions?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { 
              q: "Do I need coding experience?", 
              a: "Nope! We have people at all levels. Some members are just starting out, some have been coding for years. Everyone's welcome." 
            },
            { 
              q: "Is there a fee?", 
              a: "Nope, completely free. We're a student organization, not a business." 
            },
            { 
              q: "What if I can't make meetings?", 
              a: "That's fine! Come when you can. We understand people have classes, work, and other commitments." 
            },
            { 
              q: "Do I have to be a CS major?", 
              a: "Not at all. We have members from all different majors. If you're interested in tech, you're welcome." 
            },
            { 
              q: "What's Discord?", 
              a: "It's a chat app we use to coordinate meetings and share resources. We'll send you the link when you sign up, or you can ask someone at a meeting." 
            },
            { 
              q: "Can I just come check it out?", 
              a: "Absolutely! Feel free to come to a meeting and see if it's for you. No pressure to join or anything." 
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 bg-white p-5">
              <h4 className="font-semibold text-slate-900 mb-2">{item.q}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-lg border border-slate-200 bg-white p-6 text-center space-y-2">
        <p className="text-slate-700">
          Still have questions? Email us at <strong>acm@uncp.edu</strong>
        </p>
        <p className="text-sm text-slate-500">
          We usually respond within a day or two.
        </p>
      </section>
      </div>
    </div>
  );
}
