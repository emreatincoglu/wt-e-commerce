import BlogCard from "./BlogCard";
function BlogSection() {
    const blogPosts = [
  {
    tag: 'Sale',
    category: 'English Department',
    rating: '4.9',
    title: 'Graphic Design',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=720&q=80',
  },
  {
    tag: 'Sale',
    category: 'English Department',
    rating: '4.9',
    title: 'Graphic Design',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=720&q=80',
  },
  {
    tag: 'Sale',
    category: 'English Department',
    rating: '4.9',
    title: 'Graphic Design',
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=720&q=80',
  },
];
  return (
    <section className="bg-white">
      <div className="mx-auto min-h-186 max-w-[1050px] px-5 py-14 sm:px-6 md:py-20 lg:px-0">
        <div className="mx-auto w-full max-w-[309px] text-center">
          <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#23a6f0]">
            Practice Advice
          </p>
          <h2 className="mt-2.5 text-[32px] font-bold leading-10 tracking-[0.2px] text-[#252b42] sm:text-[40px] sm:leading-[50px]">
            Featured Posts
          </h2>
        </div>
        <div className="mt-12 grid gap-[30px] md:mt-20 lg:grid-cols-2">
          {blogPosts.slice(0, 2).map((post, index) => (
            <BlogCard key={`${post.title}-${index}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default BlogSection;
