import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../context/useThemeLanguage';
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';

const ProjectDetails = () => {
    const { id } = useParams();
    const { t } = useThemeLanguage();
    const projects = useTranslatedProjects();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Find project by ID
    const project = projects.find(p => p.id === Number.parseInt(id, 10));

    // Scroll animations
    useEffect(() => {
        const handleScroll = () => {
            // Show scroll to top button
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

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
                <h1 className="text-3xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{t('projects.projectNotFound') || 'Project Not Found'}</h1>
                <Link to="/projects" className="px-6 py-2 rounded-lg transition-all" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                    {t('projects.backToProjects') || 'Back to Projects'}
                </Link>
            </div>
        );
    }

    // Create image gallery (use main image multiple times if no gallery exists)
    const imageGallery = project.gallery || [project.image];

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
            {/* Enhanced Hero Section with Gradient */}
            <div className="relative pt-24 pb-16 overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
                {/* Animated gradient background */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(circle at 20% 50%, rgb(from var(--accent) r g b / 0.15), transparent 50%),
                                     radial-gradient(circle at 80% 80%, rgb(from var(--success) r g b / 0.1), transparent 50%)`
                    }}></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumb */}
                    <Link to="/projects" className="inline-flex items-center gap-2 mb-8 transition-all hover:gap-3 group" style={{ color: 'var(--accent)' }}>
                        <span className="material-icons-round text-lg group-hover:animate-pulse">arrow_back</span>
                        <span className="text-sm font-medium">{t('projects.backToProjects') || 'Back to Projects'}</span>
                    </Link>

                    <div className="animate-slide-in-up">
                        {/* Category Badge with Glow */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                                style={{
                                    backgroundColor: 'rgb(from var(--accent) r g b / 0.15)',
                                    color: 'var(--accent)',
                                    border: '2px solid rgb(from var(--accent) r g b / 0.3)',
                                    boxShadow: '0 0 20px rgb(from var(--accent) r g b / 0.2)'
                                }}>
                                {project.category}
                            </span>
                            {/* Project metadata */}
                            <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                                <span className="flex items-center gap-1">
                                    <span className="material-icons-round text-sm">schedule</span>
                                    {project.duration || '3 months'}
                                </span>
                                {project.team && (
                                    <span className="flex items-center gap-1">
                                        <span className="material-icons-round text-sm">group</span>
                                        {project.team}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Title & Description */}
                        <h1 className="text-5xl sm:text-6xl font-bold transition-colors duration-300 mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                            {project.title}
                        </h1>
                        <p className="text-xl leading-relaxed max-w-3xl transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            {project.description}
                        </p>

                        {/* Quick Tech Tags */}
                        <div className="flex flex-wrap gap-2 mt-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 text-sm font-medium rounded-lg border transition-all hover:scale-105"
                                    style={{
                                        backgroundColor: 'rgb(from var(--accent) r g b / 0.1)',
                                        color: 'var(--accent)',
                                        borderColor: 'rgb(from var(--accent) r g b / 0.3)'
                                    }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Enhanced Image Gallery with Navigation */}
                    <div className="scroll-fade-in mb-20">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border transition-all hover:shadow-3xl group"
                            style={{ borderColor: 'var(--border)' }}>
                            <img
                                src={imageGallery[currentImageIndex]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Navigation arrows (if multiple images) */}
                            {imageGallery.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + imageGallery.length) % imageGallery.length)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                                        style={{ backgroundColor: 'rgb(from var(--surface) r g b / 0.9)', color: 'var(--text-primary)' }}
                                    >
                                        <span className="material-icons-round">chevron_left</span>
                                    </button>
                                    <button
                                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % imageGallery.length)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                                        style={{ backgroundColor: 'rgb(from var(--surface) r g b / 0.9)', color: 'var(--text-primary)' }}
                                    >
                                        <span className="material-icons-round">chevron_right</span>
                                    </button>

                                    {/* Image indicators */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {imageGallery.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className="w-2 h-2 rounded-full transition-all"
                                                style={{
                                                    backgroundColor: index === currentImageIndex
                                                        ? 'var(--accent)'
                                                        : 'rgb(from var(--surface) r g b / 0.5)',
                                                    width: index === currentImageIndex ? '24px' : '8px'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Overview Section */}
                    <section className="scroll-fade-in mb-20">
                        <h2 className="text-4xl font-bold mb-8 transition-colors duration-300 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                            <span className="material-icons-round text-4xl" style={{ color: 'var(--accent)' }}>description</span>
                            {t('projects.overview') || 'Overview'}
                        </h2>
                        <div className="p-8 rounded-2xl border transition-all"
                            style={{
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)',
                                boxShadow: '0 4px 20px rgb(from var(--accent) r g b / 0.05)'
                            }}>
                            <p className="text-lg leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                                {project.fullDescription}
                            </p>
                        </div>
                    </section>

                    {/* Enhanced Key Features Section */}
                    {project.features && project.features.length > 0 && (
                        <section className="scroll-fade-in mb-20">
                            <h2 className="text-4xl font-bold mb-10 transition-colors duration-300 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                                <span className="material-icons-round text-4xl" style={{ color: 'var(--accent)' }}>stars</span>
                                {t('projects.features') || 'Key Features'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={feature}
                                        className="hover-lift p-6 rounded-xl border transition-all duration-300 group cursor-pointer"
                                        style={{
                                            backgroundColor: 'var(--surface)',
                                            borderColor: 'var(--border)',
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                                                style={{ backgroundColor: 'rgb(from var(--accent) r g b / 0.15)' }}>
                                                <span className="material-icons-round text-lg transition-colors duration-300" style={{ color: 'var(--accent)' }}>
                                                    check_circle
                                                </span>
                                            </div>
                                            <p className="flex-1 transition-colors duration-300 text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                                                {feature}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Architecture Section */}
                    {project.architecture && (
                        <section className="scroll-fade-in mb-20">
                            <h2 className="text-4xl font-bold mb-8 transition-colors duration-300 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                                <span className="material-icons-round text-4xl" style={{ color: 'var(--accent)' }}>account_tree</span>
                                {t('projects.architecture') || 'Architecture'}
                            </h2>
                            <div className="p-8 rounded-2xl border transition-colors duration-300"
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)',
                                    boxShadow: '0 4px 20px rgb(from var(--accent) r g b / 0.05)'
                                }}>
                                <p className="text-lg leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                                    {project.architecture}
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Enhanced Technologies Section */}
                    {project.technologies && (
                        <section className="scroll-fade-in mb-20">
                            <h2 className="text-4xl font-bold mb-10 transition-colors duration-300 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                                <span className="material-icons-round text-4xl" style={{ color: 'var(--accent)' }}>code</span>
                                {t('projects.technologiesUsed') || 'Technologies'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Object.entries(project.technologies).map(([category, techs]) => (
                                    <div
                                        key={category}
                                        className="hover-lift p-6 rounded-xl border transition-all duration-300 group"
                                        style={{
                                            backgroundColor: 'var(--surface)',
                                            borderColor: 'var(--border)'
                                        }}
                                    >
                                        <h3 className="text-xl font-bold mb-5 capitalize transition-colors duration-300 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                                            <span className="material-icons-round">folder_special</span>
                                            {category}
                                        </h3>
                                        <ul className="space-y-3">
                                            {techs.map((tech) => (
                                                <li key={tech} className="flex items-center gap-3 transition-all hover:translate-x-1" style={{ color: 'var(--text-secondary)' }}>
                                                    <span className="material-icons-round text-sm transition-colors" style={{ color: 'var(--accent)' }}>
                                                        check_circle
                                                    </span>
                                                    <span className="font-medium">{tech}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Enhanced Links/CTA Section */}
                    <section className="scroll-fade-in mb-12">
                        <h2 className="text-4xl font-bold mb-8 transition-colors duration-300 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                            <span className="material-icons-round text-4xl" style={{ color: 'var(--accent)' }}>rocket_launch</span>
                            {t('projects.projectLinks') || 'Get Started'}
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {project.links.map(link => (
                                <a
                                    key={link.label}
                                    href={link.primary ? project.githubLink : project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 ${link.primary
                                            ? 'text-white'
                                            : 'border'
                                        }`}
                                    style={
                                        link.primary
                                            ? {
                                                backgroundColor: 'var(--accent)',
                                                boxShadow: '0 4px 20px rgb(from var(--accent) r g b / 0.3)'
                                            }
                                            : {
                                                backgroundColor: 'var(--surface)',
                                                borderColor: 'var(--border-emphasis)',
                                                color: 'var(--text-primary)'
                                            }
                                    }
                                >
                                    <span className="material-icons-round text-xl">{link.icon}</span>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <div className="scroll-fade-in mt-24 pt-10 border-t text-center transition-colors duration-300" style={{ borderColor: 'var(--border)' }}>
                        <p className="text-lg mb-8 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                            {t('projects.interestedInOther') || 'Interested in other projects?'}
                        </p>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg text-white hover:shadow-xl hover:scale-105"
                            style={{
                                backgroundColor: 'var(--accent)',
                                boxShadow: '0 4px 20px rgb(from var(--accent) r g b / 0.3)'
                            }}
                        >
                            <span className="material-icons-round text-xl">grid_view</span>
                            <span>{t('projects.viewAllProjects') || 'View All Projects'}</span>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Floating Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-50 animate-fade-in-scale"
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

export default ProjectDetails;
