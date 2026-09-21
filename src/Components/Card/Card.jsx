
import React from "react";
import { Link } from "react-router";

export default function Card({ post, index = 0 }) {
  return (
    <article
      className="group card overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Category */}
          <div className="absolute right-4 top-4">
            <span className="rounded-full border border-[#333333] bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Read time + Date */}
          <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500">
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-clock h-4 w-4" />
              {post.readTime}
            </span>

            <span className="h-1 w-1 rounded-full bg-neutral-600" />

            <span>{post.date}</span>
          </div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-orange-500">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[#262626] pt-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-[#262626]"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>

                <p className="text-xs text-neutral-500">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-orange-500">
              <i className="fa-solid fa-chevron-right h-4 w-4 rotate-180 text-orange-500 transition-colors duration-300 group-hover:text-white"></i>
         
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

