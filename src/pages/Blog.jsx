
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Clock, ArrowRight, Search } from 'lucide-react';
import posts from '../data/blogPosts.json';

const blogText = {
    pt: {
        badge: 'Content Machine',
        title: 'Blog & Insights',
        subtitle: 'Estratégias, cases e inteligência de growth direto do motor.',
        search: 'Buscar artigos...',
        readMore: 'Ler Artigo',
        noResults: 'Nenhum artigo encontrado.',
        minRead: 'min de leitura',
    },
    en: {
        badge: 'Content Machine',
        title: 'Blog & Insights',
        subtitle: 'Strategies, cases, and growth intelligence straight from the engine.',
        search: 'Search articles...',
        readMore: 'Read Article',
        noResults: 'No articles found.',
        minRead: 'min read',
    },
    es: {
        badge: 'Content Machine',
        title: 'Blog & Insights',
        subtitle: 'Estrategias, casos e inteligencia de crecimiento directo del motor.',
        search: 'Buscar artículos...',
        readMore: 'Leer Artículo',
        noResults: 'Ningún artículo encontrado.',
        minRead: 'min de lectura',
    },
};

// Pull a localized field with a safe fallback to English (covers any post
// that briefly lacks a translation, e.g. mid-migration or a pipeline hiccup).
const t = (field, language) => field?.[language] || field?.en || '';

const getReadingTime = (html) => {
    const text = html?.replace(/<[^>]*>/g, '') || '';
    const words = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
};

const formatDate = (dateStr, lang) => {
    const date = new Date(dateStr);
    const localeMap = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
    return date.toLocaleDateString(localeMap[lang] || 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const BlogCard = ({ post, language, text }) => {
    const title = t(post.title, language);
    const excerpt = t(post.excerpt, language);
    const readTime = getReadingTime(t(post.content, language));

    return (
        <Link
            to={`/${language}/blog/${post.slug}`}
            className="group block bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
        >
            {/* Image */}
            <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-teal/10">
                {post.image ? (
                    <img
                        src={post.image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl opacity-20">4U</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span>{formatDate(post.date, language)}</span>
                    <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {readTime} {text.minRead}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                    {excerpt}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-teal group-hover:text-orange transition-colors">
                    {text.readMore}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </Link>
    );
};

const Blog = () => {
    const { language } = useLanguage();
    const text = blogText[language] || blogText.en;
    const [search, setSearch] = useState('');

    const filteredPosts = useMemo(() => {
        const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
        if (!search.trim()) return sorted;
        const q = search.trim().toLowerCase();
        return sorted.filter((p) => {
            const title = t(p.title, language).toLowerCase();
            const excerpt = t(p.excerpt, language).toLowerCase();
            return title.includes(q) || excerpt.includes(q);
        });
    }, [search, language]);

    return (
        <>
            <Helmet>
                <title>Blog & Insights | 4U Pact Growth Engine</title>
                <meta name="description" content="Growth strategies, case studies, and marketing intelligence from 4U Pact." />
            </Helmet>

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#3C2A4D] to-slate-950" />
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(78,205,196,0.3) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }} />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-teal border border-teal/20 bg-teal/5 mb-6">
                        {text.badge}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
                        {text.title}
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                        {text.subtitle}
                    </p>

                    {/* Search */}
                    <div className="max-w-md mx-auto relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={text.search}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:bg-white/15 transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400">{text.noResults}</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} language={language} text={text} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Blog;
