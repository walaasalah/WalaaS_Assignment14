import React, { useState } from "react";
import { Link, useSearchParams } from "react-router";
import siteData from "../../data/posts.json";
import Card from "../../Components/Card/Card.jsx";
import ListCard from "../../Components/ListCard/ListCard.jsx";
import { useEffect } from "react";

export default function Blog() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const posts = siteData.posts || [];

  const categories = ["الكل", ...new Set(posts.map((post) => post.category))];

  const handleCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
      setCurrentPage(1);
    } else {
      setActiveCategory("الكل");
    }
  }, [category]);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "الكل" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const postsPerPage = 6;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className="flex-grow pt-20" dir="rtl">
      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Hero */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium">
              <i className="fa-solid fa-newspaper" />
              مدونتنا
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                مقالاتنا
              </span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="ابحث في المقالات..."
                  className="w-full px-5 py-3 pr-12 bg-[#161616] border border-[#262626] rounded-xl text-white placeholder-neutral-500 outline-none focus:border-orange-500/50 transition-colors"
                />

                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 hover:text-white"
                    }`}
                  >
                    {category === "الكل" ? "جميع المقالات" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Top */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
            </p>

            {/* View Mode */}
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                title="عرض شبكي"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-grip" />
              </button>

              <button
                onClick={() => setViewMode("list")}
                title="عرض قائمة"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>

          {/* Cards */}
          {currentPosts.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "grid grid-cols-1 gap-6"
              }
            >
              {currentPosts.map((post, index) =>
                viewMode === "grid" ? (
                  <Card key={post.id} post={post} index={index} />
                ) : (
                  <ListCard key={post.id} post={post} index={index} />
                ),
              )}
            </div>
          ) : (
            <div className="text-center py-20">
              {" "}
              <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
                {" "}
                <i className="fa-solid fa-face-frown text-5xl text-neutral-500"></i>
              </div>{" "}
              <h3 className="text-2xl font-bold text-white mb-3">
                {" "}
                لا توجد مقالات{" "}
              </h3>{" "}
              <p className="text-neutral-400 mb-6">
                {" "}
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.{" "}
              </p>{" "}
              <button
                className="btn-primary inline-flex items-center gap-2"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("الكل");
                }}
              >
                {" "}
                <i className="fa-solid fa-rotate-right text-xl"></i>
                إعادة تعيين الفلاتر{" "}
              </button>{" "}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <>
              <div className="flex justify-center items-center gap-2 mt-12">
                {/* Previous */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => page - 1)}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                      : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                  }`}
                >
                  <i className="fa-solid fa-arrow-right" />
                </button>

                {/* Pages */}
                <div className="flex items-center gap-1">
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                          : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((page) => page + 1)}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    currentPage === totalPages
                      ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                      : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                  }`}
                >
                  <i className="fa-solid fa-arrow-left" />
                </button>
              </div>

              <p className="text-center text-neutral-500 mt-4 text-sm">
                صفحة {currentPage} من {totalPages}
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
