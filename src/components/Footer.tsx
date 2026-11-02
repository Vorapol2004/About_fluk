import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-appleDark-bg text-slate-800 dark:text-white border-t border-slate-200/80 dark:border-white/10 pt-20 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background light */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 rounded-full blur-3xl pointer-events-none" 
        style={{ backgroundColor: 'var(--spotlight-accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-200 dark:border-white/10">

          {/* Brand & Intro (6 cols) */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-sky-400/50 shadow-md shrink-0"
              />
              <div>
                <h3 className="font-bold text-lg text-navy-950 dark:text-white">
                  {personalInfo.name} ({personalInfo.nickname})
                </h3>
                <p className="text-xs text-sky-700 dark:text-sky-400 font-semibold">
                  Physics Materials & Medical Instrumentation, KMUTT
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              เว็บไซต์รวบรวมประวัติการศึกษา โครงงานวิจัย และกิจกรรมนอกหลักสูตร ณ ภาควิชาฟิสิกส์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="btn-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:brightness-110 shadow-apple-glow transition-all"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>ส่งอีเมลติดต่อ: {personalInfo.email}</span>
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              แผนผังเว็บไซต์
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-navy-950 dark:hover:text-white transition-colors">
                  ประวัติส่วนตัว (About Me)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-navy-950 dark:hover:text-white transition-colors">
                  ทักษะและความเชี่ยวชาญ (Skills)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-navy-950 dark:hover:text-white transition-colors">
                  ผลงานและโครงงาน (Projects)
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-navy-950 dark:hover:text-white transition-colors">
                  กิจกรรมเพื่อสังคม (Activities)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-sky-600 dark:hover:text-sky-300 transition-colors text-left"
                >
                  เปิดดูสรุป Portfolio บนเว็บ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              ช่องทางการติดต่อ
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-slate-500">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 truncate font-medium">
                  {personalInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500">Phone:</span>
                <a href={`tel:${personalInfo.phone}`} className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 font-medium">
                  {personalInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500">LINE ID:</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{personalInfo.lineId}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500">Instagram:</span>
                <a
                  href={`https://instagram.com/${personalInfo.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-300 font-medium"
                >
                  @{personalInfo.instagram}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Developed by Fluk.</p>

          <button
            onClick={scrollToTop}
            className="btn-nowrap inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white border border-slate-200/80 dark:border-white/10 transition-colors"
          >
            <span>กลับสู่ด้านบนสุด</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
