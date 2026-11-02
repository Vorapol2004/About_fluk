import React, { useState } from 'react';
import { 
  FolderKanban, 
  Calendar, 
  Cpu, 
  HeartPulse, 
  Globe2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { projects, type Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenResume: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, onOpenResume }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'medical' | 'circuits' | 'training'>('all');

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const filterTabs = [
    { id: 'all', label: 'ทั้งหมด (All Projects)', count: projects.length },
    { id: 'medical', label: 'เครื่องมือแพทย์ & PM (Medical)', count: projects.filter(p => p.category === 'medical').length },
    { id: 'circuits', label: 'วงจร & เซนเซอร์ (Circuits)', count: projects.filter(p => p.category === 'circuits').length },
    { id: 'training', label: 'การฝึกอบรม & วิจัย (Training)', count: projects.filter(p => p.category === 'training').length },
  ];

  return (
    <section id="projects" className="py-24 bg-appleDark-bg relative border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 rounded-full blur-3xl pointer-events-none" 
        style={{ backgroundColor: 'var(--spotlight-accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-slate-200/80 dark:border-white/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Interactive Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            ผลงานและประสบการณ์ระหว่างเรียน
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            คลิกดูโครงงานเพื่อสำรวจระบบ วงจร และหลักการทำงานเชิงลึก
          </p>
        </div>

        {/* Apple-style Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`btn-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all gap-2 ${
                activeFilter === tab.id
                  ? 'bg-sky-500 dark:bg-sky-400 text-white dark:text-navy-950 shadow-apple-glow scale-105'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                activeFilter === tab.id 
                  ? 'bg-white/20 dark:bg-navy-950/20 text-white dark:text-navy-950 font-bold' 
                  : 'bg-slate-200/80 dark:bg-white/10 text-slate-600 dark:text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const isMedical = project.category === 'medical';
            const isCircuits = project.category === 'circuits';
            const isTraining = project.category === 'training';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative glass-panel glass-panel-hover rounded-[2rem] p-7 sm:p-8 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="btn-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0" />
                      <span>{project.year}</span>
                    </span>

                    <span className={`btn-nowrap text-[11px] font-semibold px-3 py-1 rounded-full border ${
                      isMedical 
                        ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-400/20' 
                        : isCircuits 
                        ? 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-400/20'
                        : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-400/20'
                    }`}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white dark:group-hover:bg-sky-400 dark:group-hover:text-navy-950 transition-all flex items-center justify-center mb-4 shrink-0 shadow-sm">
                      {isMedical && <HeartPulse className="w-6 h-6" />}
                      {isCircuits && <Cpu className="w-6 h-6" />}
                      {isTraining && <Globe2 className="w-6 h-6" />}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-navy-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-sky-700 dark:text-sky-400 font-medium mt-1.5 line-clamp-1">
                      {project.thaiTitle}
                    </p>
                  </div>

                  {/* Summary Tagline */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Feature preview */}
                  <div className="space-y-1.5 mb-5 text-xs text-slate-500 dark:text-slate-400">
                    {project.descriptions.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 line-clamp-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0 mt-1.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200 dark:border-white/10">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="btn-nowrap text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-200/60 dark:border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="btn-nowrap text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Interactive Button (Never wrap text!) */}
                  <div className="btn-nowrap w-full py-3 px-4 rounded-xl text-xs font-semibold text-navy-950 dark:text-white bg-slate-100 dark:bg-white/10 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-sky-300 group-hover:text-navy-950 transition-all flex items-center justify-between border border-slate-200/60 dark:border-white/5">
                    <span>เปิดดูรายละเอียดโครงงาน</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple-style Bottom Banner for Full Portfolio Modal */}
        <div className="mt-16 p-8 sm:p-10 rounded-[2.5rem] glass-panel border border-slate-200/80 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-apple-glass relative overflow-hidden">
          <div 
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl pointer-events-none" 
            style={{ backgroundColor: 'var(--spotlight-accent)' }}
          />
          
          <div className="space-y-1.5 text-center sm:text-left relative">
            <h4 className="text-xl sm:text-2xl font-bold text-navy-950 dark:text-white flex items-center justify-center sm:justify-start gap-2.5">
              <Sparkles className="w-5 h-5 text-sky-500 dark:text-sky-400 shrink-0" />
              <span>ต้องการดู Portfolio สรุปภาพรวมทั้งหมดในหน้าเดียว?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              เปิดหน้าต่าง Portfolio View แบบโต้ตอบ รวมทุกโปรเจกต์ ทักษะ และกิจกรรมไว้ในสไตล์เอกสารทางการ พร้อมฟังก์ชันพิมพ์หรือบันทึกเป็น PDF
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="btn-nowrap px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:brightness-110 shadow-apple-glow shrink-0 transition-all hover:scale-105 active:scale-95"
          >
            เปิดดู Portfolio บนเว็บ
          </button>
        </div>

      </div>
    </section>
  );
};
