import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetNewsByIdQuery, useUpdateNewsMutation } from '@/services/newsApi';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { ErrorState } from '@/components/common/ErrorState';
import SimpleNewsEditor from '@/components/common/SimpleNewsEditor';

interface NewsFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  status: 'draft' | 'published';
  tags: string[];
  seoTitle: string;
  seoDescription: string;
}

const EditNewsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const {
    data: newsData,
    isLoading: isLoadingNews,
    error: newsError,
    refetch,
  } = useGetNewsByIdQuery(id || '');
  
  const [updateNews, { isLoading: isUpdating }] = useUpdateNewsMutation();

  const [formData, setFormData] = useState<NewsFormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    author: '',
    status: 'draft',
    tags: [],
    seoTitle: '',
    seoDescription: '',
  });

  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>('');

  // Load news data into form when available
  useEffect(() => {
    if (newsData?.data) {
      const news = newsData.data;
      setFormData({
        title: news.title || '',
        slug: news.slug || '',
        excerpt: news.excerpt || '',
        content: news.content || '',
        featuredImage: news.featuredImage || '',
        author: news.author || '',
        status: news.status || 'draft',
        tags: news.tags || [],
        seoTitle: news.seoTitle || '',
        seoDescription: news.seoDescription || '',
      });
    }
  }, [newsData]);

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
      .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
      .replace(/[ìíịỉĩ]/g, 'i')
      .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
      .replace(/[ùúụủũưừứựửữ]/g, 'u')
      .replace(/[ỳýỵỷỹ]/g, 'y')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle tag input
  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const tag = tagInput.trim();
      if (tag && !formData.tags.includes(tag)) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tag],
        }));
      }
      setTagInput('');
    }
  };

  // Remove tag
  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Tiêu đề là bắt buộc';
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug là bắt buộc';
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Mô tả ngắn là bắt buộc';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Nội dung là bắt buộc';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Tác giả là bắt buộc';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Get error message from API response
  const getErrorMessage = (error: any): string => {
    // If error has response data with message
    if (error?.data?.message) {
      return error.data.message;
    }
    
    // If error has response data with error field
    if (error?.data?.error) {
      return error.data.error;
    }
    
    // If it's a validation error with details
    if (error?.data?.errors) {
      const errorMessages = Object.values(error.data.errors).flat();
      return errorMessages.join(', ');
    }
    
    // If it's a network error
    if (error?.status === 'FETCH_ERROR' || error?.name === 'NetworkError') {
      return 'Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.';
    }
    
    // If it's a timeout error
    if (error?.status === 'TIMEOUT_ERROR') {
      return 'Yêu cầu bị timeout. Vui lòng thử lại.';
    }
    
    // HTTP status based errors
    switch (error?.status) {
      case 400:
        return 'Dữ liệu không hợp lệ. Vui lòng kiểm tra lại thông tin.';
      case 401:
        return 'Bạn không có quyền thực hiện thao tác này. Vui lòng đăng nhập lại.';
      case 403:
        return 'Bạn không có quyền truy cập chức năng này.';
      case 404:
        return 'Không tìm thấy tin tức cần cập nhật.';
      case 409:
        return 'Dữ liệu đã tồn tại. Tiêu đề hoặc slug có thể đã được sử dụng.';
      case 422:
        return 'Dữ liệu không hợp lệ. Vui lòng kiểm tra lại các trường thông tin.';
      case 500:
        return 'Lỗi server nội bộ. Vui lòng thử lại sau.';
      default:
        return error?.message || 'Có lỗi xảy ra khi cập nhật tin tức. Vui lòng thử lại.';
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(''); // Clear previous error

    if (!validateForm() || !id) {
      return;
    }

    try {
      await updateNews({ id, ...formData }).unwrap();
      navigate('/admin/news');
    } catch (error) {
      console.error('Failed to update news:', error);
      const errorMessage = getErrorMessage(error);
      setSubmitError(errorMessage);
    }
  };

  if (isLoadingNews) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (newsError || !newsData?.data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorState
          error={newsError}
          onRetry={refetch}
          retryText="Thử lại"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">
          Chỉnh sửa tin tức
        </h1>
        <button
          onClick={() => navigate('/admin/news')}
          className="px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 border border-neutral-300 dark:border-neutral-600 rounded-lg transition-colors"
        >
          Quay lại
        </button>
      </div>

      {/* Error Alert */}
      {submitError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                Lỗi khi cập nhật tin tức
              </h3>
              <div className="mt-1 text-sm text-red-700 dark:text-red-300">
                {submitError}
              </div>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={() => setSubmitError('')}
                  className="inline-flex bg-red-50 dark:bg-red-900/20 rounded-md p-1.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-red-900"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Thông tin cơ bản
              </h2>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Tiêu đề *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100 ${
                    errors.title
                      ? 'border-red-300 dark:border-red-600'
                      : 'border-neutral-300 dark:border-neutral-600'
                  }`}
                  placeholder="Nhập tiêu đề tin tức"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>

              {/* Slug */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100 ${
                    errors.slug
                      ? 'border-red-300 dark:border-red-600'
                      : 'border-neutral-300 dark:border-neutral-600'
                  }`}
                  placeholder="duong-dan-url"
                />
                {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug}</p>}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, slug: generateSlug(formData.title) }))}
                  className="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
                >
                  Tạo slug từ tiêu đề
                </button>
              </div>

              {/* Excerpt */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Mô tả ngắn *
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100 ${
                    errors.excerpt
                      ? 'border-red-300 dark:border-red-600'
                      : 'border-neutral-300 dark:border-neutral-600'
                  }`}
                  placeholder="Mô tả ngắn về tin tức"
                />
                {errors.excerpt && <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>}
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Nội dung *
                </label>
                <div className={`border rounded-md ${
                    errors.content
                      ? 'border-red-300 dark:border-red-600'
                      : 'border-neutral-300 dark:border-neutral-600'
                  }`}>
                  <SimpleNewsEditor
                    value={formData.content}
                    onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
                    placeholder="Nhập nội dung tin tức..."
                    height={400}
                  />
                </div>
                {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Cài đặt xuất bản
              </h3>

              {/* Status */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Trạng thái
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100"
                >
                  <option value="draft">Bản nháp</option>
                  <option value="published">Xuất bản</option>
                </select>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Tác giả *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100 ${
                    errors.author
                      ? 'border-red-300 dark:border-red-600'
                      : 'border-neutral-300 dark:border-neutral-600'
                  }`}
                  placeholder="Tên tác giả"
                />
                {errors.author && <p className="mt-1 text-sm text-red-600">{errors.author}</p>}
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Hình ảnh đại diện
              </h3>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100"
                placeholder="URL hình ảnh"
              />
              {formData.featuredImage && (
                <div className="mt-3">
                  <img
                    src={formData.featuredImage}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Tags
              </h3>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagKeyPress}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100"
                placeholder="Nhập tag và nhấn Enter"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 text-xs font-medium rounded-full"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* SEO */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                SEO
              </h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100"
                  placeholder="Tiêu đề SEO"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  SEO Description
                </label>
                <textarea
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-neutral-100"
                  placeholder="Mô tả SEO"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin/news')}
            className="px-6 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
          >
            Hủy
          </button>
          <button
            type="submit"
            disabled={isUpdating}
            className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUpdating ? 'Đang cập nhật...' : 'Cập nhật tin tức'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNewsPage;