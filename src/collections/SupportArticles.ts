import { CollectionConfig } from 'payload'
import { kebabCase } from 'lodash-es';

export const SupportArticles: CollectionConfig = {
    slug: 'support-articles',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            localized: true,
            admin: {
                hidden: true,
            },
            hooks: {
                beforeChange: [
                    ({ data }) => data?.title ? kebabCase(data.title) : undefined,
                ],
            },
        },
        {
            name: 'summary',
            type: 'textarea',
            required: false,
            localized: true,
            admin: {
                description: 'Short excerpt shown in article listings and search results.',
            },
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'support-categories',
            required: false,
            hasMany: false,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            localized: true,
        },
        {
            name: 'relatedArticles',
            type: 'relationship',
            relationTo: 'support-articles',
            hasMany: true,
            required: false,
            admin: {
                description: 'Other support articles that may be helpful.',
            },
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'draft',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedAt',
            type: 'date',
            required: false,
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
                condition: (data) => data.status === 'published',
            },
        },
    ],
    timestamps: true,
}
