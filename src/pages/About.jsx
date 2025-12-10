export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-6">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop" 
            alt="UNCP campus building" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">About Us</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            UNCP ACM started a few years ago when a group of CS students realized we needed a place to actually code together and help each other out. We're still pretty small but growing fast, and honestly, that's what makes it great—everyone knows everyone.
          </p>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            We meet every Tuesday evening in the Science Building (usually room 205, but check Discord for updates). Sometimes we do workshops, sometimes we just work on homework together, and sometimes we order pizza and talk about tech stuff. It's pretty chill.
          </p>
        </div>
      </section>

      {/* What We Actually Do */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">What We Do</h2>
          <p className="text-slate-600">Here's the stuff we actually get up to:</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "💻", title: "Weekly Meetings", desc: "Every Tuesday at 5 PM. We usually do a quick workshop or just hang out and code together. No pressure if you can't make it every week." },
            { emoji: "🛠️", title: "Workshops", desc: "We've done Git basics, intro to Python, web dev stuff, and we're planning more. Usually taught by upperclassmen or sometimes we bring in alumni." },
            { emoji: "📚", title: "Study Groups", desc: "Especially helpful during exam season. We'll book a room and work on assignments together. Way better than trying to debug alone at 2 AM." },
            { emoji: "💼", title: "Career Stuff", desc: "We've had resume workshops and some alumni come back to talk about their jobs. We're trying to get more companies to come recruit here too." },
            { emoji: "🎮", title: "Social Events", desc: "We do game nights sometimes, and we usually have a pizza party at the end of each semester. Nothing fancy, just hanging out." },
            { emoji: "🤝", title: "Projects", desc: "Some members work on group projects together. It's a good way to build your portfolio and learn from each other." },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-md transition">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
              alt="Students working together on computers" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-8 space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Most of us are CS majors, but we've got some business majors, math majors, and even a few people from other departments who are just interested in tech. We're pretty diverse—some people are already working on cool projects, some are just starting to learn to code, and everything in between.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We're not super formal or anything. No dress code, no mandatory attendance, no weird initiation rituals. Just show up when you can, contribute what you want, and help others when you can. That's pretty much it.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you're looking for a place to learn, meet people who get excited about the same stuff you do, or just want to hang out with other students who understand the struggle of debugging for hours, you'll fit right in.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-lg border border-slate-200 bg-slate-50 p-8 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Want to Know More?</h2>
        <p className="text-slate-700">
          Hit us up at <strong>acm@uncp.edu</strong> or join our Discord (link in the footer). We're pretty responsive, usually get back to people within a day or two.
        </p>
        <p className="text-slate-600 text-sm">
          Or just come to one of our meetings! We meet Tuesdays at 5 PM in the Science Building. Check our Discord for room changes.
        </p>
      </section>
      </div>
    </div>
  );
}
