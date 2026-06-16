
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- THE OFFICIAL 4U PACT LOGO ---
const Logo = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
        <img
            src="/assets/4upact-logo-correct.png"
            alt="4U Pact"
            className="w-[85px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <div className="flex flex-col leading-none">
            <span
                className="leading-none uppercase"
                style={{
                    fontFamily: '"Roboto Condensed", sans-serif',
                    fontWeight: 900,
                    fontSize: '1.15rem',
                    letterSpacing: '-0.02em',
                    color: '#4ECDC4',
                }}
            >
                4U PACT
            </span>
            <span
                className="leading-none uppercase mt-[3px]"
                style={{
                    fontFamily: '"Roboto Condensed", sans-serif',
                    fontWeight: 700,
                    fontSize: '0.58rem',
                    letterSpacing: '0.35em',
                    color: '#F7941D',
                }}
            >
                Growth Engine
            </span>
        </div>
    </div>
);

// --- FLAGS ---
const USFlag = () => (
    <svg viewBox="0 0 640 480" className="w-full h-full">
        <path fill="#bd3d44" d="M0 0h640v480H0z" /><path fill="#fff" d="M0 36.9h640v36.9H0zm0 73.8h640v37H0zm0 73.9h640v37H0zm0 73.8h640v37H0zm0 73.9h640v36.9H0zm0 73.8h640v37H0z" /><path fill="#192f5d" d="M0 0h256v258.5H0z" /><circle fill="#fff" cx="21" cy="24" r="6" /><circle fill="#fff" cx="47" cy="24" r="6" /><circle fill="#fff" cx="73" cy="24" r="6" /><circle fill="#fff" cx="98" cy="24" r="6" /><circle fill="#fff" cx="124" cy="24" r="6" /><circle fill="#fff" cx="150" cy="24" r="6" /><circle fill="#fff" cx="175" cy="24" r="6" /><circle fill="#fff" cx="201" cy="24" r="6" /><circle fill="#fff" cx="227" cy="24" r="6" /><circle fill="#fff" cx="34" cy="50" r="6" /><circle fill="#fff" cx="60" cy="50" r="6" /><circle fill="#fff" cx="85" cy="50" r="6" /><circle fill="#fff" cx="111" cy="50" r="6" /><circle fill="#fff" cx="137" cy="50" r="6" /><circle fill="#fff" cx="163" cy="50" r="6" /><circle fill="#fff" cx="188" cy="50" r="6" /><circle fill="#fff" cx="214" cy="50" r="6" />
    </svg>
);

const BRFlag = () => (
    <svg viewBox="0 0 720 504" className="w-full h-full">
        <path fill="#009b3a" d="M0 0h720v504H0z" /><path fill="#fedf00" d="m360 55.3-305.8 196.7L360 448.7l305.8-196.7z" /><circle fill="#002776" cx="360" cy="252" r="106" /><path fill="#fff" d="M256.7 232.8c27.1 23.3 64.9 36.6 104.2 36.6 38.6 0 75.8-12.9 102.7-35.4-3.5 1-7.2 2.1-10.9 3.1-25.5 21.2-60.8 33.3-91.8 33.3-31 0-66.3-12.1-91.8-33.3-3.6-1-7.3-2.1-10.9-3.1" />
    </svg>
);

const ARFlag = () => (
    <svg viewBox="0 0 800 500" className="w-full h-full">
        <path fill="#74acdf" d="M0 0h800v500H0z" /><path fill="#fff" d="M0 166.7h800v166.6H0z" /><circle fill="#f6b40e" cx="400" cy="250" r="45" /><circle fill="#845c0c" cx="400" cy="250" r="10" />
    </svg>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const links = [
        { path: `/${language}/services`, label: t.nav.services },
        { path: `/${language}/industries`, label: t.nav.industries },
        { path: `/${language}/pricing`, label: t.nav.pricing || 'Pricing' },
        { path: `/${language}/portfolio`, label: t.nav.portfolio },
        { path: `/${language}/about`, label: t.nav.about },
        { path: `/${language}/blog`, label: t.nav.blog || 'Blog' },
    ];

    const changeLanguage = (newLang) => {
        const pathSegments = location.pathname.split('/');
        pathSegments[1] = newLang;
        const newPath = pathSegments.join('/') || `/${newLang}`;
        navigate(newPath);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed w-full z-[100] transition-all duration-500 ${
                scrolled
                    ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-white/5 h-20'
                    : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100 h-24'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">

                        {/* Official Logo */}
                        <NavLink to={`/${language}`}>
                            <Logo />
                        </NavLink>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `transition-all duration-300 font-black uppercase tracking-[0.2em] text-[10px] relative py-2 ${
                                            isActive
                                                ? 'text-orange'
                                                : scrolled
                                                    ? 'text-slate-400 hover:text-teal'
                                                    : 'text-slate-600 hover:text-primary'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Language & CTA */}
                        <div className="hidden lg:flex items-center gap-6">
                            <div className={`flex items-center p-1.5 rounded-2xl gap-3 px-3 ${
                                scrolled ? 'bg-white/5 border border-white/10' : 'bg-slate-100 border border-slate-200'
                            }`}>
                                {[
                                    { id: 'en', icon: USFlag },
                                    { id: 'pt', icon: BRFlag },
                                    { id: 'es', icon: ARFlag }
                                ].map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => changeLanguage(lang.id)}
                                        className="w-7 h-5 relative group/flag"
                                    >
                                        <div className={`flag-icon ${language === lang.id ? 'flag-active' : ''}`}>
                                            <lang.icon />
                                        </div>
                                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase text-teal opacity-0 group-hover/flag:opacity-100 transition-opacity">
                                            {lang.id}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <NavLink to={`/${language}/contact`} className="btn-cta py-3.5 shadow-orange/10">
                                {t.nav.contact}
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`p-3 rounded-xl border transition-all ${
                                    scrolled
                                        ? 'text-white bg-white/5 border-white/10'
                                        : 'text-slate-700 bg-slate-100 border-slate-200'
                                }`}
                            >
                                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[99] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    {/* Drawer */}
                    <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col pt-24 pb-12 px-8 overflow-y-auto">

                        {/* Nav Links */}
                        <nav className="flex flex-col gap-2 mb-10">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `py-4 px-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all ${
                                            isActive
                                                ? 'bg-primary text-white'
                                                : 'text-slate-700 hover:bg-slate-50'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Language Switcher */}
                        <div className="mb-8">
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Language</p>
                            <div className="flex gap-3">
                                {[
                                    { id: 'en', icon: USFlag, label: 'English' },
                                    { id: 'pt', icon: BRFlag, label: 'Português' },
                                    { id: 'es', icon: ARFlag, label: 'Español' }
                                ].map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => changeLanguage(lang.id)}
                                        className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border transition-all ${
                                            language === lang.id
                                                ? 'border-primary bg-primary/5'
                                                : 'border-slate-200 hover:border-primary/30'
                                        }`}
                                    >
                                        <div className="w-8 h-6"><lang.icon /></div>
                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">{lang.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <NavLink
                            to={`/${language}/contact`}
                            onClick={() => setIsMenuOpen(false)}
                            className="btn-cta w-full justify-center"
                        >
                            {t.nav.contact}
                        </NavLink>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
