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
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-appleDark-bg">
      {/* Apple-style Radiant Ambient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(56,189,248,0.2),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      {/* Subtle Apple Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Apple Product Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-sky-400/30 text-xs font-semibold text-slate-200 shadow-apple-card">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-white font-medium">มจธ. (KMUTT)</span>
              <span className="text-slate-500">•</span>
              <span className="text-sky-300">Physics Materials & Medical Instrumentation</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-medium tracking-wide uppercase text-sky-400/90 font-mono">
                Undergraduate Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                ภาณุวิทย์ <br className="hidden sm:inline" />
                <span className="text-apple-glow">อนันอนุสิทธิ์</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300 pt-1">
                Panuwit Anananusit <span className="text-sky-400 font-medium">| Fluke (ฟลุ๊ค)</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              นักศึกษาชั้นปีที่ 3 ภาควิชาฟิสิกส์ คณะวิทยาศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)
              ผสานความรู้ด้าน <span className="text-white font-semibold">เครื่องมือทางการแพทย์ (Medical Instrumentation)</span>, 
              การออกแบบวงจรอิเล็กทรอนิกส์ & เซนเซอร์ และเทคโนโลยีฟิล์มบางระบบสุญญากาศ
            </p>

            {/* Apple-style Action Buttons (Never wrap text!) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="btn-nowrap px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-navy-950 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 hover:brightness-110 shadow-apple-glow hover:scale-105 active:scale-95 transition-all gap-2"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>ส่งอีเมลหาผมทันที</span>
              </button>

              <a
                href="#projects"
                className="btn-nowrap px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white glass-panel hover:bg-white/10 border border-white/15 hover:border-sky-400/40 hover:scale-105 active:scale-95 transition-all gap-2"
              >
                <span>สำรวจโปรเจกต์ & ผลงาน</span>
                <ArrowDown className="w-4 h-4 text-sky-400 shrink-0" />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-nowrap px-5 py-3.5 rounded-full font-medium text-sm sm:text-base text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:scale-105 transition-all gap-2"
              >
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                <span>ดูสรุป Portfolio</span>
              </button>
            </div>

            {/* Contact Pills with Copy Trigger (Clean & No text breaks) */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 text-center lg:text-left">
                ช่องทางติดต่อรวดเร็ว (คลิกเพื่อคัดลอกทันที)
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <button
                  onClick={() => onCopyText(personalInfo.email, 'อีเมล')}
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 glass-panel hover:border-sky-400/50 hover:text-sky-300 transition-all gap-1.5"
                  title="คลิกเพื่อคัดลอกอีเมล"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{personalInfo.email}</span>
                  <Copy className="w-3 h-3 text-slate-500 ml-1 shrink-0" />
                </button>

                <button
                  onClick={() => onCopyText(personalInfo.phone, 'เบอร์โทรศัพท์')}
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 glass-panel hover:border-emerald-400/50 hover:text-emerald-300 transition-all gap-1.5"
                  title="คลิกเพื่อคัดลอกเบอร์โทร"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                  <Copy className="w-3 h-3 text-slate-500 ml-1 shrink-0" />
                </button>

                <button
                  onClick={() => onCopyText(personalInfo.lineId, 'LINE ID')}
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 glass-panel hover:border-emerald-400/50 transition-all gap-1.5"
                  title="คลิกเพื่อคัดลอก LINE ID"
                >
                  <span className="font-bold text-emerald-400">LINE:</span>
                  <span>{personalInfo.lineId}</span>
                  <Copy className="w-3 h-3 text-slate-500 ml-1 shrink-0" />
                </button>

                <a
                  href={`https://instagram.com/${personalInfo.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 glass-panel hover:border-rose-400/50 hover:text-rose-300 transition-all gap-1.5"
                >
                  <span className="font-bold text-rose-400">IG:</span>
                  <span>@{personalInfo.instagram}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-0.5 shrink-0" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Apple-style Portrait Showcase with Floating Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Apple Ambient Aura behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/25 via-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-70 animate-pulse-glow" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-[2rem] p-2 glass-panel border border-white/15 shadow-apple-glass overflow-hidden group">
                
                {/* Profile Image with subtle lighting */}
                <div className="relative rounded-[1.75rem] overflow-hidden bg-slate-900 aspect-3/4">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-appleDark-bg via-transparent to-transparent opacity-80" />

                  {/* On-Image Identification */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10">
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
                <div className="absolute -top-3 -left-3 sm:-left-5 glass-panel px-3.5 py-2 rounded-2xl shadow-apple-card border border-white/20 animate-float flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Focus Area</p>
                    <p className="text-xs font-bold text-white">Medical Tech</p>
                  </div>
                </div>

                {/* Floating Apple-style Badge 2: Bottom Right */}
                <div className="absolute -bottom-3 -right-3 sm:-right-4 glass-panel px-3.5 py-2 rounded-2xl shadow-apple-card border border-white/20 animate-float-slow flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Global Training</p>
                    <p className="text-xs font-bold text-white">Tianjin, China</p>
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
