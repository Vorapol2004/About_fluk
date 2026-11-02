import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, GraduationCap, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          : 'bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/5 shadow-sm dark:shadow-none py-2.5 sm:py-3 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover object-top ring-2 ring-sky-400/50 group-hover:ring-sky-500 transition-all"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-900" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-navy-950 dark:text-white text-sm sm:text-base tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-400/30">
                  KMUTT
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block truncate max-w-[200px] lg:max-w-none">
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
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Theme Toggle + Portfolio + Email) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn-nowrap p-2 rounded-full text-slate-700 dark:text-slate-200 bg-slate-100/90 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 transition-all hover:scale-105 active:scale-95"
              title={theme === 'dark' ? 'เปลี่ยนเป็นธีมสว่าง (ขาวกรม)' : 'เปลี่ยนเป็นธีมมืด (Dark Mode)'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 text-navy-900 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="btn-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-navy-900 dark:text-slate-200 bg-navy-50/80 hover:bg-navy-100 dark:bg-white/5 dark:hover:bg-white/15 border border-navy-200/80 dark:border-white/10 hover:border-navy-300 dark:hover:border-white/25 transition-all"
            >
              <GraduationCap className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0" />
              <span>ดู Portfolio</span>
            </button>

            <button
              onClick={onOpenContact}
              className="btn-nowrap inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-300 hover:to-white shadow-sm hover:shadow-apple-glow transition-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>ส่งอีเมล</span>
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/10 rounded-full border border-slate-200/70 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-navy-900" />
              )}
            </button>
            <button
              onClick={onOpenContact}
              className="p-2 text-sky-600 dark:text-sky-300 bg-sky-50 dark:bg-white/10 rounded-full hover:bg-sky-100 dark:hover:bg-white/20 transition-colors"
              title="ส่งอีเมล"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Frosted Glass) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl glass-nav p-5 space-y-4 shadow-apple-glass animate-fadeIn border border-slate-200/60 dark:border-white/10">
          
          {/* Theme Switcher inside Mobile Drawer */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              โหมดสีหน้าเว็บ: <span className="text-sky-600 dark:text-sky-400">{theme === 'dark' ? 'ธีมมืด (Midnight)' : 'ธีมขาวกรม (White & Navy)'}</span>
            </span>
            <button
              onClick={toggleTheme}
              className="btn-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-white dark:bg-white/10 text-navy-950 dark:text-white shadow-sm border border-slate-200 dark:border-white/10"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>เปลี่ยนเป็นขาวกรม</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-navy-900" />
                  <span>เปลี่ยนเป็นธีมมืด</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full btn-nowrap flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-navy-950 dark:text-slate-200 bg-slate-100 dark:bg-white/10 rounded-2xl border border-slate-200 dark:border-white/10"
            >
              <GraduationCap className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
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
