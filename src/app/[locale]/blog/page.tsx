import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'
import styles from './blog.module.css'
import { Media } from '@payload-types'
import { Locale, getIntl } from '@/lib/intl'

interface BlogPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const { formatMessage } = getIntl(locale)
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'blog-posts',
    locale,
    depth: 1,
    limit: 100,
    where: {
      slug: { exists: true },
    },
  })

  return (
    <div className={styles.container}>
      <h1>{formatMessage({ id: 'blog' })}</h1>
      <div className={styles.grid}>
        {posts.map((post) => {
          const thumbnail = post.thumbnail as Media | null | undefined
          const thumbUrl = thumbnail?.sizes?.thumbnail?.url ?? thumbnail?.url

          return (
            <Link key={post.id} href={`/${locale}/blog/${post.slug}`} className={styles.card}>
              {thumbUrl ? (
                <div className={styles.thumbnail}>
                  <Image
                    src={thumbUrl}
                    alt={thumbnail?.alt ?? post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.thumbnailImg}
                  />
                </div>
              ) : (
                <div className={styles.thumbnailPlaceholder} />
              )}
              <div className={styles.cardBody}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <time className={styles.date}>
                  {new Date(post.publishedAt).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                </time>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
