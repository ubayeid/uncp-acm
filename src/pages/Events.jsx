const upcoming = [
  {
    emoji: "💻",
    title: "Weekly Meeting",
    type: "Regular",
    date: "Every Tuesday",
    time: "5:00 PM - 6:30 PM",
    location: "Science Building, Room 205",
    description: "Our regular weekly meetup. We usually do a quick workshop or just work on stuff together. Sometimes we order pizza. Check Discord for what we're doing this week.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
  },
  {
    emoji: "📚",
    title: "Git Basics Workshop",
    type: "Workshop",
    date: "Dec 10, 2024",
    time: "5:00 PM",
    location: "Science Building, Room 205",
    description: "Shruti's going to walk us through the basics of Git and GitHub. Bring your laptop if you have one. We'll help you set everything up if you haven't already.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
  },
  {
    emoji: "🎮",
    title: "Game Night",
    type: "Social",
    date: "Dec 17, 2024",
    time: "6:00 PM",
    location: "Student Center, Room TBD",
    description: "End of semester game night. We'll have some board games and probably order food. Just a chill way to hang out before finals.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop",
  },
  {
    emoji: "💼",
    title: "Resume Workshop",
    type: "Workshop",
    date: "Jan 14, 2025",
    time: "5:00 PM",
    location: "Science Building, Room 205",
    description: "We're bringing in someone from career services to help with resumes. Bring yours if you have one, or just come to learn. Super helpful for internship season.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
  },
];

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-6">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop" 
            alt="Coding workshop session" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Initiatives</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Here's what we're up to. Most of our stuff happens during our weekly meetings, but we also do special workshops and events throughout the semester. Check Discord for the most up-to-date info.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="space-y-6">
        {upcoming.map((e) => (
          <div
            key={e.title}
            className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-md transition"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="aspect-video md:aspect-square w-full overflow-hidden">
                  <img 
                    src={e.image} 
                    alt={e.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6 sm:p-8 space-y-3">
                <div>
                  <span className="inline-block px-2 py-1 rounded text-xs font-medium text-slate-600 bg-slate-100 mb-2">
                    {e.type}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{e.title}</h3>
                </div>

                <p className="text-slate-700 text-base leading-relaxed">{e.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-600 pt-2">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{e.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🕐</span>
                    <span>{e.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{e.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Regular Meeting Info */}
      <section className="rounded-lg border border-slate-200 bg-slate-50 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Regular Meetings</h2>
        <p className="text-slate-700 text-sm">
          We meet every Tuesday at 5 PM in the Science Building (usually room 205). Sometimes the room changes, so check our Discord server for updates. No need to RSVP or anything, just show up if you can make it.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Do I need to know how to code?",
              a: "Nope! A lot of our workshops are beginner-friendly. We've had people show up who've never written a line of code before."
            },
            {
              q: "Do I need to bring anything?",
              a: "Just yourself! If it's a workshop, bringing a laptop helps, but we can usually work around it if you don't have one."
            },
            {
              q: "Is it free?",
              a: "Yeah, completely free. We're a student org, not trying to make money off anyone."
            },
            {
              q: "What if I can't make it every week?",
              a: "That's totally fine. Come when you can. We get that people have classes, work, and other stuff going on."
            },
            {
              q: "Can I bring friends?",
              a: "Please do! The more the merrier. We're always trying to grow."
            },
            {
              q: "How do I know if something's cancelled?",
              a: "We post updates in our Discord server. If a meeting gets cancelled (which is rare), we'll post there and try to email people too."
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 bg-white p-5">
              <h4 className="font-semibold text-slate-900 mb-2">{item.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
