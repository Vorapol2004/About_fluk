import React from 'react';
import { Mail, ArrowDown, ExternalLink, Sparkles, Phone, Send, Copy, GraduationCap, ChevronRight, ShieldCheck, HeartPulse, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume, onCopyText }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-appleDark-bg transition-colors duration-300">
      {/* Apple-style Radiant Ambient Spotlights (Controlled by CSS Variables) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none transition-opacity duration-500"
        style={{ background: 'var(--spotlight-hero)' }}
      />
      <div 
        className="absolute top-1/4 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: 'var(--spotlight-secondary)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-float-slow"
        style={{ backgroundColor: 'var(--spotlight-accent)' }}
      />

      {/* Subtle Apple Grid Texture */}
      <div 
        className="absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)' 
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Apple Product Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-sky-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-apple-card">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-navy-950 dark:text-white font-semibold">มจธ. (KMUTT)</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-sky-700 dark:text-sky-300">Physics Materials & Medical Instrumentation</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-sky-600 dark:text-sky-400/90 font-mono">
                Undergraduate Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 dark:text-white tracking-tight leading-[1.15]">
                ภาณุวิทย์ <br className="hidden sm:inline" />
                <span className="text-apple-glow">อนันอนุสิทธิ์</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 pt-1">
                Panuwit Anananusit <span className="text-sky-600 dark:text-sky-400 font-medium">| Fluke (ฟลุ๊ค)</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              นักศึกษาชั้นปีที่ 3 ภาควิชาฟิสิกส์ คณะวิทยาศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)
              ผสานความรู้ด้าน <span className="text-navy-950 dark:text-white font-semibold">เครื่องมือทางการแพทย์ (Medical Instrumentation)</span>, 
              การออกแบบวงจรอิเล็กทรอนิกส์ & เซนเซอร์ และเทคโนโลยีฟิล์มบางระบบสุญญากาศ
            </p>

            {/* Apple-style Action Buttons (Never wrap text!) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="btn-nowrap px-6 py-3.5 rounded-full font-bold text-sm sm:text-base text-navy-950 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 hover:brightness-110 shadow-apple-glow hover:scale-105 active:scale-95 transition-all gap-2"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>ส่งอีเมลหาผมทันที</span>
              </button>

              <a
                href="#projects"
                className="btn-nowrap px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-navy-950 dark:text-white glass-panel hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/15 hover:border-sky-500/50 hover:scale-105 active:scale-95 transition-all gap-2"
              >
                <span>สำรวจโปรเจกต์ & ผลงาน</span>
                <ArrowDown className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-nowrap px-5 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:scale-105 transition-all gap-2"
              >
                <GraduationCap className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                <span>ดูสรุป Portfolio</span>
              </button>
            </div>

            {/* Contact Pills with Copy Trigger */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5 text-center lg:text-left">
                ช่องทางติดต่อรวดเร็ว (คลิกเพื่อคัดลอกทันที)
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <button
                  onClick={() => onCopyText(personalInfo.email, 'อีเมล')}
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 glass-panel hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-300 transition-all gap-1.5"
                  title="คลิกเพื่อคัดลอกอีเมล"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0" />
                  <span>{personalInfo.email}</span>
                  <Copy className="w-3 h-3 text-slate-400 dark:text-slate-500 ml-1 shrink-0" />
                </button>

                <button
                  onClick={() => onCopyText(personalInfo.phone, 'เบอร์โทรศัพท์')}
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 glass-panel hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all gap-1.5"
                  title="คลิกเพื่อคัดลอกเบอร์โทร"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                  <Copy className="w-3 h-3 text-slate-400 dark:text-slate-500 ml-1 shrink-0" />
                </button>

                <button
                  onClick={() => onCopyText(personalInfo.lineId, 'LINE ID')}
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 glass-panel hover:border-emerald-500/50 transition-all gap-1.5"
                  title="คลิกเพื่อคัดลอก LINE ID"
                >
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">LINE:</span>
                  <span>{personalInfo.lineId}</span>
                  <Copy className="w-3 h-3 text-slate-400 dark:text-slate-500 ml-1 shrink-0" />
                </button>

                <a
                  href={`https://instagram.com/${personalInfo.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 glass-panel hover:border-rose-500/50 hover:text-rose-600 dark:hover:text-rose-300 transition-all gap-1.5"
                >
                  <span className="font-bold text-rose-500 dark:text-rose-400">IG:</span>
                  <span>@{personalInfo.instagram}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500 ml-0.5 shrink-0" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Apple-style Portrait Showcase with Floating Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Apple Ambient Aura behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-purple-600/15 rounded-[2.5rem] blur-2xl opacity-70 animate-pulse-glow" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-[2rem] p-2 glass-panel border border-slate-200/80 dark:border-white/15 shadow-apple-glass overflow-hidden group">
                
                {/* Profile Image with subtle lighting */}
                <div className="relative rounded-[1.75rem] overflow-hidden bg-slate-900 aspect-3/4">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* On-Image Identification */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-white text-base sm:text-lg">
                          {personalInfo.name}
                        </h3>
                        <p className="text-xs text-sky-300 font-medium">
                          {personalInfo.thaiName} (Fluke)
                        </p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Year 3 KMUTT
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Apple-style Badge 1: Top Left */}
                <div className="absolute -top-3 -left-3 sm:-left-5 glass-panel px-3.5 py-2 rounded-2xl shadow-apple-card border border-slate-200/80 dark:border-white/20 animate-float flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-600 dark:text-sky-300 flex items-center justify-center">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Focus Area</p>
                    <p className="text-xs font-bold text-navy-950 dark:text-white">Medical Tech</p>
                  </div>
                </div>

                {/* Floating Apple-style Badge 2: Bottom Right */}
                <div className="absolute -bottom-3 -right-3 sm:-right-4 glass-panel px-3.5 py-2 rounded-2xl shadow-apple-card border border-slate-200/80 dark:border-white/20 animate-float-slow flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-300 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Global Training</p>
                    <p className="text-xs font-bold text-navy-950 dark:text-white">Tianjin, China</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
