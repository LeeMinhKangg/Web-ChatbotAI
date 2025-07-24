import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  publishedAt: string;
  author: string;
}

interface NewsSectionProps {
  news: NewsItem[];
  isLoading?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ news, isLoading }) => {
  const { t, i18n } = useTranslation();
  
  // Debug log
  console.log('NewsSection received:', { news, isLoading, newsType: typeof news, isArray: Array.isArray(news) });

  if (isLoading) {
    return (
      <div className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Tin tức mới
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-neutral-200 dark:bg-neutral-700 rounded-lg aspect-video mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Safety check for news data
  if (!isLoading && (!news || !Array.isArray(news) || news.length === 0)) {
    return (
      <div className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Tin tức mới
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          <div className="text-center py-12">
            <p className="text-neutral-500 dark:text-neutral-400">
              {t('news.emptyMessage')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const formatPublishedDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return i18n.language === 'vi' ? 'vừa xong' : 'just now';
    if (diffInMinutes < 60) return i18n.language === 'vi' ? `${diffInMinutes} phút trước` : `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return i18n.language === 'vi' ? `${diffInHours} giờ trước` : `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return i18n.language === 'vi' ? `${diffInDays} ngày trước` : `${diffInDays}d ago`;
    
    return date.toLocaleDateString(i18n.language === 'vi' ? 'vi-VN' : 'en-US');
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  return (
    <div className="py-16 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            {t('news.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {news && Array.isArray(news) && news.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.slug}`}
              className="group bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Featured Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.featuredImage || 'https://images.unsplash.com/photo-1544464130-6d3b0ac65ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>

                {/* Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                    {formatDateTime(item.publishedAt)}
                  </span>
                </div>

                {/* Excerpt */}
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          )) || (
            <div className="col-span-full text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400">
                {t('news.emptyMessage')}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default NewsSection;