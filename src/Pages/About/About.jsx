import React from 'react'
import siteData from "../../data/posts.json";

export default function About() {
  const posts = siteData.posts || [];

const writersCount = new Set(  posts.map((post) => post.author.name)).size;


  return (
    <>

<main className="flex-grow pt-20" dir="rtl">
<div className="bg-[#0a0a0a]">




<section className="relative overflow-hidden py-24">
  {/* Background */}
  <div className="absolute inset-0 bg-[#0a0a0a]" />

  {/* Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

  {/* Glow */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />

    <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
  </div>

  {/* Content */}
  <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
    
    {/* Label */}
    <span className="section-label mb-6 inline-flex items-center gap-2">
      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
      من نحن
    </span>

    {/* Title */}
    <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
      مهمتنا هي{" "}
      <span className="gradient-text">
        الإعلام والإلهام
      </span>
    </h1>

    {/* Description */}
    <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-neutral-400">
      مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
      ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
      المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
    </p>

    {/* Stats */}
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">

      {/* Stat 1 */}
      <div className="glass-card p-6">
        <i className="fa-solid fa-users mb-2 block text-2xl text-orange-500" />

        <div className="gradient-text mb-1 text-3xl font-bold">
          +2مليون
        </div>

        <div className="text-sm text-neutral-500">
          قارئ شهرياً
        </div>
      </div>

      {/* Stat 2 */}
      <div className="glass-card p-6">
        <i className="fa-solid fa-newspaper mb-2 block text-2xl text-orange-500" />

        <div className="gradient-text mb-1 text-3xl font-bold">
           +{posts.length}
        </div>

        <div className="text-sm text-neutral-500">
          مقالة منشورة
        </div>
      </div>

      {/* Stat 3 */}
      <div className="glass-card p-6">
        <i className="fa-solid fa-pen-nib mb-2 block text-2xl text-orange-500" />

        <div className="gradient-text mb-1 text-3xl font-bold">
          +{writersCount}
        </div>

        <div className="text-sm text-neutral-500">
          كاتب خبير
        </div>
      </div>

      {/* Stat 4 */}
      <div className="glass-card p-6">
        <i className="fa-solid fa-book-open mb-2 block text-2xl text-orange-500" />

        <div className="gradient-text mb-1 text-3xl font-bold">
           +{siteData.categories.length}
        </div>

        <div className="text-sm text-neutral-500">
          تصنيف
        </div>
      </div>

    </div>
  </div>
</section>


</div></main>
    </>
  )
}
