import { Link } from "react-router-dom";
import flogo from "../assets/images/footer/logo.png";
import footerf from "../assets/images/footer/footer-f.png";
import footeri from "../assets/images/footer/footer-i.png";
import footerx from "../assets/images/footer/footer-x.png";
import footerl from "../assets/images/footer/footer-l.png";
import footerp from "../assets/images/footer/footer-p.png";

export default function Footer() {
  return (
    <footer className="bg-blue-950 relative z-0">
      <div className="mx-auto px-10 max-w-[1400px] pt-16 py-12">
        <div className="grid grid-cols-1 gap-8 pb-3 lg:grid-cols-3">
          <div>
            <img src={flogo} width="150" />

            <p className="mt-4 max-w-xs text-sky-50">
              Join us in shaping a brighter, cleaner future through sustainable
              energy solutions. <br /> Let's get in touch!
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link to="https://facebook.com">
                  <img className="opacity-90" src={footerf} width="22.5" />
                </Link>
              </li>

              <li>
                <Link to="https://instagram.com">
                  <img className="opacity-90" src={footeri} width="22.5" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com">
                  <img className="opacity-90" src={footerx} width="22.5" />
                </Link>
              </li>

              <li>
                <Link to="https://linkedin.com">
                  <img className="opacity-90" src={footerl} width="22.5" />
                </Link>
              </li>

              <li>
                <Link to="https://pinterest.com">
                  <img className="opacity-90" src={footerp} width="22.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-sky-50">Services</p>
              <ul className="mt-6 space-y-4 text-[16px] leading-[22px]">
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Maintenance
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Electrical wiring
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Air conditioning
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      CCTV installation
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      HR Consulting
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sky-50">Company</p>
              <ul className="mt-6 space-y-4 text-[16px] leading-[22px]">
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Technicians
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Meet the team
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sky-50">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-[16px] leading-[22px]">
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Contact
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      FAQs
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Live Chat
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sky-50">Legal</p>
              <ul className="mt-6 space-y-4 text-[16px] leading-[22px]">
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Accessibility
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Returns Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-sky-50 transition hover:opacity-75">
                      Hiring Statistics
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span className="text-xs text-sky-50">
          &copy; 2024 Newton Electricals Inc., All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
