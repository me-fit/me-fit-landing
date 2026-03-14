import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import styles from './blog.module.css'
import { BlogPost } from '@payload-types'
import { Locale } from '@/lib/intl'

interface BlogPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'blog-posts',
    locale,
    limit: 100,
  })

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.id} href={`/${locale}/blog/${post.slug}`} className={styles.card}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <time className={styles.date}>
              {new Date(post.publishedAt).toLocaleDateString(locale)}
            </time>
          </Link>
        ))}
      </div>
    </div>
  )
}
