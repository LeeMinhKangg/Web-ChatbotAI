import { PremiumButton } from '@/components/common';
import ProductCard from '@/components/features/ProductCard';
import { HeroSection, NewsSection } from '@/components/sections';
import {
  SectionLoading,
  ProductCardSkeleton,
  CategoryCardSkeleton,
} from '@/components/common/LoadingState';
import { ErrorState, EmptyState } from '@/components/common/ErrorState';
import { ProductGrid, CategoryGrid } from '@/components/layout/Grid';
import { PageLayout, PageSection } from '@/components/layout/PageLayout';
import { useGetCategoriesQuery } from '@/services/categoryApi';
import { useGetFeaturedProductsQuery } from '@/services/productApi';
import { useGetLatestNewsQuery } from '@/services/newsApi';
import { useApiState } from '@/hooks/useApiState';
import {
  getCategoryImage,
  createCategoryImageErrorHandler,
} from '@/utils/imageUtils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * HomePage component - Main landing page with hero, featured products, and categories
 */
const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // API queries with enhanced state management
  const featuredProductsQuery = useGetFeaturedProductsQuery({ limit: 4 });
  const categoriesQuery = useGetCategoriesQuery();
  const latestNewsQuery = useGetLatestNewsQuery({ limit: 4 });

  const featuredProducts = useApiState({
    data: featuredProductsQuery.data,
    isLoading: featuredProductsQuery.isLoading,
    error: featuredProductsQuery.error,
    refetch: featuredProductsQuery.refetch,
    isArray: true,
  });

  const categories = useApiState({
    data: categoriesQuery.data,
    isLoading: categoriesQuery.isLoading,
    error: categoriesQuery.error,
    refetch: categoriesQuery.refetch,
    isArray: true,
  });

  // Transform categories for display
  const displayCategories =
    categories.data?.slice(0, 6).map((category) => ({
      id: category.id,
      name: category.name,
      image: category.image || getCategoryImage(category.name, category.slug),
      count: category.productCount || 0,
      slug: category.slug,
    })) || [];

  return (
    <PageLayout
      title="Trang chủ"
      description="Khám phá các sản phẩm chất lượng với giá cả tốt nhất"
      keywords="mua sắm, sản phẩm chất lượng, giá tốt"
      showContainer={false}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <PageSection
        title={t('homepage.featuredProducts.title')}
        className="py-16 bg-neutral-50 dark:bg-neutral-900"
        headerActions={
          <Link
            to="/shop"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center"
          >
            {t('homepage.featuredProducts.viewAll')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        }
      >
        {featuredProducts.isLoading ? (
          <ProductGrid>
            {Array.from({ length: 4 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </ProductGrid>
        ) : featuredProducts.isError ? (
          <ErrorState
            error={featuredProducts.error}
            onRetry={featuredProducts.retry}
            retryText="Thử lại"
          />
        ) : featuredProducts.isEmpty ? (
          <EmptyState
            title="Không có sản phẩm nổi bật"
            description="Hiện tại chưa có sản phẩm nổi bật nào để hiển thị."
          />
        ) : (
          <ProductGrid>
            {featuredProducts.data?.data?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductGrid>
        )}
      </PageSection>

      {/* Categories */}
      <PageSection
        title={t('homepage.categories.title')}
        className="py-16 bg-white dark:bg-neutral-800"
      >
        {categories.isLoading ? (
          <CategoryGrid>
            {Array.from({ length: 6 }).map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))}
          </CategoryGrid>
        ) : categories.isError ? (
          <ErrorState
            error={categories.error}
            onRetry={categories.retry}
            retryText="Thử lại"
          />
        ) : categories.isEmpty ? (
          <EmptyState
            title="Không có danh mục"
            description="Hiện tại chưa có danh mục nào để hiển thị."
          />
        ) : (
          <CategoryGrid>
            {displayCategories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.slug}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-3 aspect-h-2 bg-neutral-100 dark:bg-neutral-700">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={createCategoryImageErrorHandler(category.name)}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                    {category.name}
                  </h3>
                  <p className="text-white text-sm drop-shadow-md">
                    {category.count} {t('homepage.categories.productsCount')}
                  </p>
                </div>
              </Link>
            ))}
          </CategoryGrid>
        )}
      </PageSection>

      {/* News Section */}
      <NewsSection 
        news={latestNewsQuery.data?.data || []} 
        isLoading={latestNewsQuery.isLoading}
      />

    </PageLayout>
  );
};

export default HomePage;
