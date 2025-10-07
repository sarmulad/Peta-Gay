import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Peta-Gay Roberts
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping business owners remove the internal barriers keeping them
              from the abundant life they deserve
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/live-online-sessions"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Live Online Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">
                One-on-One Coaching
              </li>
              <li className="text-muted-foreground text-sm">Group Coaching</li>
              <li className="text-muted-foreground text-sm">
                Online Workshops
              </li>
              <li className="text-muted-foreground text-sm">
                Corporate Training
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:julie@lifecoaching.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  peta@peta-Gayroberts.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Toronto, CA
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Peta-Gay Roberts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
