import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Electric Luxury: 2024\'s Most Anticipated EVs',
    category: 'Industry News',
    date: 'December 15, 2024',
    excerpt: 'Discover the groundbreaking electric vehicles set to redefine luxury mobility in the coming year.',
    image: '/images/blog-1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Maintaining Your Investment: Essential Care Tips for Luxury Vehicles',
    category: 'Maintenance',
    date: 'December 10, 2024',
    excerpt: 'Expert advice on keeping your premium vehicle in pristine condition for years to come.',
    image: '/images/blog-2.jpg',
  },
  {
    id: 3,
    title: 'Behind the Wheel: First Drive of the New Mercedes-AMG GT',
    category: 'Reviews',
    date: 'December 5, 2024',
    excerpt: 'Our comprehensive review of Mercedes-AMG\'s latest sports car masterpiece.',
    image: '/images/blog-3.jpg',
  },
];

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="section-subtitle">Latest Articles</span>
            <h2 
              className="section-title"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              News & Insights
            </h2>
          </div>
          <p className="section-description max-w-md mt-4 md:mt-0">
            Stay informed with the latest trends, reviews, and stories from the luxury automotive world.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <div 
              className={`group relative bg-white/5 border border-white/10 overflow-hidden transition-all duration-700 hover:border-[#FFD700]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-[#FFD700] text-black text-xs uppercase tracking-wider font-medium">
                  <Tag className="w-3 h-3" />
                  {featuredPost.category}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <h3 
                    className="text-white text-2xl font-medium mb-3 group-hover:text-[#FFD700] transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#FFD700] text-sm uppercase tracking-wider font-medium hover:gap-4 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="flex flex-col gap-8">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group flex flex-col sm:flex-row gap-6 bg-white/5 border border-white/10 p-4 overflow-hidden transition-all duration-700 hover:border-[#FFD700]/30 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative w-full sm:w-48 h-48 sm:h-36 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 px-3 py-1 bg-[#FFD700] text-black text-xs uppercase tracking-wider font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 
                    className="text-white text-lg font-medium mb-2 group-hover:text-[#FFD700] transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#FFD700] text-sm uppercase tracking-wider font-medium hover:gap-4 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <a href="#" className="btn-secondary">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
