import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useThemeLanguage } from '../context/useThemeLanguage';
import { usePageMeta } from '../context/usePageMeta';
import { StructuredData, getBreadcrumbSchema } from '../context/StructuredData';
import mapBackground from '../assets/map-background.png';

// Initialize EmailJS
const initializeEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY_HERE') {
        return false;
    }
    
    try {
        emailjs.init(publicKey);
        return true;
    } catch (error) {
        return false;
    }
};

initializeEmailJS();

const Contact = () => {
    const { t } = useThemeLanguage();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // SEO Meta Tags
    usePageMeta({
        title: 'Contact Me - Get in Touch for Web Development Projects',
        description: 'Get in touch with me for web development inquiries, project discussions, or collaboration opportunities. Let\'s create something amazing together.',
        keywords: 'contact, get in touch, web development, collaboration, inquiry, projects',
        ogImage: '/portfolio_v2/logo.svg',
        ogUrl: 'https://portfolio.example.com/portfolio_v2/contact'
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset error message
        setErrorMessage('');
        
        // Check if EmailJS is properly configured
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        
        if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY_HERE') {
            setErrorMessage('Email service not configured. Please check your .env file.');
            return;
        }
        
        if (!serviceId || serviceId === 'YOUR_SERVICE_ID') {
            setErrorMessage('Email service not configured. Please check your .env file.');
            return;
        }
        
        if (!templateId || templateId === 'YOUR_TEMPLATE_ID') {
            setErrorMessage('Email service not configured. Please check your .env file.');
            return;
        }
        
        // Validate form
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setErrorMessage('Please fill in all required fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const templateParams = {
                to_email: 'ramarosandratana@hotmail.com', // Your email address
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject || 'No subject provided',
                message: formData.message
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams
            );

            if (response.status === 200) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                
                // Hide success message after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (error) {
            // More specific error messages based on error type
            if (error.status === 400) {
                setErrorMessage('Invalid email configuration. Please verify your EmailJS credentials in the .env file.');
            } else if (error.status === 401) {
                setErrorMessage('Unauthorized. Please check your EmailJS Public Key.');
            } else if (error.status === 403) {
                setErrorMessage('Access denied. Please check your EmailJS Service ID and Template ID.');
            } else {
                setErrorMessage(`Failed to send email: ${error.text || error.message}. Please try again.`);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
            <StructuredData data={getBreadcrumbSchema([
                { name: 'Home', url: 'https://portfolio.example.com/portfolio_v2' },
                { name: 'Contact', url: 'https://portfolio.example.com/portfolio_v2/contact' }
            ])} />
            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full">
                    {/* Enhanced Header Section with Gradient */}
                    <div className="relative text-center mb-16 scroll-fade-in">
                        {/* Gradient background */}
                        <div className="absolute -inset-8 pointer-events-none opacity-20">
                            <div className="absolute inset-0" style={{
                                background: `radial-gradient(circle at 50% 20%, rgb(from var(--accent) r g b / 0.2), transparent 50%)`
                            }}></div>
                        </div>

                        <div className="relative">
                            <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                {t('contact.title')} <span style={{ color: 'var(--accent)' }}>{t('contact.title2')}</span>
                            </h1>
                            <p className="text-xl max-w-2xl mx-auto transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                                {t('contact.subtitle')}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Left Column: Contact Info & Resume */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Enhanced Direct Contact Card */}
                            <div className="scroll-fade-in hover-lift p-8 rounded-2xl border relative overflow-hidden group transition-all duration-300 shadow-lg" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-500" style={{ backgroundColor: 'rgb(from var(--accent) r g b / 0.1)' }}></div>

                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                    <span className="material-icons text-2xl" style={{ color: 'var(--accent)' }}>contact_page</span>
                                    {t('contact.contactDetails')}
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-300" style={{ backgroundColor: 'rgb(from var(--accent) r g b / 0.15)', color: 'var(--accent)' }}>
                                                <span className="material-icons text-xl">email</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{t('contact.email')}</p>
                                            <a href="mailto:ramarosandratana2019@gmail.com" className="text-base font-semibold transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>
                                                ramarosandratana2019@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-300" style={{ backgroundColor: 'rgb(from var(--accent) r g b / 0.15)', color: 'var(--accent)' }}>
                                                <span className="material-icons text-xl">location_on</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{t('contact.location')}</p>
                                            <p className="text-base font-semibold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                                {t('contact.basedIn')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-8 border-t transition-colors duration-300" style={{ borderColor: 'var(--border)' }}>
                                    <p className="text-sm font-medium mb-4 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>{t('contact.connectWithMe')}</p>
                                    <div className="flex space-x-4">
                                        {['github', 'linkedin', 'whatsapp'].map((platform) => (
                                            <a key={platform} href={platform === 'github' ? 'https://github.com/Ramarosandratan' : platform === 'linkedin' ? 'https://www.linkedin.com/in/rinasoa-mampionona-ramarosandratana/' : 'https://wa.me/261341592473'} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 hover:opacity-80" style={{ backgroundColor: 'var(--surface-secondary)', color: 'var(--text-secondary)' }}>
                                                {platform === 'github' && (
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {platform === 'linkedin' && (
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {platform === 'whatsapp' && (
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M12.043 2C6.52 2 2.03 6.49 2.03 12.01c0 1.94.51 3.83 1.48 5.5L2 22l4.6-1.47a10.02 10.02 0 005.44 1.58h.01c5.52 0 10.01-4.49 10.01-10.01C22.06 6.48 17.56 2 12.04 2zm5.83 14.48c-.25.71-1.47 1.36-2.03 1.45-.52.08-1.19.12-1.92-.12-.45-.14-1.03-.34-1.77-.67-3.12-1.34-5.16-4.48-5.31-4.69-.15-.21-1.27-1.7-1.27-3.25 0-1.55.82-2.31 1.12-2.62.29-.31.64-.39.85-.39h.61c.19 0 .45-.06.7.53.25.59.84 2.05.91 2.2.07.15.12.35.02.56-.1.21-.15.35-.3.54-.15.19-.32.42-.46.56-.15.15-.31.31-.13.6.18.29.81 1.34 1.74 2.17 1.2 1.06 2.2 1.39 2.5 1.55.29.15.47.13.65-.08.18-.21.74-.86.94-1.16.2-.3.4-.25.66-.15.26.1 1.67.79 1.96.93.29.14.48.22.55.34.07.12.07.69-.18 1.4z" />
                                                    </svg>
                                                )}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Resume CTA */}
                            <div className="scroll-fade-in rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden hover:scale-105 transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                                    boxShadow: '0 8px 30px rgb(from var(--accent) r g b / 0.4)'
                                }}>
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">{t('contact.myResume')}</h3>
                                    <p className="mb-6 text-sm opacity-90">{t('contact.downloadCVDesc')}</p>
                                    <a 
                                        href="/portfolio_v2/CV_ramarosandratana_Full_stack.pdf" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full group bg-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:opacity-90" 
                                        style={{ color: 'var(--accent)' }}
                                    >
                                        <span className="material-icons mr-2 text-xl group-hover:scale-110 transition-transform">download</span>
                                        {t('contact.downloadCV')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="scroll-fade-in hover-lift rounded-2xl border p-8 sm:p-10 h-full transition-all duration-300 shadow-lg" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <h2 className="text-3xl font-bold mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{t('contact.sendMessage')}</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-1 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{t('contact.fullName')}</label>
                                            <div className="relative rounded-md shadow-sm group">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                                    <span className="material-icons text-lg transition-all duration-300 group-focus-within:scale-110" style={{ color: formData.name ? 'var(--accent)' : 'var(--text-muted)' }}>person</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="block w-full pl-10 sm:text-sm rounded-lg py-3 transition-all duration-300 border focus:outline-none focus:ring-2 hover:shadow-md placeholder:text-opacity-50"
                                                    style={{
                                                        borderColor: 'var(--border)',
                                                        backgroundColor: 'var(--surface-secondary)',
                                                        color: 'var(--text-primary)',
                                                        '--tw-ring-color': 'var(--accent)',
                                                        '--tw-ring-opacity': '0.3'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-1 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{t('contact.emailAddress')}</label>
                                            <div className="relative rounded-md shadow-sm group">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                                    <span className="material-icons text-lg transition-all duration-300 group-focus-within:scale-110" style={{ color: formData.email ? 'var(--accent)' : 'var(--text-muted)' }}>alternate_email</span>
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className="block w-full pl-10 sm:text-sm rounded-lg py-3 transition-all duration-300 border focus:outline-none focus:ring-2 hover:shadow-md placeholder:text-opacity-50"
                                                    style={{
                                                        borderColor: 'var(--border)',
                                                        backgroundColor: 'var(--surface-secondary)',
                                                        color: 'var(--text-primary)',
                                                        '--tw-ring-color': 'var(--accent)',
                                                        '--tw-ring-opacity': '0.3'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-1 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{t('contact.subject')}</label>
                                        <div className="relative rounded-md shadow-sm group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                                <span className="material-icons text-lg transition-all duration-300 group-focus-within:scale-110" style={{ color: formData.subject ? 'var(--accent)' : 'var(--text-muted)' }}>tag</span>
                                            </div>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder={t('contact.subjectPlaceholder')}
                                                className="block w-full pl-10 sm:text-sm rounded-lg py-3 transition-all duration-300 border focus:outline-none focus:ring-2 hover:shadow-md placeholder:text-opacity-50"
                                                style={{
                                                    borderColor: 'var(--border)',
                                                    backgroundColor: 'var(--surface-secondary)',
                                                    color: 'var(--text-primary)',
                                                    '--tw-ring-color': 'var(--accent)',
                                                    '--tw-ring-opacity': '0.3'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-1 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{t('contact.message')}</label>
                                        <div className="relative rounded-md shadow-sm group">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={t('contact.messagePlaceholder')}
                                                className="block w-full sm:text-sm rounded-lg p-3 transition-all duration-300 resize-none border focus:outline-none focus:ring-2 hover:shadow-md placeholder:text-opacity-50"
                                                style={{
                                                    borderColor: 'var(--border)',
                                                    backgroundColor: 'var(--surface-secondary)',
                                                    color: 'var(--text-primary)',
                                                    '--tw-ring-color': 'var(--accent)',
                                                    '--tw-ring-opacity': '0.3'
                                                }}
                                            ></textarea>
                                        </div>
                                        <p className="mt-2 text-sm text-right transition-colors duration-300" style={{ color: formData.message.length > 450 ? 'var(--accent)' : 'var(--text-muted)' }}>{formData.message.length}/500 characters</p>
                                    </div>

                                    {/* Error Messages */}
                                    {errorMessage && (
                                        <div className="flex items-center p-4 rounded-lg transition-all duration-300 animate-pulse" style={{ backgroundColor: 'rgb(from #ef4444 r g b / 0.1)', borderLeft: '4px solid #ef4444' }}>
                                            <span className="material-icons text-base mr-2" style={{ color: '#ef4444' }}>error</span>
                                            <p className="text-sm font-medium" style={{ color: '#ef4444' }}>{errorMessage}</p>
                                        </div>
                                    )}

                                    {/* Form Actions */}
                                    <div className="flex items-center justify-between pt-2">
                                        {/* Success Message */}
                                        {isSubmitted && (
                                            <div className="text-sm font-medium flex items-center animate-pulse transition-colors duration-300" style={{ color: 'var(--accent)' }}>
                                                <span className="material-icons text-base mr-1">check_circle</span>
                                                {t('contact.successMessage')}
                                            </div>
                                        )}
                                        <div className="flex-grow"></div> {/* Spacer */}
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="inline-flex justify-center items-center py-3 px-8 shadow-lg text-sm font-semibold rounded-xl text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                            style={{
                                                backgroundColor: 'var(--accent)',
                                                boxShadow: '0 4px 20px rgb(from var(--accent) r g b / 0.3)'
                                            }}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="material-icons mr-2 text-lg animate-spin">mail</span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    {t('contact.sendButton')}
                                                    <span className="material-icons ml-2 text-lg">send</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Location Map (Visual Representation) */}
            <div
                className="w-full h-64 relative border-t transition-colors duration-300"
                style={{
                    backgroundImage: `url(${mapBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'var(--surface-secondary)',
                    borderColor: 'var(--border)'
                }}
            >
                <div className="absolute inset-0 backdrop-grayscale mix-blend-multiply dark:mix-blend-darken" style={{ backgroundColor: 'rgb(from var(--accent) r g b / 0.2)' }}></div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--background), transparent)' }}></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-colors duration-300" style={{ backgroundColor: 'var(--surface)' }}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }}></span>
                    <span className="text-xs font-semibold uppercase tracking-wider transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{t('contact.basedIn')}</span>
                </div>
            </div>

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

export default Contact;
