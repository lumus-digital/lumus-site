import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Text from '@/components/Text'
import { blogArticles } from '@/mocks/blogArticles'
import type { BlogArticle } from '@/mocks/blogArticles'
import Breadcrumb from '@/components/Breadcrumb'

interface BlogPageProps {
  readonly searchParams: Promise<{ categoria?: string | string[] }>
}

interface BlogPageViewProps {
  readonly articles: BlogArticle[]
  readonly category?: string
}

function getUniqueCategories(articles: BlogArticle[]) {
  return Array.from(new Set(articles.map((article) => article.category))).sort(
    (a, b) => a.localeCompare(b, 'pt-BR'),
  )
}

function normalizeCategory(category?: string | string[]) {
  if (Array.isArray(category)) return category[0]
  return category
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(date))
}

export async function generateMetadata({
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  const category = normalizeCategory(resolvedSearchParams.categoria)

  if (category) {
    return {
      title: `Blog | Categoria: ${category}`,
      description: `Artigos do blog da Lumus Digital filtrados pela categoria ${category}.`,
      alternates: {
        canonical: '/blog',
      },
      robots: {
        index: false,
        follow: true,
      },
      openGraph: {
        title: `Blog | Categoria: ${category}`,
        description: `Artigos do blog da Lumus Digital filtrados pela categoria ${category}.`,
        url: '/blog',
        type: 'website',
      },
    }
  }

  return {
    title: 'Blog',
    description:
      'Artigos sobre desenvolvimento, acessibilidade, liderança e desenvolvimento pessoal da Lumus Digital.',
    alternates: {
      canonical: '/blog',
    },
    openGraph: {
      title: 'Blog',
      description:
        'Artigos sobre desenvolvimento, acessibilidade, liderança e desenvolvimento pessoal da Lumus Digital.',
      url: '/blog',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog',
      description:
        'Artigos sobre desenvolvimento, acessibilidade, liderança e desenvolvimento pessoal da Lumus Digital.',
    },
  }
}

export function BlogPageView({ articles, category }: BlogPageViewProps) {
  const categoriasUnicas = getUniqueCategories(articles)
  const filteredArticles = category
    ? articles.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase(),
      )
    : articles

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-8 mt-12 mb-24 gap-8">
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        className="mb-4"
      />
      <Text
        as="h1"
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        data-testid="blog-title"
      >
        Blog
      </Text>

      <nav
        className="mb-6 flex flex-wrap items-center gap-2"
        aria-label="Filtrar artigos por categoria"
      >
        <span className="text-zinc-300 text-sm mr-2 self-center">
          Filtrar por Categorias:
        </span>
        <Link
          href="/blog"
          className={`z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors shadow-sm border focus:outline-none focus:ring-2 focus:ring-primary-500 ${!category ? 'bg-purple-600/80 text-white border-purple-600' : 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-purple-700 hover:text-white'}`}
          aria-current={!category ? 'page' : undefined}
          aria-label="Exibir todas as categorias"
        >
          Todas
        </Link>
        {categoriasUnicas.map((cat) => (
          <Link
            key={cat}
            href={`/blog?categoria=${encodeURIComponent(cat)}`}
            className={`z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors shadow-sm border focus:outline-none focus:ring-2 focus:ring-primary-500 ${category === cat ? 'bg-purple-600/80 text-white border-purple-600' : 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-purple-700 hover:text-white'}`}
            aria-current={category === cat ? 'page' : undefined}
            aria-label={`Filtrar por categoria ${cat}`}
          >
            {cat}
          </Link>
        ))}
      </nav>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.length === 0 && (
          <p className="col-span-full text-zinc-400 text-center">
            Nenhum artigo encontrado para esta categoria.
          </p>
        )}
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="flex max-w-xl flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-primary-500"
            aria-label={`Artigo: ${article.title}`}
          >
            {article.image && (
              <Link
                href={`/blog/${article.id}`}
                className="group mb-4 block w-full overflow-hidden rounded-lg ring-1 ring-transparent transition duration-200 hover:-translate-y-0.5 hover:ring-purple-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                aria-label={`Abrir artigo ${article.title}`}
              >
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="block h-48 w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                    width={320}
                    height={192}
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-zinc-950/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 shadow-lg backdrop-blur-sm transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    Ler artigo
                  </span>
                </div>
              </Link>
            )}
            <div className="flex items-center gap-x-4 text-xs mb-2">
              <time dateTime={article.date} className="text-zinc-400">
                {formatDate(article.date)}
              </time>
              <Link
                href={`/blog?categoria=${encodeURIComponent(article.category)}`}
                className="relative z-10 rounded-full bg-purple-600/80 px-3 py-1.5 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                style={{ letterSpacing: 0.2 }}
                aria-label={`Filtrar por categoria ${article.category}`}
                aria-current={
                  category === article.category ? 'page' : undefined
                }
              >
                {article.category}
              </Link>
            </div>
            <div className="group relative grow w-full">
              <Text
                as="h2"
                className="mt-3 text-lg font-semibold text-white group-hover:text-zinc-300"
              >
                <Link
                  href={`/blog/${article.id}`}
                  className="relative focus:outline-none"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  {article.title}
                </Link>
              </Text>
              <p className="mt-5 line-clamp-3 text-sm text-zinc-400">
                {article.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-950/60 text-purple-300 px-2 py-0.5 rounded text-xs font-medium tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>
            <hr className="border-zinc-700 w-full mt-6" />
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
              <Image
                src={article.avatar}
                alt={article.author}
                className="size-10 rounded-full bg-zinc-800 object-cover"
                width={40}
                height={40}
              />
              <div className="text-sm">
                <p className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  {article.author}
                </p>
                <p className="text-zinc-400">{article.authorRole}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams
  const category = normalizeCategory(resolvedSearchParams.categoria)

  return <BlogPageView articles={blogArticles} category={category} />
}
