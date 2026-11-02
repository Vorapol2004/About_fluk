import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PortfolioResumeModal } from './components/PortfolioResumeModal';
import { Toast } from './components/Toast';
import { ScrollReveal } from './components/ScrollReveal';
import { personalInfo, type Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(`คัดลอก${label}เรียบร้อยแล้ว: ${text.length > 30 ? text.slice(0, 30) + '...' : text}`);
      setTimeout(() => {
        setToastMessage(null);
      }, 3500);
    }).catch(() => {
      setToastMessage(`คัดลอก${label}แล้ว!`);
      setTimeout(() => setToastMessage(null), 3000);
    });
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-appleDark-bg text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-sky-400 selection:text-navy-950 transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyText={handleCopyText}
        />

        {/* About Section with Scroll Reveal */}
        <ScrollReveal delay={100}>
          <AboutSection
            onCopyText={handleCopyText}
          />
        </ScrollReveal>

        {/* Skills Section with Scroll Reveal */}
        <ScrollReveal delay={150}>
          <SkillsSection />
        </ScrollReveal>

        {/* Projects & Experiences Showcase with Scroll Reveal */}
        <ScrollReveal delay={150}>
          <ProjectsSection
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </ScrollReveal>

        {/* Extracurricular Activities with Scroll Reveal */}
        <ScrollReveal delay={150}>
          <ActivitiesSection />
        </ScrollReveal>

        {/* Contact & Email Generator Section with Scroll Reveal */}
        <ScrollReveal delay={150}>
          <ContactSection
            onCopyText={handleCopyText}
          />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Full Portfolio / Resume Modal (Displays original document by default!) */}
      <PortfolioResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
    </ThemeProvider>
  );
}

export default App;
