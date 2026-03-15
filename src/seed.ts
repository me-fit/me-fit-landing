import { getPayload } from 'payload'
import config from '@payload-config'
import { faker } from '@faker-js/faker'

function makeRichText(paragraphs: string[]) {
    return {
        root: {
            type: 'root',
            children: paragraphs.map((text) => ({
                type: 'paragraph',
                children: [{ type: 'text', text, version: 1 }],
                direction: 'ltr' as const,
                format: '' as const,
                indent: 0,
                version: 1,
            })),
            direction: 'ltr' as const,
            format: '' as const,
            indent: 0,
            version: 1,
        },
    }
}

async function fetchFakeThumbnail(seed: number) {
    // picsum.photos serves deterministic images by seed, 800x800
    const url = `https://picsum.photos/seed/${seed}/800/800`
    const res = await fetch(url)
    const buffer = Buffer.from(await res.arrayBuffer())
    return {
        data: buffer,
        mimetype: 'image/jpeg',
        name: `thumbnail-${seed}.jpg`,
        size: buffer.length,
    }
}

async function seed() {
    const payload = await getPayload({ config })

    const slugBase = Array.from({ length: 12 }, (_, i) =>
        faker.helpers.slugify(faker.lorem.words(4)) + `-${i + 1}`
    )

    for (const [i, slug] of slugBase.entries()) {
        const file = await fetchFakeThumbnail(i + 1)

        const media = await payload.create({
            collection: 'media',
            data: { alt: faker.lorem.words(4) },
            file,
        })

        const post = await payload.create({
            collection: 'blog-posts',
            locale: 'en',
            data: {
                title: faker.lorem.sentence({ min: 4, max: 8 }).replace(/\.$/, ''),
                slug,
                excerpt: faker.lorem.sentences(2),
                thumbnail: media.id,
                content: makeRichText([
                    faker.lorem.paragraph(),
                    faker.lorem.paragraph(),
                    faker.lorem.paragraph(),
                ]),
                publishedAt: faker.date.between({ from: '2025-01-01', to: new Date() }).toISOString(),
            },
        })

        await payload.update({
            collection: 'blog-posts',
            id: post.id,
            locale: 'nl',
            data: {
                title: faker.lorem.sentence({ min: 4, max: 8 }).replace(/\.$/, ''),
                slug: slug + '-nl',
                excerpt: faker.lorem.sentences(2),
                content: makeRichText([
                    faker.lorem.paragraph(),
                    faker.lorem.paragraph(),
                    faker.lorem.paragraph(),
                ]),
            },
        })

        console.log(`✓ Created: ${slug}`)
    }

    console.log(`\nSeeded ${slugBase.length} blog posts in en + nl.`)
    process.exit(0)
}

await seed().catch((err: unknown) => {
    console.error(err)
    process.exit(1)
})
