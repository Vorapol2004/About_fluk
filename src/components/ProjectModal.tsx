import React, { useEffect } from 'react';
import { X, Calendar, Tag, CheckCircle, BookOpen, Sparkles, Send } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Apple-style Frosted Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div 
          className="relative w-full max-w-3xl transform overflow-hidden rounded-[2.5rem] glass-panel border border-white/15 text-left shadow-apple-glass transition-all my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-b from-white/10 to-transparent p-6 sm:p-8 border-b border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="btn-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-200 border border-sky-400/30">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.year}</span>
                </span>
                <span className="btn-nowrap inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/15">
                  {project.categoryLabel}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mt-4 leading-snug text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-sky-300 mt-2 font-medium">
              {project.thaiTitle}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Tagline */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Detailed Descriptions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>รายละเอียดและการดำเนินงาน (Project Operations)</span>
              </h4>
              <ul className="space-y-2.5">
                {project.descriptions.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Highlights / Principles */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>ผลลัพธ์และหลักการสำคัญ (Key Principles & Learnings)</span>
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tags */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-sky-400" />
                <span>ทักษะและเครื่องมือที่ใช้ (Skills & Tools)</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="btn-nowrap px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 bg-slate-950/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              สนใจพูดคุยหรือสอบถามเกี่ยวกับโครงงานนี้เพิ่มเติม?
            </p>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="btn-nowrap flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                ปิดหน้าต่าง
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="btn-nowrap flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:brightness-110 shadow-apple-glow transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>ส่งอีเมลสอบถามฟลุ๊ค</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
