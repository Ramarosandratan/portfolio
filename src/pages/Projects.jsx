import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useThemeLanguage } from '../context/useThemeLanguage';
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';
import { usePageMeta } from '../context/usePageMeta';
import { StructuredData, getBreadcrumbSchema } from '../context/StructuredData';

const Projects = () => {
    const { t } = useThemeLanguage();
    const [filter, setFilter] = useState('all');
    const [isFiltering, setIsFiltering] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // SEO Meta Tags
    usePageMeta({
        title: 'My Projects - Portfolio, Web Development & Digital Solutions',
        description: 'Explore my portfolio of web development projects showcasing full-stack development, frontend, and backend solutions. View case studies and technical implementations.',
        keywords: 'projects, web development, portfolio, case studies, React, Node.js, full-stack',
        ogImage: '/logo.svg',
        ogUrl: 'https://ramarosandratan.github.io/portfolio/projects'
    });

    const filterOptions = [
        { key: 'all', label: t('projects.allProjects') },
        { key: 'fullstack', label: t('projects.fullStack') },
        { key: 'frontend', label: t('projects.frontend') },
        { key: 'backend', label: t('projects.backend') }
    ];

    const projects = useTranslatedProjects();

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    // Scroll animations and scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);

            // Animate elements on scroll
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
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFilterChange = (nextFilter) => {
        if (nextFilter === filter) {
            return;
        }
        setIsFiltering(true);
        setFilter(nextFilter);
        window.setTimeout(() => setIsFiltering(false), 380);
    };

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
            <StructuredData data={getBreadcrumbSchema([
                { name: 'Home', url: 'https://ramarosandratan.github.io/portfolio' },
                { name: 'Projects', url: 'https://ramarosandratan.github.io/portfolio/projects' }
            ])} />
            {/* Enhanced Header Section with Gradient */}
            <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
                {/* Animated gradient background */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(circle at 30% 20%, rgb(from var(--accent) r g b / 0.15), transparent 50%),
                                     radial-gradient(circle at 70% 80%, rgb(from var(--success) r g b / 0.1), transparent 50%)`
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="animate-slide-in-up">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {t('projects.selected')} <span style={{ color: 'var(--accent)' }}>{t('projects.works')}</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            {t('projects.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Enhanced Filter Bar */}
            <div className="sticky top-20 z-40 backdrop-blur-sm border-b py-4 transition-colors duration-300 glass-effect" style={{ borderColor: 'var(--border)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                    <div className="inline-flex rounded-xl p-1.5 shadow-lg overflow-x-auto max-w-full" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                        {filterOptions.map(option => (
                            <button
                                key={option.key}
                                onClick={() => handleFilterChange(option.key)}
                                className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${filter === option.key
                                        ? "shadow-md"
                                        : "btn-hover-shadow"
                                    }`}
                                style={
                                    filter === option.key
                                        ? {
                                            backgroundColor: 'var(--accent)',
                                            color: 'white',
                                            boxShadow: '0 4px 15px rgb(from var(--accent) r g b / 0.3)'
                                        }
                                        : { color: 'var(--text-secondary)' }
                                }
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content: Enhanced Project Grid */}
            <main className="flex-grow py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid ${isFiltering ? 'is-filtering' : ''}`}>
                        {filteredProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className="scroll-fade-in hover-lift group rounded-2xl overflow-hidden shadow-lg border flex flex-col h-full project-card"
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)',
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="relative overflow-hidden aspect-video" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                        <span className="text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md"
                                            style={{
                                                backgroundColor: 'rgb(from var(--accent) r g b / 0.9)',
                                                boxShadow: '0 4px 15px rgb(from var(--accent) r g b / 0.3)'
                                            }}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <Link to={`/projects/${project.id}`} className="flex justify-between items-start mb-3 group/title">
                                        <h3 className="text-xl font-bold transition-all group-hover/title:text-opacity-80" style={{ color: 'var(--text-primary)' }}>
                                            {project.title}
                                        </h3>
                                        <span className="transition-all group-hover/title:translate-x-1" style={{ color: 'var(--accent)' }}>
                                            <span className="material-icons-round text-xl">arrow_forward</span>
                                        </span>
                                    </Link>
                                    <p className="text-sm mb-6 flex-grow leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg border transition-all hover:scale-105"
                                                style={{
                                                    backgroundColor: 'rgb(from var(--accent) r g b / 0.1)',
                                                    color: 'var(--accent)',
                                                    borderColor: 'rgb(from var(--accent) r g b / 0.3)'
                                                }}>
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-3 py-1 text-xs font-medium rounded-lg"
                                                style={{ color: 'var(--text-muted)' }}>
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 text-white hover:scale-105"
                                            style={{
                                                backgroundColor: 'var(--accent)',
                                                boxShadow: '0 4px 15px rgb(from var(--accent) r g b / 0.3)'
                                            }}
                                        >
                                            <span className="material-icons-round text-sm">article</span>
                                            <span>Details</span>
                                        </Link>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 border hover:scale-105"
                                            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-emphasis)', color: 'var(--text-primary)' }}
                                        >
                                            <span className="material-icons-round text-sm">code</span>
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}

                        {/* Enhanced Coming Soon Card */}
                        {filter === 'all' && (
                            <article className="scroll-fade-in hover-press group rounded-2xl overflow-hidden border-2 border-dashed flex flex-col h-full items-center justify-center text-center p-10 project-card"
                                style={{
                                    backgroundColor: 'var(--surface-secondary)',
                                    borderColor: 'var(--border)',
                                    boxShadow: 'var(--shadow-soft)',
                                    animationDelay: `${filteredProjects.length * 0.1}s`
                                }}>
                                <div className="h-20 w-20 rounded-full flex items-center justify-center mb-6 transition-all group-hover:scale-110 animate-float"
                                    style={{
                                        backgroundColor: 'rgb(from var(--accent) r g b / 0.1)',
                                        color: 'var(--accent)'
                                    }}>
                                    <span className="material-icons-round text-4xl">add_circle</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                    {t('projects.comingSoon') || 'Something New'}
                                </h3>
                                <p className="text-sm max-w-[220px]" style={{ color: 'var(--text-muted)' }}>
                                    {t('projects.comingSoonDesc') || 'Currently working on a Web3 marketplace. Stay tuned for updates.'}
                                </p>
                            </article>
                        )}
                    </div>
                </div>
            </main>

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

export default Projects;
