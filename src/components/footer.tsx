import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">Sarah Johnson Photography</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Capturing life's most precious moments with artistry and authenticity.
              8 years of experience in wedding, portrait, and commercial photography.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="mailto:hello@sarahjohnson.com" className="hover:opacity-70 transition-opacity">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                hello@sarahjohnson.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} />
                (555) 123-4567
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground">Business Hours</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9am - 6pm</p>
              <p className="text-sm text-muted-foreground">Sat: By appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sarah Johnson Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
