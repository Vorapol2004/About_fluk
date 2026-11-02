import React from 'react';
import { 
  Award, 
  HeartHandshake, 
  Palette, 
  Trophy, 
  Music, 
  GraduationCap, 
  CheckCircle2
} from 'lucide-react';
import { activities } from '../data/portfolioData';

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-24 bg-appleDark-bg relative border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none" 
        style={{ backgroundColor: 'var(--spotlight-secondary)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-slate-200/80 dark:border-white/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Activities & Social Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            กิจกรรมเพื่อสังคมและสันทนาการ
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            การทำงานจิตอาสา ค่ายฟิสิกส์ การแข่งขันกีฬา ดนตรี และการเป็นติวเตอร์สนับสนุนรุ่นน้อง
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {activities.map((act) => {
            const isVolunteer = act.category === 'volunteer';
            const isTeaching = act.category === 'teaching';
            const isSports = act.category === 'sports';
            const isMusic = act.category === 'music';

            return (
              <div
                key={act.id}
                className="glass-panel glass-panel-hover rounded-[2rem] p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Category Badge & Year */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="btn-nowrap text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1 rounded-full">
                      {act.year}
                    </span>
                    <span className={`btn-nowrap text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      isVolunteer ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-400/20' :
                      isTeaching ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-400/20' :
                      isSports ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-400/20' :
                      isMusic ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-400/20' :
                      'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-400/20'
                    }`}>
                      {act.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-center shrink-0">
                      {isVolunteer && <HeartHandshake className="w-6 h-6 text-rose-500 dark:text-rose-400" />}
                      {isTeaching && <Palette className="w-6 h-6 text-purple-500 dark:text-purple-400" />}
                      {isSports && <Trophy className="w-6 h-6 text-amber-500 dark:text-amber-400" />}
                      {isMusic && <Music className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />}
                      {act.category === 'academic' && <GraduationCap className="w-6 h-6 text-sky-500 dark:text-sky-400" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-950 dark:text-white text-base leading-snug">
                        {act.title}
                      </h3>
                      <p className="text-xs text-sky-700 dark:text-sky-400 font-medium mt-0.5">
                        {act.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                    {act.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>KMUTT ACTIVITY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
