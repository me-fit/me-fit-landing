// See https://payloadcms.com/docs/getting-started/installation#4-create-a-payload-config-and-add-it-to-your-typescript-config

import sharp from 'sharp'
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { BlogPosts } from './src/collections/BlogPosts'
import { SupportArticles } from './src/collections/SupportArticles'
import { SupportCategories } from './src/collections/SupportCategories'
import { Media } from './src/collections/Media'

// See https://github.com/payloadcms/payload/tree/main/packages/storage-gcs
import { gcsStorage } from '@payloadcms/storage-gcs'
import { i18n } from '@/lib/intl'


export default buildConfig({
    localization: {
        // Spreading as its readonly array
        locales: [...i18n.locales],
        defaultLocale: 'en',
        fallback: true,
    },

    // If you'd like to use Rich Text, pass your editor here
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            FixedToolbarFeature()
        ],
    }),

    // Define and configure your collections in this array
    collections: [BlogPosts, SupportArticles, SupportCategories, Media],

    // Your Payload secret - should be a complex and secure string, unguessable
    secret: process.env.PAYLOAD_SECRET || '',
    // Whichever Database Adapter you're using should go here
    // Mongoose is shown as an example, but you can also use Postgres
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL,
        }
    }),
    // If you want to resize images, crop, set focal point, etc.
    // make sure to install it and pass it to the config.
    // This is optional - if you don't need to do these things,
    // you don't need it!
    sharp,

    plugins: [
        gcsStorage({
            collections: {
                media: true,
            },
            bucket: process.env.GCS_BUCKET as string,
            options: {
                apiEndpoint: process.env.GCS_ENDPOINT,
                projectId: process.env.GCS_PROJECT_ID,
                credentials: JSON.parse(Buffer.from(process.env.GCS_CREDENTIALS_BASE64 as string, 'base64').toString())
            },
        }),
    ]
})