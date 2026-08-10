import Text from '@/components/Text'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { blogArticles } from '@/mocks/blogArticles'
import type { BlogTextContent } from '@/mocks/blogArticles'
import Image from 'next/image'
import Breadcrumb from '@/components/Breadcrumb'
import ShareActions from '@/components/ShareActions'
import { colors } from '@/tokens'
import type { ReactNode } from 'react'

const siteUrl = 'https://www.lumus-digital.dev.br'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(date))
}

function renderInlineContent(content: BlogTextContent): ReactNode {
  if (typeof content === 'string') return content

  return content.map((item, index) => {
    if (typeof item === 'string') return item

    return (
      <a
        key={`${item.type}-${item.href}-${index}`}
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noreferrer noopener' : undefined}
        className="underline decoration-purple-300 decoration-2 underline-offset-4 transition hover:text-purple-200"
      >
        {item.label}
      </a>
    )
  })
}

interface BlogDetailPageProps {
  readonly params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ id: article.id }))
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const article = blogArticles.find((entry) => entry.id === id)

  if (!article) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  return {
    title: article.title,
    description: `Lumus Digital · ${article.author} - ${article.summary}`,
    alternates: {
      canonical: `/blog/${article.id}`,
    },
    openGraph: {
      title: article.title,
      description: `Lumus Digital · ${article.author} - ${article.summary}`,
      url: new URL(`/blog/${article.id}`, siteUrl).toString(),
      siteName: 'Lumus Digital',
      locale: 'pt_BR',
      type: 'article',
      images: [
        {
          url: new URL(article.image, siteUrl).toString(),
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: `Lumus Digital · ${article.author} - ${article.summary}`,
      images: [new URL(article.image, siteUrl).toString()],
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params
  const article = blogArticles.find((a) => a.id === id)
  if (!article) return notFound()

  return (
    <section
      className="max-w-3xl mx-auto p-8 mt-12 mb-12"
      data-testid="blog-detail-page"
    >
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: article.title },
        ]}
        className="mb-4"
      />
      <Text
        as="h1"
        className={`${colors.primary} text-3xl md:text-4xl font-bold mb-4`}
        data-testid="blog-detail-title"
      >
        {article.title}
      </Text>
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={article.avatar}
          alt={article.author}
          className="size-10 rounded-full bg-zinc-800 object-cover"
          width={40}
          height={40}
        />
        <div>
          <p
            className="font-semibold text-white"
            data-testid="blog-detail-author"
          >
            {article.author}
          </p>
          <p className="text-zinc-400 text-sm">{article.authorRole}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-zinc-400 text-xs">
            {formatDate(article.date)}
          </span>
          <ShareActions
            title={article.title}
            path={`/blog/${article.id}`}
            shareText={`Lumus Digital · ${article.author} - ${article.summary}`}
          />
        </div>
      </div>
      {article.image && (
        <Image
          src={article.image}
          alt={article.title}
          className="w-full object-cover rounded-lg mb-8"
          width={600}
          height={400}
        />
      )}
      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="bg-purple-950/60 text-purple-300 px-2 py-0.5 rounded text-xs font-medium tracking-tight"
          >
            {tag}
          </span>
        ))}
      </div>
      <article className="prose prose-invert max-w-none">
        {article.subtitle && (
          <div className="border-l-2 border-purple-300 pl-4 my-6">
            <Text
              as="h2"
              className={`${colors.secondary} text-lg    mb-4 italic`}
            >
              {article.subtitle}
            </Text>
          </div>
        )}
        <div className="space-y-6">
          {article.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <Text
                  key={`${block.type}-${index}`}
                  as="p"
                  className={`${colors.primary} text-md mb-2`}
                >
                  {renderInlineContent(block.text)}
                </Text>
              )
            }

            if (block.type === 'image') {
              return (
                <figure key={`${block.type}-${index}`} className="space-y-2">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    className="w-full rounded-lg object-cover"
                    width={900}
                    height={600}
                  />
                  {block.caption && (
                    <figcaption className={`${colors.secondary} text-sm`}>
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              )
            }

            if (block.type === 'list') {
              return (
                <ul
                  key={`${block.type}-${index}`}
                  className={`${colors.primary} list-disc space-y-2 pl-6 text-md`}
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={`${block.type}-${index}-${itemIndex}`}>
                      {renderInlineContent(item)}
                    </li>
                  ))}
                </ul>
              )
            }

            if (block.type === 'code') {
              return (
                <pre
                  key={`${block.type}-${index}`}
                  className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm text-zinc-100"
                >
                  <code
                    className={
                      block.language ? `language-${block.language}` : undefined
                    }
                  >
                    {block.code}
                  </code>
                </pre>
              )
            }

            if (block.type === 'divider') {
              return (
                <hr
                  key={`${block.type}-${index}`}
                  className="my-8 border-zinc-800"
                />
              )
            }

            return (
              <blockquote
                key={`${block.type}-${index}`}
                className="border-l-2 border-purple-300 pl-4 italic"
              >
                <Text as="p" className={`${colors.primary} text-md mb-2`}>
                  {block.text}
                </Text>
                {block.author && (
                  <footer className={`${colors.secondary} text-sm`}>
                    {block.author}
                  </footer>
                )}
              </blockquote>
            )
          })}
        </div>
      </article>
    </section>
  )
}
