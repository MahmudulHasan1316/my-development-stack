import footerImage from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Block and Logo + Name */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={footerImage}
                alt="Footer Image"
                className="w-24 h-auto sm:w-28 md:w-32 lg:w-36"
              />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#475569]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4 text-[#475569] font-bold">
              <a href="#" className="transition-colors hover:text-slate-900">
                GitHub
              </a>

              <a href="#" className="transition-colors hover:text-slate-900">
                Twitter
              </a>

              <a href="#" className="transition-colors hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">PRODUCT</h3>

            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">COMPANY</h3>

            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-slate-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">LEGAL</h3>

            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar ==> Copyright and Privacy + Terms */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p className="">© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
