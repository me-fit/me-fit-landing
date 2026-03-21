import { CollectionConfig } from 'payload'

export const BlogCategories: CollectionConfig = {
    slug: 'blog-categories',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: false,
            localized: true,
        },
    ],
    timestamps: true,
}
