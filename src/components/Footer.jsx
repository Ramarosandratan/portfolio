import { Github, Linkedin, Mail } from 'lucide-react';
import { useThemeLanguage } from '../context/useThemeLanguage';

const Footer = () => {
    const { t } = useThemeLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 transition-colors duration-300" style={{backgroundColor: 'var(--surface-secondary)'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm" style={{color: 'var(--text-muted)'}}>&copy; {currentYear} {t('footer.copyright')}</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/Ramarosandratan" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{color: 'var(--text-muted)'}}>
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/rinasoa-mampionona-ramarosandratana/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{color: 'var(--text-muted)'}}>
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:ramarosandratana2019@gmail.com" className="transition-colors hover:opacity-80" style={{color: 'var(--text-muted)'}}>
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
