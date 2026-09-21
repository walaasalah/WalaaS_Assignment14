import { Link } from "react-router";

const CATEGORY_ICONS = { 'تقنيات': 'fa-solid fa-sliders', 'مناظر طبيعية': 'fa-solid fa-mountain-sun', 'بورتريه': 'fa-solid fa-user', 'إضاءة': 'fa-solid fa-sun', 'معدات': 'fa-solid fa-sun', }



function CategoryCard({ category,index=0 }) {
const icon = CATEGORY_ICONS[category.name] || 'fa-solid fa-camera'

  return (
    <Link
      to={`/blog?category=${encodeURIComponent(category.name)}`}
      className=" group relative block overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30 "
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {" "}
      {/* Gradient عند Hover */}{" "}
      <div className=" absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />{" "}
      {/* Content */}{" "}
      <div className="relative z-10">
        {" "}
        {/* Icon */}{" "}
        <div className=" mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-white/20 ">
          {" "}
          <i
            className={` ${icon} text-xl text-orange-500 transition-colors duration-300 group-hover:text-white `}
          />{" "}
        </div>{" "}
        {/* Category Name */}{" "}
        <h3 className=" mb-1 text-lg font-bold text-white transition-colors duration-300 group-hover:text-white ">
          {" "}
          {category.name}{" "}
        </h3>{" "}
        {/* Count */}{" "}
        <p className=" text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white/80 ">
          {" "}
          {category.count} مقالة{" "}
        </p>{" "}
        {/* Arrow */}{" "}
        <div className=" absolute left-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#262626] opacity-0 transition-all duration-300 group-hover:bg-white/20 group-hover:opacity-100 ">
          {" "}
          <i className="fa-solid fa-chevron-left text-white"></i>
          {" "}
        </div>{" "}
      </div>{" "}
    </Link>
  );
}

export default CategoryCard;
