import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import styles from './support.module.css'
import { Config } from '@payload-types'
import { Locale, getIntl } from '@/lib/intl'

interface SupportPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { locale } = await params
  const { formatMessage } = getIntl(locale)
  const payload = await getPayload({ config })

  const { docs: articles } = await payload.find({
    collection: 'support-articles',
    locale,
    depth: 0,
    limit: 100,
    where: { status: { equals: 'published' } },
    sort: '-updatedAt',
  })

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{formatMessage({ id: 'support.page.heading' })}</h1>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={article.id} className={styles.item}>
            <Link href={`/${locale}/support/${article.slug}`} className={styles.link}>
              <span className={styles.title}>{article.title}</span>
              {article.summary && (
                <span className={styles.summary}>{article.summary}</span>
              )}
              <time className={styles.date} dateTime={article.updatedAt}>
                {new Date(article.updatedAt).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
