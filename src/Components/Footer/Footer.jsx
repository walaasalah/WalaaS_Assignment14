import React, { useState } from "react";
import { Link } from "react-router";
import siteData from "../../data/posts.json";

export default function Footer() {


  return (
    <footer className="relative overflow-hidden border-t border-[#262626] bg-[#0a0a0a] text-neutral-300 "  dir="rtl">
      {/* Background Effects */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <Link to="/" className="group mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 transition-all duration-300 group-hover:scale-105">
                <span className="text-xl font-bold text-white">ع</span>
              </div>

              <span className="text-xl font-bold text-white">
                عدسة
              </span>
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-neutral-500">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
              المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            {/* Social Media */}
            <div className="flex gap-2">
              <a
                href={siteData.siteInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-orange-600 hover:text-white"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href={siteData.siteInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-orange-600 hover:text-white"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href={siteData.siteInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-orange-600 hover:text-white"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href={siteData.siteInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-orange-600 hover:text-white"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
              <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></span>
              استكشف
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  المدونة
                </Link>
              </li>

              <li>
                <Link
                  to="/About"
                  className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
              <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></span>
              التصنيفات
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/blog?category=إضاءة"
                  className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  إضاءة
                </Link>
              </li>

              <li>
                <Link
                  to="/blog?category=بورتريه"
                  className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  بورتريه
                </Link>
              </li>

              <li>
                <Link
                  to="/blog?category=مناظر طبيعية"
                  className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  مناظر طبيعية
                </Link>
              </li>

              <li>
                <Link
                  to="/blog?category=تقنيات"
                  className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
              <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></span>
              ابقى على اطلاع
            </h3>

            <p className="mb-4 text-sm text-neutral-500">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

          
              <form  className="space-y-3">
                <input
                  type="email"
                 
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full rounded-xl border border-[#262626] bg-[#161616] px-4 py-3 text-sm text-white placeholder-neutral-600 transition-all duration-300 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
                >
                  اشترك
                </button>
              </form>
            
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#262626]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-600">
            © 2026 عدسة. صنع بكل{" "}
            <i className="fa-solid fa-heart text-orange-500"></i>{" "}
            جميع الحقوق محفوظة.
          </p>

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-sm text-neutral-600 transition-colors hover:text-orange-500"
            >
              سياسة الخصوصية
            </Link>

            <Link
              to="/"
              className="text-sm text-neutral-600 transition-colors hover:text-orange-500"
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}