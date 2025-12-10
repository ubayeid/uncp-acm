import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  return (
    <>
      {/* Full-Width Carousel */}
      <div className="w-full">
        <ImageCarousel />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              UNCP's Largest Computer Science Organization
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              UNCP ACM is dedicated to promoting interest in computing and information technologies among members of the UNCP community
            </p>
          </div>
        </section>

        {/* Main Sections */}
        <section className="grid gap-8 md:grid-cols-3">
        <Link
          to="/about"
          className="group rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" 
              alt="UNCP campus" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">About Us</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Learn about the history and mission of the UNCP ACM chapter.
            </p>
            <span className="text-sm font-medium text-slate-900 group-hover:underline">
              Learn More →
            </span>
          </div>
        </Link>

        <Link
          to="/events"
          className="group rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" 
              alt="Coding workshop" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Initiatives</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Learn more about the initiatives we're working on in each of our sub-organizations.
            </p>
            <span className="text-sm font-medium text-slate-900 group-hover:underline">
              Learn More →
            </span>
          </div>
        </Link>

        <Link
          to="/join"
          className="group rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" 
              alt="Students collaborating" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Contact Us</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Learn how to get involved with UNCP ACM!
            </p>
            <span className="text-sm font-medium text-slate-900 group-hover:underline">
              Learn More →
            </span>
          </div>
        </Link>
      </section>

        {/* Recent Events */}
        <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Recent Events</h2>
        <p className="text-slate-600">
          Check out the latest professional development and community-building events hosted by the UNCP ACM:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Intro to Git & GitHub",
              date: "Dec 15, 2024",
              description: "A hands-on intro to version control and how to host your projects on GitHub. Perfect for beginners!",
              image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
            },
            {
              title: "Web Dev Bootcamp",
              date: "Jan 10, 2025",
              description: "Learn HTML, CSS, and JavaScript basics. Build your first website from scratch!",
              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            },
            {
              title: "AI & Machine Learning Talk",
              date: "Jan 24, 2025",
              description: "Guest speaker from a tech company discusses AI trends and career opportunities in the field.",
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
            },
            {
              title: "Year-End Celebration & Networking",
              date: "Feb 14, 2025",
              description: "Celebrate our semester with food, games, and opportunities to network with members and guests!",
              image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
            },
          ].map((event, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                  <span className="text-sm text-slate-500 whitespace-nowrap ml-4">{event.date}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/events"
          className="inline-block text-sm font-medium text-slate-900 hover:underline"
        >
          View All Events →
        </Link>
      </section>

      </div>
    </>
  );
}
