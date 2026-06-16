import React, { useState, useEffect, useRef } from 'react';

// ─── Animated mascot robot ─────────────────────────────────────────────────
// Sits near the hero video. Eyes track cursor, blink periodically,
// occasionally glance at the video, then back at the visitor.

const MascotRobot = ({ className = '' }) => {
    const robotRef = useRef(null);
    const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);
    const [glanceAtVideo, setGlanceAtVideo] = useState(false);

    // Track mouse for eye follow
    useEffect(() => {
        const handleMouse = (e) => {
            if (glanceAtVideo) return;
            const robot = robotRef.current;
            if (!robot) return;
            const rect = robot.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxMove = 3;
            const factor = Math.min(maxMove / (dist * 0.02 + 1), maxMove);
            setEyePos({
                x: (dx / (dist || 1)) * factor,
                y: (dy / (dist || 1)) * factor,
            });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, [glanceAtVideo]);

    // Blink every 3-5 seconds
    useEffect(() => {
        const blink = () => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
        };
        const id = setInterval(blink, 3000 + Math.random() * 2000);
        return () => clearInterval(id);
    }, []);

    // Glance at video every 6-10 seconds
    useEffect(() => {
        const glance = () => {
            setGlanceAtVideo(true);
            setEyePos({ x: -3, y: -1 });
            setTimeout(() => {
                setGlanceAtVideo(false);
            }, 1200 + Math.random() * 800);
        };
        const id = setInterval(glance, 6000 + Math.random() * 4000);
        return () => clearInterval(id);
    }, []);

    const eyeH = isBlinking ? 1 : 6;

    return (
        <div ref={robotRef} className={`select-none pointer-events-none ${className}`}>
            <svg viewBox="0 0 80 90" width="80" height="90" xmlns="http://www.w3.org/2000/svg">
                {/* Antenna */}
                <line x1="40" y1="8" x2="40" y2="20" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round">
                    <animate attributeName="y1" values="8;5;8" dur="2s" repeatCount="indefinite" />
                </line>
                <circle cx="40" cy="6" r="3.5" fill="#818CF8">
                    <animate attributeName="r" values="3.5;4.5;3.5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Head */}
                <rect x="18" y="18" width="44" height="34" rx="10" fill="#1E293B" stroke="#6366F1" strokeWidth="1.5"/>

                {/* Face plate */}
                <rect x="23" y="23" width="34" height="22" rx="6" fill="#0F172A"/>

                {/* Left eye */}
                <rect
                    x={31 + eyePos.x}
                    y={33 - eyeH / 2 + eyePos.y}
                    width="6" height={eyeH} rx={isBlinking ? 0.5 : 3}
                    fill="#22D3EE"
                    style={{ transition: 'all 0.15s ease-out' }}
                />
                {/* Right eye */}
                <rect
                    x={43 + eyePos.x}
                    y={33 - eyeH / 2 + eyePos.y}
                    width="6" height={eyeH} rx={isBlinking ? 0.5 : 3}
                    fill="#22D3EE"
                    style={{ transition: 'all 0.15s ease-out' }}
                />

                {/* Mouth — small smile */}
                <path d="M33 40 Q40 44 47 40" stroke="#6366F1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

                {/* Body */}
                <rect x="24" y="54" width="32" height="22" rx="6" fill="#1E293B" stroke="#6366F1" strokeWidth="1.5"/>

                {/* Chest light */}
                <circle cx="40" cy="64" r="3" fill="#F97316">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                </circle>

                {/* Arms */}
                <rect x="12" y="56" width="10" height="6" rx="3" fill="#334155"/>
                <rect x="58" y="56" width="10" height="6" rx="3" fill="#334155"/>

                {/* Feet */}
                <rect x="26" y="76" width="10" height="6" rx="3" fill="#334155"/>
                <rect x="44" y="76" width="10" height="6" rx="3" fill="#334155"/>

                {/* 4U badge on chest */}
                <text x="40" y="72" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="6" fill="#818CF8">4U</text>
            </svg>
        </div>
    );
};

export default MascotRobot;
