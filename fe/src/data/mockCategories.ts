import { Category } from '@/types/category.types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Vợt Cầu Lông',
    slug: 'vot-cau-long',
    description: 'Vợt cầu lông chuyên nghiệp, vợt tập luyện và vợt thi đấu',
    image:
      'https://images.unsplash.com/photo-1599391766805-d8233319b8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
    parentId: null,
    level: 0,
    isActive: true,
    productCount: 25,
  },
  {
    id: '2',
    name: 'Cầu Lông',
    slug: 'cau-long',
    description: 'Cầu lông tập luyện, thi đấu chất lượng cao',
    image:
      'https://images.unsplash.com/photo-1606778534044-2fa93dea4e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
    parentId: null,
    level: 0,
    isActive: true,
    productCount: 12,
  },
  {
    id: '3',
    name: 'Dây Căng Vợt',
    slug: 'day-cang-vot',
    description: 'Dây căng vợt chuyên dụng, dây thi đấu và dây tập luyện',
    image:
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    parentId: null,
    level: 0,
    isActive: true,
    productCount: 18,
  },
  {
    id: '4',
    name: 'Phụ Kiện',
    slug: 'phu-kien',
    description: 'Túi vợt, giày cầu lông, băng quấn cán vợt và phụ kiện khác',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
    parentId: null,
    level: 0,
    isActive: true,
    productCount: 30,
  },
  {
    id: '5',
    name: 'Giày Cầu Lông',
    slug: 'giay-cau-long',
    description: 'Giày cầu lông chuyên dụng, giày thi đấu và giày tập luyện',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    parentId: null,
    level: 0,
    isActive: true,
    productCount: 15,
  },
  {
    id: '6',
    name: 'Quần Áo',
    slug: 'quan-ao',
    description: 'Quần áo thể thao cầu lông, áo đấu và trang phục tập luyện',
    image:
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    parentId: null,
    level: 0,
    isActive: true,
    productCount: 22,
  },
  {
    id: '7',
    name: 'Túi Vợt',
    slug: 'tui-vot',
    description: 'Túi đựng vợt cầu lông, balo thể thao và túi thi đấu',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    parentId: null,
    level: 0,
    isActive: true,
    productCount: 10,
  },
];

export const getCategories = (): Category[] => {
  return mockCategories;
};

export const getCategoryById = (id: string): Category | undefined => {
  return mockCategories.find((category) => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return mockCategories.find((category) => category.slug === slug);
};
