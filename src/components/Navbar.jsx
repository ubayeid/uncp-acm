import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Initiatives" },
  { to: "/join", label: "Get Involved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold text-slate-900">
            UNCP ACM
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive 
                    ? "text-slate-900 font-semibold" 
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 hover:bg-slate-100 transition"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-700"></span>
            <span className="block h-0.5 w-5 bg-slate-700"></span>
            <span className="block h-0.5 w-5 bg-slate-700"></span>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 transition font-medium ${
                    isActive
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
