import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useThemeLanguage } from '../context/useThemeLanguage';
import SettingsButton from './SettingsButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useThemeLanguage();
    const linkStyle = ({ isActive }) => ({
        color: isActive ? 'var(--accent)' : 'var(--text-secondary)'
    });

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300" style={{backgroundColor: 'rgb(from var(--surface) r g b / 0.9)', borderColor: 'rgb(from var(--border) r g b / 0.6)'}}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                        <div
                            className="w-9 h-9 rounded-md flex items-center justify-center text-white font-extrabold text-sm tracking-widest"
                            style={{backgroundColor: 'var(--accent)'}}
                            aria-hidden="true"
                        >
                            RM
                        </div>
                        <span className="flex flex-col leading-none">
                            <span className="font-bold text-lg tracking-tight transition-colors duration-300" style={{color: 'var(--text-primary)'}}>Rina</span>
                            <span className="text-[11px] uppercase tracking-[0.25em]" style={{color: 'var(--text-secondary)'}}>Portfolio</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            <NavLink to="/" className="nav-link-premium px-4 py-2 text-sm font-medium" style={linkStyle} end>{t('navbar.home')}</NavLink>
                            <NavLink to="/projects" className="nav-link-premium px-4 py-2 text-sm font-medium" style={linkStyle}>{t('navbar.projects')}</NavLink>
                            <NavLink to="/experience" className="nav-link-premium px-4 py-2 text-sm font-medium" style={linkStyle}>{t('navbar.experience')}</NavLink>
                            <NavLink to="/contact" className="nav-link-premium px-4 py-2 text-sm font-medium" style={linkStyle}>{t('navbar.contact')}</NavLink>
                        </div>
                    </div>

                    {/* CTA + Settings */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/contact" className="text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 hover:-translate-y-0.5" style={{backgroundColor: 'var(--accent)'}}>
                            {t('navbar.hireMe')}
                        </Link>
                        <SettingsButton variant="navbar" />
                    </div>

                    {/* Mobile menu + settings */}
                    <div className="-mr-2 flex md:hidden items-center gap-2">
                        <SettingsButton variant="navbar" />
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded hover:opacity-80 focus:outline-none transition-all duration-300"
                            style={{color: 'var(--text-secondary)', backgroundColor: 'transparent'}}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t transition-colors duration-300" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)'}}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="nav-link-premium block px-4 py-3 rounded-lg text-base font-medium" style={linkStyle} end>{t('navbar.home')}</NavLink>
                        <NavLink to="/projects" onClick={() => setIsOpen(false)} className="nav-link-premium block px-4 py-3 rounded-lg text-base font-medium" style={linkStyle}>{t('navbar.projects')}</NavLink>
                        <NavLink to="/experience" onClick={() => setIsOpen(false)} className="nav-link-premium block px-4 py-3 rounded-lg text-base font-medium" style={linkStyle}>{t('navbar.experience')}</NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)} className="nav-link-premium block px-4 py-3 rounded-lg text-base font-medium" style={linkStyle}>{t('navbar.contact')}</NavLink>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white block px-4 py-3 rounded-lg text-base font-medium mt-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95" style={{backgroundColor: 'var(--accent)'}}>{t('navbar.hireMe')}</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
