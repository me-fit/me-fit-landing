import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import config from '@payload-config'
import styles from './blog-post.module.css'
import { Config } from '@payload-types'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
    locale: Config['locale']
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params

  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'blog-posts',
    locale,
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]

  if (!post) {
    notFound()
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <>
              <span className={styles.separator}>•</span>
              <span>Updated {new Date(post.updatedAt).toLocaleDateString(locale)}</span>
            </>
          )}
        </div>
      </header>

      <div className={styles.content}>
        <RichText data={post.content} />
      </div>
    </article>
  )
}
