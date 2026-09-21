import React from 'react'
import { Link } from 'react-router'

export default function ListCard({ post,index=0 }) {
      function formatArabicDate(date) {
    return new Date(date).toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <>
        <article
                key={post.id}
                className="group relative overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="grid gap-0 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden md:h-[400px]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                      <div className="absolute right-4 top-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-3 py-1.5 text-xs font-semibold text-white">
                          <i className="fa-solid fa-star"></i>
                          مميز
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center bg-[#161616] p-8 md:p-10">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                          {post.category}
                        </span>

                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-clock"></i>
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mb-4 text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-orange-500 md:text-3xl">
                        {post.title}
                      </h2>

                      <p className="mb-6 line-clamp-3 leading-relaxed text-neutral-400">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="h-12 w-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            />

                            <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full border-2 border-[#161616] bg-orange-500"></div>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-white">
                              {post.author.name}
                            </p>

                            <p className="text-xs text-neutral-500">
                              {formatArabicDate(post.date)}
                            </p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-3">
                          اقرأ المقال
                          <i className="fa-solid fa-arrow-left"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
    </>
  )
}
