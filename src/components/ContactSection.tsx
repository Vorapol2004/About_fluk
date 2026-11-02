import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Globe, 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  Inbox 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyText }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // Serverless FormSubmit States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'activation' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Check if browsing directly via file://
      if (window.location.protocol === 'file:') {
        setSubmitStatus('error');
        setStatusMessage('คุณกำลังเปิดไฟล์ผ่าน file:/// โดยตรง FormSubmit ต้องการ Web Server เช่น การรัน npm run dev (http://localhost:5173) หรือบน Vercel ครับ');
        setIsSubmitting(false);
        return;
      }

      // Serverless submission via FormSubmit AJAX Endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          _subject: subject.trim() || `ข้อความติดต่อใหม่จาก Portfolio: ${senderName}`,
          message: message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== "false") {
        setSubmitStatus('success');
        setStatusMessage('ส่งข้อความสำเร็จ! ข้อความของคุณถูกส่งตรงไปยังกล่องจดหมายของฟลุ๊คเรียบร้อยแล้ว ผมจะรีบติดต่อกลับโดยเร็วที่สุดครับ ขอบคุณครับ');
        setSenderName('');
        setSenderEmail('');
        setSubject('');
        setMessage('');
      } else {
        if (data.message && data.message.toLowerCase().includes('activat')) {
          setSubmitStatus('activation');
          setStatusMessage('ระบบ FormSubmit ต้องการให้เจ้าของอีเมล (' + personalInfo.email + ') กดปุ่ม Activate ในอีเมลที่ส่งไปครั้งแรกเพื่อเปิดรับข้อความอัตโนมัติ');
        } else {
          setSubmitStatus('error');
          setStatusMessage(data.message || 'ไม่สามารถส่งข้อความได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง หรือส่งตรงผ่าน Gmail / แอป Mail ด้านล่างครับ');
        }
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('เกิดข้อผิดพลาดในการเชื่อมต่อเครือข่าย กรุณาตรวจสอบอินเทอร์เน็ต หรือส่งตรงผ่านปุ่ม Gmail / แอป Mail ด้านล่างครับ');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenGmailWeb = () => {
    const mailSubject = encodeURIComponent(subject.trim() || `ติดต่อจาก Portfolio: ${senderName || 'ผู้เยี่ยมชมเว็บ'}`);
    const mailBody = encodeURIComponent(
      `เรียน คุณฟลุ๊ค (ภาณุวิทย์),\n\n${message || '[พิมพ์ข้อความของคุณที่นี่]'}\n\nจาก: ${senderName || '[ชื่อของคุณ]'}\nอีเมลติดต่อกลับ: ${senderEmail || '[อีเมลของคุณ]'}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${mailSubject}&body=${mailBody}`, '_blank');
  };

  const handleSendMailto = () => {
    const mailSubject = encodeURIComponent(subject.trim() || `ติดต่อจาก Portfolio: ${senderName || 'ผู้เยี่ยมชมเว็บ'}`);
    const mailBody = encodeURIComponent(
      `เรียน คุณฟลุ๊ค (ภาณุวิทย์),\n\n${message || '[พิมพ์ข้อความของคุณที่นี่]'}\n\nจาก: ${senderName || '[ชื่อของคุณ]'}\nอีเมลติดต่อกลับ: ${senderEmail || '[อีเมลของคุณ]'}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleCopyDraft = () => {
    const draftText = `หัวข้อ: ${subject.trim() || 'ติดต่อจาก Portfolio'}\nผู้ส่ง: ${senderName || 'ไม่ระบุ'}\nอีเมลติดต่อกลับ: ${senderEmail || 'ไม่ระบุ'}\n\nข้อความ:\n${message || 'ไม่มีข้อความ'}`;
    onCopyText(draftText, 'ร่างข้อความ');
  };

  return (
    <section id="contact" className="py-24 bg-appleDark-bg relative border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      {/* Ambient background light */}
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" 
        style={{ backgroundColor: 'var(--spotlight-accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-slate-200/80 dark:border-white/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            ติดต่อและส่งอีเมลหาผม
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            ยินดีรับโอกาสการฝึกงาน การทำโครงงานร่วมกัน หรือการพูดคุยแลกเปลี่ยนทางวิชาการ
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Banner Card */}
            <div className="glass-panel rounded-[2rem] p-7 sm:p-8 border border-slate-200/80 dark:border-white/15 shadow-apple-glass relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl pointer-events-none" 
                style={{ backgroundColor: 'var(--spotlight-accent)' }}
              />
              
              <span className="btn-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-400/30 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Serverless Form Backend</span>
              </span>
              
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 dark:text-white mb-2">
                อีเมลหลักสำหรับติดต่องาน
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                ระบบส่งข้อความผ่าน FormSubmit API ส่งตรงถึงกล่องจดหมายของผมทันทีโดยไม่ต้องเปิดแอปแยก
              </p>

              <div className="bg-slate-100 dark:bg-white/5 rounded-2xl p-4 border border-slate-200 dark:border-white/10 mb-6 backdrop-blur-md">
                <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold mb-1">
                  Recipient Email Address
                </p>
                <p className="text-base sm:text-lg font-bold text-navy-950 dark:text-white break-all">
                  {personalInfo.email}
                </p>
              </div>

              {/* No-wrap Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => onCopyText(personalInfo.email, 'อีเมล')}
                  className="btn-nowrap py-3 px-4 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/15 transition-all gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>คัดลอกอีเมล</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendMailto}
                  className="btn-nowrap py-3 px-4 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:brightness-110 shadow-apple-glow transition-all gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  <span>เปิดเขียนใน Mail App</span>
                </button>
              </div>
            </div>

            {/* Quick Channel Pills */}
            <div className="glass-panel rounded-[2rem] p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                ช่องทางติดต่อเพิ่มเติม
              </h4>

              {/* Phone */}
              <div className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">โทรศัพท์</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-navy-950 dark:text-white hover:text-sky-600 dark:hover:text-sky-300">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => onCopyText(personalInfo.phone, 'เบอร์โทร')}
                  className="btn-nowrap p-2 text-slate-400 hover:text-navy-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition-colors"
                  title="คัดลอกเบอร์โทร"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* LINE */}
              <div className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs border border-emerald-400/20">
                    LINE
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">LINE ID</p>
                    <p className="text-sm font-bold text-navy-950 dark:text-white">
                      {personalInfo.lineId}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onCopyText(personalInfo.lineId, 'LINE ID')}
                  className="btn-nowrap p-2 text-slate-400 hover:text-navy-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition-colors"
                  title="คัดลอก LINE ID"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Instagram */}
              <a
                href={`https://instagram.com/${personalInfo.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 flex items-center justify-between gap-3 hover:border-rose-400/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 border border-rose-400/20">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Instagram</p>
                    <p className="text-sm font-bold text-navy-950 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">
                      @{personalInfo.instagram}
                    </p>
                  </div>
                </div>
                <span className="btn-nowrap text-xs text-slate-400 group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">
                  เปิดดู →
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Serverless FormSubmit with JavaScript Fetch (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-[2rem] p-7 sm:p-9 border border-slate-200/80 dark:border-white/15 shadow-apple-glass">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white">
                    ส่งข้อความตรงถึงฟลุ๊ค
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    ส่งผ่าน <span className="text-sky-600 dark:text-sky-300 font-mono">FormSubmit API (Serverless Backend)</span> ตรงถึง {personalInfo.email}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/20">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-700 dark:text-emerald-300 text-sm flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{statusMessage}</p>
                </div>
              )}

              {/* FormSubmit Activation Required Notification */}
              {submitStatus === 'activation' && (
                <div className="mb-6 p-5 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-amber-900 dark:text-amber-200 text-sm space-y-2 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <Inbox className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy-950 dark:text-white text-base">จำเป็นต้องยืนยันการเปิดใช้งาน FormSubmit (ทำครั้งแรกครั้งเดียว)</p>
                      <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed mt-1">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-nowrap inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                    >
                      <span>เปิด Gmail เพื่อกดยืนยัน Activate Form</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-400/30 text-rose-700 dark:text-rose-300 text-sm flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="leading-relaxed">{statusMessage}</p>
                    <p className="text-xs text-rose-600 dark:text-rose-400/80 mt-1">
                      (สามารถกดปุ่ม &quot;เปิดส่งทาง Gmail บนเว็บ&quot; ด้านล่างเพื่อส่งหาฟลุ๊คได้ทันทีครับ)
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      ชื่อของคุณ / บริษัท / สถาบัน <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="เช่น สมชาย ใจดี / บริษัท ABC"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-sm text-navy-950 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all shadow-xs dark:shadow-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      อีเมลติดต่อกลับของคุณ <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-sm text-navy-950 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all shadow-xs dark:shadow-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    หัวข้อเรื่อง (Subject)
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="เช่น สนใจสัมภาษณ์ฝึกงาน / ติดต่อสอบถามเกี่ยวกับโปรเจกต์"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-sm text-navy-950 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all shadow-xs dark:shadow-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    ข้อความ (Message) <span className="text-rose-500 dark:text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="พิมพ์รายละเอียดที่ต้องการติดต่อ เช่น ตำแหน่งฝึกงาน, ข้อมูลที่อยากสอบถามเพิ่มเติม หรือข้อความถึงฟลุ๊ค..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-sm text-navy-950 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all resize-y shadow-xs dark:shadow-none"
                  />
                </div>

                {/* Submit and Helper Buttons (Never wrap text!) */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-nowrap w-full py-3.5 px-6 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:brightness-110 shadow-apple-glow transition-all gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>กำลังส่งข้อความผ่าน Serverless API...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>กดส่งอีเมลหาฟลุ๊คทันที (Submit Form)</span>
                      </>
                    )}
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleOpenGmailWeb}
                      className="btn-nowrap w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 border border-sky-300 dark:border-sky-400/20 transition-all gap-1.5"
                      title="เปิดหน้าต่างเขียนจดหมายบน Gmail เว็บบราวเซอร์"
                    >
                      <Globe className="w-3.5 h-3.5 shrink-0" />
                      <span>เปิดส่งทาง Gmail บนเว็บ</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="btn-nowrap w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all gap-1.5"
                      title="คัดลอกร่างข้อความและอีเมลไปวางในโปรแกรมอื่น"
                    >
                      <Copy className="w-3.5 h-3.5 shrink-0" />
                      <span>คัดลอกร่างข้อความ</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
