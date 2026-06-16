
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Clock, Calendar, Loader2 } from 'lucide-react';

const WP_API = 'https://public-api.wordpress.com/wp/v2/sites/4upact.wordpress.com';

const postText = {
    pt: { back: 'Voltar ao Blog', loading: 'Carregando...', error: 'Artigo não encontrado.', minRead: 'min de leitura' },
    en: { back: 'Back to Blog', loading: 'Loading...', error: 'Article not found.', minRead: 'min read' },
    es: { back: 'Volver al Blog', loading: 'Cargando...', error: 'Artículo no encontrado.', minRead: 'min de lectura' },
};

const getReadingTime = (html) => {
    const text = html?.replace(/<[^>]*>/g, '') || '';
    return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
};

const formatDate = (dateStr, lang) => {
    const date = new Date(dateStr);
    const localeMap = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
    return date.toLocaleDateString(localeMap[lang] || 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });
};

const BlogPost = () => {
    const { slug } = useParams();
    const { language } = useLanguage();
    const text = postText[language] || postText.en;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed=true`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                if (data.length === 0) throw new Error('Not found');
                setPost(data[0]);
            } catch (err) {
                console.error('BlogPost fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="flex flex-col items-center">
                    <Loader2 size={40} className="text-teal animate-spin mb-4" />
                    <p className="text-slate-400">{text.loading}</p>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <p className="text-xl text-slate-400 mb-6">{text.error}</p>
                    <Link to={`/${language}/blog`} className="btn-cta inline-flex">
                        <ArrowLeft size={16} /> {text.back}
                    </Link>
                </div>
            </div>
        );
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const readTime = getReadingTime(post.content?.rendered);
    const plainTitle = post.title.rendered.replace(/<[^>]*>/g, '');
    const plainExcerpt = (post.excerpt?.rendered || '').replace(/<[^>]*>/g, '').substring(0, 160);

    return (
        <>
            <Helmet>
                <title>{plainTitle} | 4U Pact Blog</title>
                <meta name="description" content={plainExcerpt} />
                <meta property="og:title" content={plainTitle} />
                <meta property="og:description" content={plainExcerpt} />
                {featuredImage && <meta property="og:image" content={featuredImage} />}
                <meta property="og:type" content="article" />
            </Helmet>

            {/* Hero Banner */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#3C2A4D] to-slate-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <Link
                        to={`/${language}/blog`}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-teal hover:text-orange transition-colors mb-8"
                    >
                        <ArrowLeft size={14} /> {text.back}
                    </Link>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {formatDate(post.date, language)}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {readTime} {text.minRead}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        className="text-3xl md:text-5xl font-black text-white leading-tight"
                        style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                </div>
            </section>

            {/* Featured Image */}
            {featuredImage && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                    <img
                        src={featuredImage}
                        alt={plainTitle}
                        className="w-full rounded-3xl shadow-2xl"
                    />
                </div>
            )}

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div
                    className="prose prose-lg prose-slate max-w-none
                        prose-headings:font-black prose-headings:text-slate-900
                        prose-a:text-teal prose-a:no-underline hover:prose-a:text-orange
                        prose-img:rounded-2xl prose-img:shadow-lg
                        prose-blockquote:border-l-teal prose-blockquote:bg-teal/5 prose-blockquote:rounded-r-2xl prose-blockquote:py-1 prose-blockquote:px-6
                        prose-code:bg-slate-100 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-lg prose-code:text-primary
                        prose-strong:text-slate-900"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
            </article>

            {/* Back to Blog CTA */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="border-t border-slate-100 pt-8">
                    <Link
                        to={`/${language}/blog`}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-teal hover:text-orange transition-colors"
                    >
                        <ArrowLeft size={14} /> {text.back}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
