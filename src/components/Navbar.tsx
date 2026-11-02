import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'เกี่ยวกับฟลุ๊ค', href: '#about' },
    { name: 'ทักษะความเชี่ยวชาญ', href: '#skills' },
    { name: 'โปรเจกต์ & ผลงาน', href: '#projects' },
    { name: 'กิจกรรมเพื่อสังคม', href: '#activities' },
    { name: 'ติดต่อ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4">
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-apple-glass py-2 sm:py-2.5 px-4 sm:px-6'
          : 'bg-slate-900/40 backdrop-blur-md border border-white/5 py-2.5 sm:py-3 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover object-top ring-2 ring-sky-400/40 group-hover:ring-sky-400 transition-all"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-sky-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/10 text-sky-300 border border-sky-400/20">
                  KMUTT
                </span>
              </div>
              <span className="text-[11px] text-slate-400 hidden sm:block truncate max-w-[200px] lg:max-w-none">
                Physics & Medical Instrumentation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons (No text wrapping!) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenResume}
              className="btn-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 transition-all"
            >
              <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>ดู Portfolio</span>
            </button>

            <button
              onClick={onOpenContact}
              className="btn-nowrap inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-300 hover:to-white shadow-sm hover:shadow-apple-glow transition-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>ส่งอีเมล</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenContact}
              className="p-2 text-sky-300 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              title="ส่งอีเมล"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Frosted Glass) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl glass-nav p-5 space-y-4 shadow-apple-glass animate-fadeIn border border-white/10">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full btn-nowrap flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-white/10 rounded-2xl border border-white/10"
            >
              <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>เปิดดูสรุป Portfolio บนเว็บ</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full btn-nowrap flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 rounded-2xl shadow-apple-glow"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>ส่งอีเมลติดต่อ: flukpanuwit1412@gmail.com</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
