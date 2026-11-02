import React from 'react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Flame, 
  Trophy, 
  Music, 
  Activity, 
  Sparkles, 
  Layers, 
  HeartPulse 
} from 'lucide-react';
import { personalInfo, interests, hobbies } from '../data/portfolioData';

interface AboutSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onCopyText }) => {
  return (
    <section id="about" className="py-24 bg-appleDark-bg relative border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      {/* Subtle ambient light */}
      <div 
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" 
        style={{ backgroundColor: 'var(--spotlight-accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Apple-style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-slate-200/80 dark:border-white/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            ประวัติและเส้นทางการศึกษา
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            ความมุ่งมั่นในการผสานทฤษฎีทางฟิสิกส์เข้ากับนวัตกรรมเครื่องมือแพทย์และเทคโนโลยีวัสดุ
          </p>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Main Story (8 cols) */}
          <div className="md:col-span-8 glass-panel glass-panel-hover rounded-[2rem] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-400/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950 dark:text-white">
                    เส้นทางการเรียนรู้และเป้าหมาย
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
                    Physics Materials & Medical Instrumentation, KMUTT
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  สวัสดีครับ ผมชื่อ <strong className="text-navy-950 dark:text-white font-bold">{personalInfo.thaiName}</strong> หรือ <strong className="text-sky-600 dark:text-sky-300 font-bold">{personalInfo.nickname}</strong> อายุ {personalInfo.age} ปี ปัจจุบันกำลังศึกษาอยู่ชั้นปีที่ 3 ภาควิชาฟิสิกส์ คณะวิทยาศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)
                </p>
                <p>
                  สาขาวิชาเอกของผมคือ <strong className="text-navy-950 dark:text-white font-bold">{personalInfo.thaiMajor}</strong> ซึ่งมุ่งเน้นการบูรณาการองค์ความรู้ระหว่าง <span className="text-sky-700 dark:text-sky-300 font-medium">วงจรอิเล็กทรอนิกส์</span>, <span className="text-sky-700 dark:text-sky-300 font-medium">การประมวลผลสัญญาณเซนเซอร์</span> และ <span className="text-sky-700 dark:text-sky-300 font-medium">มาตรฐานความปลอดภัยของเครื่องมือแพทย์</span>
                </p>
                <p>
                  ผมได้รับโอกาสในการลงมือปฏิบัติงานจริงอย่างเข้มข้น ทั้งการสร้างต้นแบบเครื่องวัดออกซิเจนในเลือด (Pulse Oximeter) ด้วย Arduino, การตรวจเช็กและบำรุงรักษาเชิงป้องกัน (PM) อุปกรณ์การแพทย์นอกสถานที่ และการเข้าร่วมโครงการฝึกอบรมวิชาการระดับนานาชาติด้านเทคโนโลยีสุญญากาศและฟิล์มบาง ณ มหาวิทยาลัยเทียนจิน ประเทศจีน
                </p>
              </div>
            </div>

            {/* University Tag Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-navy-950 dark:text-white">
                    {personalInfo.thaiUniversity}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {personalInfo.thaiFaculty} • {personalInfo.thaiDepartment}
                  </p>
                </div>
              </div>
              <span className="btn-nowrap px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30">
                นักศึกษาชั้นปีที่ 3
              </span>
            </div>
          </div>

          {/* Bento Card 2: Quick Highlights / Metrics (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            
            <div className="glass-panel glass-panel-hover rounded-[1.75rem] p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-navy-950 dark:text-white">5+</p>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Projects & Practicals</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">โครงงาน & การลงปฏิบัติการ</p>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-[1.75rem] p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-purple-700 dark:text-purple-300">China</p>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Tianjin Normal Univ.</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">การฝึกอบรมนานาชาติ</p>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-[1.75rem] p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-300">Tutor</p>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Calculus Peer Tutor</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">ติวเตอร์วิชาแคลคูลัสน้องปี 1</p>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-[1.75rem] p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-amber-700 dark:text-amber-300">Volunteer</p>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Physics Outreach</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">ค่ายอาสาและบูธฟิสิกส์ มจธ.</p>
              </div>
            </div>

          </div>

          {/* Bento Card 3: Areas of Interest (7 cols) */}
          <div className="md:col-span-7 glass-panel glass-panel-hover rounded-[2rem] p-7 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <Flame className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <h3 className="text-lg sm:text-xl font-bold text-navy-950 dark:text-white">
                ความสนใจและความถนัดเฉพาะทาง (Areas of Interest)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interests.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 hover:border-sky-500/40 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all"
                >
                  <p className="text-sm font-semibold text-navy-950 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.thai}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 4: Hobbies & Work-Life Balance (5 cols) */}
          <div className="md:col-span-5 glass-panel glass-panel-hover rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <Activity className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h3 className="text-lg sm:text-xl font-bold text-navy-950 dark:text-white">
                  งานอดิเรก & ดนตรี (Hobbies)
                </h3>
              </div>
              <div className="space-y-2.5">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center shrink-0">
                      {hobby.name === 'Badminton' && <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />}
                      {hobby.name === 'Basketball' && <Activity className="w-4 h-4 text-orange-500 dark:text-orange-400" />}
                      {hobby.name === 'Table Tennis' && <Activity className="w-4 h-4 text-sky-500 dark:text-sky-400" />}
                      {hobby.name === 'Drummer' && <Music className="w-4 h-4 text-purple-500 dark:text-purple-400" />}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-navy-950 dark:text-white">{hobby.name}</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{hobby.thai}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-4 pt-3 border-t border-slate-200 dark:border-white/10">
              การสร้างสมดุลด้วยกีฬาและดนตรี ช่วยพัฒนาวินัย สมาธิ และทีมเวิร์ก
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
