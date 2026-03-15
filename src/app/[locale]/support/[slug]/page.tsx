import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import styles from './support-article.module.css'
import { Locale, getIntl } from '@/lib/intl'

interface SupportArticlePageProps {
  params: Promise<{
    slug: string
    locale: Locale
  }>
}

export default async function SupportArticlePage({ params }: SupportArticlePageProps) {
  const { slug, locale } = await params
  const { formatMessage } = getIntl(locale)

  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'support-articles',
    locale,
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: 'published' } },
      ],
    },
    depth: 2,
    limit: 1,
  })

  const article = docs[0]

  if (!article) {
    notFound()
  }

  const category = article.category && typeof article.category === 'object' ? article.category : null
  const relatedArticles = Array.isArray(article.relatedArticles)
    ? article.relatedArticles.filter((a) => typeof a === 'object')
    : []

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        {category && (
          <span className={styles.category}>{category.name as string}</span>
        )}
        <h1 className={styles.title}>{article.title}</h1>
        {article.summary && (
          <p className={styles.summary}>{article.summary}</p>
        )}
        <div className={styles.meta}>
          <time dateTime={article.updatedAt}>
            {formatMessage({ id: 'support.article.last.updated' })}{' '}
            {new Date(article.updatedAt).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      <div className={styles.content}>
        <RichText data={article.content} />
      </div>

      {relatedArticles.length > 0 && (
        <aside className={styles.related}>
          <h2 className={styles.relatedTitle}>{formatMessage({ id: 'support.article.related.articles' })}</h2>
          <ul className={styles.relatedList}>
            {relatedArticles.map((related: any) => (
              <li key={related.id}>
                <Link href={`/${locale}/support/${related.slug}`} className={styles.relatedLink}>
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  )
}
