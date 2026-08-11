import type { BlogArticle } from '@/mocks/blogArticles'

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getBlogArticleSlug(article: Pick<BlogArticle, 'id' | 'title'>) {
  return `${slugify(article.title)}--${article.id}`
}

export function getBlogArticlePath(article: Pick<BlogArticle, 'id' | 'title'>) {
  return `/blog/${getBlogArticleSlug(article)}`
}

export function getBlogCategoryPath(category: string) {
  return `/blog?categoria=${encodeURIComponent(category)}`
}

export function getBlogArticleIdFromSlug(slug: string) {
  const separatorIndex = slug.lastIndexOf('--')

  if (separatorIndex === -1) {
    return slug
  }

  return slug.slice(separatorIndex + 2)
}
