import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetNewsBySlugQuery } from '@/services/newsApi';
import { PageLayout } from '@/components/layout/PageLayout';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { ErrorState } from '@/components/common/ErrorState';

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();

  const {
    data: newsData,
    isLoading,
    error,
    refetch,
  } = useGetNewsBySlugQuery(slug || '');

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
    
    return `${day}/${month}/${year} lúc ${hours}:${minutes}`;
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

  if (error || !newsData?.data) {
    return (
      <PageLayout title="Lỗi">
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

  const news = newsData.data;

  return (
    <PageLayout
      title={news.seoTitle || news.title}
      description={news.seoDescription || news.excerpt}
      keywords={news.tags?.join(', ')}
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
              <Link
                to="/news"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {t('news.pageTitle')}
              </Link>
              <span className="text-neutral-400 dark:text-neutral-500">/</span>
              <span className="text-neutral-900 dark:text-neutral-100 font-medium truncate">
                {news.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm overflow-hidden">
            {/* Featured Image */}
            {news.featuredImage && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.featuredImage}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight mb-4">
                  {news.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{t('news.author')}: {news.author}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{formatDateTime(news.publishedAt)}</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
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
                    <span>{news.viewCount} {t('news.viewCount')}</span>
                  </div>
                </div>

                {/* Tags */}
                {news.tags && news.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {news.tags.map((tag: string, index: number) => (
                      <span
                        key={`tag-${index}-${tag}`}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100 prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H17a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L5.293 6.293a1 1 0 011.414 1.414L3.414 11H17a1 1 0 110 2H3.414l3.707 3.707z"
                  clipRule="evenodd"
                />
              </svg>
              {t('news.backToHome')}
            </Link>
          </div>
        </article>
      </div>
    </PageLayout>
  );
};

export default NewsDetailPage;