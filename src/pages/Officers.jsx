const officers = [
  {
    role: "President",
    name: "Shruti Pallissery",
    email: "shruti.pallissery@bravemail.uncp.edu",
    bio: "CS major, handles most of the planning and coordination. Usually runs our workshops.",
  },
  {
    role: "Vice President",
    name: "Prabina Shrestha",
    email: "prabina.shrestha@bravemail.uncp.edu",
    bio: "Helps organize events and keeps things running when Shruti's busy with classes.",
  },
];

export default function Officers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="space-y-8">
      <section className="space-y-6">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-slate-900">Officers</h1>
          <p className="text-slate-600 max-w-2xl">
            These are the people who keep ACM running. If you have questions or ideas, feel free to reach out to any of us.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {officers.map((officer) => (
          <div
            key={officer.role}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
              {officer.role}
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {officer.name}
            </h3>

            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              {officer.bio}
            </p>

            <a 
              href={`mailto:${officer.email}`}
              className="text-sm text-slate-700 hover:text-slate-900 underline"
            >
              {officer.email}
            </a>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Want to Get More Involved?</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We're always looking for people who want to help organize events or run workshops. If you're interested in taking on a leadership role, talk to us at a meeting or shoot us an email. We're pretty open to new ideas and could use the help!
        </p>
      </section>
      </div>
    </div>
  );
}
