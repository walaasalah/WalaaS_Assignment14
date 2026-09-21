import React, { useState } from "react";
import { Link } from "react-router";
import siteData from "../../Data/posts.json";
import PostCard from "../../Components/Card/Card.jsx";
import CategoryCard from "../../Components/CategoryCard/CategoryCard.jsx";
import writer1 from "../../assets/Images/imgi_14_photo-1507003211169-0a1dd7228f2d.jpg";
import writer2 from "../../assets/Images/imgi_15_photo-1500648767791-00dcc994a43e.jpg";
import writer3 from "../../assets/Images/imgi_16_photo-1472099645785-5658abf4ff4e.jpg";
import ListCard from "../../Components/ListCard/ListCard.jsx";

export default function Home() {


  const posts = siteData.posts;
  const featuredPosts = posts.filter((p) => p.featured);
  const latestPosts = posts.slice(3, 6);
  const writersCount = new Set(posts.map((p) => p.author.name)).size;



  function formatArabicDate(date) {
    return new Date(date).toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div dir="rtl">
      {/* Hero */}
      <section
        className="relative min-h-[90vh] overflow-hidden bg-[#0a0a0a] flex items-center"
        dir="rtl"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Orange Blob */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>

        {/* Yellow Blob */}
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
          style={{ animationDelay: "-2s" }}
        ></div>

        {/* Center Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Welcome */}

            <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في {siteData.siteInfo.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف{" "}
              <span className="bg-clip-text  brand-gradient text-[#fbbf24]">
                فن
              </span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {siteData.siteInfo.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to="/blog"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                <span>استكشف المقالات</span>

                <i className="fa-solid fa-arrow-left w-5 h-5 group-hover:-translate-x-1 transition-transform "></i>
              </Link>

              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-circle-info"></i>

                <span>اعرف المزيد</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {/* Articles */}
              <div className="rounded-xl border border-white/10 bg-[#141110] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>

                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  {posts.length}+
                </p>

                <p className="text-neutral-500 text-sm">مقالة</p>
              </div>

              {/* Readers */}
              <div className="rounded-xl border border-white/10 bg-[#141110] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>

                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  10ألف+
                </p>

                <p className="text-neutral-500 text-sm">قارئ</p>
              </div>

              {/* Categories */}
              <div className="rounded-xl border border-white/10 bg-[#141110] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>

                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  {siteData.categories.length}
                </p>

                <p className="text-neutral-500 text-sm">تصنيفات</p>
              </div>

              {/* Writers */}
              <div className="rounded-xl border border-white/10 bg-[#141110] p-4 hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>

                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  {writersCount}
                </p>

                <p className="text-neutral-500 text-sm">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                مميز
              </span>
              <h2 className="section-title text-white">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <a
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              href="/blog"
              data-discover="true"
            >
              عرض الكل
                 <i className="fa-solid fa-arrow-left"></i>
            </a>
          </div>

          <div className="grid gap-6">
            {featuredPosts.map((post, index)=>(
              <ListCard key={post.id} post={post}   index={index} />
            
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative border-y border-[#262626] bg-[#111111] py-24">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="mb-12 text-center">
            {" "}
            <span className="section-label mb-4">
              {" "}
              <span className="relative ml-2 flex h-2 w-2">
                {" "}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />{" "}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />{" "}
              </span>{" "}
              التصنيفات{" "}
            </span>{" "}
            <h2 className="section-title text-white"> استكشف حسب الموضوع </h2>{" "}
            <p className="section-subtitle mx-auto max-w-lg">
              {" "}
              اعثر على محتوى مصمم حسب اهتماماتك{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {" "}
            {siteData.categories.map((cat, index) => (
              <CategoryCard key={cat.name} category={cat} index={index} />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Latest */}

<section className="relative overflow-hidden bg-[#0a0a0a] py-24">
  {/* Background Glow */}
  <div className="absolute bottom-0 left-0 h-full w-1/3 bg-gradient-to-r from-orange-500/5 to-transparent" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div>
        {/* Label */}
        <span className="section-label mb-4">
          <span className="relative ml-2 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
          </span>

          الأحدث
        </span>

        {/* Title */}
        <h2 className="section-title text-white">
          أحدث المقالات
        </h2>

        {/* Subtitle */}
        <p className="section-subtitle max-w-lg">
          محتوى جديد طازج من المطبعة
        </p>
      </div>

      {/* All Posts */}
      <Link
        to="/blog"
        className="group inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-400"
      >
        عرض جميع المقالات

        <i className="fa-solid fa-arrow-left text-base transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>

    {/* Posts */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {latestPosts.map((post, index) => (
        <PostCard
          key={post.id}
          post={post}
          index={index}
        />
      ))}
    </div>
  </div>
</section>



      {/* Newsletter */}
  
<section className="relative overflow-hidden bg-[#0a0a0a] py-24">
  {/* Background Glow */}
  <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div className="rounded-3xl border border-[#262626] bg-[#161616] p-8 text-center md:p-12 lg:p-16">
      
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-2xl text-white">
        <i className="fa-solid fa-envelope" />
      </div>

      {/* Title */}
      <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
        اشترك في{" "}
        <span className="gradient-text">
          نشرتنا الإخبارية
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mb-8 max-w-xl text-lg text-neutral-400">
        احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
      </p>

      
        <form
          
          className="mx-auto mb-6 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            
            placeholder="أدخل بريدك الإلكتروني"
            className="
              flex-1 rounded-xl
              border border-[#262626]
              bg-[#0a0a0a]
              px-5 py-4
              text-white
              placeholder-neutral-500
              transition-colors
              focus:border-orange-500/50
              focus:outline-none
            "
          />

          <button
            type="submit"
            className="
              rounded-xl
              bg-gradient-to-r from-orange-500 to-orange-600
              px-8 py-4
              font-semibold text-white
              transition-all duration-300
              hover:from-orange-600
              hover:to-orange-700
            "
          >
            اشترك الآن
          </button>
        </form>
     

      {/* Trust / Subscribers */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
        {/* Avatars + Subscribers */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2 space-x-reverse">
            <img
              src={writer1}
              alt=""
              className="h-8 w-8 rounded-full border-2 border-[#161616]"
            />

            <img
              src={writer2}
              alt=""
              className="h-8 w-8 rounded-full border-2 border-[#161616]"
            />

            <img
              src={writer3}
              alt=""
              className="h-8 w-8 rounded-full border-2 border-[#161616]"
            />
          </div>

          <span>
            انضم لـ{" "}
            <span className="font-medium text-white">
              +10,000
            </span>{" "}
            مصور
          </span>
        </div>

        {/* Separator */}
        <span className="hidden text-[#262626] sm:inline">
          •
        </span>

        <span>بدون إزعاج</span>

        {/* Separator */}
        <span className="hidden text-[#262626] sm:inline">
          •
        </span>

        <span>إلغاء الاشتراك في أي وقت</span>
      </div>
    </div>
  </div>
</section>

      
    </div>
  );
}