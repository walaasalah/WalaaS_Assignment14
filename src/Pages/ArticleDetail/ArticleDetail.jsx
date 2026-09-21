import { useState } from "react";
import { useParams, Link } from "react-router";
import siteData from "../../Data/posts.json";
import PostCard from "../../Components/Card/Card.jsx";

function ArticleDetail() {
  const { slug } = useParams();


  const post = siteData.posts.find((p) => p.slug === slug);

  function formatArabicDate(date) {
    return new Date(date).toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  if (!post) {
    return (
      <div
        className="max-w-2xl mx-auto text-center py-24 px-4"
        dir="rtl"
      >
        <h1 className="text-2xl font-black text-white mb-4">
          المقال غير موجود
        </h1>

        <Link
          to="/blog"
          className="text-orange-400 hover:text-orange-300 font-semibold"
        >
          العودة إلى المدونة
        </Link>
      </div>
    );
  }

  const blocks = post.content.split("\n\n").filter(Boolean);

  const relatedPosts = siteData.posts
    .filter(
      (p) => p.category === post.category && p.id !== post.id
    )
    .slice(0, 3);



  return (
    <main className="bg-[#0a0a0a] min-h-screen" dir="rtl">

      {/* Hero */}
      <section className="relative min-h-[500px] h-[60vh] overflow-hidden">

        {/* Background Image */}
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>

        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/40 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10 md:pb-14">

          <div className="w-full">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm flex-wrap">

              <Link
                to="/"
                className="text-white/70 hover:text-white transition"
              >
                <i className="fa-solid fa-house"></i>
              </Link>

              <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>

              <Link
                to="/blog"
                className="text-white/70 hover:text-white transition"
              >
                المدونة
              </Link>

              <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>

              <span className="text-orange-400">
                {post.category}
              </span>

            </div>

            {/* Category + Date */}
            <div className="flex flex-wrap items-center gap-3 mb-5">

              <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">
                {post.category}
              </span>

              <span className="text-white/70 text-sm flex items-center gap-2">
                <i className="fa-regular fa-calendar"></i>
                {formatArabicDate(post.date)}
              </span>

              <span className="text-white/70 text-sm flex items-center gap-2">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>

            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">

              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
              />

              <div>
                <p className="font-bold text-white">
                  {post.author.name}
                </p>

                <p className="text-sm text-white/60">
                  {post.author.role}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">

          {/* Article */}
          <div className="order-2 lg:order-1">

            {/* Intro */}
            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">

              <p className="text-lg text-neutral-200 leading-relaxed italic">
                {post.excerpt}
              </p>

            </div>

            {/* Content */}
            <div>

              {blocks.map((block, index) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      id={`section-${index}`}
                      className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                        <i className="fa-solid fa-camera text-orange-500"></i>
                      </span>

                      {block.replace("## ", "")}
                    </h2>
                  );
                }

                return (
                  <p
                    key={index}
                    className="text-neutral-300 leading-relaxed mb-6 text-lg"
                  >
                    {block}
                  </p>
                );
              })}

            </div>

            {/* Tags */}
            <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-tags text-orange-500"></i>
                </div>

                <h3 className="font-bold text-white">
                  الوسوم
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626]"
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>

            {/* Share */}
            <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-share-nodes text-orange-500"></i>
                  </div>

                  <h3 className="font-bold text-white">
                    شارك المقال
                  </h3>

                </div>

                <div className="flex gap-2">

                  {/* X */}
                  <button
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white transition"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>

                  {/* LinkedIn */}
                  <button
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>

                  {/* WhatsApp */}
                  <button
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white transition"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </button>

                  {/* Copy */}
                  <button
                  
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition"
                  >
                    <i className="fa-solid fa-link"></i>
                  </button>

                </div>

              </div>

        

            </div>

            {/* Author */}
            <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                />

                <div className="text-center sm:text-right flex-1">

                  <span className="text-xs text-orange-500 font-semibold">
                    كاتب المقال
                  </span>

                  <h3 className="text-xl font-bold text-white mt-1">
                    {post.author.name}
                  </h3>

                  <p className="text-neutral-500 text-sm mb-3">
                    {post.author.role}
                  </p>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <aside className="order-1 lg:order-2">

            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Table of contents */}
              <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-list text-orange-500"></i>
                  </div>

                  <h3 className="font-bold text-white">
                    محتويات المقال
                  </h3>

                </div>

                <nav className="space-y-2">

                  {blocks
                    .filter((block) => block.startsWith("## "))
                    .map((block, index) => (
                      <a
                        key={index}
                        href={`#section-${blocks.indexOf(block)}`}
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold">
                          {index + 1}
                        </span>

                        <span className="text-sm">
                          {block.replace("## ", "")}
                        </span>
                      </a>
                    ))}

                </nav>

              </div>

              {/* Info */}
              <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                <div className="grid grid-cols-2 gap-4">

                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                    <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>

                    <p className="text-white font-bold text-sm">
                      {post.readTime}
                    </p>

                    <p className="text-neutral-500 text-xs">
                      وقت القراءة
                    </p>

                  </div>

                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                    <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>

                    <p className="text-white font-bold text-sm">
                      {formatArabicDate(post.date)}
                    </p>

                    <p className="text-neutral-500 text-xs">
                      تاريخ النشر
                    </p>

                  </div>

                </div>

              </div>

              {/* More Articles */}
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">

                <div className="text-center">

                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
                  </div>

                  <h3 className="font-bold text-white mb-2">
                    لا تفوّت جديدنا
                  </h3>

                  <p className="text-neutral-400 text-sm mb-4">
                    اشترك للحصول على أحدث المقالات
                  </p>

                  <Link
                    to="/blog"
                    className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition text-center"
                  >
                    تصفح المزيد
                  </Link>

                </div>

              </div>

            </div>

          </aside>

        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#262626]">

            <div className="flex items-center justify-between mb-10">

              <div className="flex items-center gap-4">

                <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-images text-orange-500 text-xl"></i>
                </span>

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>

                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز
                  </p>

                </div>

              </div>

              <Link
                to="/blog"
                className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition"
              >
                عرض الكل

                <i className="fa-solid fa-arrow-left"></i>
              </Link>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {relatedPosts.map((p) => (
                <PostCard
                  key={p.id}
                  post={p}
                />
              ))}

            </div>

          </section>
        )}

      </section>

    </main>
  );
}

export default ArticleDetail;