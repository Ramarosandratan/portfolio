import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../context/useThemeLanguage';
import TimelineItem from '../components/TimelineItem';
import SkillBar from '../components/SkillBar';
import CertificationCard from '../components/CertificationCard';
import SVGComponent from '../components/SVGComponent';
import CertificationIconSVG from '../components/CertificationIconSVG';
import ExperienceIconSVG from '../components/ExperienceIconSVG';
import { usePageMeta } from '../context/usePageMeta';
import { StructuredData, getBreadcrumbSchema } from '../context/StructuredData';

const Experience = () => {
  const { t } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState('work');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // SEO Meta Tags
  usePageMeta({
    title: 'Experience & Skills - Full Stack Developer Profile',
    description: 'Explore my professional experience, technical skills, certifications, and work history as a full-stack developer. Over 5 years of expertise in web development.',
    keywords: 'experience, skills, certifications, full-stack developer, work history, expertise',
    ogImage: '/logo.svg',
    ogUrl: 'https://portfolio.example.com/experience'
  });

  const workExperienceKeys = [
    {
      titleKey: "experience.seniorFullStack",
      companyKey: "experience.techFlowSystems",
      periodKey: "experience.techFlowPeriod",
      descriptionKeys: ["experience.techFlowDesc1", "experience.techFlowDesc2"],
      skills: ["Angular", "Java (Quarkus/Kogito)", "BPMN 2.0", "PostgreSQL", "Git"]
    },
    {
      titleKey: "experience.frontendDeveloper",
      companyKey: "experience.creativePulseAgency",
      periodKey: "experience.creativePulsePeriod",
      descriptionKeys: ["experience.creativePulseDesc1", "experience.creativePulseDesc2"],
      skills: ["Retool", "Supabase"]
    },
    {
      titleKey: "experience.juniorWebDeveloper",
      companyKey: "experience.startupInc",
      periodKey: "experience.startupPeriod",
      descriptionKeys: ["experience.startupDesc"],
      skills: ["Gestion d'équipe", "planification", "relation client"]
    }
  ];

  const educationExperienceKeys = [
    {
      titleKey: "experience.bachelorCS",
      companyKey: "experience.techUniversity",
      periodKey: "experience.techUniversityPeriod",
      descriptionKey: "experience.techUniversityDesc",
      skills: [],
      isEducation: true
    },
    {
      titleKey: "experience.highSchoolDiploma",
      companyKey: "experience.lpaSchool",
      periodKey: "experience.lpaSchoolPeriod",
      descriptionKey: "experience.lpaSchoolDesc",
      skills: [],
      isEducation: true
    }
  ];

  const workExperience = workExperienceKeys.map(item => ({
    title: t(item.titleKey),
    company: t(item.companyKey),
    period: t(item.periodKey),
    description: item.descriptionKeys.map(key => t(key)),
    skills: item.skills
  }));

  const educationExperience = educationExperienceKeys.map(item => ({
    title: t(item.titleKey),
    company: t(item.companyKey),
    period: t(item.periodKey),
    description: t(item.descriptionKey),
    skills: item.skills,
    isEducation: item.isEducation
  }));

  const frontendSkills = [
    { name: "React / Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "Tailwind CSS", percentage: 95 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "Python", percentage: 75 }
  ];

  const devopsSkills = ["Docker", "AWS EC2", "Git", "Figma", "Jira"];

  const certifications = [
    {
      title: "AWS Certified",
      subtitle: "Solutions Architect",
      issued: "2022",
      icon: "☁️"
    },
    {
      title: "CKA",
      subtitle: "Kubernetes Admin",
      issued: "2023",
      icon: "⚓"
    }
  ];

  const displayExperience = activeTab === 'work' ? workExperience : educationExperience;

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const elements = document.querySelectorAll('.scroll-fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <StructuredData data={getBreadcrumbSchema([
        { name: 'Home', url: 'https://portfolio.example.com' },
        { name: 'Experience', url: 'https://portfolio.example.com/experience' }
      ])} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        {/* Enhanced Header with Gradient */}
        <div className="relative mb-16 scroll-fade-in">
          {/* Gradient background */}
          <div className="absolute -inset-4 pointer-events-none opacity-20">
            <div className="absolute inset-0" style={{
              background: `radial-gradient(circle at 10% 20%, rgb(from var(--accent) r g b / 0.2), transparent 40%)`
            }}></div>
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              {t('experience.title')}
            </h1>
            <p className="max-w-2xl text-xl transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              {t('experience.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="scroll-fade-in flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                <ExperienceIconSVG style={{ width: '28px', height: '28px' }} />
                {activeTab === 'work' ? t('experience.workExperience') : t('experience.education')}
              </h2>

              {/* Enhanced Toggle Switch */}
              <div className="p-1.5 rounded-xl inline-flex border shadow-md transition-all"
                style={{
                  backgroundColor: 'var(--surface-secondary)',
                  borderColor: 'var(--border)'
                }}>
                <button
                  onClick={() => setActiveTab('work')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'work'
                      ? 'shadow-md'
                      : 'btn-hover-shadow'
                    }`}
                  style={
                    activeTab === 'work'
                      ? {
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        boxShadow: '0 4px 15px rgb(from var(--accent) r g b / 0.3)'
                      }
                      : { color: 'var(--text-secondary)' }
                  }
                >
                  {t('experience.workExperience')}
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'education'
                      ? 'shadow-md'
                      : 'btn-hover-shadow'
                    }`}
                  style={
                    activeTab === 'education'
                      ? {
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        boxShadow: '0 4px 15px rgb(from var(--accent) r g b / 0.3)'
                      }
                      : { color: 'var(--text-secondary)' }
                  }
                >
                  {t('experience.education')}
                </button>
              </div>
            </div>

            {/* Enhanced Timeline Container */}
            <div className="relative pl-8 border-l-2 space-y-12 transition-colors duration-300" style={{ borderColor: 'var(--border)' }}>
              {displayExperience.map((item, idx) => (
                <div key={idx} className="scroll-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <TimelineItem
                    title={item.title}
                    company={item.company}
                    period={item.period}
                    description={item.description}
                    skills={item.skills}
                    isEducation={item.isEducation}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Enhanced Skills Card */}
            <div className="scroll-fade-in hover-lift border rounded-2xl p-8 shadow-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)'
              }}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                <SVGComponent style={{ width: '28px', height: '28px' }} /> {t('experience.skills')}
              </h2>

              {/* Frontend Section */}
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
                  <span className="material-icons-round text-sm">web</span>
                  {t('experience.frontendSkills')}
                </h3>
                <div className="space-y-5">
                  {frontendSkills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                    />
                  ))}
                </div>
              </div>

              {/* Backend Section */}
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
                  <span className="material-icons-round text-sm">storage</span>
                  {t('experience.backendSkills')}
                </h3>
                <div className="space-y-5">
                  {backendSkills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                    />
                  ))}
                </div>
              </div>

              {/* DevOps Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2 transition-colors duration-300" style={{ color: 'var(--accent)' }}>
                  <span className="material-icons-round text-sm">settings</span>
                  {t('experience.devopsTools')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {devopsSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-lg border transition-all cursor-default hover:scale-105 hover:shadow-md"
                      style={{
                        backgroundColor: 'rgb(from var(--accent) r g b / 0.1)',
                        color: 'var(--accent)',
                        borderColor: 'rgb(from var(--accent) r g b / 0.3)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Certifications */}
            <div className="scroll-fade-in hover-lift border rounded-2xl p-8 shadow-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)'
              }}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                <CertificationIconSVG style={{ width: '28px', height: '28px' }} /> {t('experience.certifications')}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <CertificationCard
                    key={idx}
                    title={cert.title}
                    subtitle={cert.subtitle}
                    issued={cert.issued}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-50 animate-fade-in-scale"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'white',
            boxShadow: '0 8px 30px rgb(from var(--accent) r g b / 0.4)'
          }}
        >
          <span className="material-icons-round text-2xl">arrow_upward</span>
        </button>
      )}
    </div>
  );
};

export default Experience;
