import React from 'react';
import { 
  Wrench, 
  Cpu, 
  HeartPulse, 
  Layers, 
  MessageSquare, 
  GitMerge, 
  Presentation, 
  Ear, 
  CheckSquare, 
  Users, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { technicalSkillGroups, softSkills } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-appleDark-bg relative border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical & Soft Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ทักษะและความเชี่ยวชาญ
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            ความรู้และทักษะทั้งเชิงวิศวกรรมการแพทย์ ห้องปฏิบัติการฟิสิกส์ และการทำงานร่วมกับผู้อื่น
          </p>
        </div>

        {/* Technical Skills: Apple Bento Tech Matrix (3 columns) */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-sky-400 to-blue-600 inline-block" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Technical Skills (ทักษะเชิงเทคนิค)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkillGroups.map((group, idx) => {
              const isFirst = idx === 0;
              const isSecond = idx === 1;

              return (
                <div
                  key={group.group}
                  className="glass-panel glass-panel-hover rounded-[2rem] p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-white/10">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isFirst 
                          ? 'bg-sky-500/10 text-sky-400 border-sky-400/20' 
                          : isSecond 
                          ? 'bg-rose-500/10 text-rose-400 border-rose-400/20' 
                          : 'bg-purple-500/10 text-purple-400 border-purple-400/20'
                      }`}>
                        {group.icon === 'Cpu' && <Cpu className="w-6 h-6" />}
                        {group.icon === 'HeartPulse' && <HeartPulse className="w-6 h-6" />}
                        {group.icon === 'Layers' && <Layers className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">
                          {group.group}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {group.thaiGroup}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-4">
                      {group.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="group/item">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1 group-hover/item:text-white transition-colors" />
                            <div>
                              <p className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                                {skill.name}
                              </p>
                              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                                {skill.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>LAB / PROJECT TESTED</span>
                    <span className="text-sky-400 font-bold">KMUTT</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-purple-400 to-indigo-600 inline-block" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Soft Skills & Interpersonal Competencies (ทักษะการทำงานร่วมกับผู้อื่น)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {softSkills.map((soft, index) => (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-sky-400 flex items-center justify-center shrink-0">
                  {soft.icon === 'MessageSquare' && <MessageSquare className="w-5 h-5 text-sky-400" />}
                  {soft.icon === 'GitMerge' && <GitMerge className="w-5 h-5 text-emerald-400" />}
                  {soft.icon === 'Presentation' && <Presentation className="w-5 h-5 text-indigo-400" />}
                  {soft.icon === 'Ear' && <Ear className="w-5 h-5 text-teal-400" />}
                  {soft.icon === 'CheckSquare' && <CheckSquare className="w-5 h-5 text-amber-400" />}
                  {soft.icon === 'Users' && <Users className="w-5 h-5 text-rose-400" />}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {soft.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {soft.thai}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
