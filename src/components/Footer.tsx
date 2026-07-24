import React from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Sparkles, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEstimator,
  onOpenPrivacy,
  onOpenTerms
}) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft Blue Ambient Glow in Footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Big Footer Brand Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <Logo variant="horizontal" theme="light" size="lg" imgScale={3.5} className="mb-2" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenEstimator}
              id="footer-start-project-btn"
              className="px-6 py-3 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Start Your Project</span>
            </button>
            <a
              href={`mailto:${COMPANY_INFO.contactEmail}`}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{COMPANY_INFO.contactEmail}</span>
            </a>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/10">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-white/40 tracking-wider">
              About I&O Technologies
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.shortDesc}
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Operational Status: All Systems Operational (100% Uptime)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white/40 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="hover:text-white transition-colors">Products & Ventures</a>
              </li>
              <li>
                <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:text-white transition-colors">Work</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white/40 tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white/40 tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-gray-600" />
              </a>
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-blue-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-gray-600" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-blue-400" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {currentYear} {COMPANY_INFO.name} ({COMPANY_INFO.tagline}). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => onOpenPrivacy ? onOpenPrivacy() : (window.location.hash = '#privacy-policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenTerms ? onOpenTerms() : (window.location.hash = '#terms-and-conditions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-gray-600" />
            </a>
            <a
              href={COMPANY_INFO.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Website</span>
              <ArrowUpRight className="w-3 h-3 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
