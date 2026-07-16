
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import posts from '../data/blogPosts.json';

const postText = {
    pt: { back: 'Voltar ao Blog', error: 'Artigo não encontrado.', minRead: 'min de leitura' },
    en: { back: 'Back to Blog', error: 'Article not found.', minRead: 'min read' },
    es: { back: 'Volver al Blog', error: 'Artículo no encontrado.', minRead: 'min de lectura' },
};

// Pull a localized field with a safe fallback to English (covers any post
// that briefly lacks a translation, e.g. mid-migration or a pipeline hiccup).
const t = (field, language) => field?.[language] || field?.en || '';

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
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
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

    const title = t(post.title, language);
    const metaTitle = t(post.metaTitle, language) || title;
    const metaDescription = t(post.metaDescription, language) || t(post.excerpt, language);
    const content = t(post.content, language);
    const readTime = getReadingTime(content);

    return (
        <>
            <Helmet>
                <title>{metaTitle} | 4U Pact Blog</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                {post.image && <meta property="og:image" content={post.image} />}
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
                    >
                        {title}
                    </h1>
                </div>
            </section>

            {/* Featured Image */}
            {post.image && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                    <img
                        src={post.image}
                        alt={title}
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
                    dangerouslySetInnerHTML={{ __html: content }}
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
