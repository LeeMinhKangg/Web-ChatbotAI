import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetAllNewsQuery } from '@/services/newsApi';
import { PageLayout } from '@/components/layout/PageLayout';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { ErrorState } from '@/components/common/ErrorState';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  publishedAt: string;
  author: string;
  viewCount: number;
}

const NewsListPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 9;

  const {
    data: newsData,
    isLoading,
    error,
    refetch,
  } = useGetAllNewsQuery({
    page: currentPage,
    limit: itemsPerPage,
    search: searchTerm,
    status: 'published', // Only show published news for public
  });

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

  if (isLoading) {
    return (
      <PageLayout title="Đang tải...">
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner size="lg" />
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Tin tức">
        <div className="container mx-auto px-4 py-8">
          <ErrorState
            error={error}
            onRetry={refetch}
            retryText="Thử lại"
          />
        </div>
      </PageLayout>
    );
  }

  const news = newsData?.data?.news || [];
  const totalPages = Math.ceil((newsData?.data?.total || 0) / itemsPerPage);

  return (
    <PageLayout
      title={t('news.pageTitle')}
      description={t('news.pageDescription')}
      keywords="tin tức, cầu lông, thể thao, giải đấu"
    >
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                to="/"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {t('header.navigation.home')}
              </Link>
              <span className="text-neutral-400 dark:text-neutral-500">/</span>
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                {t('news.pageTitle')}
              </span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {t('news.pageTitle')}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('news.pageDescription')}
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('news.searchPlaceholder')}
                className="w-full px-4 py-3 pl-12 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-neutral-100"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* News Grid */}
          {news.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {news.map((item: NewsItem) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.slug}`}
                    className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 leading-relaxed mb-4">
                        {item.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                        <span>{item.author}</span>
                        <span>{formatPublishedDate(item.publishedAt)}</span>
                      </div>

                      {/* View count */}
                      <div className="mt-2 flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {item.viewCount} {t('news.viewCount')}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Trước
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg ${
                          page === currentPage
                            ? 'bg-primary-500 text-white'
                            : 'text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Sau
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {t('news.emptyMessage')}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {searchTerm ? t('news.noSearchResults') : t('news.emptyMessage')}
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default NewsListPage;