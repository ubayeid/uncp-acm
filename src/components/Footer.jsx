export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-sm text-slate-600">
            © UNCP ACM {new Date().getFullYear()}
          </p>
          <p className="text-xs text-slate-500">
            A student-run organization at UNC Pembroke
          </p>
          <p className="text-xs text-slate-500">
            <strong>Contact Us</strong>: acm@uncp.edu
          </p>
        </div>
      </div>
    </footer>
  );
}
