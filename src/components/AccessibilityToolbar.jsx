
import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

/* ═══════════════════════════════════════════════════════════════════════════
   AccessibilityToolbar
   Floating panel (bottom-right). Fully keyboard-navigable.
   Settings persisted in localStorage.

   Features:
   • Font size scaling  (3 steps: normal → large → larger)
   • High-contrast overlay
   • Dyslexia-friendly font
   • Reduce motion
   • Highlight links
   • Focus indicators

   Required by: Brazil LBI 13.146/2015 (Lei Brasileira de Inclusão)
   ══════════════════════════════════════════════════════════════════════════ */

const STORAGE_KEY = '4upact_a11y';

const defaults = {
    fontSize: 0,
    highContrast: false,
    dyslexiaFont: false,
    reduceMotion: false,
    highlightLinks: false,
    focusIndicators: false,
};

const readStored = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? { ...defaults, ...JSON.parse(raw) } : { ...defaults };
    } catch {
        return { ...defaults };
    }
};

const setStyleTag = (id, css) => {
    let el = document.getElementById(id);
    if (css) {
        if (!el) { el = document.createElement('style'); el.id = id; document.head.appendChild(el); }
        el.textContent = css;
    } else {
        if (el) el.remove();
    }
};

const applySettings = (s) => {
    const html = document.documentElement;
    const sizes = [null, '120%', '140%'];
    html.style.fontSize = sizes[s.fontSize] || '';

    setStyleTag('a11y-contrast', s.highContrast ? `html { filter: contrast(1.5) !important; }` : null);

    setStyleTag('a11y-dyslexia', s.dyslexiaFont ? `
        html, html * {
            font-family: "Comic Sans MS", "Arial", "Verdana", sans-serif !important;
            letter-spacing: 0.05em !important;
            word-spacing: 0.15em !important;
            line-height: 1.8 !important;
        }
    ` : null);

    setStyleTag('a11y-motion', s.reduceMotion ? `
        *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
        }
    ` : null);

    setStyleTag('a11y-links', s.highlightLinks ? `
        a, a:visited {
            text-decoration: underline !important;
            outline: 2px solid #4ECDC4 !important;
            outline-offset: 2px !important;
            border-radius: 2px !important;
        }
    ` : null);

    setStyleTag('a11y-focus', s.focusIndicators ? `
        *:focus-visible, *:focus {
            outline: 3px solid #FF6B35 !important;
            outline-offset: 3px !important;
            border-radius: 4px !important;
        }
    ` : null);
};

// ─── Copy (trilingual) ───────────────────────────────────────────────────────
const copy = {
    en: {
        title: 'Accessibility',
        reset: 'Reset',
        alwaysOn: 'Always on',
        legal: 'LBI 13.146/2015 · WCAG 2.1',
        open: 'Open accessibility options',
        close: 'Close accessibility options',
        controls: {
            fontSize:        { label: 'Font Size',        badge: ['A', 'A+', 'A++'] },
            highContrast:    { label: 'High Contrast' },
            dyslexiaFont:    { label: 'Dyslexia Font' },
            reduceMotion:    { label: 'Reduce Motion' },
            highlightLinks:  { label: 'Highlight Links' },
            focusIndicators: { label: 'Focus Indicators' },
        },
    },
    pt: {
        title: 'Acessibilidade',
        reset: 'Reiniciar',
        alwaysOn: 'Sempre ativo',
        legal: 'LBI 13.146/2015 · WCAG 2.1',
        open: 'Abrir opções de acessibilidade',
        close: 'Fechar opções de acessibilidade',
        controls: {
            fontSize:        { label: 'Tamanho da Fonte',    badge: ['A', 'A+', 'A++'] },
            highContrast:    { label: 'Alto Contraste' },
            dyslexiaFont:    { label: 'Fonte Dislexia' },
            reduceMotion:    { label: 'Reduzir Animações' },
            highlightLinks:  { label: 'Destacar Links' },
            focusIndicators: { label: 'Indicadores de Foco' },
        },
    },
    es: {
        title: 'Accesibilidad',
        reset: 'Reiniciar',
        alwaysOn: 'Siempre activo',
        legal: 'LBI 13.146/2015 · WCAG 2.1',
        open: 'Abrir opciones de accesibilidad',
        close: 'Cerrar opciones de accesibilidad',
        controls: {
            fontSize:        { label: 'Tamaño de Fuente',    badge: ['A', 'A+', 'A++'] },
            highContrast:    { label: 'Alto Contraste' },
            dyslexiaFont:    { label: 'Fuente Dislexia' },
            reduceMotion:    { label: 'Reducir Movimiento' },
            highlightLinks:  { label: 'Resaltar Vínculos' },
            focusIndicators: { label: 'Indicadores de Foco' },
        },
    },
};

/* ─── Text shadow style — thin black halo so text reads over ANY background ─
   Multiple layered shadows create a gaussian-blur-like dark outline around
   each glyph: sharp at 0px, feathering out to 6px. Keeps text crisp but
   legible whether the backdrop blur picks up white or dark content.         */
const haloShadow = {
    textShadow: [
        '0 0 1px rgba(0,0,0,1)',
        '0 0 2px rgba(0,0,0,0.95)',
        '0 0 4px rgba(0,0,0,0.8)',
        '0 0 6px rgba(0,0,0,0.6)',
    ].join(', '),
};

// ─── Icon components ─────────────────────────────────────────────────────────
const IconFont = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" />
    </svg>
);
const IconContrast = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
    </svg>
);
const IconDyslexia = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V4l8 16 8-16v16" />
    </svg>
);
const IconMotion = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
);
const IconLink = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
);
const IconFocus = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M3 9V4h5M3 15v5h5M21 9V4h-5M21 15v5h-5" />
    </svg>
);
const IconA11y = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="4" r="2" />
        <path d="M12 6v6l-3 4" />
        <path d="M12 12l3 4" />
        <path d="M7 9l5 1 5-1" />
    </svg>
);
const IconReset = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
    </svg>
);

const ICONS = {
    fontSize: <IconFont />,
    highContrast: <IconContrast />,
    dyslexiaFont: <IconDyslexia />,
    reduceMotion: <IconMotion />,
    highlightLinks: <IconLink />,
    focusIndicators: <IconFocus />,
};

// ─── Main Component ──────────────────────────────────────────────────────────
const AccessibilityToolbar = () => {
    const { language } = useLanguage();
    const c = copy[language] || copy.en;

    const [open, setOpen] = useState(false);
    const [settings, setSettings] = useState(readStored);

    useEffect(() => {
        applySettings(settings);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        } catch {
            // Storage can be unavailable in privacy-restricted browsers.
        }
    }, [settings]);

    const update = useCallback((patch) => {
        setSettings(prev => ({ ...prev, ...patch }));
    }, []);

    const reset = () => update({ ...defaults });

    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const hasActive = Object.entries(settings).some(([k, v]) =>
        k !== 'fontSize' ? v : v > 0
    );

    const controlKeys = ['fontSize', 'highContrast', 'dyslexiaFont', 'reduceMotion', 'highlightLinks', 'focusIndicators'];

    return (
        <div className="fixed bottom-6 right-6 z-[9997] flex flex-col items-end gap-3">

            {/* ── Panel ── */}
            {open && (
                <div
                    role="dialog"
                    aria-label={c.title}
                    className="rounded-3xl bg-slate-900 border border-white/10 shadow-[0_8px_60px_rgba(0,0,0,0.85)] w-72 overflow-hidden"
                >
                    {/* Gradient top strip */}
                    <div className="h-1 w-full bg-gradient-to-r from-teal to-orange" />

                    <div className="p-5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h2
                                className="text-white font-black text-sm uppercase tracking-widest"
                                style={haloShadow}
                            >
                                {c.title}
                            </h2>
                            {hasActive && (
                                <button
                                    onClick={reset}
                                    className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-orange transition-colors"
                                    aria-label={c.reset}
                                    style={haloShadow}
                                >
                                    <IconReset />
                                    {c.reset}
                                </button>
                            )}
                        </div>

                        {/* Controls */}
                        <div className="space-y-2">
                            {controlKeys.map((key) => {
                                const ctrl = c.controls[key];
                                const isActive = key === 'fontSize' ? settings.fontSize > 0 : settings[key];
                                const badge = key === 'fontSize' ? ctrl.badge[settings.fontSize] : null;

                                return (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            if (key === 'fontSize') {
                                                update({ fontSize: (settings.fontSize + 1) % 3 });
                                            } else {
                                                update({ [key]: !settings[key] });
                                            }
                                        }}
                                        aria-pressed={isActive}
                                        aria-label={ctrl.label}
                                        className={`
                                            w-full flex items-center gap-3 px-4 py-3 rounded-2xl border
                                            text-left transition-all duration-200
                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-teal
                                            ${isActive
                                                ? 'bg-teal/10 border-teal/30 text-teal'
                                                : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:text-white hover:border-white/20'
                                            }
                                        `}
                                    >
                                        <span className="flex-shrink-0">{ICONS[key]}</span>
                                        <span
                                            className="flex-1 text-sm font-bold"
                                            style={haloShadow}
                                        >
                                            {ctrl.label}
                                        </span>
                                        {badge && (
                                            <span
                                                className={`text-xs font-black px-2 py-0.5 rounded-lg ${isActive ? 'bg-teal text-slate-950' : 'bg-white/10 text-slate-300'}`}
                                                style={haloShadow}
                                            >
                                                {badge}
                                            </span>
                                        )}
                                        {isActive && !badge && (
                                            <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <p
                            className="mt-4 text-[9px] font-mono text-slate-500 text-center uppercase tracking-widest"
                            style={haloShadow}
                        >
                            {c.legal}
                        </p>
                    </div>
                </div>
            )}

            {/* ── FAB Trigger ── */}
            <button
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-label={open ? c.close : c.open}
                className={`
                    relative w-14 h-14 rounded-2xl transition-all duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
                    ${open
                        ? 'bg-teal text-slate-950 scale-110'
                        : 'bg-slate-900 border border-white/20 text-white hover:bg-slate-700 hover:scale-105'
                    }
                `}
                style={{
                    boxShadow: open
                        ? '0 0 0 1px rgba(78,205,196,0.4), 0 8px 32px rgba(0,0,0,0.8)'
                        : '0 0 0 1px rgba(0,0,0,0.6), 0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,1)',
                }}
            >
                <span
                    className="flex items-center justify-center w-full h-full"
                    style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,1)) drop-shadow(0 0 4px rgba(0,0,0,0.8))' }}
                >
                    <IconA11y />
                </span>

                {/* Active dot */}
                {hasActive && !open && (
                    <span
                        className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-orange border-2 border-slate-900"
                        aria-label="Accessibility settings active"
                        style={{ boxShadow: '0 0 4px rgba(0,0,0,0.9)' }}
                    />
                )}
            </button>
        </div>
    );
};

export default AccessibilityToolbar;
