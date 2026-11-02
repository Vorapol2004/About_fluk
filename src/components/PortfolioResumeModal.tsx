import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Sparkles, 
  Send,
  Maximize2,
  Minimize2,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { personalInfo, technicalSkillGroups, softSkills, projects, activities } from '../data/portfolioData';

interface PortfolioResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const PortfolioResumeModal: React.FC<PortfolioResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  // React State Management
  const [viewMode, setViewMode] = useState<'iframe-pdf' | 'digital'>('iframe-pdf');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isIframeLoading, setIsIframeLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setIsIframeLoading(true);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;


  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.originalPortfolioPdf;
    link.download = 'Portfolio_Panuwit_KMUTT.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Apple-style Frosted Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-2xl transition-opacity"
        onClick={onClose}
      />

      <div className={`flex min-h-full items-center justify-center p-2 sm:p-4 text-center ${
        isFullscreen ? 'p-0 sm:p-1' : ''
      }`}>
        <div 
          className={`relative w-full transform overflow-hidden rounded-[2rem] glass-panel text-left shadow-apple-glass transition-all border border-white/15 my-2 print:m-0 print:border-none print:shadow-none print:bg-white print:text-slate-900 ${
            isFullscreen ? 'max-w-[98vw] h-[96vh]' : 'max-w-5xl my-4 sm:my-6'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Control Bar (Integrated React State Management) */}
          <div className="bg-slate-900/90 border-b border-white/10 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setViewMode('iframe-pdf')}
                className={`btn-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all gap-1.5 ${
                  viewMode === 'iframe-pdf'
                    ? 'bg-sky-400 text-navy-950 shadow-apple-glow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>PDF เอกสารต้นฉบับ (iframe)</span>
              </button>
              
              <button
                onClick={() => setViewMode('digital')}
                className={`btn-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all gap-1.5 ${
                  viewMode === 'digital'
                    ? 'bg-sky-400 text-navy-950 shadow-apple-glow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>มุมมองสรุปดิจิทัล</span>
              </button>
            </div>

            {/* Quick Action Buttons (Download, Print, Fullscreen, Close) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleDirectDownload}
                className="btn-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/30 transition-all hover:scale-105 active:scale-95"
                title="ดาวน์โหลดไฟล์ PDF ต้นฉบับแบบไร้ขอบกระดาษ"
              >
                <Download className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>ดาวน์โหลด PDF</span>
              </button>


              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 hidden sm:flex"
                title={isFullscreen ? 'ย่อขนาด' : 'ขยายเต็มจอ'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Modal Main Content */}
          <div className={`p-0 overflow-hidden relative ${
            isFullscreen ? 'h-[calc(96vh-56px)]' : 'h-[78vh] sm:h-[82vh]'
          }`}>
            
            {/* VIEW 1: EMBEDDED PDF VIA HTML <iframe> (Direct PDF Vector Renderer - No Paper Border Issue) */}
            {viewMode === 'iframe-pdf' && (
              <div className="w-full h-full relative bg-slate-950 flex flex-col">
                
                {/* Skeleton Loader during iframe initialization */}
                {isIframeLoading && (
                  <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center gap-3 z-10">
                    <Loader2 className="w-8 h-8 text-sky-400 animate-spin" />
                    <p className="text-xs text-slate-400 font-mono tracking-wider uppercase">
                      กำลังโหลดเอกสาร PDF ต้นฉบับ...
                    </p>
                  </div>
                )}

                {/* HTML <iframe> for native borderless PDF rendering */}
                <iframe
                  src={`${personalInfo.originalPortfolioPdf}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  title="Panuwit Anananusit Portfolio Original PDF"
                  className="w-full h-full border-0 bg-slate-900 block"
                  onLoad={() => setIsIframeLoading(false)}
                />

                {/* Mobile Fallback Bar */}
                <div className="sm:hidden p-2.5 bg-slate-900 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>เอกสาร PDF ต้นฉบับ (KMUTT)</span>
                  <a
                    href={personalInfo.originalPortfolioPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 font-semibold flex items-center gap-1"
                  >
                    <span>เปิดเต็มจอ</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* VIEW 2: DIGITAL INTERACTIVE VIEW (Optional Switcher) */}
            {viewMode === 'digital' && (
              <div className="p-6 sm:p-10 h-full overflow-y-auto">
                <div className="rounded-[2rem] bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white p-6 sm:p-8 mb-8 border border-white/10 shadow-apple-card">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                      <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top ring-2 ring-sky-400/50 shadow-md shrink-0"
                      />
                      <div>
                        <span className="btn-nowrap inline-block px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
                          KMUTT Physics & Medical Instrumentation
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {personalInfo.name}
                        </h1>
                        <p className="text-base sm:text-lg font-bold text-sky-300 mt-0.5">
                          {personalInfo.thaiName} ({personalInfo.nickname}) • อายุ {personalInfo.age} ปี
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                          {personalInfo.bio}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300 bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0 w-full sm:w-auto">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{personalInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{personalInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-400">LINE:</span>
                        <span>{personalInfo.lineId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-rose-400">IG:</span>
                        <span>@{personalInfo.instagram}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Digital Cards */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-8">
                  <div className="md:col-span-5 space-y-6">
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                        Education (การศึกษา)
                      </h3>
                      <p className="text-sm font-bold text-white">{personalInfo.thaiUniversity}</p>
                      <p className="text-xs text-slate-300 mt-0.5">{personalInfo.thaiFaculty} • {personalInfo.thaiDepartment}</p>
                      <p className="text-xs font-semibold text-sky-300 mt-1">{personalInfo.thaiMajor}</p>
                      <p className="text-xs text-slate-400 mt-1">ระดับชั้นปีที่ 3 (Undergraduate Year 3)</p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                        Technical Skills
                      </h3>
                      {technicalSkillGroups.map((grp, gIdx) => (
                        <div key={gIdx} className="space-y-1">
                          <p className="text-xs font-bold text-white">{grp.group}</p>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {grp.skills.map((s, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-1.5">
                                <span className="text-sky-400 font-bold">•</span>
                                <span>{s.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                        Soft Skills
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                        {softSkills.map((s, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="text-emerald-400">✓</span>
                            <span>{s.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/10">
                        My Project & My Experience
                      </h3>
                      <div className="space-y-4">
                        {projects.map((proj) => (
                          <div key={proj.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="btn-nowrap text-xs font-bold text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-400/20">
                                {proj.year}
                              </span>
                              <span className="text-[11px] font-medium text-slate-400">
                                {proj.categoryLabel}
                              </span>
                            </div>
                            <h4 className="font-bold text-white text-sm leading-snug">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-sky-400 font-medium mt-0.5">
                              {proj.thaiTitle}
                            </p>
                            <ul className="mt-2 space-y-1 text-xs text-slate-300 leading-relaxed">
                              {proj.descriptions.map((d, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-1.5">
                                  <span className="text-slate-500">•</span>
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/10">
                        Extracurricular Activities
                      </h3>
                      <div className="space-y-3">
                        {activities.map((act) => (
                          <div key={act.id} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start justify-between gap-3 text-xs">
                            <div>
                              <p className="font-bold text-white">{act.title}</p>
                              <p className="text-slate-400 mt-0.5">{act.description}</p>
                            </div>
                            <span className="btn-nowrap shrink-0 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full font-medium text-slate-300">
                              {act.year}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Modal Bottom CTA */}
          <div className="bg-slate-900/90 border-t border-white/10 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
            <div className="text-xs text-slate-400">
              ติดต่อคุณฟลุ๊ค: <span className="font-semibold text-sky-300">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={handleDirectDownload}
                className="btn-nowrap flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>ดาวน์โหลด PDF</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="btn-nowrap flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 rounded-full shadow-apple-glow transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>ส่งอีเมลหาฟลุ๊ค</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
