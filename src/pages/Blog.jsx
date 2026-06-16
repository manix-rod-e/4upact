
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Clock, ArrowRight, Search, Loader2 } from 'lucide-react';

const WP_API = 'https://public-api.wordpress.com/wp/v2/sites/4upact.wordpress.com';

const blogText = {
    pt: {
        badge: 'Content Machine',
        title: 'Blog & Insights',
        subtitle: 'Estratégias, cases e inteligência de growth direto do motor.',
        search: 'Buscar artigos...',
        readMore: 'Ler Artigo',
        loading: 'Carregando artigos...',
        noResults: 'Nenhum artigo encontrado.',
        error: 'Erro ao carregar artigos. Tente novamente.',
        minRead: 'min de leitura',
    },
    en: {
        badge: 'Content Machine',
        title: 'Blog & Insights',
        subtitle: 'Strategies, cases, and growth intelligence straight from the engine.',
        search: 'Search articles...',
        readMore: 'Read Article',
        loading: 'Loading articles...',
        noResults: 'No articles found.',
        error: 'Error loading articles. Please try again.',
        minRead: 'min read',
    },
    es: {
        badge: 'Content Machine',
        title: 'Blog & Insights',
        subtitle: 'Estrategias, casos e inteligencia de crecimiento directo del motor.',
        search: 'Buscar artículos...',
        readMore: 'Leer Artículo',
        loading: 'Cargando artículos...',
        noResults: 'Ningún artículo encontrado.',
        error: 'Error al cargar artículos. Intente de nuevo.',
        minRead: 'min de lectura',
    },
};

// Estimate reading time from HTML content
const getReadingTime = (html) => {
    const text = html?.replace(/<[^>]*>/g, '') || '';
    const words = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
};

// Strip HTML tags for excerpt
const stripHtml = (html) => {
    const text = html?.replace(/<[^>]*>/g, '') || '';
    return text.length > 180 ? text.substring(0, 180) + '...' : text;
};

// Format date
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
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const readTime = getReadingTime(post.content?.rendered);

    return (
        <Link
            to={`/${language}/blog/${post.slug}`}
            className="group block bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
        >
            {/* Image */}
            <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-teal/10">
                {featuredImage ? (
                    <img
                        src={featuredImage}
                        alt={post.title.rendered}
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
                <h3
                    className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                {/* Excerpt */}
                <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                    {stripHtml(post.excerpt?.rendered)}
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
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams({
                    per_page: '20',
                    orderby: 'date',
                    order: 'desc',
                    _embed: 'true',
                });
                if (search.trim()) {
                    params.set('search', search.trim());
                }
                const res = await fetch(`${WP_API}/posts?${params}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                console.error('Blog fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const debounce = setTimeout(fetchPosts, search ? 400 : 0);
        return () => clearTimeout(debounce);
    }, [search]);

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
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 size={40} className="text-teal animate-spin mb-4" />
                            <p className="text-slate-400">{text.loading}</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20">
                            <p className="text-red-400 mb-2">{text.error}</p>
                            <p className="text-xs text-slate-400">{error}</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400">{text.noResults}</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <BlogCard key={post.id} post={post} language={language} text={text} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Blog;
