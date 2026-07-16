import {
  AlarmClock,
  AreaChart,
  BookOpen,
  ChevronRight,
  Download,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from 'lucide-react';

function BlogCard({ post }) {

    


  const actionIcons = [
    { label: 'Add to wishlist', icon: <Heart aria-hidden="true" size={20} strokeWidth={2} /> },
    { label: 'Add to cart', icon: <ShoppingCart aria-hidden="true" size={20} strokeWidth={2} /> },
    { label: 'View product', icon: <Eye aria-hidden="true" size={20} strokeWidth={2} /> },
  ];

  return (
    <article className="grid min-h-[404px] min-w-0 overflow-hidden bg-white shadow-[0_13px_19px_rgba(0,0,0,0.07)] sm:grid-cols-[minmax(180px,0.8fr)_minmax(0,1.2fr)]">
      <div className="relative min-h-[300px] md:min-h-[404px]">
        <img alt="" className="h-full w-full object-cover" src={post.image} />
        <span className="absolute left-5 top-5 rounded-[3px] bg-[#e74040] px-2.5 py-0.5 text-sm font-bold leading-6 tracking-[0.2px] text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          {post.tag}
        </span>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5">
          {actionIcons.map((item) => (
            <button
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#252b42]"
              key={item.label}
              type="button"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-[25px] py-[25px]">
        <div className="flex items-center justify-between">
          <a
            className="text-sm font-bold leading-6 tracking-[0.2px] text-[#23a6f0]"
            href="/"
          >
            {post.category}
          </a>
          <div className="flex h-[26px] items-center gap-[5px] rounded-[20px] bg-[#252b42] px-[5px] text-xs font-normal leading-4 tracking-[0.2px] text-white">
            <Star aria-hidden="true" className="fill-[#ffce31] text-[#ffce31]" size={16} />
            {post.rating}
          </div>
        </div>
        <h3 className="mt-2.5 text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
          {post.title}
        </h3>
        <p className="mt-2.5 max-w-[242px] text-sm leading-5 tracking-[0.2px] text-[#737373]">
          We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
        </p>
        <div className="mt-2.5 flex items-center gap-2.5 py-2.5 text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          <Download aria-hidden="true" size={16} strokeWidth={1.8} />
          <span>15 Sales</span>
        </div>
        <div className="flex items-center gap-[5px] py-[5px] text-base font-bold leading-6 tracking-[0.1px]">
          <span className="text-[#bdbdbd]">$16.48</span>
          <span className="text-[#23856d]">$6.48</span>
        </div>
        <div className="mt-[5px] flex gap-[6px]">
          {['#23a6f0', '#23856d', '#e77c40', '#252b42'].map((color) => (
            <span
              className="h-4 w-4 rounded-full"
              key={color}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="mt-2.5 flex items-center justify-between py-[15px] text-xs leading-4 tracking-[0.2px] text-[#737373]">
          <span className="flex items-center gap-[5px]">
            <AlarmClock aria-hidden="true" className="text-[#23a6f0]" size={16} />
            22h...
          </span>
          <span className="flex items-center gap-[5px]">
            <BookOpen aria-hidden="true" className="text-[#e77c40]" size={16} />
            64 Lessons
          </span>
          <span className="flex items-center gap-[5px]">
            <AreaChart aria-hidden="true" className="text-[#23856d]" size={16} />
            Progress
          </span>
        </div>
        <div className="mt-[5px]">
          <a
            className="inline-flex h-11 items-center gap-2.5 rounded-[37px] border border-[#23a6f0] px-5 text-sm font-bold leading-6 tracking-[0.2px] text-[#23a6f0]"
            href="/"
          >
            Learn More
            <ChevronRight aria-hidden="true" size={18} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </article>
  );
}
export default BlogCard;
