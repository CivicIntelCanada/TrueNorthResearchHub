import Link from 'next/link';
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="font-bold text-xl text-white">
                TrueNorth<span className="text-blue-400">Hub</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Canada's most comprehensive research database. Every fact sourced, every source accessible.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@truenorthhub.ca" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/topic/inflation/" className="hover:text-white transition-colors">Economy</Link></li>
              <li><Link href="/topic/healthcare/" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/topic/climate/" className="hover:text-white transition-colors">Climate</Link></li>
              <li><Link href="/topic/housing/" className="hover:text-white transition-colors">Housing</Link></li>
              <li><Link href="/data/" className="hover:text-white transition-colors">Data Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sources/" className="hover:text-white transition-colors">Source Directory</Link></li>
              <li><Link href="/methodology/" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="/api/" className="hover:text-white transition-colors">API Access</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link href="/team/" className="hover:text-white transition-colors">Editorial Team</Link></li>
              <li><Link href="/contribute/" className="hover:text-white transition-colors">Contribute</Link></li>
              <li><Link href="/contact/" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 TrueNorth Research Hub. Open source under MIT License.</p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/accessibility/" className="hover:text-gray-300 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
